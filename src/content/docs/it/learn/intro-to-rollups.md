---
section: learn
date: Last Modified
title: "Introduzione ai Rollups"
lang: "it"
permalink: "learn/intro-to-rollups"
excerpt: "I rollup sono la soluzione di scaling di layer 2 più predominante nell'ecosistema Ethereum."
whatsnext: { "Procedura del Rollup": "/it/technology/chain/rollup" }
---

## Cos'è un rollup?

I rollup sono la soluzione di scaling di layer 2 più predominante nell'ecosistema Ethereum, e sono considerati una [parte centrale](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) della roadmap di Ethereum.

Un rollup elabora batch di transazioni off-chain (cioè non sulla layer 1) e quindi pubblica i dati risultanti sulla catena (cioè sulla layer 1).

L'esecuzione di ogni transazione avviene off-chain e i nodi della layer 1 non devono rieseguirla. Questo consente un'elevata performance delle transazioni, senza compromettere la decentralizzazione della layer 1.

Per essere sicuro, un rollup deve dimostrare che il suo calcolo off-chain (l'elaborazione delle transazioni) è stato eseguito correttamente. Ci sono principalmente due meccanismi per dimostrare la validità del calcolo off-chain: le prove di validità e le prove di frode.

## Cos'è un optimistic rollup?

Un optimistic rollup è un rollup che utilizza prove di frode per affermare la validità dei suoi calcoli.

Le prove di frode sono un meccanismo che consente agli utenti di contestare e dimostrare l'invalidità di qualsiasi calcolo eseguito sulla L2. Se una prova di frode ha successo, la L2 può tornare a uno stato precedente e il calcolo non valido può essere corretto. Le prove di frode dipendono dal fatto che almeno una parte onesta controlli che le transazioni della L2 siano state eseguite correttamente.

## Cos'è un ZK rollup?

Un ZK rollup è un rollup che utilizza prove di validità per affermare la legittimità dei suoi calcoli.

Quando un ZK rollup esegue un batch di transazioni e pubblica lo stato risultante sulla L1, pubblica anche una prova di validità. Questa prova matematica dimostra che lo stato risultante è effettivamente lo stato risultante dell'esecuzione corretta del batch di transazioni.

Attualmente esistono diversi tipi di ZK rollup, definiti in termini generali come zkVMs (zk Virtual Machines) o zkEVMs (zk Ethereum Virtual Machines).

Gli zkVMs sono progettati da zero per funzionare bene con i circuiti ZK e richiedono flussi di lavoro di sviluppo diversi rispetto a un zkEVM. Alcuni esempi sono Starkware e Aztec.

Gli zkEVMs sono progettati per emulare l'EVM. Ci sono due tipi principali di zkEVMs: compatibili con bytecode e compatibili con linguaggio. Gli zkEVMs compatibili con bytecode emulano l'EVM a un livello molto basso, consentendo un'esperienza di sviluppo e utente quasi identica rispetto a Ethereum Layer 1. Gli zkEVMs compatibili con linguaggio compilano Solidity e altri linguaggi ad alto livello in diversi bytecode, il che può comportare cambiamenti nel flusso di lavoro. zkSync è lo zkEVM compatibile con linguaggio più popolare.

Scroll è compatibile con bytecode. Questo approccio è stato scelto perché porta alcuni vantaggi:

- Solidity, Vyper e Huff funzionano fin dall'inizio.
- Non è necessario rieseguire l'audit
- Eredita la maggior parte degli strumenti esistenti
- UX e DevX quasi identici a quelli di Ethereum.

Troverai ulteriori informazioni sull'approccio di Scroll nella sezione Tecnologia.

## Letture aggiuntive

- [An Incomplete Guide to Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [Scaling](https://ethereum.org/en/developers/docs/scaling/) - Ethereum Docs