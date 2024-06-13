---
section: learn
date: Last Modified
title: "Schemi di Commitments Polinomiali"
lang: "it"
permalink: "learn/zero-knowledge/polynomial-commitment-schemes"
excerpt: "I Polynomial commitment schemes sono un componente fondamentale dei sistemi di prove zero-knowledge."
whatsnext: { "Schema di Impegno KZG": "/it/learn/zero-knowledge/kzg-commitment-scheme" }
---

Gli Schemi di Commitments Polinomiali sono un componente fondamentale dei sistemi di prove zero-knowledge (così come di altri protocolli crittografici).

Come suggerisce il nome, gli schemi di commitments polinomiali sono schemi di commitments in cui l'oggetto da impegnare è un polinomio. Questi schemi hanno anche una proprietà speciale per cui una valutazione del polinomio può essere verificata con accesso solo al commitment del polinomio.

## Schemi di Commitments

Uno **[schema di commitment](https://en.wikipedia.org/wiki/Commitment_scheme)** è una primitiva crittografica che coinvolge due parti: un _committer_ e un _verifier_. Il committer si impegna a un valore \( v \) calcolando un commitment \( c \) e rivelandolo al verifier. In un momento successivo, il committer può rivelare il valore originale, e il verifier può verificare che il commitment corrisponde a questo valore rivelato.

Gli schemi di commitment sicuri hanno due caratteristiche:

1. **Binding**: una volta pubblicato il commitment \( c \), il committer non dovrebbe essere in grado di trovare un altro valore \( v' \) diverso da \( v \) che corrisponda anch'esso a \( c \). Cioè, il commitment \( c \) vincola il committer al valore originale \( v \).
2. **Hiding**: il verifier non dovrebbe essere in grado di ottenere alcuna informazione sul valore originale \( v \) dal commitment \( c \). Cioè, il commitment \( c \) nasconde tutte le informazioni sul valore originale \( v \).

## Schemi di Commitments Polinomiali

Uno **schema di commitment polinomiale** è uno schema di commitment in cui il committer si impegna a un polinomio \( P(x) \) calcolando un commitment \( c \). Come nei normali schemi di commitment, il committer può rivelare successivamente il polinomio originale, e il verifier può verificare che il commitment corrisponde al polinomio rivelato. Tuttavia, gli schemi di commitment polinomiale hanno una proprietà aggiuntiva: il committer può provare valutazioni particolari del polinomio impegnato senza rivelare il polinomio stesso. Ad esempio, il committer può provare che \( P(a) = b \), e il verifier può verificare tale prova utilizzando solo il commitment \( c \).

Gli schemi di commitment polinomiale sono estremamente utili per applicazioni che utilizzano zero-knowledge. Un prover può utilizzare uno schema di questo tipo per dimostrare di conoscere un polinomio che soddisfa determinate proprietà (ad esempio, che passa per un certo punto \( (a,b) \)), senza rivelare il polinomio sottostante.

Un'altra ragione per cui gli schemi polinomiali sono utili è che il commitment \( c \) è generalmente molto più piccolo del polinomio che rappresenta, e può quindi essere considerato come una **compressione** del polinomio \( P(x) \). La magnitudine della compressione dipende dallo schema specifico. Ad esempio, nello schema di commitment polinomiale KZG, un polinomio di grado arbitrariamente grande può essere compresso fino a un commitment costituito da un singolo elemento del gruppo.

## Impara di Più

- [https://en.wikipedia.org/wiki/Commitment_scheme](https://en.wikipedia.org/wiki/Commitment_scheme)
- [https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment](https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment)