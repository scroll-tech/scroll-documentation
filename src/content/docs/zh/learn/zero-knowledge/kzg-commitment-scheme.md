---
section: learn
date: Last Modified
title: "KZG 承诺方案"
lang: "zh"
permalink: "learn/zero-knowledge/kzg-commitment-scheme"
excerpt: "KZG 用于以太坊的 Proto-Danksharding，也用于 Scroll 的证明系统。本节将概述 KZG 承诺方案。"
whatsnext: { "其他资源": "/zh/learn/zero-knowledge/additional-zk-learning-resources" }
---

使用最广泛的多项式承诺方案之一是 KZG 承诺方案。该方案最早由 Kate、Zaverucha 和 Goldberg 于 2010 年[发布](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)。

KZG 用于以太坊的 [Proto-Danksharding](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq), 也用于 Scroll 的证明系统。

本节将概述 KZG 承诺方案。

## 初步工作和符号表示

回顾一下多项式承诺方案的假设，我们需要对一些多项式 $P(x)$ 进行承诺。我们假设多项式的阶数小于 $l$.

KZG 承诺依赖于 [椭圆曲线配对](https://vitalik.ca/general/2017/01/14/exploring_ecp.html)。假设 $\mathbb{G}_1$ 和 $\mathbb{G}_2$ 是两个阶为 $p$ 的椭圆曲线群，满足 non-trivial [双线性配对](https://en.wikipedia.org/wiki/Bilinear_map) $e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$。假设 $g$ 是群 $\mathbb{G}_1$ 的生成元，$h$ 是群 $\mathbb{G}_2$ 的生成元。我们使用符号表示为 $[x]_1 := x \cdot g$ 和 $[x]_2 := x \cdot h$，其中 $x \in \mathbb{F}_p$.

## 1. 可信设置

在计算任何 KZG 承诺之前，必须执行一次性的可信设置。一旦可信设置完成，就可以重复使用它来承诺和揭示所需的任意数量的不同多项式。可信设置的工作流程如下：

- 选择随机的域元素 $\tau \in \mathbb{F}_p$
- 假设 $l \in \mathbb{Z}$ 是我们想要承诺的多项式的最大次数
  - 可信设置只能阶数 $\leq l$ 的多项式有效
- 计算 $([\tau^0]_1,[\tau^1]_1,[\tau^{2}]_1\ldots,[\tau^{l}]_1)$ 和 $([\tau]_2)$，并公开发布这些值。

请注意，$\tau$ 不应该被揭示 - 它是可信设置的秘密参数，应在可信设置仪式完成后丢弃，以便没有人知道它的值。

使用[多方计算](https://en.wikipedia.org/wiki/Secure_multi-party_computation) （MPC） 在弱信任假设（N 个信任假设中为 1 个）的情况下，有一些已有的方法来执行可信设置仪式。有关可信设置如何工作的更多信息，请参阅 Vitalik 的这篇[文章](https://vitalik.ca/general/2022/03/14/trustedsetup.html)。

## 2. 承诺多项式

- 给定 $P(x) = \sum_{i=0}^{l} p_i x^i$
- 计算并输出承诺 $c = [P(\tau)]_1$
  - 虽然承诺者不能直接计算 $P(\tau)$ (因为他不知道 $\tau$)，但他可以使用可信设置的输出来计算它：
    - $[P(\tau)]_1 = [\sum_{i=0}^{l} p_i \tau^i]_1 = \sum_{i=0}^{l} p_i [\tau^i]_1$

## 3. 证明求值

- 给定多项式的点求值 $P(a) = b$
- 计算并输出证明 $\pi = [Q(\tau)]_1$
  - 其中 $Q(x) := \frac{P(x)-b}{x-a}$
    - 这称为“商多项式”。请注意，当且仅当 $P(a) = b$ 时，存在 $Q(x)$。因此，这个商多项式的存在可以作为求值的证明。

## 4. 验证求值证明

- 给定承诺 $c = [P(\tau)]_1$， 求值 $P(a) = b$ 和证明 $\pi = [Q(\tau)]_1$
- 验证 $e(\pi, [\tau - a]_2) = e(c - [b]_1, h)$
  - 根据代数推导，这等价于检查商多项式是否正确构造 $\tau$: $Q(\tau) = \frac{P(\tau) -b}{\tau-a}$
    $$
    \begin{align*}
    & e(\pi, [\tau - a]_2) = e(c - [b]_1, h) \\ \iff
    & e([Q(\tau)]_1, [\tau -a]_2) = e([P(\tau)]_1 - [b]_1, h) \\ \iff
    &  Q(\tau) \cdot (\tau - a) \cdot e(g, h) = (P(\tau)-b) \cdot e(g,h) \\ \iff
    & Q(\tau) \cdot (\tau -a) = P(\tau) - b
    \end{align*}
    $$
  - 双线性映射 $e$ 使我们能够在不知道秘密设置参数 $\tau$ 的情况下检验该属性。
- 一旦验证完成，我们可以（以极高的概率）得出结论：商多项式是正确构造的，因此计算是正确的。

## 了解更多

- [https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html](https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html)
- [https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html)
- [https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)
