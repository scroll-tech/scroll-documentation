---
section: learn
date: Last Modified
title: "Schema di Impegno KZG"
lang: "it"
permalink: "learn/zero-knowledge/kzg-commitment-scheme"
excerpt: "KZG è utilizzato nel Proto-Danksharding di Ethereum e nel sistema di prove di Scroll. Questo articolo fornisce una panoramica dello schema di impegno KZG."
whatsnext: { "Risorse Aggiuntive": "/it/learn/zero-knowledge/additional-zk-learning-resources" }
---

Uno degli schemi di impegno polinomiale più ampiamente utilizzati è lo schema di impegno KZG. Lo schema è stato originariamente [pubblicato](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf) nel 2010 da Kate, Zaverucha e Goldberg.

KZG è utilizzato nel [Proto-Danksharding](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq) di Ethereum ed è anche utilizzato nel sistema di prove di Scroll.

Questo articolo fornirà una panoramica dello schema di impegno KZG.

## Preliminari e notazione

Ricorda il presupposto degli schemi di impegno polinomiale. Abbiamo un polinomio $P(x)$ a cui vorremmo impegnarci. Assumeremo che il polinomio abbia un grado inferiore a $l$.

Gli impegni KZG si basano su [accoppiamenti di curve ellittiche](https://vitalik.ca/general/2017/01/14/exploring_ecp.html). Lascia che $\mathbb{G}_1$ e $\mathbb{G}_2$ siano due gruppi di curve ellittiche di ordine $p$, con una [mappatura bilineare](https://en.wikipedia.org/wiki/Bilinear_map) non banale $e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$. Lascia che $g$ sia un generatore di $\mathbb{G}_1$, e $h$ un generatore di $\mathbb{G}_2$. Utilizzeremo la notazione $[x]_1 := x \cdot g$ e $[x]_2 := x \cdot h$, dove $x \in \mathbb{F}_p$.

## 1. Cerimonia o Trusted Setup

Prima di calcolare qualsiasi impegno KZG, deve essere eseguita una configurazione fiduciaria una tantum. Una volta completata la configurazione fiduciaria, può essere riutilizzata per impegnare e rivelare quanti più polinomi diversi desiderati. La configurazione fiduciaria funziona come segue:

- Scegli un elemento casuale del campo  $\tau \in \mathbb{F}_p$
- Lascia che $l \in \mathbb{Z}$ sia il grado massimo dei polinomi a cui vogliamo impegnarci
  - La configurazione fiduciaria consentirà solo impegni a polinomi di grado $\leq l$
- Calcola $([\tau^0]_1,[\tau^1]_1,[\tau^{2}]_1\ldots,[\tau^{l}]_1)$ y $([\tau]_2)$, e publlica questi valori.

Nota che $\tau$ non deve essere rivelato - è un parametro segreto della configurazione e deve essere scartato dopo il completamento della cerimonia di configurazione fiduciaria in modo che nessuno possa scoprirne il valore.

Esistono metodi stabiliti per eseguire configurazioni fiduciarie con assunzioni di fiducia deboli (assunzione di fiducia 1-su-N) utilizzando [computazione multi-parte](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC). Per ulteriori informazioni su come funzionano le configurazioni fiduciarie, vedi questo [post](https://vitalik.ca/general/2022/03/14/trustedsetup.html) di Vitalik.

## 2. Impegnarsi con un polinomio

- Dato un polinomio $P(x) = \sum_{i=0}^{l} p_i x^i$
- Si calcola e si emette l'impegno $c = [P(\tau)]_1$.
- Anche se chi si impegna non può calcolare $P(\tau)$  direttamente (poiché non conosce $\tau$), può calcolarlo utilizzando il risultato della configurazione fiduciaria:
  - $[P(\tau)]_1 = [\sum_{i=0}^{l} p_i \tau^i]_1 = \sum_{i=0}^{l} p_i [\tau^i]_1$.

## 3. Provare una valutazione

- Dato una valutazione $P(a) = b$
- Si calcola e si emette la prova $\pi = [Q(\tau)]_1$
  - Dove $Q(x) := \frac{P(x)-b}{x-a}$
    - Nota che tale $Q(x)$ esiste se e solo se $P(a) = b$. L'esistenza di questo polinomio quoziente serve quindi come prova della valutazione.

## 4. Verifica di una prova di valutazione

- Dato un impegno $c = [P(\tau)]_1$, una valutazione $P(a) = b$ e una prova $\pi = [Q(\tau)]_1$
- Si verifica che $e(\pi, [\tau - a]_2) = e(c - [b]_1, h)$
  - Alcuni calcoli algebrici mostrano che ciò equivale a verificare che il polinomio quoziente sia correttamente formato in $\tau$: $Q(\tau) = \frac{P(\tau) -b}{\tau-a}$
    $$
    \begin{align*}
    & e(\pi, [\tau - a]_2) = e(c - [b]_1, h) \\ \iff
    & e([Q(\tau)]_1, [\tau -a]_2) = e([P(\tau)]_1 - [b]_1, h) \\ \iff
    &  Q(\tau) \cdot (\tau - a) \cdot e(g, h) = (P(\tau)-b) \cdot e(g,h) \\ \iff
    & Q(\tau) \cdot (\tau -a) = P(\tau) - b
    \end{align*}
    $$
  - La mappatura bilineare $e$ ci permette di verificare questa proprietà senza conoscere il parametro segreto della configurazione $\tau$
- Una volta completata questa verifica, possiamo concludere che (con probabilità estremamente alta) il polinomio quoziente è correttamente formato e quindi la valutazione è corretta.

## Per saperne di più

- [https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html](https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html)
- [https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html)
- [https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)