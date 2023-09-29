---
section: learn
date: Last Modified
title: "El Problema de la Escalabilidad"
lang: "es"
permalink: "learn/intro-to-rollups"
excerpt: "La fuerte descentralización y seguridad de Ethereum se consigue a costa de sacrificar la escalabilidad: para garantizar que todos los nodos participantes puedan seguir el ritmo de la red, el rendimiento de ésta es limitado. Este límite se traduce en costos y latencias más elevados para los usuarios."
whatsnext: { "Intro a los Rollups": "/es/learn/intro-to-rollups" }
---

## El problema de escalabilidad de Ethereum

[Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-ethereum) es una blockchain de propósito general que soporta el despliegue y ejecución de [smart contracts](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-are-smart-contracts).

Una de las características que definen a Ethereum es su compromiso inquebrantable con la seguridad y la descentralización. Ethereum está diseñado para que ordenadores de todo el mundo (incluso los más baratos, como una [Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/)) puedan participar en la red, ejecutar copias locales de la blockchain y procesar nuevas transacciones.

Sin embargo, la fuerte descentralización y seguridad de Ethereum se consigue a costa de sacrificar la escalabilidad: para garantizar que todos los nodos participantes puedan seguir el ritmo de la red, el rendimiento de ésta es limitado. En última instancia, este límite se traduce en mayores costos y latencias para los usuarios.

## Soluciones de Escalabilidad

Las soluciones de escalabilidad de Ethereum tienen como objetivo aumentar el rendimiento de la red sin sacrificar la descentralización o la seguridad.

Existen principalmente dos tipos de soluciones de escalado: soluciones de escabilidad de capa 1 y soluciones de escabilidad de capa 2.

**La Capa 1** (o **L1**) intenta escalar la red modificando directamente la blockchain de Ethereum. El término "capa 1" se refiere aquí a la cadena de bloques principal de Ethereum. En general, es muy difícil diseñar soluciones de escalado de capa 1 que aumenten el rendimiento y, al mismo tiempo, preserven altos niveles de seguridad y descentralización. Por ello, los recientes esfuerzos de escalado se han alejado de las soluciones de capa 1 y se han orientado hacia soluciones de capa 2.

**La Capa 2** (o **L2**) de soluciones de escalado son redes que viven **en la parte superior** de la capa 1 de Ethereum - son esencialmente blockchains separadas que están "ancladas" a la blockchain subyacente de Ethereum de alguna manera. Estas redes de capa 2 generalmente pueden procesar transacciones a un ritmo mayor que la red de capa 1 subyacente, ya que no están sujetas a las mismas limitaciones. El mecanismo de "anclaje", cuyos detalles varían según la capa 2, permite a la red de capa 2 heredar las sólidas propiedades de seguridad y descentralización de la capa 1 de Ethereum.
