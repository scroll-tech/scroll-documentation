---
section: learn
date: Last Modified
title: "Esquema de Compromiso KZG"
lang: "es"
permalink: "learn/zero-knowledge/kzg-commitment-scheme"
excerpt: "KZG se utiliza Proto-Danksharding de Ethereum, y también se utiliza en el sistema de pruebas de Scroll. Este artículo dará una visión general del esquema de compromiso KZG."
whatsnext: { "Recursos Adicionales": "/es/learn/zero-knowledge/additional-zk-learning-resources" }
---

Uno de los esquemas de compromiso polinómico más utilizados es el esquema de compromiso KZG. El esquema fue originalmente [publicado](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf) en 2010 por Kate, Zaverucha y Goldberg.

KZG se utiliza en [Proto-Danksharding](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq) de Ethereum, y también se utiliza en el sistema de pruebas de Scroll.

Este artículo dará una visión general del esquema de compromiso KZG.ç

## Preliminares y notaciones

Recordemos la premisa de los esquemas de compromiso polinómico. Tenemos algún polinomio $P(x)$ que nos gustaría comprometer. Asumiremos que el polinomio tiene un grado menor que $l$.

KZG compromisos se basan en una [curva elíptica de pares](https://vitalik.ca/general/2017/01/14/exploring_ecp.html). Sean $\mathbb{G}_1$ y $\mathbb{G}_2$ dos grupos de curvas elípticas de orden $p$, con un no trivial [mapeo bilineal](https://en.wikipedia.org/wiki/Bilinear_map) $e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$. Sea $g$ un generador de $\mathbb{G}_1$, y $h$ un generador de $\mathbb{G}_2$. Utilizaremos la notación $[x]_1 := x \cdot g$ y $[x]_2 := x \cdot h$, donde $x \in \mathbb{F}_p$.

## 1. Ceremonia o Trusted Setup

Antes de calcular cualquier compromiso KZG, se debe realizar una única trusted setup. Una vez completada, puede reutilizarse para comprometer y revelar tantos polinomios diferentes como se desee. La trusted setup funciona de la siguiente manera:

- Elija algún elemento de campo aleatorio $\tau \in \mathbb{F}_p$
- Sea $l \in \mathbb{Z}$ el grado máximo de los polinomios que queremos comprometer a
  - La trusted setup sólo permitirá compromisos con polinomios de grado $\leq l$
- Se calcula $([\tau^0]_1,[\tau^1]_1,[\tau^{2}]_1\ldots,[\tau^{l}]_1)$ y $([\tau]_2)$, y se dan a conocer estos valores públicamente.

Ten en cuenta que $\tau$ no debe ser revelado - es un parámetro secreto de la configuración, y debe ser desechado después de la ceremonia haya sido completada para que nadie pueda averiguar su valor.

Existen métodos establecidos para llevar a cabo trusted setups con suposiciones de confianza débiles (suposición de confianza 1-de-N) utilizando [multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC). Para más información sobre cómo funcionan las trusted setups, véase este [post](https://vitalik.ca/general/2022/03/14/trustedsetup.html) de Vitalik.

## 2. Compromiso con un polinomio

- Dado un polinomio $P(x) = \sum_{i=0}^{l} p_i x^i$
- Se computa y emite el compromiso $c = [P(\tau)]_1$.
- Aunque el committer no puede computar $P(\tau)$ directamente (ya que no conoce $\tau$), puede computarlo utilizando la salida de la trusted setup:
  - $[P(\tau)]_1 = [\sum_{i=0}^{l} p_i \tau^i]_1 = \sum_{i=0}^{l} p_i [\tau^i]_1$.

## 3. Probar una evaluación

- Dada una evaluación $P(a) = b$
- Se computa y emite la prueba $\pi = [Q(\tau)]_1$
  - Donde $Q(x) := \frac{P(x)-b}{x-a}$
    - Obsérvese que tal $Q(x)$ existe si y sólo si $P(a) = b$. Por tanto, la existencia de este polinomio cociente sirve como prueba de la evaluación.

## 4. Verificación de una prueba de evaluación

- Dado un compromiso $c = [P(\tau)]_1$, una evaluación $P(a) = b$, y una prueba $\pi = [Q(\tau)]_1$
- Se Verifica que $e(\pi, [\tau - a]_2) = e(c - [b]_1, h)$
  - Algo de álgebra muestra que esto es equivalente a comprobar que el polinomio cociente está correctamente formado en $\tau$: $Q(\tau) = \frac{P(\tau) -b}{\tau-a}$
    $$
    \begin{align*}
    & e(\pi, [\tau - a]_2) = e(c - [b]_1, h) \\ \iff
    & e([Q(\tau)]_1, [\tau -a]_2) = e([P(\tau)]_1 - [b]_1, h) \\ \iff
    &  Q(\tau) \cdot (\tau - a) \cdot e(g, h) = (P(\tau)-b) \cdot e(g,h) \\ \iff
    & Q(\tau) \cdot (\tau -a) = P(\tau) - b
    \end{align*}
    $$
  - El mapeo bilineal $e$ nos permite comprobar esta propiedad sin conocer el parámetro secreto de configuración $\tau$
- Una vez realizada esta comprobación, podemos concluir que (con una probabilidad abrumadoramente alta) el polinomio cociente está correctamente formado, y por tanto que la evaluación es correcta.

## Aprende Más

- [https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html](https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html)
- [https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html)
- [https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf](https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf)
