---
section: learn
date: Last Modified
title: "KZG Commitment Scheme"
lang: "en"
permalink: "learn/zero-knowledge/kzg-commitment-scheme"
excerpt: "KZG is used Ethereum’s Proto-Danksharding, and is also used in Scroll’s proof system. This article will give an overview of the KZG commitment scheme."
whatsnext: { "Additional Resources": "/learn/zero-knowledge/additional-zk-learning-resources" }
---

One of the most widely used polynomial commitment schemes is the KZG commitment scheme. The scheme was originally [published](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf) in 2010 by Kate, Zaverucha, and Goldberg.

KZG is used in Ethereum’s [Proto-Danksharding](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq), and is also used in Scroll's proof system.

This article will give an overview of the KZG commitment scheme.

## Preliminaries and notation

Recall the premise of polynomial commitment schemes. We have some polynomial $P(x)$ that we would like to commit to. We’ll assume the polynomial has a degree less than $l$.

KZG commitments rely on [elliptic curve pairings](https://vitalik.ca/general/2017/01/14/exploring_ecp.html). Let $\mathbb{G}_1$ and $\mathbb{G}_2$ be two elliptic curve groups of order $p$, with a non-trivial [bilinear mapping](https://en.wikipedia.org/wiki/Bilinear_map) $e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$. Let $g$ be a generator of $\mathbb{G}_1$, and $h$ a generator of $\mathbb{G}_2$. We will use the notation $[x]_1 := x \cdot g$ and $[x]_2 := x \cdot h$, where $x \in \mathbb{F}_p$.

## 1. Trusted setup

Before computing any KZG commitments, a one-time trusted setup must be performed. Once the trusted setup is completed, it can be reused to commit and reveal as many different polynomials as desired. The trusted setup works as follows:

- Pick some random field element $\tau \in \mathbb{F}_p$
- Let $l \in \mathbb{Z}$ be the maximum degree of the polynomials we want to commit to
  - The trusted setup will only enable commitments to polynomials of degree $\leq l$
- Compute $([\tau^0]_1,[\tau^1]_1,[\tau^{2}]_1\ldots,[\tau^{l}]_1)$ and $([\tau]_2)$, and release these values publicly.

Note that $\tau$ should not be revealed - it is a secret parameter of the setup, and should be discarded after the trusted setup ceremony is completed so that nobody can figure out its value.

There are established methods of conducting trusted setup ceremonies with weak trust assumptions (1-out-of-N trust assumption) using [multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC). For more on how trusted setups work, see this [post](https://vitalik.ca/general/2022/03/14/trustedsetup.html) by Vitalik.

## 2. Committing to a polynomial

- Given a polynomial $P(x) = \sum_{i=0}^{l} p_i x^i$
- Compute and output the commitment $c = [P(\tau)]_1$
  - Although the committer cannot compute $P(\tau)$ directly (since he doesn’t know $\tau$), he can compute it using the output of the trusted setup:
    - $[P(\tau)]_1 = [\sum_{i=0}^{l} p_i \tau^i]_1 = \sum_{i=0}^{l} p_i [\tau^i]_1$

## 3. Prove an evaluation

- Given an evaluation $P(a) = b$
- Compute and output the proof $\pi = [Q(\tau)]_1$
  - Where $Q(x) := \frac{P(x)-b}{x-a}$
    - This is called the “quotient polynomial.”Note that such a $Q(x)$ exists if and only if $P(a) = b$. The existence of this quotient polynomial therefore serves as a proof of the evaluation.

## 4. Verify an evaluation proof

- Given a commitment $c = [P(\tau)]_1$, an evaluation $P(a) = b$, and a proof $\pi = [Q(\tau)]_1$
- Verify that $e(\pi, [\tau - a]_2) = e(c - [b]_1, h)$
  - Some algebra shows that this is equivalent to checking that that the quotient polynomial is correctly formed at $\tau$: $Q(\tau) = \frac{P(\tau) -b}{\tau-a}$
    $$
    \begin{align*}
    & e(\pi, [\tau - a]_2) = e(c - [b]_1, h) \\ \iff
    & e([Q(\tau)]_1, [\tau -a]_2) = e([P(\tau)]_1 - [b]_1, h) \\ \iff
    &  Q(\tau) \cdot (\tau - a) \cdot e(g, h) = (P(\tau)-b) \cdot e(g,h) \\ \iff
    & Q(\tau) \cdot (\tau -a) = P(\tau) - b
    \end{align*}
    $$
  - The bilinear mapping $e$ enables us to check this property without knowing the secret setup parameter $\tau$
- Once this verification is complete, we can conclude that (with overwhelmingly high probability) the quotient polynomial is correctly formed, and therefore that the evaluation is correct.

## Learn more

- [https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html](https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html)
- [https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html)
- [https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)
