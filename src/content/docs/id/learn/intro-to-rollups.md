---
section: learn
date: Last Modified
title: "Intro to Rollups"
lang: "id"
permalink: "learn/intro-to-rollups"
excerpt: "Rollups adalah solusi skalabilitas layer 2 yang paling dominan dalam ekosistem Ethereum."
whatsnext: { "Scroll Rollup Process": "/id/technology/chain/rollup" }
---

## Apa itu rollup?

Rollup adalah solusi skalabilitas layer 2 yang paling dominan dalam ekosistem Ethereum, dan dianggap sebagai [bagian sentral](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) dari peta jalan Ethereum.

Rollup memproses batch transaksi di luar rantai (off-chain), dan kemudian memposting data hasilnya di rantai (on-chain).

Eksekusi setiap transaksi dilakukan di luar rantai, dan tidak perlu dieksekusi ulang oleh node layer 1. Ini memungkinkan throughput transaksi yang tinggi, tanpa mempengaruhi desentralisasi layer 1.

Agar rollup aman, harus membuktikan bahwa komputasinya di luar rantai (pemrosesan transaksi) dilakukan dengan benar. Ada dua mekanisme utama untuk membuktikan validitas komputasi di luar rantai: bukti keabsahan dan bukti penipuan.

## Apa itu optimistic rollup?

Optimistic rollup adalah rollup yang menggunakan bukti penipuan untuk menegaskan validitas komputasinya.

Bukti penipuan adalah mekanisme yang memungkinkan pengguna menantang dan membuktikan ketidakvalidan setiap komputasi yang dilakukan di L2. Jika bukti penipuan berhasil diajukan, L2 dapat digulirkan kembali ke keadaan sebelumnya dan komputasi yang tidak valid dapat diperbaiki. Bukti penipuan bergantung pada setidaknya satu pihak jujur yang memeriksa bahwa transaksi L2 telah dieksekusi dengan benar.

## Apa itu ZK rollup?

ZK rollup adalah rollup yang menggunakan bukti keabsahan untuk menegaskan validitas komputasinya.

Ketika ZK rollup mengeksekusi batch transaksi dan memposting keadaan hasilnya ke L1, ia juga memposting bukti keabsahan. Bukti matematika ini membuktikan bahwa keadaan hasilnya memang keadaan yang dihasilkan dari mengeksekusi batch transaksi dengan benar.

Saats ini, ada beberapa jenis ZK rollup, secara luas didefinisikan sebagai zkVMs (zk Virtual Machines) atau zkEVMs (zk Ethereum Virtual Machines).

zkVMs dirancang dari awal untuk bekerja dengan baik dengan sirkuit ZK dan memerlukan alur kerja pengembangan yang berbeda dibandingkan dengan zkEVM. Beberapa contohnya termasuk Starkware dan Aztec.

zkEVMs dirancang untuk meniru EVM. Ada dua jenis utama zkEVMs: yang kompatibel dengan bytecode, dan yang kompatibel dengan bahasa. Bytecode-compatible zkEVMs meniru EVM pada tingkat yang sangat rendah, memungkinkan pengalaman pengembangan dan pengguna yang hampir identik dengan Ethereum Layer 1. Language-compatible zkEVMs mengkompilasi Solidity dan bahasa tingkat tinggi lainnya ke bytecode yang berbeda, yang dapat menghasilkan perubahan dalam alur kerja. zkSync adalah zkEVM yang paling populer yang kompatibel dengan bahasa.

Scroll adalah kompatibel dengan bytecode. Pendekatan ini dipilih karena membawa beberapa manfaat:

- Solidity, Vyper, dan Huff bekerja tanpa masalah
- Tidak perlu audit ulang
- Sebagian besar alat yang ada diwarisi
- Pengalaman pengguna dan pengembangan yang hampir identik dengan Ethereum

Detail lebih lanjut tentang pendekatan Scroll dapat ditemukan di bagian Teknologi.

## Bacaan lebih lanjut

- [An Incomplete Guide to Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [Scaling](https://ethereum.org/en/developers/docs/scaling/) - Ethereum Docs
