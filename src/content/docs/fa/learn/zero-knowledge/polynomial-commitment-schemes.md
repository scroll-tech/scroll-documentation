---
section: learn
date: Last Modified
title: "Polynomial Commitment Schemes"
lang: "en"
permalink: "learn/zero-knowledge/polynomial-commitment-schemes"
excerpt: "Polynomial commitment schemes are a core building block of zero knowledge proof system"
whatsnext: { "KZG Commitment Scheme": "/en/learn/zero-knowledge/kzg-commitment-scheme" }
---

Polynomial commitment schemes are a core building block of zero knowledge proof systems (as well as other cryptographic protocols).

As the name suggests, polynomial commitment schemes are commitment schemes where the object to be committed is a polynomial. These schemes also have a special property where an evaluation of the polynomial can be verified with access only to the polynomial’s commitment.

## Commitment schemes

A **[commitment scheme](https://en.wikipedia.org/wiki/Commitment_scheme)** is a cryptographic primitive involving two parties: a _committer_ and a _verifier_. The committer commits to a value $v$ by computing a commitment $c$ and revealing it to the verifier. At a later point in time, the committer can reveal the original value, and the verifier can verify that the commitment corresponds to this revealed value.

Secure commitment schemes have two properties:

1. **Binding**: once publishing the commitment $c$, the committer should not be able to find some other value $v’$ distinct from $v$ that also corresponds to $c$. I.e., the commitment $c$ binds the committer to the original value $v$.
2. **Hiding**: the verifier should not be able to learn any information about the original value $v$ from the commitment $c$. I.e., the commitment $c$ hides all information about the original value $v$.

## Polynomial commitment schemes

A **polynomial commitment scheme** is a commitment scheme where the committer commits to a polynomial $P(x)$ by computing a commitment $c$. As in normal commitment schemes, the committer can later reveal the original polynomial, and the verifier can check that the commitment corresponds to the revealed polynomial. However, polynomial commitment schemes have an additional property: the committer can prove particular evaluations of the committed polynomial without revealing the polynomial itself. For example, the committer can prove that $P(a) = b$, and the verifier can verify such a proof using just the commitment $c$.

Polynomial commitment schemes are extremely useful for zero knowledge applications. A prover can use such a scheme to prove that he knows some polynomial which satisfies certain properties (e.g. that it passes through a certain point $(a,b)$), without revealing the underlying polynomial.

Another reason why polynomial schemes are useful is that the commitment $c$ is generally much smaller than the polynomial it represents, and can thus be thought of as a **compression** of the polynomial $P(x)$. The magnitude of compression depends on the particular scheme. For example, in the KZG polynomial commitment scheme, a polynomial of arbitrarily large degree can be compressed down to a commitment consisting of a single group element.

## Learn more

- [https://en.wikipedia.org/wiki/Commitment_scheme](https://en.wikipedia.org/wiki/Commitment_scheme)
- [https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment](https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment)
