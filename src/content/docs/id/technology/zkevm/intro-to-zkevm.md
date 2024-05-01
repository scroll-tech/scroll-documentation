---
section: technology
date: Last Modified
title: "Pengantar zkEVM"
lang: "id"
permalink: "technology/intro-to-zkevm"
excerpt: "ZK rollups are widely recognized as the ideal scaling solution for Ethereum."
whatsnext: { "Ikhtisar zkEVM": "/id/technology/zkevm/zkevm-overview" }
---

## Pengenalan dan Motivasi

ZK rollup secara luas diakui sebagai solusi penskalaan ideal untuk Ethereum. Mereka mewarisi keamanan yang kuat dari Ethereum Layer 1 dan menawarkan penyelesaian transaksi yang paling cepat dibandingkan dengan solusi Layer 2 lainnya.

Ide dasar dari ZK rollup adalah untuk menjalankan transaksi di luar rantai (off-chain) dan menghasilkan bukti ringkas tentang kevalidan eksekusi tersebut. Bukti-bukti ringkas ini kemudian dapat diposting dan diverifikasi di Ethereum Layer 1. ZK rollup meningkatkan skalabilitas karena memverifikasi bukti untuk sekelompok transaksi jauh lebih murah daripada mengeksekusi kembali sekelompok transaksi tersebut.

ZK rollup dapat dikategorikan menjadi rollup berbasis aplikasi dan rollup berbasis umum, berdasarkan jenis transaksi yang mereka dukung. ZK rollup berbasis aplikasi dirancang untuk set transaksi tertentu, seperti pembayaran dan pertukaran, atau set tindakan pemain untuk permainan on-chain. Dalam kasus-kasus ini, rollup hanya perlu menghasilkan bukti yang menunjukkan kebenaran dari primitif yang didukung, seperti transisi state yang valid untuk pemain game.

Di sisi lain, ZK rollup berbasis umum mendukung berbagai transaksi dan komputasi. Rollup ini menggunakan mesin virtual (VM) untuk menjalankan kode assembly, dan kemudian menghasilkan bukti untuk menunjukkan bahwa eksekusi dilakukan dengan benar sesuai dengan spesifikasi VM. VM tertentu yang digunakan oleh ZK rollup untuk komputasinya berbeda di antara banyak proyek ZK rollup. Beberapa proyek memilih untuk membangun VM mereka sendiri, dioptimalkan untuk generasi bukti yang cepat. Proyek lain memilih untuk menggunakan EVM, untuk kompatibilitas optimal dengan ekosistem Ethereum.

Scroll adalah ZK rollup berbasis umum yang menggunakan EVM untuk komputasi di luar rantai. Lapisan eksekusi Scroll berfungsi secara mirip dengan Ethereum - transaksi dibatching menjadi blok, dan kemudian blok-blok tersebut dieksekusi sesuai dengan [spesifikasi EVM](https://ethereum.org/en/developers/docs/evm/) (kami sebenarnya menggunakan [versi yang sedikit dimodifikasi](https://github.com/scroll-tech/go-ethereum) dari [Geth](https://geth.ethereum.org/)). Ini berarti bahwa pengguna dapat berinteraksi dengan Scroll dengan cara yang sama seperti mereka berinteraksi dengan Ethereum. Ini juga berarti bahwa pengembang dapat mengembangkan di atas Scroll seperti yang mereka lakukan di atas Ethereum.

Namun, mencapai kompatibilitas Ethereum dengan ZK rollup menimbulkan tantangan besar - rollup harus mampu menghasilkan bukti yang membuktikan bahwa komputasi EVM di luar rantai dieksekusi dengan benar. Ini pada dasarnya adalah apa yang disebut sebagai "zkEVM": **zkEVM adalah sistem yang membuktikan eksekusi EVM yang benar**.

EVM awalnya dirancang tanpa mempertimbangkan ZK rollup, dan ternyata cukup sulit untuk membangun zkEVM. Namun, kami di Scroll tidak gentar oleh tantangan ini, dan telah bekerja keras dalam kolaborasi dengan tim [Ethereum Privacy and Scaling Explorations](https://appliedzkp.org/) untuk menjadikan zkEVM sebuah kenyataan.

## Lebih lanjut

- [Blog post](https://scroll.io/blog/zkEVM) Pengenalan zkEVM
- [zkEVM overview](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
