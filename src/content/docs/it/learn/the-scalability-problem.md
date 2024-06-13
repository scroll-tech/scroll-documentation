---
section: learn
date: Last Modified
title: "Il Problema della Scalabilità"
lang: "it"
permalink: "learn/intro-to-rollups"
excerpt: "La forte decentralizzazione e sicurezza di Ethereum sono raggiunte a discapito della scalabilità: per garantire che tutti i nodi partecipanti possano tenere il passo con la rete, le prestazioni sono limitate. Questo limite si traduce in costi e latenze più elevati per gli utenti."
whatsnext: { "Introduzione ai Rollups": "/it/learn/intro-to-rollups" }
---
## Il problema della scalabilità di Ethereum

[Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-ethereum) è una blockchain a uso generale che supporta il deploy e l'esecuzione di [smart contracts](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-are-smart-contracts).

Una delle caratteristiche che definisce Ethereum è il suo impegno incrollabile verso la sicurezza e la decentralizzazione. Ethereum è progettato in modo che computer in tutto il mondo (anche quelli più economici, come un [Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/)) possano partecipare alla rete, eseguire copie locali della blockchain e processare nuove transazioni.

Tuttavia, la forte decentralizzazione e sicurezza di Ethereum sono raggiunte a discapito della scalabilità: per garantire che tutti i nodi partecipanti possano tenere il passo con la rete, le prestazioni sono limitate. In definitiva, questo limite si traduce in costi e latenze più elevati per gli utenti.

## Soluzioni di Scalabilità

Le soluzioni di scalabilità di Ethereum mirano ad aumentare le prestazioni della rete senza sacrificare la decentralizzazione o la sicurezza.

Esistono principalmente due tipi di soluzioni di scaling: soluzioni di scalabilità di layer 1 e soluzioni di scalabilità di layer 2.

**Layer 1** (o **L1**) cerca di scalare la rete modificando direttamente la blockchain di Ethereum. Il termine "layer 1" si riferisce alla blockchain principale di Ethereum. In generale, è molto difficile progettare soluzioni di scaling di layer 1 che aumentino le prestazioni e, contemporaneamente, preservino alti livelli di sicurezza e decentralizzazione. Pertanto, gli sforzi recenti di scaling si sono allontanati dalle soluzioni di layer 1 e si sono orientati verso soluzioni di layer 2.

**Layer 2** (o **L2**) sono soluzioni di scaling che vivono **sopra** il layer 1 di Ethereum - sono essenzialmente blockchain separate che sono "ancorate" alla blockchain sottostante di Ethereum in qualche modo. Queste reti di layer 2 possono generalmente elaborare transazioni a un ritmo più elevato rispetto alla rete di layer 1 sottostante, poiché non sono soggette alle stesse limitazioni. Il meccanismo di "ancoraggio", i cui dettagli variano a seconda del layer 2, consente alla rete di layer 2 di ereditare le solide proprietà di sicurezza e decentralizzazione del layer 1 di Ethereum.