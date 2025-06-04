---
section: learn
date: Last Modified
title: "Polinom Taahhüt Şemaları"
lang: "tr"
permalink: "learn/zero-knowledge/polynomial-commitment-schemes"
excerpt: "Polinom taahhüt şemaları zero knowledge kanıt sisteminin temel yapı taşıdır"
whatsnext: { "KZG Taahhüt Şeması": "/tr/learn/zero-knowledge/kzg-commitment-scheme" }
---

Polinom taahhüt şemaları, zero knowledge kanıtlama sistemlerinin (ve diğer şifreleme protokollerinin) temel yapı taşıdır.

Adından da anlaşılacağı gibi polinom taahhüt şemaları, taahhüt edilecek nesnenin bir polinom olduğu taahhüt şemalarıdır. Bu şemaların ayrıca polinomun değerlendirmesinin yalnızca polinomun taahhüdüne erişimle doğrulanabileceği özel bir özelliği vardır.

## Taahhüt planları

**[Taahhüt şeması](https://en.wikipedia.org/wiki/Commitment_scheme)** iki tarafı içeren bir kriptografik ilkeldir: _committer_ ve _verifier_. Taahhüt eden kişi, $c$ taahhüdünü hesaplayıp bunu doğrulayıcıya açıklayarak $v$ değerini taahhüt eder. Daha sonraki bir zamanda taahhüt eden kişi orijinal değeri ortaya çıkarabilir ve doğrulayıcı da taahhüdün bu açıklanan değere karşılık geldiğini doğrulayabilir.

Güvenli taahhüt planlarının iki özelliği vardır:

1. **Bağlayıcı olma**: $c$ taahhüdünü yayınladıktan sonra, taahhüt eden kişi $v$'den farklı olan ve aynı zamanda $c$'ye karşılık gelen başka bir $v'$ değeri bulamamalıdır. Yani, $c$ taahhüdü, taahhüt edeni orijinal $v$ değerine bağlar.
2. **Gizleme**: Doğrulayıcı, $c$ taahhüdünden orijinal $v$ değeri hakkında herhangi bir bilgi öğrenememelidir. Yani, $c$ taahhüdü, orijinal $v$ değeri hakkındaki tüm bilgileri gizler.

## Polinom taahhüt şemaları

**Polinom taahhüt şeması**, taahhüt eden kişinin $c$ taahhüdünü hesaplayarak $P(x)$ polinomunu taahhüt ettiği bir taahhüt şemasıdır. Normal taahhüt planlarında olduğu gibi, taahhüt eden kişi daha sonra orijinal polinomu ortaya çıkarabilir ve doğrulayıcı, taahhüdün ortaya çıkan polinoma karşılık gelip gelmediğini kontrol edebilir. Bununla birlikte, polinom taahhüt şemalarının ek bir özelliği vardır: taahhüt eden, polinomun kendisini açıklamadan taahhüt edilen polinomun belirli değerlendirmelerini kanıtlayabilir. Örneğin, taahhüt eden $P(a) = b$ olduğunu kanıtlayabilir ve doğrulayıcı böyle bir kanıtı yalnızca $c$ taahhüdünü kullanarak doğrulayabilir.

Polinom taahhüt şemaları zero knowledge uygulamaları için son derece faydalıdır. Bir kanıtlayıcı, temeldeki polinomu açıklamadan, belirli özellikleri (örneğin, belirli bir $(a,b)$ noktasından geçtiğini) karşılayan bazı polinomları bildiğini kanıtlamak için böyle bir şema kullanabilir.

Polinom şemalarının faydalı olmasının bir başka nedeni de, $c$ taahhüdünün genellikle temsil ettiği polinomdan çok daha küçük olmasıdır ve dolayısıyla $P(x)$ polinomunun **sıkıştırılması** olarak düşünülebilir. Sıkıştırmanın büyüklüğü özel şemaya bağlıdır. Örneğin, KZG polinom taahhüt şemasında, keyfi derecede büyük dereceli bir polinom, tek bir grup elemanından oluşan bir taahhüt halinde sıkıştırılabilir.

## Daha fazla bilgi edin

- [https://en.wikipedia.org/wiki/Commitment_scheme](https://en.wikipedia.org/wiki/Commitment_scheme)
- [https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment](https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment)
