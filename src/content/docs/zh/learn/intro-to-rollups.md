---
section: learn
date: Last Modified
title: "Rollups 介绍"
lang: "zh"
permalink: "learn/intro-to-rollups"
excerpt: "Rollups are the most predominant layer 2 scaling solution in the Ethereum ecosystem."
whatsnext: { "Scroll Rollup Process": "/zh/technology/chain/rollup" }
---

## 什么是 rollup?

Rollups 是以太坊生态系统中最主要的 L2 扩容解决方案，被视为以太坊路线图的 [核心部分](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698)。

Rollup 在链下（即不在 L1 ）处理交易的批次，然后将结果数据发布到链上（即在 L1）。

每笔交易的执行都是在链下执行的，不需要在 L1 节点上重新执行。这可以大幅提高交易的吞吐量，而不会影响 L1 的去中心化。

为了确保 rollup 的安全，它必须证明其链下计算（交易处理）已经正确执行。证明链下计算有效性的机制主要有两种：有效性证明和欺诈证明。

## 什么是 optimistic rollup?

Optimistic rollup 是使用欺诈证明来确保其计算有效性的 rollup。

欺诈证明机制下，允许用户挑战和证明在 L2 上执行的任何计算是无效的。如果成功提交欺诈证明，则可以将 L2 回滚到之前的状态，从而更正无效的计算。欺诈证明基于至少有一个诚实的一方在检查 L2 交易是否正确执行。

## 什么是 ZK rollup?

ZK rollup 是使用有效性证明来确保其计算有效性的 rollup。

当 ZK rollup 执行交易的批次并将结果状态发布到 L1 时，它还会发布有效性证明。这个数学证明，可以证明结果状态确实是正确执行一批交易后所生成的状态。

如今，有多种类型的 ZK rollup，广义上定义为 zkVM（零知识虚拟机）或 zkEVM（零知识以太坊虚拟机）。

zkVM 从头开始设计，可与 ZK 电路很好地配合使用，并且与 zkEVM 相比，需要完全不同的开发工作流程。其中的例子包括 Starkware 和 Aztec。

zkEVM 旨在模拟 EVM。zkEVM 主要有两种类型：字节码层面兼容和语言层面兼容。字节码兼容的 zkEVM 在非常低的水平上模拟 EVM，与以太坊 L1 相比，可实现几乎相同的开发和用户体验。语言层面兼容的 zkEVM 将 Solidity 和其他高级语言编译为不同的字节码，这可能会导致工作流程发生变化。zkSync 是最流行的语言层面兼容的 zkEVM。

Scroll 是字节码兼容的。之所以选择这种方案，是因为它带来了如下好处：

- Solidity, Vyper 和 Huff 开箱即用
- 无需重新进行合约审计
- 继承大多数现有工具
- 与以太坊几乎相同的用户体验和开发者体验

有关 Scroll 方案的更多详细信息，请参阅“技术”部分。

## 延伸阅读

- [Rollups 的不完全指南](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [扩容](https://ethereum.org/en/developers/docs/scaling/) - 以太坊文档
