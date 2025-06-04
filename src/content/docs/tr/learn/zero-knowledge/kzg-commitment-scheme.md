---
section: learn
date: Last Modified
title: "KZG Taahhüt Şeması"
lang: "tr"
permalink: "learn/zero-knowledge/kzg-commitment-scheme"
excerpt: "KZG, Ethereum'un Proto-Danksharding'inde kullanılır ve ayrıca Scroll'un kanıt sisteminde de kullanılır. Bu makale KZG taahhüt planına genel bir bakış sunacaktır."
whatsnext: { "Ek Kaynaklar": "/tr/learn/zero-knowledge/additional-zk-learning-resources" }
---

En yaygın kullanılan polinom taahhüt planlarından biri KZG taahhüt şemasıdır. Plan ilk olarak 2010 yılında Kate, Zaverucha ve Goldberg tarafından [yayınlanmıştır](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf).

KZG, Ethereum'un [Proto-Danksharding'inde](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq) ve ayrıca Scroll'un kanıt sisteminde kullanılır.

Bu makale KZG taahhüt planına genel bir bakış sunacaktır.

## Ön bilgiler ve notasyon

Polinom taahhüt şemalarının önermesini hatırlayın. Taahhüt etmek istediğimiz bazı $P(x)$ polinomumuz var. Polinomun derecesinin $l$'dan küçük olduğunu varsayacağız.

KZG taahhütleri [eliptik eğri eşleştirmelerine](https://vitalik.ca/general/2017/01/14/exploring_ecp.html) dayanmaktadır. $\mathbb{G}_1$ ve $\mathbb{G}_2$ $p$ düzeyinde iki eliptik eğri grubu olsun ve önemsiz olmayan bir [çift doğrusal eşleme](https://en.wikipedia.org/wiki/Bilinear_map) olsun. $e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$. $g$, $\mathbb{G}_1$ oluşturucusu olsun ve $h$, $\mathbb{G}_2$ oluşturucusu olsun. $[x]_1 := x \cdot g$ ve $[x]_2 := x \cdot h$ gösterimini kullanacağız, burada $x \in \mathbb{F}_p$.

## 1. Güvenilir kurulum

Herhangi bir KZG taahhüdünü hesaplamadan önce tek seferlik güvenilir kurulum gerçekleştirilmelidir. Güvenilir kurulum tamamlandıktan sonra, istenildiği kadar farklı polinomun kaydedilmesi ve ortaya çıkarılması için yeniden kullanılabilir. Güvenilir kurulum şu şekilde çalışır:

- Rastgele bir alan öğesi seçin $\tau \in \mathbb{F}_p$
- $l \in \mathbb{Z}$ taahhüt etmek istediğimiz polinomların maksimum derecesi olsun
  - Güvenilir kurulum yalnızca $\leq l$ derecesindeki polinomlara yönelik taahhütleri etkinleştirir
- $([\tau^0]_1,[\tau^1]_1,[\tau^{2}]_1\ldots,[\tau^{l}]_1)$ ve $([\tau]_2)$ hesaplayın ve bu değerleri herkese açık olarak yayınlayın.

$\tau$'ın açıklanmaması gerektiğini unutmayın; bu, kurulumun gizli bir parametresidir ve güvenilir kurulum töreni tamamlandıktan sonra kimsenin değerini anlayamaması için atılmalıdır.

[Çok taraflı hesaplamayı](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC) kullanarak, zayıf güven varsayımlarıyla (N'den 1'i güven varsayımı) güvenilir kurulum törenleri yürütmenin yerleşik yöntemleri vardır. Güvenilir kurulumların nasıl çalıştığı hakkında daha fazla bilgi için Vitalik'in bu [yazısına](https://vitalik.ca/general/2022/03/14/trustedsetup.html) bakın.

## 2. Bir polinoma bağlı kalmak

- Bir $P(x) = \sum_{i=0}^{l} p_i x^i$ polinomu verildiğinde
- Taahhüdü hesaplayın ve çıktısını alın $c = [P(\tau)]_1$
  - Her ne kadar taahhüt eden $P(\tau)$'ı doğrudan hesaplayamasa da ($\tau$'ı bilmediğinden), güvenilir kurulumun çıktısını kullanarak bunu hesaplayabilir:
    - $[P(\tau)]_1 = [\sum_{i=0}^{l} p*i \tau^i]\_1 = \sum*{i=0}^{l} p_i [\tau^i]\_1$

## 3. Bir değerlendirmeyi kanıtlayın

- Bir değerlendirme verildiğinde $P(a) = b$
- $\pi = [Q(\tau)]_1$ kanıtını hesaplayın ve çıktısını alın
  - Burada $Q(x) := \frac{P(x)-b}{x-a}$
    - Buna “bölüm polinomu” denir. Böyle bir $Q(x)$'ın ancak ve ancak $P(a) = b$ olması durumunda var olduğuna dikkat edin. Dolayısıyla bu bölüm polinomunun varlığı değerlendirmenin bir kanıtıdır.

## 4. Değerlendirme kanıtını doğrulayın

- $c = [P(\tau)]_1$ taahhüdü, $P(a) = b$ değerlendirmesi ve $\pi = [Q(\tau)]_1$ kanıtı verildiğinde
- $e(\pi, [\tau - a]_2) = e(c - [b]_1, h)$ olduğunu doğrulayın
  - Bazı cebir çalışmaları bunun, bölüm polinomunun $\tau$'da doğru şekilde oluşturulduğunu kontrol etmeye eşdeğer olduğunu gösterir: $Q(\tau) = \frac{P(\tau) -b}{\tau-a}$
    $$
    \begin{align*}
    & e(\pi, [\tau - a]_2) = e(c - [b]_1, h) \\ \iff
    & e([Q(\tau)]_1, [\tau -a]_2) = e([P(\tau)]_1 - [b]_1, h) \\ \iff
    & Q(\tau) \cdot (\tau - a) \cdot e(g, h) = (P(\tau)-b) \cdot e(g,h) \\ \iff
    & Q(\tau) \cdot (\tau -a) = P(\tau) - b
    \end{align*}
    $$
  - Çift doğrusal eşleme $e$, gizli kurulum parametresi $\tau$'ı bilmeden bu özelliği kontrol etmemizi sağlar.
- Bu doğrulama tamamlandıktan sonra, bölüm polinomunun doğru şekilde oluşturulduğu ve dolayısıyla değerlendirmenin (çok yüksek olasılıkla) doğru olduğu sonucuna varabiliriz.

## Daha fazla bilgi edin

- [https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html](https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html)
- [https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html)
- [https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)
