---
section: technology
date: Last Modified
title: "Introducción a la zkEVM"
lang: "es"
permalink: "technology/intro-to-zkevm"
excerpt: "ZK rollups are widely recognized as the ideal scaling solution for Ethereum."
whatsnext: { "Vista General de la zkEVM ": "/es/technology/zkevm/zkevm-overview" }
---

## Introducción y Motivación

Los rollups ZK son ampliamente reconocidos como la solución de escalado ideal para Ethereum. Heredan la fuerte seguridad de la capa 1 de Ethereum y ofrecen la finalidad de transacción más rápida en comparación con otras soluciones de capa 2.

La idea básica de un ZK rollup es ejecutar transacciones fuera de la cadena y generar pruebas de validez sucintas de ejecución. Estas pruebas sucintas pueden publicarse y verificarse en la capa 1 de Ethereum. Los ZK rollups mejoran la escalabilidad, ya que verifican la prueba de un lote de transacciones es mucho más barato que volver a ejecutar el lote de transacciones.

Los rollups ZK pueden clasificarse en rollups de aplicación específica y rollups de uso general, en función de los tipos de transacciones que admiten. Los rollups ZK para aplicaciones específicas están diseñados para conjuntos de transacciones particulares, como pagos y swaps, o por ejemplo, el conjunto de acciones de un jugador para un juego online. En estos casos, los rollups sólo necesitan generar pruebas que demuestren la veracidad de las primitivas soportadas, como las transiciones de estado válidas para los jugadores de un juego.

Por otro lado, los ZK rollups de propósito general admiten una gama más amplia de transacciones y cálculos. Estos rollups utilizan una máquina virtual (VM) para ejecutar código ensamblador y, a continuación, generan una prueba para demostrar que la ejecución se ha realizado correctamente de acuerdo con las especificaciones de la VM. La máquina virtual concreta que utiliza un ZK rollup para sus cálculos varía en función de los proyectos de ZK rollup que existen. Algunos proyectos optan por construir su propia máquina virtual, optimizada para la generación rápida de pruebas. Otros proyectos optan por utilizar la EVM, para una compatibilidad óptima con el ecosistema Ethereum.

Scroll es un ZK rollup de propósito general que utiliza la EVM para cálculos fuera de la cadena. La capa de ejecución de Scroll funciona de forma similar a la de Ethereum: las transacciones se agrupan en bloques y, a continuación, los bloques se ejecutan de acuerdo con las especificaciones [EVM](https://ethereum.org/en/developers/docs/evm/) (en realidad utilizamos una versión ligeramente [modificada](https://github.com/scroll-tech/go-ethereum) de [Geth](https://geth.ethereum.org/)). Esto significa que los usuarios pueden interactuar con Scroll del mismo modo que lo harían con Ethereum. También significa que los desarrolladores pueden trabajar con Scroll del mismo modo que lo harían con Ethereum.

Sin embargo, lograr la compatibilidad de Ethereum con un ZK rollup plantea un gran reto: el rollup debe ser capaz de generar una prueba que demuestre que un cálculo EVM fuera de la cadena se ha ejecutado correctamente. Esto es esencialmente lo que es un "zkEVM": **una zkEVM es un sistema que comprueba la correcta ejecución de la EVM**.

La EVM se diseñó originalmente sin tener en cuenta los ZK rollups, y resulta que es todo un reto construir una zkEVM. Sin embargo, en Scroll no nos dejamos intimidar por el reto y hemos estado trabajando duro en colaboración con el equipo [Ethereum Privacy and Scaling Explorations](https://appliedzkp.org/) para hacer realidad la zkEVM.

## Aprende Más

- [Blog post](https://scroll.io/blog/zkEVM) de la presentación de la zkEVM
- [Visión general de la zkEVM](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
