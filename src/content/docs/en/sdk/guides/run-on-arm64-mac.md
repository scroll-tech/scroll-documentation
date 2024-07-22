---
section: sdk
date: Last Modified
title: "Running Scroll SDK on an ARM64 Mac"
lang: "en"
permalink: "sdk/guides/running-on-arm64-mac"
excerpt: "Looking to dive deeper into ZK? Here are some of our favorite resources."
---

## Overview

This guide should get you started with running a local Scroll SDK devnet on your mac laptop with an `arm64` processor.

This guide assumes you’ve taken a look at the [Early Access document](https://www.notion.so/Scroll-SDK-Early-Access-Feedback-Request-74272ce6a0ae4c1d8f5c1d836df1f410?pvs=21) and have access to the [scroll-sdk github repo](https://github.com/scroll-tech/scroll-sdk) using your local machine.

We’ve written this guide because local deployments for Kubernetes clusters can be finicky.

By the end of the guide, you should have a Scroll SDK running with a block explorer, RPC, webUI, monitoring and metrics, and a local L1 — all accessible to wallets, browsers, and applications running on your local machine.

<aside>
🚧 This software is still experimental, and we’d appreciate any feedback about this document, the codebase, or additional features.

</aside>

<aside>
⚠️ This guide does not include running the coordinator or a prover. The coordinator currently requires 20GB of RAM to run, so we disable it by default, and provers need dedicated machines to run and require additional configuration.

</aside>

### Updates to Guide

- June 26, 2024
  - Minor typography fixes i.e. `docker v` to `docker -v`
- June 19, 2024
  - Removed external `bjw-s` dependency and prerequisite
  - Removed manual modification of `.env.frontends`
  - Updated docker image name used in generating config files
- June 18, 2024
  - Fixed `minikube addons enable` commands (missing “addons”)

# Prerequisites

- Clone the repo onto your local machine.
- Install dependencies (using `brew` is strongly recommended):
  - [Brew](https://brew.sh/) (optional)
    - `/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"`
  - [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/)
    - `brew install --cask docker`
  - [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)
    - `brew install kubectl`
  - [minikube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew)
    - `brew install minikube`
  - [Helm](https://helm.sh/docs/intro/install/#from-homebrew-macos)
    - `brew install helm`
  - [docker-mac-net-connect](https://github.com/chipmk/docker-mac-net-connect)
    - `brew install chipmk/tap/docker-mac-net-connect`
- You should now be able to open a terminal and run the following:
  - `docker -v`
  - `kubectl version`
  - `minikube status`
  - `helm version`

## Starting minikube

To start minikube, run:

```bash
minikube start --driver=docker
```

### Getting minikube to work with custom DNS names on MacOS

Now run the following commands:

```bash
minikube ssh "sudo apt-get update && sudo apt-get -y install qemu-user-static"
minikube addons enable ingress
minikube addons enable ingress-dns
sudo brew services start chipmk/tap/docker-mac-net-connect
```

<aside>
⚠️ These are all a work-around for ingress-dns not working on arm MacOS and hopefully will change in later fixes to minikube. This work gets relied on in [Pointing DNS Requests to the Cluster](https://www.notion.so/Pointing-DNS-Requests-to-the-Cluster-b6dd4f519697432cb9835e2d5eead731?pvs=21)

</aside>

# Installing Scroll SDK

## Setup the `scroll-sdk` repo

You’ll need If you need repo access, reach out to `@dghelm` on Telegram.

Next, clone the code:

```bash
git clone git@github.com:scroll-tech/scroll-sdk.git
```

Then, get Helm chart dependencies:

```bash
cd scroll-sdk
./helm-bootstrap.sh
```

## Configure values.yaml

This is the time to adjust what services run on your stack and their configuration. I’d suggest not altering these on your first installation, but see `charts/scroll-stack/values.yaml` ([view on Github](https://github.com/scroll-tech/scroll-sdk/blob/develop/charts/scroll-stack/values.yaml)) and `config.toml` ([view on Github](https://github.com/scroll-tech/scroll-sdk/blob/develop/charts/scroll-stack/config.toml)).

## Generating Config Files & Genesis File

We’ll go to the `charts/scroll-stack` directory and run a docker image that will take our `values.yaml` and `config.toml` file and produce a genesis file and configuration files for each service in our cluster.

```bash
cd charts/scroll-stack
time docker run --rm -it -v .:/contracts/volume scrolltech/scroll-stack-contracts:gen-configs-977f5701
```

<aside>
🚧 Note: This command can change frequently since it refers to a specific docker image. Last updated in this doc June 19, 2024.

Please double-check the README file that you cloned or [the repo instructions](https://github.com/scroll-tech/scroll-sdk?tab=readme-ov-file#generate-the-config-files).

</aside>

# Launching the Stack

## Installing the Helm Chart

Now, from the `charts/scroll-stack` directory, run:

```bash
helm install scroll-stack .
```

Your chain is now starting! Run `kubectl get pods` to check in on their progress. In the next section we’ll expose the chain to your local machine so you can interact with the stack.

<aside>
🚧 Right now (June 13, 2024), the whole start process for the various containers can take about 10 minutes. We’ll be looking to reduce this.

</aside>

## Other Useful Commands

`kubectl get pods` will show all the active pods and their status.

`kubectl get ingress` will show all the exposed services and URIs.

`helm uninstall scroll-stack` will stop all services.

`minikube dashboard` launches a WebUI for exploring the kubernetes cluster and the various pods, volumes and ingresses without learning all the CLI commands.

# Pointing DNS Requests to the Cluster

Running `kubectl get ingress` should show all the domains setup within the cluster, like the following:

```
➜  scroll-stack git:(develop) ✗ kubectl get ingress
NAME                 CLASS   HOSTS                          ADDRESS        PORTS   AGE
blockscout           nginx   blockscout.scrollsdk           192.168.49.2   80      5h3m
bridge-history-api   nginx   bridge-history-api.scrollsdk   192.168.49.2   80      5h3m
frontends            nginx   frontends.scrollsdk            192.168.49.2   80      5h3m
grafana              nginx   grafana.scrollsdk              192.168.49.2   80      5h3m
l1-devnet            nginx   l1-devnet.scrollsdk            192.168.49.2   80      5h3m
l1-explorer          nginx   l1-devnet-explorer.scrollsdk   192.168.49.2   80      5h3m
l2-rpc               nginx   l2-rpc.scrollsdk               192.168.49.2   80      5h3m
```

Now, we’ll follow the instructions from [the minikube docs](https://minikube.sigs.k8s.io/docs/handbook/addons/ingress-dns/#Mac) for setting up our local machine to use our cluster to resolve all `.scrollsdk` domain requests.

Take note of the `ADDRESS` in your output (it should match the result of running `minikube ip`).

You’ll want to create the following file at `/etc/resolver/minikube-scrollsdk` (will require `sudo` access).

```
domain scrollsdk
nameserver <minikube_ip>
search_order 1
timeout 5
```

If you prefer, this can be done in one command that creates the directory and file and then outputs the required info:

```bash
sudo mkdir -p /etc/resolver && sudo touch /etc/resolver/minikube-scrollsdk && sudo sudo sh -c "cat >>/etc/resolver/minikube-scrollsdk" <<-EOF

	domain scrollsdk
	nameserver $(minikube ip)
	search_order 1
	timeout 5
EOF
```

Lastly, flush your DNS:

```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

### Testing Ingress DNS

Try running:

1.  `nslookup frontends.scrollsdk $(minikube ip)`
2.  `curl frontends.scrollsdk`
3.  If those work, visit [`http://frontends.scrollsdk`](http://frontends.scrollsdk) in your browser.
    1. If those do not work, try resetting your machine and running through the instructions in [Getting minikube to work with custom DNS names on MacOS](https://www.notion.so/Getting-minikube-to-work-with-custom-DNS-names-on-MacOS-e40ae30777ec4dd083e71d37ead1a185?pvs=21) and above again. It may help to run `minikube stop` and `minikube start` again.

# Interacting with the Chain

<aside>
🚧 We’re working to get more interesting testing tools added to the stack, so let us know if you want to be told when we update this section.

</aside>

## Web UIs

You should now be able to explore the stack on your local machine and using your web browser. All links below assume default configuration and working Ingress DNS.

- Block Explorers (Blockscout)
  - [L2 Explorer](http://blockscout.scrollsdk/)
  - [L1 Explorer](http://l1-devnet-explorer.scrollsdk/) (this is scanning Anvil and can be a bit buggy)
- [Bridge](http://frontends.scrollsdk/bridge)
  - Bridging UI has a gas bug as of June 13, 2024
- [Rollup Explorer](http://frontends.scrollsdk/rollupscan?page=1&per_page=10)
  - Shows committed batches and finalized batches
  - **_API NOT CURRENTLY WORKING AS OF June 13, 2024_**
- [Granfana Dashboards](http://grafana.scrollsdk/)
  - Login
    - User: `admin`
    - Pass: `scroll-stack`
  - See “Scroll” dashboards on [this page](http://grafana.scrollsdk/dashboards).

## Connecting to the RPC using a Wallet

To connect directly to an RPC or using MetaMask, use:

### Scroll Chain

Network: Scroll SDK Chain

RPC URL: [`http://l2-rpc.scrollsdk`](http://l2-rpc.scrollsdk/)

Chain ID: `222222`

Currency Symbol: `ETH`

Block explorer URL: [`http://blockscout.scrollsdk/`](http://blockscout.scrollsdk/)

### L1 Dev Net

Network: Scroll SDK L1

RPC URL: `http://l1-devnet.scrollsdk`

Chain ID: `111111`

Currency Symbol: `ETH`

Block explorer URL: [`http://l1-devnet-explorer.scrollsdk`](http://l1-devnet-explorer.scrollsdk/)

<aside>
🚧 Until we setup `https` you need to manually set these up in MetaMask and the WebUI buttons will not work.

</aside>

## Helpful Commands

Anvil has a lot of [useful methods](https://book.getfoundry.sh/reference/anvil/#custom-methods) that can manipulate the L1. Proper documentation for using them is available in the [Hardhat docs](https://hardhat.org/hardhat-network/docs/reference#hardhat-network-methods) (replacing `hardhat_` with `anvil_`)

### Set L1 Token Balance of an Account

In params, change first item to a wallet, and second to hex of wei. This config uses 1000 ETH.

See [docs](https://hardhat.org/hardhat-network/docs/reference#hardhat_setbalance) for details.

```bash
curl --location 'http://l1-devnet.scrollsdk/' \
--header 'Content-Type: application/json' \
--data '{
	"jsonrpc":"2.0",
	"method":"anvil_setBalance",
	"params":["0x98110937b5D6C5FCB0BA99480e585D2364e9809C","0x3635C9ADC5DEA00000"],
	"id":0
}'
```

### Mine some L1 Block

See [docs](https://hardhat.org/hardhat-network/docs/reference#hardhat_mine) for details.

```bash
curl --location 'http://l1-devnet.scrollsdk/' \
--header 'Content-Type: application/json' \
--data '{
	"jsonrpc":"2.0",
	"method":"anvil_mine",
	"params":["0x10000000", "0xc"],
	"id":0
}'
```
