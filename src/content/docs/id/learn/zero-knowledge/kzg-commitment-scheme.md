---
section: learn
date: Last Modified
title: "Skema Komitmen KZG"
lang: "id"
permalink: "learn/zero-knowledge/kzg-commitment-scheme"
excerpt: "KZG digunakan dalam Proto-Danksharding Ethereum, dan juga digunakan dalam sistem bukti Scroll. Artikel ini akan memberikan gambaran singkat tentang skema komitmen KZG."
whatsnext: { "Sumber Daya Tambahan": "/id/learn/zero-knowledge/additional-zk-learning-resources" }
---

Salah satu skema komitmen polinomial yang paling banyak digunakan adalah skema komitmen KZG. Skema ini awalnya [dipublikasikan](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf) pada tahun 2010 oleh Kate, Zaverucha, dan Goldberg.

KZG digunakan dalam [Proto-Danksharding](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq) Ethereum, dan juga digunakan dalam sistem bukti Scroll.

Artikel ini akan memberikan gambaran singkat tentang skema komitmen KZG.

## Pendahuluan dan notasi

Ingat premis dari skema komitmen polinomial. Kami memiliki suatu polinomial $P(x)$ yang ingin kami komitkan. Kami akan mengasumsikan bahwa polinomial memiliki derajat kurang dari $l$.

Komitmen KZG bergantung pada [pasangan kurva eliptik](https://vitalik.ca/general/2017/01/14/exploring_ecp.html). Biarkan $\mathbb{G}_1$ dan $\mathbb{G}_2$ menjadi dua grup kurva eliptik dari orde $p$, dengan pemetaan [bilinear](https://en.wikipedia.org/wiki/Bilinear_map) non-trivial $e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$. Biarkan $g$ menjadi generator dari $\mathbb{G}_1$, dan $h$ menjadi generator dari $\mathbb{G}_2$. Kami akan menggunakan notasi $[x]_1 := x \cdot g$ dan $[x]_2 := x \cdot h$, di mana $x \in \mathbb{F}_p$.

## 1. Setup terpercaya

Sebelum menghitung komitmen KZG apa pun, setup terpercaya satu kali harus dilakukan. Setelah setup terpercaya selesai, itu dapat digunakan kembali untuk mengkomitkan dan mengungkapkan sebanyak mungkin polinomial yang berbeda seperti yang diinginkan. Setup terpercaya bekerja sebagai berikut:

- Pilih beberapa elemen medan acak $\tau \in \mathbb{F}_p$
- Biarkan $l \in \mathbb{Z}$ menjadi derajat maksimum dari polinomial yang ingin kami komitkan
  - Setup terpercaya hanya akan memungkinkan komitmen terhadap polinomial derajat $\leq l$
- Hitung $([\tau^0]_1,[\tau^1]_1,[\tau^{2}]_1\ldots,[\tau^{l}]_1)$ dan $([\tau]_2)$, dan rilis nilai-nilai ini secara publik.

Perhatikan bahwa $\tau$ seharusnya tidak diungkapkan - itu adalah parameter rahasia dari setup, dan seharusnya dibuang setelah upacara setup terpercaya selesai sehingga tidak ada yang dapat mengetahui nilainya.

Ada metode yang sudah mapan untuk melakukan upacara setup terpercaya dengan asumsi kepercayaan yang lemah (asumsi kepercayaan 1-out-of-N) menggunakan [komputasi multi-pihak](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC). Untuk informasi lebih lanjut tentang cara kerja setup terpercaya, lihat [pos ini](https://vitalik.ca/general/2022/03/14/trustedsetup.html) oleh Vitalik.

## 2. Mengkomitkan suatu polinomial

- Diberikan suatu polinomial $P(x) = \sum_{i=0}^{l} p_i x^i$
- Hitung dan keluarkan komitmen $c = [P(\tau)]_1$
  - Meskipun komiter tidak dapat menghitung $P(\tau)$ secara langsung (karena dia tidak tahu $\tau$), dia dapat menghitungnya menggunakan output dari setup terpercaya:
    - $[P(\tau)]_1 = [\sum_{i=0}^{l} p_i \tau^i]_1 = \sum_{i=0}^{l} p_i [\tau^i]_1$

## 3. Membuktikan suatu evaluasi

- Diberikan sebuah evaluasi $P(a) = b$
- Hitung dan keluarkan bukti $\pi = [Q(\tau)]_1$
  - Di mana $Q(x) := \frac{P(x)-b}{x-a}$
    - Ini disebut sebagai "polinomial hasil bagi." Perlu dicatat bahwa $Q(x)$ seperti ini ada jika dan hanya jika $P(a) = b$. Kehadiran polinomial hasil bagi ini oleh karena itu berfungsi sebagai bukti dari evaluasi tersebut.

##

4.  Memverifikasi bukti evaluasi

- Diberikan sebuah komitmen $c = [P(\tau)]_1$, sebuah evaluasi $P(a) = b$, dan sebuah bukti $\pi = [Q(\tau)]_1$
- Verifikasi bahwa $e(\pi, [\tau - a]_2) = e(c - [b]_1, h)$
  - Beberapa aljabar menunjukkan bahwa ini setara dengan memeriksa bahwa polinomial hasil bagi telah dibentuk dengan benar pada $\tau$: $Q(\tau) = \frac{P(\tau) -b}{\tau-a}$
    $$
    \begin{align*}
    & e(\pi, [\tau - a]_2) = e(c - [b]_1, h) \\ \iff
    & e([Q(\tau)]_1, [\tau -a]_2) = e([P(\tau)]_1 - [b]_1, h) \\ \iff
    &  Q(\tau) \cdot (\tau - a) \cdot e(g, h) = (P(\tau)-b) \cdot e(g,h) \\ \iff
    & Q(\tau) \cdot (\tau -a) = P(\tau) - b
    \end{align*}
    $$
  - Pemetaan bilinear $e$ memungkinkan kami untuk memeriksa properti ini tanpa mengetahui parameter setup rahasia $\tau$
- Begitu verifikasi ini selesai, kami dapat menyimpulkan bahwa (dengan probabilitas yang sangat tinggi) polinomial hasil bagi telah dibentuk dengan benar, dan oleh karena itu evaluasinya benar.

## Pelajari lebih lanjut

- [https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html](https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html)
- [https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html)
- [https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)
