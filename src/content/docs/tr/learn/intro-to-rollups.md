---
section: learn
date: Last Modified
title: "Rollup'lara Giriş"
lang: "tr"
permalink: "learn/intro-to-rollups"
excerpt: "Rolluplar, Ethereum ekosistemindeki en yaygın ikinci katman ölçekleme çözümüdür."
whatsnext: { "Scroll Rollup Süreci": "/tr/technology/chain/rollup" }
---

## Rollup nedir?

Rolluplar, Ethereum ekosistemindeki en yaygın katman 2 ölçeklenme çözümüdür ve Ethereum yol haritasının [merkezi bir parçası](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) olarak görülmektedir.

Bir rollup, işlem gruplarını zincir dışında işler (yani katman 1'de değil) ve ardından ortaya çıkan verileri zincir üstünde yayınlar (yani katman 1'de).

Her işlemin yürütülmesi zincir-dışı olarak gerçekleştirilir ve bu işlemlerin katman 1 düğümleri tarafından yeniden yürütülmesi gerekmez. Bu da, katman 1'in merkeziyetsizini etkilemeden yüksek işlem hızına olanak tanır.

Bir rollup'un güvenli olması için, zincir-dışı hesaplamanın (işlemlerin işlenmesi) doğru bir şekilde gerçekleştirildiğini kanıtlaması gerekir. Zincir dışı hesaplamanın geçerliliğini kanıtlamanın iki temel mekanizması vardır: geçerlilik kanıtları(validity proofs) ve dolandırıcılık kanıtları(fraud proofs).

## Optimistic rollup nedir?

Bir optimistic rollup, yaptığı hesaplamaların geçerliliğini savunmak için dolandırıcılık kanıtlarını kullanan bir rollup'tır.

Dolandırıcılık kanıtları, kullanıcıların L2'de gerçekleştirilen herhangi bir hesaplamanın geçersizliğini sorgulamasına ve kanıtlamasına olanak tanıyan bir mekanizmadır. Bir dolandırıcılık kanıtı başarıyla gönderildiğinde, L2 bir önceki bir duruma geri döndürülebilir ve geçersiz hesaplama düzeltilebilir. Dolandırıcılık kanıtları, en az bir dürüst tarafın L2 işlemlerinin doğru bir şekilde yürütüldüğünü kontrol etmesine dayanır.

## ZK rollup nedir?

Bir ZK rollup, yaptığı hesaplamaların geçerliliğini savunmak için geçerlilik kanıtlarını kullanan bir rollup'tır.

Bir ZK rollup, bir işlem grubunu yürüttüğünde ve sonucu L1'e gönderdiğinde, aynı zamanda bir geçerlilik kanıtı da gönderir. Bu matematiksel kanıt, sonuç ile işlem grubunun doğru bir şekilde yürütülmesiyle ortaya çıkan durumun, aynı olduğunu kanıtlar.

Bugünlerde birden çok türde ZK rollup bulunuyor, bunlar genel olarak zkVM'ler (zk Sanal Makineler) veya zkEVM'ler (zk Ethereum Sanal Makineleri) olarak tanımlanıyor.

zkVM'ler, ZK devreleriyle iyi çalışacak şekilde temelden tasarlanmıştır ve bir zkEVM'e kıyasla farklı geliştirme iş akışları gerektirir. Bunlara örnek olarak Starkware ve Aztec verilebilir.

zkEVM'ler, EVM'i taklit etmek üzere tasarlanmıştır. İki ana türü vardır: bytecode uyumlu ve dil uyumlu. Bytecode uyumlu zkEVM'ler, EVM'i çok düşük seviyede taklit eder ve Ethereum Katman 1'e kıyasla neredeyse aynı geliştirme ve kullanıcı deneyimi sağlar. Dil uyumlu zkEVM'ler, Solidity ve diğer yüksek seviye dilleri farklı bytecode'lara derler; bu da iş akışında değişikliklere neden olabilir. zkSync, en popüler dil uyumlu zkEVM'dir.

Scroll, bytecode uyumlu bir yapıya sahiptir. Bu yaklaşımın seçilmesinin bazı faydaları vardır:

- Solidity, Vyper ve Huff doğrudan kullanıma hazır.
- Yeniden kod denetimine gerek yok
- Varolan geliştirme araçlarının çoğu devralınır
- Ethereum ile neredeyse aynı kullanıcı deneyimi ve geliştirici deneyimi sağlar

Scroll'un yaklaşımına ilişkin daha fazla ayrıntı Teknoloji bölümünde bulunabilir.

## Daha fazla okumak için

- [Rollup'lar Hakkında Eksik Bir Kılavuz](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [Ölçeklenme](https://ethereum.org/en/developers/docs/scaling/) - Ethereum Dokümanları
