---
section: technology
date: Last Modified
title: "Intro to zkEVM"
lang: "en"
permalink: "technology/intro-to-zkevm"
excerpt: "ZK rollups are widely recognized as the ideal scaling solution for Ethereum."
whatsnext: { "zkEVM Overview": "/en/technology/zkevm/zkevm-overview" }
---

## Introduction and motivation

ZK rollups are widely recognized as the ideal scaling solution for Ethereum. They inherit the strong security of Ethereum Layer 1 and offer the fastest transaction finality compared to other Layer 2 solutions.

The basic idea of a ZK rollup is to execute transactions off-chain and to generate succinct proofs of the execution’s validity. These succinct proofs can then be posted and verified on Ethereum Layer 1. ZK rollups improve scalability since verifying the proof for a batch of transactions is much cheaper than re-executing the batch of transactions.

ZK rollups can be categorized into application-specific and general-purpose rollups, based on the types of transactions they support. Application-specific ZK rollups are designed for particular transaction sets, such as payments and swaps, or a player’s action set for an on-chain game. In these cases, rollups only need to generate proofs attesting to the correctness of the supported primitives, such as valid state transitions for game players.

On the other hand, general-purpose ZK rollups support a wider range of transactions and computations. These rollups use a virtual machine (VM) to execute assembly code, and then generate a proof to show that the execution was done correctly according to the VM's specifications. The particular VM that a ZK rollup uses for its computation differs across the many ZK rollup projects. Some projects elect to build their own VM, optimized for fast proof generation. Other projects elect to use the EVM, for optimal compatibility with the Ethereum ecosystem.

Scroll is a general-purpose ZK rollup that uses the EVM for off-chain computations. Scroll’s execution layer functions similarly to Ethereum’s - transactions are batched into blocks, and then the blocks are executed according to the [EVM](https://ethereum.org/en/developers/docs/evm/) specs (we actually use a slightly [modified version](https://github.com/scroll-tech/go-ethereum) of [Geth](https://geth.ethereum.org/)). This means that users can interact with Scroll in the same way that they would interact with Ethereum. It also means that developers can develop on top of Scroll just as they would develop on top of Ethereum.

However, achieving Ethereum compatibility with a ZK rollup poses a large challenge - the rollup must be able to generate a proof proving that an off-chain EVM computation was executed correctly. This is essentially what a “zkEVM” is: **a zkEVM is a system that proves the correct execution of the EVM**.

The EVM was originally designed without ZK rollups in mind, and it turns out that it is quite challenging to build a zkEVM. However, we at Scroll are undeterred by the challenge, and have been working hard in collaboration with the [Ethereum Privacy and Scaling Explorations](https://appliedzkp.org/) team to make the zkEVM a reality.

## Learn more

- [Blog post](https://scroll.io/blog/zkEVM) introducing zkEVM
- [zkEVM overview](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
