---
section: learn
date: Last Modified
title: "The Scalability Problem"
lang: "en"
permalink: "learn/intro-to-rollups"
excerpt: "Ethereum’s strong decentralization and security come at the cost of sacrificing scalability: to ensure that all the participating nodes can keep up with the network, the network’s throughput is limited. This limit ultimately results in higher costs and latencies for users."
whatsnext: { "Intro to Rollups": "/en/learn/intro-to-rollups" }
---

## Ethereum’s scaling problem

[Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-ethereum) is a general-purpose blockchain that supports the deployment and execution of [smart contracts](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-are-smart-contracts).

One of the defining features of Ethereum is its unwavering commitment to security and decentralization. Ethereum is designed such that computers all across the world (even cheap ones, like a [Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/)) can participate in the network, running local copies of the blockchain and processing new transactions.

However, Ethereum’s strong decentralization and security come at the cost of sacrificing scalability: to ensure that all the participating nodes can keep up with the network, the network’s throughput is limited. This limit ultimately results in higher costs and latencies for users.

## Scaling solutions

Ethereum’s scaling solutions aim to increase the throughput of the network without sacrificing decentralization or security.

There are primarily two types of scaling solutions: layer 1 scaling solutions and layer 2 scaling solutions.

**Layer 1** (or **L1**) scaling solutions attempt to scale the network by making modifications to the Ethereum blockchain directly. The term “layer 1” here refers to the main Ethereum blockchain. In general, it is very difficult to design layer 1 scaling solutions that increase throughput and at the same time preserve high levels of security and decentralization. Thus, recent scaling efforts have shifted away from layer 1 solutions and towards layer 2 solutions.

**Layer 2** (or **L2**) scaling solutions are networks that live **on top** of Ethereum layer 1 - they are essentially separate blockchains that are “anchored” to the underlying Ethereum blockchain in some way. These layer 2 networks can generally process transactions at a higher rate than the underlying layer 1 network, as they are not subject to the same limitations. The “anchoring” mechanism, the specifics of which differ across various layer 2s, enables the layer 2 network to inherit the strong security and decentralization properties of Ethereum layer 1.
