---
section: sdk
date: Last Modified
title: "Scroll SDK Services"
lang: "en"
permalink: "sdk/technical-stack/services"
excerpt: "The various components running to support the Scroll SDK."
---

_This covers the full list of items in the [values.yaml](https://github.com/scroll-tech/scroll-stack/blob/develop/charts/scroll-stack/values.yaml) file which allows for enabling or disabling of specific services. New to Scroll’s Architecture? Check out [this article](/en/technology/chain/rollup/) for more info._

- Anvil
  - Default local base chain for devnet deployments
- Blockscout
  - Block Explorer with Indexer and WebUI configured for the Scroll SDK chain
- Bridge History API
  - API used by frontends for reporting a user’s bridging history and generating withdrawal proofs for L2 → L1 bridge claims
- Bridge History Fetcher
  - An indexer that continuously collects all user bridging transactions
- Balance Checker
  - A simple service to track and monitor the balances of some operator accounts and contracts, e.g. fee vault, commit sender.
- Chain Monitor
  - A security service that short-circuits batch finalization if some invariants are not satisfied. Optional but recommended.
- Contracts
  - Scripts to deploy necessary chain contracts (rollup and bridge) on both L1 and L2
- Coordinator API
  - Allows Provers to register as being open for work and manages scheduling and storage of proofs.
  - _Note: This is disabled by default and requires ~20GB RAM to run._
- Coordinator Cron
  - A background job that monitors proving tasks for timeout, and marks batches (aggregation tasks) ready once all sub-proofs are ready
- Event Watcher
  - An Indexer that monitors rollup events on L1
- Frontends
  - Generic Web UIs for Rollup Explorer, Bridge, and basic chain links for setting up your wallet.
- Gas Oracle
  - A backend service that relays up-to-date fee information between L1 and L2 by updating the gas oracle contract on both layers.
- Grafana
  - Web UI for viewing metrics dashboards
- Rollup Relayer
  - A service that collects L2 blocks and packs these into chunks and batches. It is also responsible for sending DA (commit) and proof (finalize) transactions to L1.
- l2geth Signer
  - The `geth` node responsible for producing blocks (using Clique PoA)
- l2geth RPC
  - The `geth` node setup to be exposed to external RPC API consumers.
- l2geth Bootnode
  - The `geth` node dedicated to being a bootnode for helping sync additional follower nodes.
- Loki Stack
  - Log aggregation system.
- Blockscout Smart Contract Verifier
  - Service used by Blockscout for verifying smart contract source code matches deployed bytecode
  - _Currently Unsupported_
- RPC Gateway
  - A simple RPC load balancer that distributes requests among multiple l2geth RPC nodes.
- Postgres Database
  - Databased used across services to coordinate data and tools.
- Kube Prometheus Stack
- `db`
  - Allows configurations for a DB outside of the default postgres service included in the stack.
