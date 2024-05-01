---
section: learn
date: Last Modified
title: "Skema Komitmen Polynomial"
lang: "en"
permalink: "learn/zero-knowledge/polynomial-commitment-schemes"
excerpt: "Skema komitmen Polynomial adalah blok bangunan inti dari sistem bukti Zero Knowledge."
whatsnext: { "Skema Komitmen KZG": "/id/learn/zero-knowledge/kzg-commitment-scheme" }
---

Skema komitmen Polynomial adalah blok bangunan inti dari sistem bukti Zero Knowledge (zero knowledge proof) (serta protokol kriptografi lainnya).

Seperti namanya, skema komitmen Polynomial adalah skema komitmen di mana objek yang akan dikomitmennya adalah sebuah Polynomial. Skema-skema ini juga memiliki properti khusus di mana evaluasi dari Polynomial dapat diverifikasi hanya dengan akses ke komitmen Polynomialnya.

## Skema komitmen

Sebuah **[skema komitmen](https://en.wikipedia.org/wiki/Commitment_scheme)** adalah primitif kriptografi yang melibatkan dua pihak: seorang _komiter_ dan seorang _verifier_. Komiter mengkomitkan suatu nilai $v$ dengan menghitung sebuah komitmen $c$ dan mengungkapkannya kepada verifier. Kemudian, pada waktu yang kemudian, komiter dapat mengungkapkan nilai aslinya, dan verifier dapat memverifikasi bahwa komitmen tersebut sesuai dengan nilai yang diungkapkan.

Skema komitmen yang aman memiliki dua properti:

1. **Binding**: setelah mempublikasikan komitmen $c$, komiter seharusnya tidak dapat menemukan nilai lain $v’$ yang berbeda dari $v$ yang juga sesuai dengan $c$. Artinya, komitmen $c$ mengikat komiter pada nilai aslinya $v$.
2. **Hiding**: verifier seharusnya tidak dapat mempelajari informasi apapun tentang nilai asli $v$ dari komitmen $c$. Artinya, komitmen $c$ menyembunyikan semua informasi tentang nilai asli $v$.

## Skema komitmen Polynomial

Sebuah **skema komitmen Polynomial** adalah sebuah skema komitmen di mana komiter mengkomitkan sebuah Polynomial $P(x)$ dengan menghitung sebuah komitmen $c$. Seperti dalam skema komitmen biasa, komiter kemudian dapat mengungkapkan Polynomial aslinya, dan verifier dapat memeriksa bahwa komitmen tersebut sesuai dengan Polynomial yang diungkapkan. Namun, skema komitmen Polynomial memiliki properti tambahan: komiter dapat membuktikan evaluasi-evaluasi tertentu dari Polynomial yang dikomitmenya tanpa mengungkapkan Polynomial itu sendiri. Sebagai contoh, komiter dapat membuktikan bahwa $P(a) = b$, dan verifier dapat memverifikasi bukti semacam itu hanya dengan menggunakan komitmen $c$.

Skema komitmen Polynomial sangat berguna untuk aplikasi bukti Zero Knowledge. Seorang pembuktikan dapat menggunakan skema tersebut untuk membuktikan bahwa dia mengetahui suatu Polynomial yang memenuhi properti tertentu (misalnya, bahwa Polynomial tersebut melewati suatu titik tertentu $(a,b)$), tanpa mengungkapkan Polynomial yang mendasarinya.

Alasan lain mengapa skema Polynomial bermanfaat adalah bahwa komitmen $c$ umumnya jauh lebih kecil dari Polynomial yang direpresentasikannya, dan dengan demikian dapat dianggap sebagai **kompresi** dari Polynomial $P(x)$. Besarnya kompresi bergantung pada skema tertentu. Sebagai contoh, dalam skema komitmen Polynomial KZG, sebuah Polynomial dengan derajat sembarang besar dapat dikompresi menjadi sebuah komitmen yang terdiri dari sebuah elemen grup tunggal.

## Pelajari lebih lanjut

- [https://en.wikipedia.org/wiki/Commitment_scheme](https://en.wikipedia.org/wiki/Commitment_scheme)
- [https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment](https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment)
