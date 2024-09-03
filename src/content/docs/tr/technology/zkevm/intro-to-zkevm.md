---
section: technology
date: Last Modified
title: "zkEVM'e Giriş"
lang: "tr"
permalink: "technology/intro-to-zkevm"
excerpt: "ZK rolluplar, Ethereum için ideal ölçeklendirme çözümü olarak geniş çapta kabul edilmektedir."
whatsnext: { "zkEVM Overview": "/tr/technology/zkevm/zkevm-overview" }
---

## Giriş ve motivasyon

ZK rolluplar, Ethereum için ideal ölçeklendirme çözümü olarak geniş çapta kabul edilmektedir. Ethereum'un güçlü güvenliğini miras alırlar ve diğer L2 çözümleriyle karşılaştırıldığında en hızlı işlem kesinliğini sunarlar.

ZK rollupların temel fikri, işlemleri zincir dışında yürütmek ve yürütmenin geçerliliğine dair kısa ve öz kanıtlar oluşturmaktır. Bu kısa ve öz kanıtlar daha sonra Ethereum'a gönderilebilir ve doğrulanabilir. ZK rolluplar, bir grup işlem için kanıtın doğrulanması, işlem kümesinin yeniden yürütülmesinden çok daha ucuz olduğundan ölçeklenebilirliği artırır.

ZK rolluplar, destekledikleri işlem türlerine göre uygulamaya özel ve genel amaçlı rolluplar olarak kategorize edilebilir. Uygulamaya özel ZK rolluplar, ödemeler ve takaslar gibi belirli işlem kümeleri veya bir oyuncunun zincir üstü bir oyun için eylem kümesi için tasarlanmıştır. Bu durumlarda, rolluplar yalnızca oyun oyuncuları için geçerli durum geçişleri gibi desteklenen temel öğelerin doğruluğunu kanıtlayan kanıtlar üretmesi gerekir.

Öte yandan, genel amaçlı ZK rolluplar daha geniş bir işlem ve hesaplama yelpazesini destekler. Bu rolluplar, derleme kodunu yürütmek için bir sanal makine (VM) kullanır ve ardından yürütmenin VM'nin özelliklerine göre doğru şekilde yapıldığını gösteren bir kanıt oluşturur. Bir ZK rollup'ın hesaplama için kullandığı belirli VM, birçok ZK rollup projesi arasında farklılık gösterir. Bazı projeler, hızlı kanıt oluşturma için optimize edilmiş kendi VM'lerini oluşturmayı tercih ediyor. Diğer projeler, Ethereum ekosistemiyle optimum uyumluluk için EVM'yi kullanmayı seçiyor.

Scroll, zincir dışı hesaplamalar için EVM'yi kullanan genel amaçlı bir ZK rollup'tır. Scroll'un yürütme katmanı Ethereum'unkine benzer şekilde çalışır; işlemler bloklar halinde gruplanır ve ardından bloklar [EVM](https://ethereum.org/en/developers/docs/evm/) spesifikasyonlarına göre yürütülür (aslında [Geth'in](https://geth.ethereum.org/) biraz [değiştirilmiş versiyonu](https://github.com/scroll-tech/go-ethereum)). Bu, kullanıcıların Scroll ile Ethereum ile etkileşimde oldukları şekilde etkileşime girebilecekleri anlamına gelir. Bu aynı zamanda geliştiricilerin Ethereum'un üzerinde geliştirdikleri gibi Scroll'un üzerinde de geliştirebilecekleri anlamına geliyor.

Bununla birlikte, bir ZK rollup ile Ethereum uyumluluğunun sağlanması büyük bir zorluk teşkil ediyor; rollup'ın, zincir dışı bir EVM hesaplamasının doğru şekilde yürütüldüğünü kanıtlayan bir kanıt oluşturabilmesi gerekiyor. Temel olarak “zkEVM” budur: **zkEVM, EVM'nin doğru şekilde yürütüldüğünü kanıtlayan bir sistemdir**.

EVM, başlangıçta ZK rollupları düşünülmeden tasarlandı ve bir zkEVM oluşturmanın oldukça zorlu olduğu ortaya çıktı. Ancak biz Scroll olarak bu zorluklardan yılmadık ve zkEVM'yi gerçeğe dönüştürmek için [Ethereum Privacy and Scaling Explorations](https://appliedzkp.org/) ekibiyle işbirliği içinde yoğun bir şekilde çalışıyoruz.

## Daha fazla bilgi edin

- [Blog yazısı](https://scroll.io/blog/zkEVM) zkEVM'yi tanıtıyor
- [zkEVM'ye genel bakış](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
