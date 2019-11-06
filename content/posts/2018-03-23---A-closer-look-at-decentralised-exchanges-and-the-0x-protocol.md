---
title: A Closer Look at Decentralized Exchanges & The 0x Protocol
date: "2018-03-23T15:00:00.121Z"
template: "post"
draft: false
slug: "/posts/a-closer-look-at-decentralised-exchanges-and-the-0x-protocol/"
category: "Technology"
tags:
  - "Blockchain"
  - "Decentralized Exchanges"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/image-2.jpg"
---

Cryptocurrency exchanges today are often thought and talked about merely as platforms to trade cryptoassets for profits' sake. However they will continue to be crucial for the ecosystem moving forward, serving as **marketplaces** on which we can exchange digital assets that can be utilized for various activities in our daily lives. As the token ecosystem matures, more use cases of the blockchain will come into fruition and we will start to see these cryptoassets for their utility beyond their price. For example, we may need to exchange the tokens we receive from [storing someone else's files](https://filecoin.io/) in our hard drives to pay for someone to [lend their GPU power](https://golem.network/) for our 3D renderings. Or pay electricity bills to the people who power our houses [using their solar panels](https://solarcoin.org/en/node/6)... Exchanges will be the lungs of our future with decentralised technology, and so it is important to address the vulnerabilities of current infrastructures for token exchange in order to ensure that a robust system is in place for the coming years.

The blockchain is often heralded as a technology that removes the need for trust. Yet hundreds of thousands, if not the majority of cryptocurrency traders today still need to place so much trust in exchanges to operate in a responsible, secure manner. Hackers are targeting these honeypots of digital assets and under-informed speculators are being tricked into giving away their private keys. Trades are halted when servers are down, and large orders aren't being filled due to low liquidity... 

For my first post that dives into a specific use case of the blockchain, I'm excited to be writing about **decentralised exchanges** addressing these problems, and the projects currently being implemented. I will begin with a quick overview of centralised/decentralised exchanges and then dive into the **0x project** - a decentralised exchange *protocol* that will serve as the public infrastructure for these dexs.

CENTRALISED VS DECENTRALISED EXCHANGES
--------------------------------------

**Centralised exchanges** are platforms and apps that enable us to buy, sell, and exchange cryptocurrencies against other cryptocurrencies or against fiat currencies (USD, EUR, JPY...). They are essential to the ecosystem today as they can act as fiat-cryptocurrency gateways for those looking to obtain and trade Bitcoin, Ethereum and other cryptocurrencies.

Most traders today utilise centralised exchanges thanks to their multi-functionality and ease of use. Some examples:

-   Fiat-cryptocurrency: [Coinbase](https://www.coinbase.com/) and [GDAX](https://www.gdax.com/) (USD, EUR), [Kraken](https://www.kraken.com/) (USD, JPY, CAD, GBP), [Bitstamp](https://www.bitstamp.net/) (EUR, GBP), [Gemini](https://gemini.com/) (USD), [Bithumb](https://www.bithumb.com/) (KRW)

-   Cryptocurrencies only: , [Bitfinex](https://www.bitfinex.com/), [Bittrex](https://bittrex.com/), [Poloniex](https://poloniex.com/), [ShapeShift](https://shapeshift.io/)

### THE GOOD

-   **Easy to use** and straightforward user experience. Users can set buy/sell orders, press 'Trade', and things just happen in the background

-   **Ease of access**: while fiat-crypto gateways require more authentication steps like KYC verification, the login and registration process is similar to signing up for other online accounts

-   Offers more **advanced trading functionalities** such as [margin trading](https://cryptopotato.com/bitcoin-altcoins-margin-trading-beginners/), market orders, limit orders, and stop orders

### THE NOT SO GOOD

-   **Risk of fund loss and theft**: you are giving the operators of centralised exchanges [full control of your cryptocurrency](https://blog.localethereum.com/centralised-exchanges-are-terrible-at-holding-your-money/) as you're giving over custody of your digital assets when you enter into trades or leave funds on an exchange.

    -   When you pool many thousands of people's cryptocurrency in a central location, it creates an enormous financial incentive to hack that custodian by any means necessary

    -   Uncertainty and trust involved during [**hard forks**](https://cointelegraph.com/news/bitcoin-exchanges-coinbase-bitfinex-issue-guidance-before-segwit2x-hard-fork)

-   **Need to trust** in the operators of the exchanges: that they are able to solve potential performance issues, prevent hardware failures, protect the funds, and alleviate latency problems

-   **Fragments global liquidity** into a few main marketplaces. There isn't a clear market leader in terms of volume, which leads to...

-   **Lack of liquidity**: Even at all-time-highs, volumes remain low compared to traditional markets

-   **Lack of transparency:** actual costs and processes of trading are opaque. Also subject to [regulatory risk](https://www.bloomberg.com/news/articles/2018-03-22/bitcoin-falls-after-report-that-binance-faces-warning-in-japan)

-   **Flood of speculators** in the market who are unaware of safe ways to manage their assets. Because of the low barrier to entry into the space, under-educated users are putting in their funds and getting tricked/hacked

![The home page of  Bittrex , a popular cryptocurrency-only exchange.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1521368608154-6UHQBSZJXMC22KJF0LIT/ke17ZwdGBToddI8pDm48kMWAdJynGOH0z8LBf8ijgUUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcwARbZld4NVoZZeHgtzrklIUVL41rUo1T6Opn7QirzwVd5k0sgZXOiYW6x8tvn4RG/Screen+Shot+2018-03-18+at+17.06.35.png?format=1500w)

The home page of [Bittrex](http://bittrex.com/), a popular cryptocurrency-only exchange.

**Decentralized exchanges** ('***dex***'s): leverage the blockchain technology to enable safer and more transparent trading. They enable users to remain in control of their funds by performing their critical operations on the blockchain.

Examples: [Etherdelta](https://etherdelta.com/), [CryptoBridge](https://crypto-bridge.org/), [Liqui](https://liqui.io/), [Paradex](https://paradex.io/), [RadarRelay](https://radarrelay.com/), [OpenRelay](https://openrelay.xyz/)

![Etherdelta  main user interface](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1521368650090-4VF5OFCH7YJBAD3FZE3H/ke17ZwdGBToddI8pDm48kIPPvEbXQ84boen7MHDQ1rsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW5OwUKhOIwbRyyDUjqcStVVczOvmtZcTxDa2meyS1uJUUT9eSfL593-9fWExQGjw/Screen+Shot+2018-03-18+at+17.06.48.png?format=1500w)

[Etherdelta](https://etherdelta.com/) main user interface

### THE GOOD

-   Trade occurs in a trustless, **peer-to-peer** fashion

-   Everyone that is participating in this trading activity **retain possession over their cryptocurrency at all times**

-   Assets are being moved between the two parties **trustlessly**, without any third party having access to their funds

### THE NOT SO GOOD (YET)

-   Many steps involved, complicated/intimidating UX - **not beginner-friendly**

-   Only **basic features** currently available

Decentralised exchanges are ultimately peer-to-peer marketplaces operating directly on the blockchain. They solve the main drawbacks of centralised markets as there isn't a single point of failure, which aligns them with what has made blockchains so powerful in the first place [2]. The custody of cryptoassets remains within each user's control. As a result, there is no honeypot for hackers in which funds are pooled.

* * * * *

THE MOTIVATION BEHIND 0X: A **PROTOCOL** FOR DECENTRALIZED EXCHANGES
--------------------------------------------------------------------

In late 2016, [Amir Bandeali](https://twitter.com/abandeali1) and [Will Warren](https://twitter.com/willwarren89) had been working on a tokenised derivatives project on the Ethereum blockchain when they realised that these tokenised derivatives would not be useful if there was nowhere to exchange them (this was before the days of [Etherdelta](https://etherdelta.com/)) - they soon switched gears and begun building their own for-profit decentralised exchange.

As the co-founders became more immersed in the Ethereum community, they found that a lot of project teams required **exchange functionality** for their tokens. Various teams had plans and proposals to build one-off implementations for their exchanges.

It soon became clear that instead of a general dex which attempted to meet everybody's needs, what the community really needed was a truly free and **public decentralised exchange *infrastructure* that anyone can plug into and use**. And so, the 0x team shifted towards repurposing their system towards a public dex infrastructure.

### AN OPEN PROTOCOL

By having 0x serve as an **open protocol** on which anyone can *create* their own for-profit decentralised exchange, we open up a single piece of infrastructure to a wide variety of different use cases. This saves teams the time and effort needed to build their one-off dex implementations from scratch, as well as create a **global liquidity pool** that builds on network effects.

![Official website](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1521827537988-DPDAH9JF12CO1RKI8U6H/ke17ZwdGBToddI8pDm48kHe0yn4hJAgueDgGtoSZuY0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dr9ww00z-yJqcpIzKdoqR8MOZ615YWXK2IZXN_gKdHO3CjLISwBs8eEdxAxTptZAUg/Screen+Shot+2018-03-24+at+12.51.44+AM.png?format=1500w)

[Official website](https://0xproject.com/)

0X IN A NUTSHELL
----------------

When trading on an exchange that runs on the 0x protocol, users begin by broadcasting their intent to enter into a trade in a **message** format. This "message" is a chunk of data with parameters such as: tokens they'd like to exchange, buy/sell price, expiration time, and whether or not they'd like to trade with a specific counter-party (point-to-point order) or leave it open to anyone (broadcast order).

They then package this data, [cryptographically sign it](http://www.nichanank.com/blog/2018/3/5/anatomy-of-a-bitcoin-transaction) and either send it to the counter-party as a message (P2P) or broadcast it to the network. **0x itself is a system of** [**smart contracts**](http://www.nichanank.com/blog/2017/9/26/ethereum-smart-contracts-and-tokens-101)** on the Ethereum blockchain**, broken into the:

-   **💼Core Business module** which...

    -   Accepts packets of cryptographically signed data, processes them, and allows trades to be settled on the blockchain and

    -   Authenticates cryptographic signatures, ensures that senders have sufficient funds to settle the trade and that the order hasn't already expired or filled

-   **☑️Governance module** which

    -   Allows the trade settlement module to be upgraded over time without requiring users to migrate to the new version or disrupt ongoing trades.

        -   It's extremely important that the system of smart contracts that businesses are plugging into **can** be updated without bringing the market to a halt (more on this later)

**Etherdelta has had to upgrade their smart contract 4 times. It's important to upgrade smart contracts as the blockchain technology stack is rapidly evolving. This process has to be as non-disruptive as possible*

When using 0x in its simplest form (**point-to-point trade**), a user can package, sign the data and send it to a specified person via SMS, email, Facebook message, or whatever means they want. The order can only be filled by the specified taker address. The counter-party just has to then take that piece of data and inject it into the 0x smart contract, which will move the tokens between the sender and their counter-party at the exchange rate that was specified without the need for trust.

However, people typically conduct large over-the-counter deals through an open exchange, where many buyers and sellers aggregate their liquidity, making it easy to find a counter-party that is offering the asset of interest at a specified price . The first dexs were using on-chain orderbooks, which meant that people were paying transaction fees to even initiate the order - this wasn't sustainable in the long term because you are losing value in the transaction process.

THE ROLE OF **RELAYERS**
------------------------

Relayers aggregate these cryptographically signed 0x trade orders and present them to the world in the form of an **orderbook**, hosted **off-chain**.[Off-chain](https://medium.com/@hackdomETH/on-chain-or-off-chain-1bef4238a3a0) orderbooks decrease trading costs but require a mechanism to match orders to their counter-parties, and this is where relayers come in. Since 0x orders are just chunks of cryptographically signed data, **a relayer's job is to host a database of orders** and sort them according to price, expiry time etc., and serve them to anyone that comes to the site looking for a counter-party. Once the parties have been matched, the trades are then **settled on-chain**.

***A relayer is therefore really a decentralized exchange that looks like a centralized one***. However since they are not responsible for the custody of assets nor trade execution, they aren't really acting as exchange but are instead *relaying* messages back and forth between people - hence the name 'relayers'. **Generally, relayers are for-profit entities that build their decentralized exchange as a product running on the 0x protocol**.

![From the  0x whitepaper](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1521570622307-I44ZXF6LRZ39UP10SPM9/ke17ZwdGBToddI8pDm48kBlJZkHnRfiOwa9mqjPwAFlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE93pbsRQ3fqswf4GhUMUaCd9lqoMnb7A5Gqr4AQLD_ZR926scO3xePJoa6uVJa9B4/Screen+Shot+2018-03-21+at+1.26.15+AM.png?format=750w)

From the [0x whitepaper](https://0xproject.com/pdfs/0x_white_paper.pdf)

### BUSINESS MODELS OF RELAYERS

We'll see competition between the different relayers which will be healthy for dex ecosystem as a whole. Etherdelta has been incredibly successful, but since dex *protocols* like 0x have lowered the barrier to entry, we'll see competition around:

-   **User experience** - if there are multiple teams competing for market share, one of the first challenges is providing great UX, everyone will benefit from the competitive approaches taken to achieve this.

-   **Transaction fees**,which will move towards economic equilibrium.

One of the big assumptions is that relayers will trade the same set of tokens. **There is not a finite number of tokens people are interested in trading**. This explosion of tokens that come into existence is going to continue and will trend towards infinity over the years [4]. Relayers will find a market niche and carve it out, there will probably be a few dominant relayers in a specific niche but hundreds of niches e.g. relayers that focus on real estate tokens, on prediction markets (elections, politics, sports, science etc.) **Each can tailor their product and the UX for specific markets.**

![Relayers currently building on 0x, from the  official website  - view the  full list](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1521826994895-PU9MJH01EHV3GLX0LGIK/ke17ZwdGBToddI8pDm48kAeK9JcbQoXM0Vj-rMnhja8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2didCrgJGvtXQGMgDmTF4PtEfeF4bzj2sJO9_XlMJuf7XCjLISwBs8eEdxAxTptZAUg/Screen+Shot+2018-03-24+at+12.42.47+AM.png?format=1500w)

Relayers currently building on 0x, from the [official website](http://0xproject.com/) - view the [full list](https://0xproject.com/wiki#List-of-Projects-Using-0x-Protocol)

CURRENT ISSUES AND MODELS FOR TRADING
-------------------------------------

When you create, sign a transaction, and broadcast it to the P2P network, that transaction isn't necessarily mined into a block straight away. The message has to propagate through the network and typically sits in a pending transaction pool ([mempool](https://99bitcoins.com/what-is-bitcoin-mempool/)) --- waiting to be mined into a block.

The transparent nature of the blockchain means that anyone can [examine](https://blockchain.info/unconfirmed-transactions) the unconfirmed transactions in the mempool. In the context of an exchange, this can be a drawback as other traders can use this public information to their own advantage. They can rebroadcast a similar or same transaction message but set a higher [gas price](https://myetherwallet.github.io/knowledge-base/gas/what-is-gas-ethereum.html) so that their trade will get mined into a block before yours -- this is called [**front running**](https://www.investopedia.com/terms/f/frontrunning.asp).

********Front running is an issue that isn't specific to decentralised exchanges, it is just something that people associate with dexs a lot today because it is one of the use cases of smart contracts in production right now.*

0x doesn't define the way that people can enter into a trade or the way that these orders are transported off-chain, there are currently two trading models in place, each with their trade-offs:

### **OPEN ORDERBOOK MODEL**

This model is the way relayers can facilitate exchange and host an orderbook, as presented in the [0x whitepaper](https://0xproject.com/pdfs/0x_white_paper.pdf) in February 2017

-   Anyone can generate signed orders and post it on a relayer's orderbook, which is like a post-it board on which anyone can see pending transactions, take it off and inject it into the 0x smart contracts

-   This model is **subject to front running** because the way the orders are specified allows anyone to fill them. Miners can arbitrarily arrange transactions into any order they want. Since miners can run their nodes however they want, they can also front run orders

-   If someone can see that you're attempting to fill the order, that the txn is in the pool, they can attempt to fill it by setting a higher gas price and jump in front of you [5]

### **MATCHING MODEL**

-   Every order that is sent to the relayer specifies that that relayer as the *only* entity as being able to fill the order and execute that trade

-   When this relayer gets orders on opposite sides of the market at the same price, they package these two orders together and inject them into the 0x smart contracts -- filling them synchronously and autonomously in a single transaction

-   This relayer is not only aggregating liquidity but also taking on the responsibility of trade execution. **In this model, miners and other traders *cannot* front run an existing order in a pending transaction pool** --- only the relayer is able to execute these trades

-   But the relayer *can* front run as have full control over the trade execution process --- **some trust involved there**

    -   Generally, these relayers are for-profit businesses who have reputations to uphold. Front running will be a bad idea for them if they want to continue to operate their business

There are various strategies relayers could use with varying degrees of trust. These models are **not custodial**, which is what matters the most. The 0x system is designed to be modular and extendable, there are models being explored that combines the of the openness of the open orderbook model with the strong trade execution fidelity of the matching model.

*In the long run, the end solution might be something like* ***zero-knowledge mining****, where you can't see transactions and their properties in the mempool, but can only prove that it will pay the miner's fees. [4]*

REGULATORY ISSUES
-----------------

Relayers are typically people who are running for-profit businesses. While cryptocurrency trading is still in a regulatory gray area, the pioneers are cognizant of this and employ good legal counsel to make sure they're operating in a legally compliant way.

### WHAT WOULD PREVENT UNREGISTERED PEOPLE FROM TRADING SECURITIES?

0x can be used to trade all sorts of [ERC20](https://en.wikipedia.org/wiki/ERC20) assets and there are currently no models in place to regulate private OTC trades. There are other projects exploring approaches to incorporate **KYC** (Know Your Customer) and **AML** (Anti Money Laundering) processes for the assessment of security tokens.

[Polymath](https://www.polymath.network/) and [Harbor](https://harbor.com/) are examples of projects creating **new token standards**  for trading [securities tokens](https://medium.com/@polymathnetwork/are-security-tokens-whats-next-for-blockchain-cb587337bc3c). These protocols implement [proof of process](https://proofofprocess.org/) by whitelisting Ethereum addresses of people who have gone through an off-chain KYC/AML procedure. Only people with those addresses are able to receive the token (that might be a security) and transfers to non-whitelisted addresses will fail. These protocols will be a layer underneath 0x that would prevent people from obtaining securities tokens if they hadn't gone through the [KYC/AML](https://hackernoon.com/kyc-aml-and-cryptocurrencies-4e4cf929c151) process.

### VULNERABILITIES WHEN USING A DEX?

There aren't many vulnerabilities that would be a systemic risk to everyone. It is hard for hackers to attack a dex for large catastrophic failures in the same way that they do centralized ones. Some users may get tricked into doing something with their private key, but that's more of a UX/UI issue that needs resolving. [4]

Ideally, you'll be using a [hardware wallet](https://www.ledgerwallet.com/) to trade on a dex, with your private key is very far removed from anyone on the internet. Every single action has to go through your wallet in a way where you can examine exactly what's happening.

GOVERNANCE AND ROLE OF THE ZRX TOKEN
------------------------------------

The [ZRX token](https://coinmarketcap.com/currencies/0x/) plays two roles:

-   Primarily as a **governance token** that allows the 0x team to upgrade the smart contracts over time without needing to migrate thousands of users over to a brand new pipeline, as this would bring the market of exchanges to a halt

    -   Since Ethereum smart contracts are immutable, to update a protocol developers must deploy a completely new smart contract that either forks the network or disrupts the protocol until users "opt-in" to the newest version

    -   A disruptive protocol update could invalidate all open orders on an exchange, and require each market participant to approve a new smart contract to access their balances

    -   Protocol tokens may be used to drive a **decentralised update mechanism that allows for continuous integration of updates** into the protocol while also protecting the protocol's users and stakeholders

-   Paid as **trading fees to relayers** who are hosting and presenting the orderbooks

The rationale behind using a token to pay fees (as opposed to just using Ethereum), is so that all stakeholders in the 0x ecosystem can participate in governance and voting. If only relayers hold tokens and vote, it will be unsustainable because their incentives do not necessarily align to the end users. **It's important to distribute governance across the ecosystem as a whole**.

**Voting is weighted on the amount of tokens you own**. There needs to be a way to soft fork on-chain to keep everyone on the same shared protocol. If the team pushes out changes in a centralized way, where some people decide to stay on the old version, we'll end up with the same problem of fragmented, silo'd exchanges.

There is a [placeholder governance module](https://github.com/0xProject/wiki/blob/master/smart-contracts/Architecture.md) that prevents the 0x team from doing malicious activities. This will eventually be replaced with a decentralised governance system that uses the ZRX token as the primary lever over which these protocol upgrades are approved/denied.

While the trading functionality is already in place, the 0x team is taking their time to build out a robust governance model as the long term success of the ecosystem depends on it.

### ARE *ALL* STAKEHOLDERSEQUALLY QUALIFIED TO ANALYZE AN UPGRADE AND DRIVE THE GOVERNANCE PROCESS?

Real world governance is a very challenging problem. Right now, the 0x team are collaborating with [Aragon](https://aragon.one/) team for research into [**liquid democracy**](https://medium.com/organizer-sandbox/liquid-democracy-true-democracy-for-the-21st-century-7c66f5e53b6f): the way that stakeholders in the ecosystem to delegate their voting power to someone that they deem capable to vote on their behalf. This will allow the people with expertise to voice their opinions and have sufficient voting power even without the monetary resources at their disposal.

CLOSING REMARKS
---------------

When it comes to dexs, one of the things I'm looking forward to the most is the emergence of these **niche marketplaces** for token exchange. The exchanges widely used today differ mainly in aesthetics and market prices, but there isn't really a clear boundary for what *types* of tokens Bittrex and Poloniex and Liqui offer, for example, and what specific *communities* they serve.

In an answer to why there probably won't just be one dominant dex where you can trade *everything*, the 0x founders made an interesting anecdote to [Reddit](http://reddit.com/) and its subreddits. Subreddits are communities within Reddit where people can talk about whatever subject it is they are interested in. The UX of each subreddit is customized to that community to *some* extent, yet you still can't fully tailor the experience for it to be *unique* from the other subreddits. You still need a platform that is fully customized for your needs. For example, vinyl collectors have a vibrant community on [/r/vinyl](http://reddit.com/r/vinyl) but they still need [Discogs](http://discogs.com/) to find and obtain records.

In the future, there will be exchanges that specialize in energy tokens, [non-fungible tokens](https://medium.com/crypto-currently/the-anatomy-of-erc721-e9db77abfc24), prediction market tokens (and even within this there will be those tailored to sports, politics, gaming etc.)... and these exchanges will **customize their UX to best serve that specific use case**. Therefore while there will be few dominant relayers in each niche, there will be many niches for token exchange - it's exciting to see what these marketplaces will look like.

Decentralised exchanges and the protocols they're built on will not only require programmatic robusticity but also a well-thought out user interface design and sustainable governance models. I truly believe that within the next few decades, our interaction with dexs will be as commonplace as purchasing goods via PayPal today. For now, it is important to educate ourselves and others about the technology to avoid being taken advantage of when we do explore and adopt these applications ourselves. At the very least I hope this post got you fractionally more intrigued in the blockchain 😊Until next time,

🔷 *Send BTC* - 3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR

RESOURCES & FURTHER READING
---------------------------

1.  [Why Decentralized Exchange Protocols Matter](https://medium.com/@FEhrsam/why-decentralized-exchange-protocols-matter-58fb5e08b320) - Fred Ehrsam

2.  [State of Decentralized Exchanges](https://media.consensys.net/state-of-decentralized-exchanges-2018-276dad340c79) - Nathan Sexer

3.  [0x whitepaper](https://0xproject.com/pdfs/0x_white_paper.pdf)

4.  [Epicenter episode](https://www.youtube.com/watch?v=dXdok5GLVUc&t=1s) with Will Warren & Amir Bandeali, co-founders of 0x

5.  [Unchained episode](http://unchainedpodcast.co/will-warren-of-0x-on-why-decentralized-exchanges-are-the-future) with Will Warren

6.  [0x guide](https://blockonomi.com/0x-guide/) from Blockonomi

7.  [Liquid Democracy](https://medium.com/organizer-sandbox/liquid-democracy-true-democracy-for-the-21st-century-7c66f5e53b6f) - [Dominik Schiener](https://twitter.com/DomSchiener)

8.  TechCrunch [article](https://techcrunch.com/2018/02/24/liquid-democracy-uses-blockchain/) about voting on liquid democracy