---
section: learn
date: Last Modified
title: "多项式承诺方案"
lang: "zh"
permalink: "learn/zero-knowledge/polynomial-commitment-schemes"
excerpt: "多项式承诺方案是零知识证明系统（以及其他加密协议）的核心组成部分"
whatsnext: { "KZG 承诺方案": "/zh/learn/zero-knowledge/kzg-commitment-scheme" }
---

多项式承诺方案是零知识证明系统（以及其他加密协议）的核心组成部分。

顾名思义，多项式承诺方案是承诺方案，其中要承诺的对象是多项式。这类方案的一个特殊属性是，多项式的计算可以通过仅访问多项式的承诺来验证。

## 承诺方案

A **[承诺方案](https://en.wikipedia.org/wiki/Commitment_scheme)** 是一种加密原语，涉及两方：_承诺者_ 和 _验证者_。承诺者对值 $v$ 进行计算承诺 $c$，并将其揭示给验证者。随后，承诺者可以揭示原始值，验证者可以验证承诺是否与所揭示的原始值相对应。

安全的承诺方案有两个属性：

1. **绑定**: 一旦发布承诺 $c$，承诺者就无法找到与 $v$ 不同的值 $v’$ 与承诺 $c$ 相对应。也就是说，承诺 $c$ 将承诺者与他的原始价值 $v$ 绑定。
2. **隐藏**: 验证者无法从承诺 $c$ 中获知有关原始值 $v$ 的任何信息。也就是说，承诺 $c$ 隐藏了有关原始值 $v$ 的所有信息。

## 多项式承诺方案

**多项式承诺方案** 中，承诺者通过计算承诺 $c$，对多项式 $P(x)$ 进行承诺。与常规的承诺方案一样，承诺者稍后可以揭示原始多项式，验证者可以检查承诺是否与所揭示的多项式相对应。然而，多项式承诺方案还有一个额外的属性：承诺者可以在不透露多项式本身的情况下证明对所承诺多项式的特定计算。例如，承诺者可以证明多项式上的一点 $P(a) = b$， 而验证者可以仅使用承诺 $c$ 来验证这样的证明。

多项式承诺方案在零知识应用中非常有用。证明者可以使用这样的方案来证明他知道一些满足某些性质的多项式（例如，它通过某个特定的点 $(a,b)$），而无需揭示潜在的多项式。

多项式方案有用的另一个原因是，承诺  $c$  通常比它所表示的多项式小得多，因此可以认为是多项式 $P(x)$ 的**压缩**。压缩的程度取决于特定的方案。例如，在 KZG 多项式承诺方案中，任意大小次数的多项式可以压缩为由单个群元素组成的承诺。

## 了解更多

- [https://en.wikipedia.org/wiki/Commitment_scheme](https://en.wikipedia.org/wiki/Commitment_scheme)
- [https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment](https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment)
