---
section: learn
date: Last Modified
title: "Intro a los Rollups"
lang: "es"
permalink: "learn/intro-to-rollups"
excerpt: "Los rollups son la solución de escalado de capa 2 más predominante en el ecosistema Ethereum."
whatsnext: { "Proceso del Rollup": "/es/technology/chain/rollup" }
---

## ¿Qué es un rollup?

Los rollups son la solución de escalado de capa 2 más predominante en el ecosistema Ethereum, y se consideran una [parte central](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) de la hoja de ruta de Ethereum.

Un rollup procesa lotes de transacciones fuera de la cadena (es decir, no en la capa 1), y luego publica los datos resultantes en la cadena (es decir, en la capa 1).

La ejecución de cada transacción se realiza fuera de la cadena, y no es necesario que los nodos de la capa 1 vuelvan a ejecutarla. Esto permite un alto rendimiento de las transacciones, sin afectar a la descentralización de la capa 1.

Para que un rollup sea seguro, debe demostrar que su cálculo fuera de la cadena (el procesamiento de las transacciones) se ha realizado correctamente. Existen principalmente dos mecanismos para demostrar la validez del cálculo fuera de la cadena: las pruebas de validez y las pruebas de fraude.

## ¿Qué es un optimistic rollup?

Un optimistic rollup es un rollup que utiliza pruebas de fraude para afirmar la validez de sus cálculos.

Las pruebas de fraude son un mecanismo que permite a los usuarios cuestionar y demostrar la invalidez de cualquier cálculo realizado en el L2. Si una prueba de fraude se presenta con éxito, la L2 puede volver a un estado anterior y el cálculo no válido puede ser corregido. Las pruebas de fraude dependen de que al menos una parte honesta compruebe que las transacciones de la L2 se han ejecutado correctamente.

## ¿Qué es un ZK rollup?

Un ZK rollup es un rollup que utiliza pruebas de validez para afirmar la legitimidad de sus cálculos.

Cuando un ZK rollup ejecuta un lote de transacciones y publica el estado resultante en L1, también publica una prueba de validez. Esta prueba matemática demuestra que el estado resultante es efectivamente el estado resultante de ejecutar correctamente el lote de transacciones.

En la actualidad, existen múltiples tipos de ZK rollups, definidos en términos generales como zkVMs (zk Virtual Machines) o zkEVMs (zk Ethereum Virtual Machines).

Los zkVMs están diseñados desde cero para trabajar bien con circuitos ZK y requieren diferentes flujos de trabajo de desarrollo en comparación con un zkEVM. Algunos ejemplos son Starkware y Aztec.

Los zkEVMs están diseñados para emular la EVM. Existen dos tipos principales de zkEVMs: compatibles con bytecode y compatibles con lenguaje. Las zkEVM compatibles con bytecode emulan la EVM a un nivel muy bajo, permitiendo un desarrollo y una experiencia de usuario casi idénticos en comparación con Ethereum Layer 1. Los zkEVMs compatibles con lenguajes compilan Solidity y otros lenguajes de alto nivel en diferentes bytecodes, lo que puede resultar en cambios en el flujo de trabajo. zkSync es el zkEVM compatible con lenguajes más popular.

Scroll es compatible con bytecode. Se eligió este enfoque porque aporta ciertas ventajas:

- Solidity, Vyper y Huff funcionan desde el primer momento.
- No es necesario volver a auditar
- Se hereda la mayoría de las herramientas existentes
- UX y DevX casi idénticos a los de Ethereum.

Encontrará más información sobre el enfoque de Scroll en la sección Tecnología.

## Lecturas adicionales

- [An Incomplete Guide to Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [Scaling](https://ethereum.org/en/developers/docs/scaling/) - Ethereum Docs
