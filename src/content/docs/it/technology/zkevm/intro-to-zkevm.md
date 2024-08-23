---
section: technology
date: Last Modified
title: "Intro to zkEVM"
lang: "it"
permalink: "technology/intro-to-zkevm"
excerpt: "I rollup ZK sono ampiamente riconosciuti come la soluzione ideale per l escalation di Ethereum."
whatsnext: { "Panoramica di zkEVM": "/it/technology/zkevm/zkevm-overview" }
---

## Introduzione e motivazione

I rollup ZK sono ampiamente riconosciuti come la soluzione ideale per l'escalation di Ethereum. Ereditano la forte sicurezza di Ethereum Layer 1 e offre la finalità delle transazioni più veloce rispetto ad altre soluzioni Layer 2.

L'idea di base di un rollup ZK è quella di eseguire le transazioni off-chain e generare prove succinte della validità dell'esecuzione. Queste prove succinte possono poi essere pubblicate e verificate su Ethereum Layer 1. I rollup ZK migliorano la scalabilità poiché verificare la prova per un lotto di transazioni è molto più economico rispetto a rieseguire il lotto di transazioni.

I rollup ZK possono essere categorizzati in rollup specifici dell'applicazione e rollup di uso generale, in base ai tipi di transazioni che supportano. I rollup ZK specifici dell'applicazione sono progettati per insiemi specifici di transazioni, come pagamenti e scambi, o l'insieme di azioni di un giocatore per un gioco on-chain. In questi casi, i rollup devono solo generare prove che attestino la correttezza delle primitive supportate, come le transizioni di stato valide per i giocatori di giochi.

D'altra parte, i rollup ZK di uso generale supportano una gamma più ampia di transazioni e calcoli. Questi rollup utilizzano una macchina virtuale (VM) per eseguire codice assembly, e quindi generano una prova per mostrare che l'esecuzione è stata effettuata correttamente secondo le specifiche della VM. La VM particolare che un rollup ZK utilizza per i suoi calcoli differisce tra i vari progetti di rollup ZK. Alcuni progetti optano per costruire la propria VM, ottimizzata per una rapida generazione di prove. Altri progetti optano per utilizzare l'EVM, per una compatibilità ottimale con l'ecosistema Ethereum.

Scroll è un rollup ZK di uso generale che utilizza l'EVM per i calcoli off-chain. Il livello di esecuzione di Scroll funziona in modo simile a Ethereum: le transazioni vengono raggruppate in blocchi, che vengono poi eseguiti secondo le specifiche dell'[EVM](https://ethereum.org/en/developers/docs/evm/) (in realtà utilizziamo una [versione leggermente modificata](https://github.com/scroll-tech/go-ethereum) di [Geth](https://geth.ethereum.org/)). Ciò significa che gli utenti possono interagire con Scroll allo stesso modo in cui interagiscono con Ethereum. Significa anche che gli sviluppatori possono sviluppare su Scroll proprio come svilupperebbero su Ethereum.

Tuttavia, raggiungere la compatibilità con Ethereum con un rollup ZK rappresenta una sfida significativa: il rollup deve essere in grado di generare una prova che dimostri che un calcolo EVM off-chain è stato eseguito correttamente. Questo è essenzialmente ciò che un "zkEVM" è: **un zkEVM è un sistema che prova l'esecuzione corretta dell'EVM**.

L'EVM è stato originariamente progettato senza pensare ai rollup ZK, ed è risultato essere piuttosto impegnativo costruire uno zkEVM. Tuttavia, noi di Scroll non ci lasciamo scoraggiare dalla sfida, e abbiamo lavorato duramente in collaborazione con il team di [Ethereum Privacy and Scaling Explorations](https://appliedzkp.org/) per rendere lo zkEVM una realtà.

## Scopri di più

- [Blog post](https://scroll.io/blog/zkEVM) che introduce lo zkEVM
- [Panoramica della zkEVM](https://youtu.be/NHwd-gJ8xg4) - Haichen Shen
