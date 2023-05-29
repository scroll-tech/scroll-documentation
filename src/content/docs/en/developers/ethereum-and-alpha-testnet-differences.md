---
section: developers
date: Last Modified
title: "Ethereum & Alpha Testnet Differences"
lang: "en"
permalink: "developers/ethereum-and-alpha-testnet-differences"
excerpt: "There are a number of technical details that differ between Ethereum mainnet's EVM and Scroll's modified design for a zkEVM. Below you can see those differences as they exist now."
---

import Aside from "../../components/Aside.astro"

There are a number of technical details that differ between Ethereum mainnet's EVM and Scroll's modified design for a zkEVM. Below you can see those differences as they exist now.

For open-source contributors and infrastructure builders, please contact our team for additional support.

<Aside type="note" title="note">
  For the average Solidity developer, these details won't affect your development experience.
</Aside>

## EVM Opcodes

| Opcode                      | Solidity equivalent | Ethereum Behavior                                                                                                                                                                                                                                                          | Scroll Behavior                                                                                                                                             |
| --------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLOCKHASH`                 | `block.blockhash`   | <p><strong>Input:</strong> <code>blockNumber</code> from top of the stack, and the valid range is [<code>NUMBER</code>-256, <code>NUMBER</code>-1].</p><p><strong>Output:</strong> hash of the given block number, or 0 if the block number is not in the valid range.</p> | Matches Ethereum, but limits the range of input `blockNumber` to be `NUMBER`-1.                                                                             |
| `COINBASE`                  | `block.coinbase`    | In Ethereum Clique, the eth address of the signer.                                                                                                                                                                                                                         | Returns the pre-deployed fee vault contract address. See [Alpha Testnet Contracts](/developers/alpha-testnet-contracts).                                    |
| `DIFFICULTY` / `PREVRANDAO` | `block.difficulty`  | After PoS, the previous block’s `randao` value.                                                                                                                                                                                                                            | Returns 0.                                                                                                                                                  |
| `SELFDESTRUCT`              | `selfdestruct`      | [Plans to deprecate and substitute with `SENDALL`](https://eips.ethereum.org/EIPS/eip-4758)                                                                                                                                                                                | <p>Disabled in the sequencer. Runtime error, same behavior as the INVALID opcode.<br /><em>Will change to adopt Ethereum’s solution in the future.</em></p> |

## State Account

### **Additional Fields**

We added two fields in the current `StateAccount` object: `PoseidonCodehash` and `CodeSize`.

```go
type StateAccount struct {
	Nonce    uint64
	Balance  *big.Int
	Root     common.Hash // merkle root of the storage trie
	KeccakCodeHash []byte // still the Keccak codehash
	// added fields
	PoseidonCodeHash []byte // the Poseidon codehash
	CodeSize uint64
}
```

### **CodeHash**

Related to this, we maintain two types of codehash for each contract bytecode: Keccak hash and Poseidon hash.

`KeccakCodeHash` is kept to maintain compatibility for `EXTCODEHASH`. `PoseidonCodeHash` is used for verifying correctness of bytecodes loaded in the zkEVM, where Poseidon hashing is far more efficient.

### CodeSize

When verifying `EXTCODESIZE`, it is expensive to load the whole contract data into the zkEVM. Instead, we store the contract size in storage during contract creation. This way, we do not need to load the code — a storage proof is sufficient to verify this opcode.

## Block Time

The Alpha Testnet aims for a constant block time of 3 seconds. This is shorter and more consistent than the 12 seconds used in the Ethereum under ideal conditions.

This was chosen for two reasons:

- Having faster, constant block time results in quicker feedback and a better user experience.
- As we optimize the zkEVM circuits in our testnets, even if we maintain a smaller gas limit per block or batch, we can still reach higher throughput than Ethereum.

## Future EIPs

We keep a close on eye on all emerging EIPs adopted by Ethereum and adopt them when suitable. If you’re interested in more specifics, reach out in [our community forum](https://community.scroll.io) or on the [Scroll Discord](https://discord.gg/scroll).

## Address Aliasing

#### Rationale behind address aliasing

Because of how the `CREATE` opcode functions, it is possible to create contracts that share the same address but different bytecode on different networks.

This breaks some trust assumptions since a contract that looks trustworthy on the L2 may have a malicious counterpart on the L1.&#x20;

To prevent this the value of the `msg.sender` and `tx.origin` can vary depending on how some contract was called. (From the L2 directly or through the bridge)

If a contract is called **from a contract on the L2** or **from an EOA** the functionality stays **the same as on Ethereum**.

- The value of `msg.sender` and the value of tx.origin will be the same at the top level of the transaction (The first contract that's called in the chain of calls)
- The value of `tx.origin` is going to be the address of the caller

If a contract is called **from a smart contract on the L1 through the bridge**, this is treated differently.

- The value of `tx.origin` is going to be calculated in the next manner:&#x20;
  - `tx.origin = L1ContractAddress + offset`
  - Where `offset=0x1111000000000000000000000000000000001111`
