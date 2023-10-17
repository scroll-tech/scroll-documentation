---
section: learn
date: Last Modified
title: "Esquemas de Compromiso Polinómicos"
lang: "es"
permalink: "learn/zero-knowledge/polynomial-commitment-schemes"
excerpt: "Los Polynomial commitment schemea son un componente básico de los sistemas de pruebas de zero-knowledge."
whatsnext: { "Esquema de Compromiso KZG": "/es/learn/zero-knowledge/kzg-commitment-scheme" }
---

Los Esquemas de Compromiso Polinómicos son un componente básico de los sistemas de pruebas de zero-knowledge (así como de otros protocolos criptográficos).

Como su nombre indica, los esquemas de compromiso polinómicos son esquemas de compromiso en los que el objeto a comprometer es un polinomio. Estos esquemas también tienen una propiedad especial por la que una evaluación del polinomio puede verificarse con acceso únicamente al compromiso del polinomio.

## Esquemas de Compromiso

Un **[esquema de compromiso](https://en.wikipedia.org/wiki/Commitment_scheme)** es una primitiva criptográfica que implica a dos partes: un _committer_ y un _verifier_. El committer se compromete con un valor $v$ computando un compromiso $c$ y revelándolo al verifier. En un momento posterior, el committer puede revelar el valor original, y el verifier puede verificar que el compromiso corresponde a este valor revelado.

Los esquemas de compromiso seguros tienen dos características:

1. **Binding**: una vez publicado el compromiso $c$, el committer no debe ser capaz de encontrar algún otro valor $v'$ distinto de $v$ que también corresponda a $c$. Es decir, el compromiso $c$ vincula al committer a su valor original $v$.
2. **Hiding**: el verifier no debe poder obtener ninguna información sobre el valor original $v$ a partir del compromiso $c$. Es decir, el compromiso $c$ oculta toda la información sobre el valor original $v$.

## Esquemas de Compromiso Polinómicos

Un **esquema de compromiso polinómicos** es un esquema de compromiso en el que el committer se compromete con un polinomio $P(x)$ calculando un compromiso $c$. Como en los esquemas de compromiso normales, el committer puede revelar más tarde el polinomio original, y el verifier puede comprobar que el compromiso corresponde al polinomio revelado. Sin embargo, los esquemas de compromiso polinómico tienen una propiedad adicional: el committer puede probar evaluaciones particulares del polinomio comprometido sin revelar el propio polinomio. Por ejemplo, el committer puede probar que $P(a) = b$, y el verifier puede verificar dicha prueba utilizando sólo el compromiso $c$.

Los esquemas de compromiso polinómicos son extremadamente útiles para aplicaciones que usan zero-knowledge. Un prover puede utilizar un esquema de este tipo para demostrar que conoce un polinomio que satisface ciertas propiedades (por ejemplo, que pasa por un cierto punto $(a,b)$), sin revelar el polinomio subyacente.

Otra razón por la que los esquemas polinómicos son útiles es que el compromiso $c$ es generalmente mucho más pequeño que el polinomio que representa, y por lo tanto se puede considerar como una **compresión** del polinomio $P(x)$. La magnitud de la compresión depende del esquema concreto. Por ejemplo, en el esquema de compromiso polinómico KZG, un polinomio de grado arbitrariamente grande puede comprimirse hasta un compromiso consistente en un único elemento de grupo.

## Aprende Más

- [https://en.wikipedia.org/wiki/Commitment_scheme](https://en.wikipedia.org/wiki/Commitment_scheme)
- [https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment](https://learn.0xparc.org/materials/halo2/miscellaneous/polynomial-commitment)
