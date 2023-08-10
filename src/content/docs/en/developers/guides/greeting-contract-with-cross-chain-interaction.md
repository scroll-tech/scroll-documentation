---
section: developers
date: Last Modified
title: "Greeting Contract with Cross-chain Interaction"
lang: "en"
permalink: "developers/guides/greeting-contract-with-cross-chain-interaction"
excerpt: "In this example, we will launch a dummy smart contract on either Sepolia or Scroll testnet and interact with it from the opposite chain."
---

In this example, we will launch a dummy smart contract on either Sepolia or Scroll testnet and interact with it from the opposite chain. We will be using the `ScrollMessenger` that is deployed on both Sepolia and Scroll testnet.

#### Target Smart Contract

Let’s start by deploying the target smart contract. We will use the Greeter smart contract for this example, but you can use any other contract. Deploy it to either Sepolia or Scroll testnet — L1 and L2 use the same API, so it’s up to you.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// This Greeter contract will be interacted with through the ScrollMessenger across the bridge
contract Greeter {
  string public greeting = "Hello World!";

  // This function will be called by executeFunctionCrosschain on the Operator Smart Contract
  function setGreeting(string memory greeting_) public {
    greeting = greeting_;
  }
}
```

We will now execute the `setGreeting` in a cross-chain way.

#### Operator Smart Contract

Now switch to the other chain and deploy the `GreeterOperator`. If you deployed the `Greeter` contract on L1, deploy the `GreeterOperator` from L2 or vice versa.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// The Scroll Messenger interface is the same on both L1 and L2, it allows sending cross-chain transactions
// Let's import it directly from the Scroll Contracts library
import "@scroll-tech/contracts@0.1.0/libraries/IScrollMessenger.sol";

// The GreeterOperator is capable of executing the Greeter function through the bridge
contract GreeterOperator {
  // This function will execute setGreeting on the Greeter contract
  function executeFunctionCrosschain(
    address scrollMessengerAddress,
    address targetAddress,
    uint256 value,
    string memory greeting,
    uint32 gasLimit
  ) public payable {
    IScrollMessenger scrollMessenger = IScrollMessenger(scrollMessengerAddress);
    // sendMessage is able to execute any function by encoding the abi using the encodeWithSignature function
    scrollMessenger.sendMessage{ value: msg.value }(
      targetAddress,
      value,
      abi.encodeWithSignature("setGreeting(string)", greeting),
      gasLimit,
      msg.sender
    );
  }
}
```

We pass the message by executing the `executeFunctionCrosschain` by passing the following parameters.

- `scrollMessengerAddress`: This will depend on where you deployed the `GreeterOperator` contract. If you deployed it on L1 use `TODO: 0x5260e38080BFe97e6C4925d9209eCc5f964373b6`. If you deployed on L2 use `TODO: 0xb75d7e84517e1504C151B270255B087Fd746D34C`.
- `targetAddress`: The address of the `Greeter` contract on the opposite chain.
- `value`: In this case, it is `0` because the `setGreeting`is not payable.
- `greeting`: This is the parameter that will be sent through the message. Try passing `“This message was crosschain!”`
- `gasLimit`: If you are sending the message from L1 to L2, around `5000` gas limit should be more than enough. If you are sending this from L2 to L1, you can pass `0` because this is an optional parameter.

After executing and confirming the transaction on both L1 and L2, the new state of `greeting` on the `Greeter` contract should be `“This message was crosschain!”`. Sending a message from one chain to the other should take around 20mins after the transactions are confirmed on the origin chain.

Congratulations, you now executed a transaction from one chain to the other!
