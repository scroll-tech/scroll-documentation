---
section: learn
date: Last Modified
title: "The Scalability Problem"
lang: "id"
permalink: "learn/intro-to-rollups"
excerpt: "Desentralisasi dan keamanan yang kuat pada Ethereum datang dengan biaya pengorbanan skalabilitas: untuk memastikan bahwa semua node yang berpartisipasi dapat mengikuti jaringan, throughput jaringan dibatasi. Batasan ini pada akhirnya menghasilkan biaya dan latensi yang lebih tinggi bagi pengguna."
whatsnext: { "Intro to Rollups": "/id/learn/intro-to-rollups" }
---

## Masalah skalabilitas Ethereum

[Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-ethereum) adalah blockchain tujuan umum yang mendukung penyebaran dan pelaksanaan [kontrak pintar](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-are-smart-contracts).

Salah satu fitur yang menonjol dari Ethereum adalah komitmennya yang teguh terhadap keamanan dan desentralisasi. Ethereum dirancang sedemikian rupa sehingga komputer di seluruh dunia (bahkan yang murah, seperti [Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/)) dapat berpartisipasi dalam jaringan, menjalankan salinan lokal dari blockchain dan memproses transaksi baru.

Namun, desentralisasi dan keamanan yang kuat pada Ethereum datang dengan biaya pengorbanan skalabilitas: untuk memastikan bahwa semua node yang berpartisipasi dapat mengikuti jaringan, throughput jaringan dibatasi. Batasan ini pada akhirnya menghasilkan biaya dan latensi yang lebih tinggi bagi pengguna.

## Solusi skalabilitas

Solusi skalabilitas Ethereum bertujuan untuk meningkatkan throughput jaringan tanpa mengorbankan desentralisasi atau keamanan.

Secara umum, ada dua jenis solusi skalabilitas: solusi skalabilitas layer 1 dan solusi skalabilitas layer 2.

**Layer 1** (atau **L1**) adalah solusi skalabilitas yang mencoba meningkatkan throughput jaringan dengan melakukan modifikasi langsung pada blockchain Ethereum. Istilah "layer 1" di sini mengacu pada blockchain Ethereum utama. Secara umum, sangat sulit untuk merancang solusi skalabilitas layer 1 yang meningkatkan throughput dan pada saat yang sama mempertahankan tingkat keamanan dan desentralisasi yang tinggi. Oleh karena itu, upaya skalabilitas terbaru telah beralih dari solusi layer 1 ke solusi layer 2.

**Layer 2** (atau **L2**) adalah jaringan yang berada **di atas** layer 1 Ethereum - mereka pada dasarnya adalah blockchain terpisah yang "diikat" ke blockchain Ethereum dasar dengan cara tertentu. Jaringan layer 2 ini umumnya dapat memproses transaksi dengan laju yang lebih tinggi daripada jaringan layer 1 yang mendasarinya, karena mereka tidak tunduk pada batasan yang sama. Mekanisme "pengikatan", yang detailnya berbeda-beda di berbagai layer 2, memungkinkan jaringan layer 2 untuk mewarisi sifat keamanan dan desentralisasi yang kuat dari layer 1 Ethereum.
