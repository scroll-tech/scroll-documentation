---
section: technology
date: Last Modified
title: "zkEVM 介绍"
lang: "zh"
permalink: "technology/intro-to-zkevm"
excerpt: "ZK rollups 被广泛认同为以太坊的理想扩容方案。"
whatsnext: { "zkEVM 概览": "/zh/technology/zkevm/zkevm-overview" }
---

## 入门介绍和出发点

ZK rollups 被广泛认为是以太坊的理想扩容解决方案。它们继承了以太坊一层的强大安全性，与其他二层解决方案相比，它们提供了最快的交易最终确认。

ZK rollup 的基本思想是在链下执行交易，并生成执行有效性的简洁证明。然后，这些简洁的证明可以发布在以太坊一层上并得到验证。ZK rollups 提高了可扩展性，因为验证一批次交易的证明要比重新执行一批次交易便宜得多。

ZK rollup 可以根据它们支持的交易类型分为特定应用程序的 rollups 和通用 rollups。特定应用程序的 ZK rollups 专为特定交易集而设计，例如支付和互换，或玩家在链上游戏中的操作集合。在这些情况下，rollup 只需要生成证明可以支持特定原语的正确性，例如游戏玩家的有效状态转换。

另一方面，通用 ZK rollup 支持更广泛的交易和计算。这些 rollups 使用虚拟机 （VM） 执行汇编代码，然后生成证明，以证明已根据虚拟机的规范正确执行交易。不同 ZK rollup 中用于计算的虚拟机有所不同。一些项目选择构建自己的虚拟机，针对快速生成证明进行了优化。其他项目选择使用 EVM，以实现与以太坊生态系统的最佳兼容性。

Scroll 是一个通用的 ZK rollup，它使用 EVM 进行链下计算。Scroll 的执行层功能与以太坊类似 —— 交易被打包至区块，然后区块根据 [EVM](https://ethereum.org/en/developers/docs/evm/) （我们实际上使用的一个 [修改版本](https://github.com/scroll-tech/go-ethereum) 的 [Geth](https://geth.ethereum.org/)）的规范执行。这意味着用户可以像与以太坊交互一样与 Scroll 进行交互。这也意味着开发者可以在 Scroll 之上进行开发，就像他们在以太坊之上进行开发一样。

然而，实现以太坊与 ZK rollup 的兼容性带来了一个巨大的挑战 —— rollup 必须能够生成链下 EVM 计算已正确执行的证明。这就是 “zkEVM” 的本质：**zkEVM 是一个证明 EVM 正确执行的系统。**

EVM 最初在设计时没有考虑 ZK rollups，因此事实证明，构建 zkEVM 非常具有挑战性。然而，我们 Scroll 并没有因为挑战而退缩，并且一直在与 [以太坊隐私和扩容研究团队](https://appliedzkp.org/) 合作，努力使 zkEVM 成为现实。

## 了解更多

- [博客文章](https://scroll.io/blog/zkEVM) - zkEVM 介绍
- [zkEVM 概览](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
