---
section: learn
date: Last Modified
title: "Ölçeklenebilirlik Sorunu"
lang: "tr"
permalink: "learn/intro-to-rollups"
excerpt: "Ethereum'ın güçlü merkeziyetsizliği ve güvenliği, ölçeklenebilirliğini feda etmesiyle sağlanır: Katılan tüm düğümlerin ağa ayak uydurabilmesini sağlamak için ağın işlem kapasitesi sınırlıdır. Bu sınır sonuçta kullanıcılar için daha yüksek maliyetlere ve gecikmelere neden olur."
whatsnext: { "Rollup'lara Giriş": "/tr/learn/intro-to-rollups" }
---

## Ethereum’un ölçeklenme sorunu

[Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-ethereum) genel amaçlı bir blok zinciridir ve [akıllı kontratların](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-are-smart-contracts) dağıtımını ve yürütülmesini destekler.

Ethereum'un tanımlayıcı özelliklerinden biri, güvenliğe ve merkeziyetsizliğe olan sarsılmaz bağlılığıdır. Ethereum, dünyanın her yerindeki bilgisayarların ([Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/) gibi ucuz bilgisayarların bile) yerel kopyalarını çalıştırarak ağa katılabileceği şekilde tasarlanmıştır.

Ancak Ethereum'un güçlü merkeziyetsizliği ve güvenliği, ölçeklenebilirlikten ödün verme pahasına gelir: katılan tüm düğümlerin ağa ayak uydurabilmesini sağlamak için ağın verimi sınırlıdır. Bu sınır sonuçta kullanıcılar için daha yüksek maliyetlere ve gecikmelere neden olur.

## Ölçeklendirme çözümleri

Ethereum'un ölçeklendirme çözümleri, merkeziyetsizlikten veya güvenlikten ödün vermeden ağın verimini artırmayı amaçlıyor.

Ana olarak iki tür ölçeklendirme çözümü vardır: katman 1 ölçeklendirme çözümleri ve katman 2 ölçeklendirme çözümleri.

**Katman 1** (veya **L1**) ölçeklendirme çözümleri, doğrudan Ethereum blok zincirinde değişiklikler yaparak ağı ölçeklendirmeye çalışır. Buradaki “katman 1” terimi ana Ethereum blok zincirini ifade etmektedir. Genel olarak, verimi artıran ve aynı zamanda yüksek düzeyde güvenlik ve merkeziyetsizliği koruyan katman 1 ölçeklendirme çözümlerini tasarlamak çok zordur. Bu nedenle son zamanlardaki ölçeklendirme çabaları 1. katman çözümlerinden 2. katman çözümlerine doğru kaymıştır.

**Katman 2** (veya **L2**) ölçeklendirme çözümleri, Ethereum katman 1'in **üstünde** yaşayan ağlardır; bunlar esasen, temeldeki Ethereum blok zincirine bir şekilde "sabitlenmiş" ayrı blok zincirlerdir. Bu katman 2 ağları, aynı sınırlamalara tabi olmadıkları için genellikle işlemleri temel katman 1 ağından daha yüksek bir hızda işleyebilir. Özellikleri çeşitli katman 2'ler arasında farklılık gösteren "sabitleme" mekanizması, katman 2 ağının, Ethereum katman 1'in güçlü güvenlik ve merkezi olmayan yönetim özelliklerini miras almasını sağlar.
