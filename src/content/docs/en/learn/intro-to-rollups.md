---
section: learn
date: Last Modified
title: "Intro to Rollups"
lang: "en"
permalink: "learn/intro-to-rollups"
excerpt: "Rollups are the most predominant layer 2 scaling solution in the Ethereum ecosystem."
whatsnext: { "Scroll Rollup Process": "/en/technology/chain/rollup" }
---

## What’s a rollup?

Rollups are the most predominant layer 2 scaling solution in the Ethereum ecosystem and are viewed as a [central part](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) of the Ethereum roadmap.

A rollup processes batches of transactions off-chain (i.e. not on layer 1), and then posts the resulting data on-chain (i.e. on layer 1).

The execution of each transaction is performed off-chain, and does not need to be re-executed layer 1 nodes. This allows for high transaction throughput, without impacting the decentralization of layer 1.

In order for a rollup to be secure, it must prove that its off-chain computation (the processing of transactions) was performed correctly. There are predominantly two mechanisms to prove the validity of off-chain computation: validity proofs and fraud proofs.

## What’s an optimistic rollup?

An optimistic rollup is a rollup that uses fraud proofs to assert the validity of its computation.

Fraud proofs are a mechanism that allows users to challenge and prove the invalidity of any computation performed on the L2. If a fraud proof is successfully submitted, the L2 can be rolled back to a previous state and the invalid computation can be corrected. Fraud proofs depend on at least one honest party checking that the L2 transactions have been correctly executed.

## What’s a ZK rollup?

A ZK rollup is a rollup that uses validity proofs to assert the validity of its computation.

When a ZK rollup executes a batch of transactions and posts the resulting state to L1, it also posts a validity proof. This mathematical proof proves that the resulting state is indeed the state that results from correctly executing the batch of transactions.

Today, there are multiple types of ZK rollups, broadly defined as either zkVMs (zk Virtual Machines) or zkEVMs (zk Ethereum Virtual Machines).

zkVMs are designed from the ground up to work well with ZK circuits and require different development workflows compared to a zkEVM. Some examples of these include Starkware and Aztec.

zkEVMs are designed to emulate the EVM. There are two major types of zkEVMs: bytecode-compatible, and language-compatible. Bytecode-compatible zkEVMs emulate the EVM at a very low level, allowing for a near-identical development and user experience compared to Ethereum Layer 1. Language-compatible zkEVMs compile Solidity and other high-level languages down into different bytecode, which can result in changes to workflow. zkSync is the most popular language-compatible zkEVM.

Scroll is bytecode-compatible. This approach was chosen because it brings certain benefits:

- Solidity, Vyper, and Huff work out of the box
- No re-auditing necessary
- Most existing tooling is inherited
- Near-identical UX and DevX as Ethereum

More detail on Scroll’s approach is found in the Technology section.

## Further reading

- [An Incomplete Guide to Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [Scaling](https://ethereum.org/en/developers/docs/scaling/) - Ethereum Docs
