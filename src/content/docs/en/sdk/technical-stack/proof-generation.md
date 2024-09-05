---
section: sdk
date: Last Modified
title: "Proof Generation"
lang: "en"
permalink: "sdk/technical-stack/proof-generation"
excerpt: "Documents how zk proof generation is done on Scroll SDK."
---

<!-- Info about running the Ansible script for proof generation (and eventually using external prover partners) will go here. -->

Currently, Scroll SDK requires that you run your own provers. We're actively working with proof generation platforms to make proof generation as easy as providing an API key.

## Mock Finalization

In its default configuration, testnets can run without a ZK provers and simulate finalization. The L1 contract allows finalizing a batch without a valid proof, and the `rollup-relay` is configured to call the finalize method after 1 hour without a proof in the default configuration.

To change this mock finalization delay, adjust `config.toml` to change `TEST_ENV_MOCK_FINALIZE_TIMEOUT` from `3600` to the number of seconds you want to delay.

To disable mock finalization entirely, adjust `config.toml` to change `TEST_ENV_MOCK_FINALIZE_ENABLED` to `false`.

## Deploy a Prover

Our automation code for deploying a prover differs from the rest of the stack. Because Kubernetes is designed to automatically manage resources, it doesn't fit as well as [Ansible](https://www.ansible.com/) for larger clusters of machines needing specific machine requirements.

The Ansible playbook for running a prover is available in the GitHub repo [here](https://github.com/scroll-tech/scroll-sdk/tree/develop/ansible/playbooks).

### Prequisities

- One ubuntu server with at least 256GB memory, 32 cores, and a GPU with at least 20GB memory.
- One user with `sudo` access, no password, and all permissions -- or you can change the [shared-vars.yaml](https://github.com/scroll-tech/scroll-sdk/blob/develop/ansible/playbooks/vars/shared-vars.yaml) to add the `ansible_become_password` variable in your file.

### Configuration

- Change the values of `rpc` for `mainnet` or `sepolia` in [shared-vars.yaml](https://github.com/scroll-tech/scroll-sdk/blob/develop/ansible/playbooks/vars/shared-vars.yaml) to your own.
- Set the values of `release_version` and `docker_tag` -- this is determined by the `coordinator` service.
- Set the values in [inventory](https://github.com/scroll-tech/scroll-sdk/blob/develop/ansible/playbooks/inventory/provers) for your `sepolia|mainnet' and 'chunk|batch' provers.
- Optionally, set the values of `pj_path` in [shared-vars.yaml](https://github.com/scroll-tech/scroll-sdk/blob/develop/ansible/playbooks/vars/shared-vars.yaml) -- the default is `/prover/go-prover-docker`, but can be changed to the value you want to customize.

### How to deploy your prover

Be sure to set the correct value for the `export` statements below when setting environmental variables. _Do not include brackets._

```bash
export env=[mainnet|sepolia]
export type=[chunk|batch]
export user=[your_ssh_user]

ansible-playbook  --ssh-extra-args='-o StrictHostKeyChecking=no' --private-key $your_key  prover-bootstrap.yaml  -u $user -e env=$env -e type=$type -i inventory/provers

# Reboot your prover manually, and finally launch this playbook
ansible-playbook  --ssh-extra-args='-o StrictHostKeyChecking=no' --private-key $your_key  prover-deploy.yaml  -u $user -e env=$env -e type=$type -i inventory/provers
```