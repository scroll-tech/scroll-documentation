---
layout: ../../../layouts/MainLayout.astro
section: gettingStarted
date: Last Modified
title: "Scroll 概述"
lang: "zh"
permalink: "docs/conceptual-overview/"
excerpt: "ZK Rollups and Scroll"
whatsnext: { "下一页": "/", "第二页": "/" }
metadata:
  title: "Conceptual Overview"
  description: "Metadata for social media and search results."
  image:
    0: "/files/ToDo:-image-file-name.png"
---

欢迎来到 Scroll 早期文档草稿。这个页面有很多我们从 Chainlink 文档中获取的样本内容，以便我们了解一个长页面的样子以及 MarkDown 解析器中的一些出色功能。

**向前跳过:**
如果你想立即接触代码，你可以跳过这个概述:

- [部署您的第一个智能合约](/getting-started/deploy-your-first-contract/): 如果您对智能合约不熟悉，可以在交互式的网页开发环境中部署您的第一个智能合约。
- [如果您对智能合约不熟悉，可以在交互式的网页开发环境中部署您的第一个智能合约](/getting-started/consuming-data-feeds/): 如果您已经熟悉智能合约，并且想学习如何创建 混合 智能合约，可以使用 Chainlink 数据订阅来获取链上资产价格数据。

<YouTube id="https://www.youtube.com/watch?v=rFXSEEQG9YE" />

## 什么是智能合约？什么是混合智能合约？

部署到区块链上的 智能合约 是一组可以无需第三方干预就能执行的指令。智能合约代码定义了它如何响应输入，就像任何其他计算机程序的代码一样

智能合约的一项有价值的功能是它们可以存储和管理链上资产（比如 [ETH or ERC20 代币](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)），就像你可以使用以太坊钱包一样。因为它们有像钱包一样的链上地址，所以它们可以做任何其他地址能做的事。这使得你能够在接收和转移资产时编程自动化操作。

智能合约可以连接到资产的现实世界市场价格，产生强大的应用。将智能合约与链下数据和服务安全地连接起来，就形成了 混合 智能合约。这是通过使用预言机来完成的。

## 智能合约是用什么语言编写的？

在以太坊和 EVM 链上编写智能合约最流行的语言是 [Solidity](https://docs.soliditylang.org/en/v0.8.7/)。它由以太坊基金会专门为智能合约开发创建，并且一直在不断更新。在以太坊和 EVM 链上编写智能合约的其他语言也存在，但 Solidity 是用于 Chainlink 智能合约的语言。

如果你曾经写过 Javascript、Java 或其他面向对象的脚本语言，Solidity 应该很容易理解。与面向对象的语言类似，Solidity 被认为是一种 合约 -导向的语言。

有些网络并不兼容 EVM，使用的智能合约语言不是 Solidity：

- [Solana](/solana/)

  - [用 Rust 编写 Solana 合约](https://docs.solana.com/developing/on-chain-programs/developing-rust)
  - [用 C 编写 Solana 合约](https://docs.solana.com/developing/on-chain-programs/developing-c)

## 智能合约是什么样子的？

智能合约的结构类似于 Javascript 中的类，但有一些不同。例如，以下的 `HelloWorld` 合约是一个简单的智能合约，它存储一个单一的变量，并包含一个更新该变量值的函数。

::solidity-remix[samples/Tutorials/HelloWorld.sol]

### Solidity 版本

每个 Solidity 文件必须有的第一件事就是 Solidity 版本定义。 `HelloWorld.sol` 合约使用的是版本 `0.8.7`，在合约中定义为 `pragma solidity 0.8.7`;

你可以在[这里](https://github.com/ethereum/solc-bin/blob/gh-pages/bin/list.txt/?target=_blank)查看 Solidity 编译器的最新版本。你也可能注意到兼容一系列版本的智能合约。

<!-- prettier-ignore -->
```solidity
pragma solidity >=0.7.0 <0.9.0;
```

这意味着这段代码是为 Solidity 版本 0.7.0 或该语言的更新版本编写的，但不包括版本 0.9.0。 `pragma` 选择编译器，定义了代码的处理方式。

### 命名合约

`contract`关键字定义了合约的名称，在这个例子中是`HelloWorld`。这类似于在 Javascript 中声明一个`class`。`HelloWorld`的实现在这个定义内部，并用大括号表示。

<!-- prettier-ignore -->
```solidity
contract HelloWorld {

}
```

### 变量

像 Javascript 一样，合约可以有状态变量和局部变量。**状态变量**是值被永久存储在合约存储中的变量。然而，**局部变量**的值只存在于函数执行的过程中。在 Solidity 中，你还可以使用各种类型的变量，如`string`，`uint256`等。查看[Solidity 文档](https://docs.soliditylang.org/en/v0.8.7/)以了解更多关于不同种类的变量和类型。

### 智能合约是什么样子的？

智能合约的结构类似于 Javascript 中的类，但有一些不同。例如，以下的 HelloWorld 合约是一个简单的智能合约，它存储一个单一的变量，并包含一个更新该变量值的函数。

::solidity-remix[samples/Tutorials/HelloWorld.sol]

Solidity 版本
每个 Solidity 文件必须有的第一件事就是 Solidity 版本定义。 HelloWorld.sol 合约使用的是版本 0.8.7，在合约中定义为 pragma solidity 0.8.7;

你可以在这里查看 Solidity 编译器的最新版本。你也可能注意到兼容一系列版本的智能合约。

在[这里](https://docs.soliditylang.org/en/latest/contracts.html#state-variable-visibility)了解更多关于状态变量可见性的信息。

### 构造器

对程序员来说另一个熟悉的概念是**构造器**。当你部署一个合约时，构造器在首次创建时设定合约的状态。

在`HelloWorld`中，构造器接受一个`string`作为参数，并将`message`状态变量设为该字符串。

<!-- prettier-ignore -->
```solidity
constructor(string memory initialMessage) {
  message = initialMessage;
}
```

### 函数

**函数**可以访问和修改合约的状态或调用其他外部合约上的函数。 `HelloWorld`有一个名为`updateMessage`的函数，该函数更新存储在状态中的当前消息。

<!-- prettier-ignore -->
```solidity
constructor(string memory initialMessage) {
  message = initialMessage;
}

function updateMessage(string memory newMessage) public {
  message = newMessage;
}
```

函数使用可见性修饰符来定义访问级别。在[这里](https://docs.soliditylang.org/en/latest/contracts.html#function-visibility)了解更多关于函数可见性的信息。

### 接口

**接口**是其他语言的程序员熟悉的另一个概念。接口定义函数，但不包括其实现，留给继承的合约自己定义实际的实现。这使得在合约中更容易知道要调用哪些函数。以下是一个接口的例子：

::solidity-remix[samples/Tutorials/Test.sol]

对于这个例子， `Test`合约函数中的`override`是必要的，因为它覆盖了`numberComparison`接口中包含的基本函数。合约使用`pure`而不是`view`，因为`Test`合约中的`isSameNum`函数不返回存储变量。

## "部署"是什么意思？

**部署** 一个智能合约是将代码推送到区块链的过程，此时它具有一个链上地址。一旦部署，代码就不能更改，并被称为*不可变的*。

只要地址已知，就可以通过接口、在[Etherscan](https://etherscan.io/)上或通过像[web3js](https://web3js.readthedocs.io/), [web3py](https://web3py.readthedocs.io/), [ethers](https://docs.ethers.io)等库调用其函数。合约也可以编写为与区块链上的其他合约交互。

## 什么是 LINK 代币？

LINK 代币是一种 ERC677 代币，它从[ERC20 代币标准](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)继承了功能，并允许代币转账包含数据有效载荷。它被用来支付节点运营商获取智能合约的数据，以及合约创建者要求的由节点运营商放置的押金。

任何处理 ERC20 代币的钱包都可以存储 LINK 代币。LINK 代币实现的 ERC677 代币标准仍然保留了所有 ERC20 代币的功能。

## 什么是 oracle？

**Oracles** 为智能合约提供了一个桥梁，使其能够依赖和采取行动的数据源。

Oracle 在促进智能合约功能的完全实现中起着关键作用。没有与现实世界条件的可靠连接，智能合约无法有效地服务于现实世界。
