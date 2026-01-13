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

However, achieving Ethereum compatibility with a ZK rollup poses a large challenge - the rollup must be able to generate a proof proving that an off-chain EVM computation was executed correctly. This is essentially what a "zkEVM" is: **a zkEVM is a system that proves the correct execution of the EVM**.

The EVM was originally designed without ZK rollups in mind, and it turns out that it is quite challenging to build a zkEVM. Scroll has been at the forefront of zkEVM development, evolving our proving technology over time to achieve better performance, lower costs, and improved security.

## Proving System Evolution

Scroll's proving technology has evolved significantly:

**Early Development (2021-2024)**: Scroll initially developed a zkEVM in collaboration with the [Ethereum Privacy and Scaling Explorations](https://appliedzkp.org/) (PSE) team. This system used custom EVM circuits that directly proved each EVM opcode.

**OpenVM Prover (2025-Present)**: The [Euclid upgrade](/en/technology/overview/scroll-upgrades/euclid-upgrade) migrates Scroll to a new proving system utilizing [OpenVM](https://scroll.io/blog/the-first-release-of-the-openvm-framework-is-live), a general-purpose RISC-V zkVM developed by Axiom. This architecture is capable of proving standard Rust code, which simplifies auditing processes and supports code reuse across the proving pipeline. Additionally, the upgrade reduces proving costs and latency while removing circuit capacity constraints It was this upgrade that made possible for Scroll to become a Stage 2 rollup.

The OpenVM prover uses a hierarchical proof aggregation system:

1. **Chunk proofs**: Prove individual chunks of blocks
2. **Batch proofs**: Aggregate multiple chunk proofs
3. **Bundle proofs**: Final aggregation layer, converted to SNARK for on-chain verification

**Future Research - Ceno**: Scroll is also actively developing [Ceno](https://github.com/scroll-tech/ceno), a research project exploring a novel RISC-V zkVM architecture using GKR (Goldwasser-Kalai-Rothblum) proofs instead of the traditional FRI-based approach. Ceno features non-uniform, segmented, and parallel proving capabilities. While still in research phase, Ceno represents Scroll's continued investment in advancing zero-knowledge proof technology.

## Learn more

- [Blog post](https://scroll.io/blog/zkEVM) introducing zkEVM
- [zkEVM overview](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
- [OpenVM Framework announcement](https://scroll.io/blog/the-first-release-of-the-openvm-framework-is-live)
- [Euclid Upgrade details](/en/technology/overview/scroll-upgrades/euclid-upgrade)
