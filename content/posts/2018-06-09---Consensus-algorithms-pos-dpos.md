---
title: Consensus Algorithms; Proof-of-Stake & Cryptoeconomics
date: "2018-06-09T11:21:50.121Z"
template: "post"
draft: false
slug: "/posts/consensus-algorithms-pos-dpos/"
category: "Technology"
tags:
  - "Blockchain"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/image-2.jpg"
---

In this second part of our series on consensus algorithms I'll be exploring the concepts behind **proof-of-stake**, an alternative way for a distributed network to come to an agreement on transaction history. Previously, we explored the [proof-of-work](http://www.nichanank.com/blog/2018/5/23/consensus-algorithms-pow) method that was, in the context of cryptocurrencies, originally implemented by bitcoin. To recap:

### THE GOAL OF ALL CONSENSUS ALGORITHMS IS FOR NODES IN THE NETWORK TO COME TO AN **AGREEMENT** ON THE CORRECT TRANSACTION HISTORY - WHAT THEY TAKE AS THE **SOURCE OF TRUTH**.

...and proof-of-stake, proof-of-authority, proof-of-weight, delegated proof-of-stake etc. are all another means to this end.

**TL;DR** in proof-of-stake, you lock up a portion of your funds ("stake" it) for a chance to add the next block to the chain. If you do this correctly, you get transaction fees in return. If you do this incorrectly, your funds will get "**slashed**" - i.e. you lose some or all of it. Your voting power corresponds to the amount of funds that you stake.

Before we get into the details, let's zoom out to look at the concept that gives the blockchain its unique properties in the first place:

CRYPTOECONOMICS AND THE BIG PICTURE
-----------------------------------

**Cryptoeconomics** is a combination of the terms **cryptography** and **economics** - it is a hybrid subject area that marries theories from the two fields. When designing a decentralized network using blockchains, it's crucial to get the cryptoeconomics right in order to make sure that history is tamper-proof and that the network is secure despite unreliable or ill-intentioned participants.

### 🔐CRYPTO-

**Hashing**, public/private key **signatures**, proofs are what allows for you to verify that someone indeed owns the amount they are trying to send, prove things that happened in the past, and that nobody can easily change existing data.

More on this in my previous post exploring [keys and transactions](https://nichanank.com/blog/2018/3/5/anatomy-of-a-bitcoin-transaction).

### -ECONOMICS

To motivate participants in the network to behave appropriately, there should be **incentives** and rewards for "correct" behavior. There may also be a punishment system for those who act against the interests of the network.

In blockchains, **code and economics are intrinsically interlinked.** When designing a consensus protocol, you want to align your cryptoeconomics such that **when an individual participant optimizes personal gain, they optimize the collective outcome of the system as well**.

![Screen Shot 2018-06-07 at 1.18.06 AM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528309137678-V67UI8UDHAJPF2TX4WQ7/ke17ZwdGBToddI8pDm48kCdOoUJvxYMFV3sIHvdOyktZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxlRZpno1vYFFHDUr87UbG3LgZ-uC_3d3O8-KyRKbHcb5tNqM4ZVIB9hFS5ySjxLxI/Screen+Shot+2018-06-07+at+1.18.06+AM.png?format=1500w)

In networks that utilize proof-of-work, miners use their hardware to solve a cryptographically hard problem for the chance to add a new block to the chain, aka a new entry in the ledger of transactions. The more computational power (**hashpower**) they have, the higher their chances of reaching the solution first. They spend electricity on this hashpower, but are incentivized to do so (correctly) because if they are successful in adding their block, they receive a block reward along with transaction fees. If they try to add an invalid block, they would have wasted electricity for nothing and thus are *de*centivized from doing so.

Because miners have a choice of which transactions to include in a block, we can consider the act of adding selected transactions to a block and broadcasting it to the network as **voting** - i.e. their broadcasted block is a vote on what the next entry to the ledger should be.

In bitcoin and other PoW networks, your **voting power is proportional to your hashpower** because the higher your hashpower, the higher your chances of submitting a vote that decides the next entry.

Examples of PoW networks: [Bitcoin](https://bitcoin.org/), [Ethereum](https://ethereum.org/), [Litecoin](https://litecoin.org/), [Dogecoin](http://dogecoin.com/)

On to proof-of-stake.

* * * * *

ORIGINS
-------

The **proof-of-stake** (PoS)protocol was [first suggested](https://bitcointalk.org/index.php?topic=27787.0) by a user called QuantumMechanic on the bitcointalk forum. Here, they actually outline the concept for proof-of-stake *and* **delegated** proof-of-stake, which we'll explore later on.

![QuantumMechanic 's proposal for proof-of-stake on  Bitcointalk.org  - interestingly, they haven't posted anything since that week in 2011.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528309877184-KPGDZOVTD5U813NUSFRT/ke17ZwdGBToddI8pDm48kPKbN_9WeVJR0EZ1biH1RPEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnFJcDTDGZ50L62RYr7pXuldZvwyfu0y-s9xhl2TbNdwnkXMwkja41oVeLihScldSFg/Screen+Shot+2018-06-07+at+1.30.37+AM.png?format=1500w)

[QuantumMechanic](https://bitcointalk.org/index.php?action=profile;u=241)'s proposal for proof-of-stake on [Bitcointalk.org](https://bitcointalk.org/) - interestingly, they haven't posted anything since that week in 2011.

**Proof-of-stake** networks do not rely on miners. Instead, they have **validators** whose voting power is proportional to the amount of cryptocurrency they "**stake**" on the network. What this means is that instead of using computational power, they lock up their funds as a deposit for a chance to add new blocks. The higher their stake, the higher the chances of being selected. If they are selected and the transactions they're proposing are valid, they receive the transaction fees for that block (*in most cases there are no block rewards in a PoS system*). 

*Some terminology: PoS validators are said to* ***mint****or* ***forge**** new blocks instead of "mine" them.*

### WHAT IS A POTENTIAL PROBLEM WITH THIS?

In a PoW-based network where miners are using their computational power to solve for a new block, it would make sense to spend all of your available computational power on mining **one** block at a time to maximize your chances of successfully finding the solution. If you try to mine multiple blocks at once (in order to reap rewards for all of them), you will have to split your hashpower amongst all of them, thus lowering your chances of finding the solution for any.

![Competing chains may temporarily occur when two miners produce a new block at the same time (this is one of the ways in which a  fork  happens). An incentives diagram for splitting your hashpower during temporary forks, from  Ethereum's PoS FAQ .](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528378334054-ZYVUE66C6LSYA69ONMEV/ke17ZwdGBToddI8pDm48kG_p5ylGpjoCJ_9w6QdHSg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyLmup8UC_gMVkxcg9YBbVT5ThAOkHKdFBp4OxMb7Hzl4p2GFSl_UTdynqXnxGUqII/Screen+Shot+2018-06-07+at+8.32.02+PM.png?format=1500w)

Competing chains may temporarily occur when two miners produce a new block at the same time (this is one of the ways in which a **fork** happens). An incentives diagram for splitting your hashpower during temporary forks, from [Ethereum's PoS FAQ](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ).

In early implementations of proof-of-stake networks e.g. [Peercoin](https://peercoin.net/), there are only rewards (transaction fees) for producing valid blocks but *no penalties* for simultaneously creating blocks on multiple chains. Therefore, a rational* validator may vote for multiple blocks at once to retrieve transaction fees from all of them. If these validators continue adding alternate blocks to multiple versions of the chain, the network may never reach consensus on what the true chain is. This flaw is commonly referred to as the **nothing-at-stake** problem.

****Rational*** *actors are not attacking the network per-se, but are merely behaving in a way that would maximize their profits.****Altruistic**** actors are those who are honest to the network and play by the rules.*

This is where the -economics in cryptoeconomics come into play. We can introduce a **penalty** for adding to multiple chains...

![An incentives diagram for voting on multiple chains on PoS, from  Ethereum's PoS FAQ . If you try adding blocks to both, you lose your stake. This creates a financial  de centive as long as the stake &gt; transaction fee rewards.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528380610822-O8N3WTS62BHQJ1WPG8T0/ke17ZwdGBToddI8pDm48kOzj3s0gKyEx_vuYgG2DbzxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx85-YGZwlTHmYZOBp__5aipBSoQgl_NX5HHeq8owqZRoq7DtkRf7DEDWbqIlfctkQ/Screen+Shot+2018-06-07+at+9.09.48+PM.png?format=1500w)

An incentives diagram for voting on multiple chains on PoS, from [Ethereum's PoS FAQ](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ). If you try adding blocks to both, you lose your stake. This creates a financial *de*centive as long as the stake > transaction fee rewards.

In this version of the proof-of-stake protocol, misbehaving nodes would lose some or all of their "security deposit". The protocol therefore deters individuals from adding invalid transactions or trying to add to multiple versions of the chain at once.

A summary:

![Blocks are appended to the chain by  validators , who stake their funds for a chance of being selected to add the next block to the chain. Their voting power on the block that should be added is proportional to the funds they " stake " on the network.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528472656954-1DNHK5PGWFP76SE6XD2N/ke17ZwdGBToddI8pDm48kCXvyNCQUTV_gvbUFcL1znwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcSjIfv_EKQFgw4zGC5_kdUIRB04GKubL9cdJD07R7JBBON4Hi10l4c0y4diBhGKu_/Screen+Shot+2018-06-08+at+10.43.52+PM.png?format=1500w)

Blocks are appended to the chain by **validators**, who stake their funds for a chance of being selected to add the next block to the chain. Their voting power on the block that should be added is proportional to the funds they "**stake**" on the network.

Examples of PoS networks: [Decred](https://www.decred.org/), [Ethereum](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ) (*work-in-progress*), [Peercoin](https://peercoin.net/)

* * * * *

DELEGATED PROOF-OF-STAKE
------------------------

Despite the naming similarities, **delegated proof-of-stake** (DPoS) is markedly different from the proof-of-stake we discussed above. Again, it still intends to serve the purpose of maintaining agreement of the truth across the network (consensus), but is yet another means of doing so..

DPoS was [first proposed](https://bitsharestalk.org/index.php?topic=1138.msg13602#msg13602) by [Dan Larimer](https://twitter.com/bytemaster7?lang=en), who implemented it in [Bitshares](https://bitshares.org/). In DPoS networks, there is a set of the nodes called **witnesses** whose job is to add new blocks to the blockchain. DPoS uses **reputation systems** and **real-time voting** to elect a panel of witnesses, who take turns adding new blocks. At every *t* time interval (e.g. every 10 minutes), the list of witnesses reshuffles and they take turns adding blocks again according to the new ordering.

There is a limit to how many participants can be active witnesses at a time, this varies depending on the network but it typically ranges between 20-100* witnesses. Anybody download a full node and help validate transactions - but to add blocks and receive rewards you'd have to be in the top N of the witnesses list, N is the limit of active witnesses for that network. The list is ranked by how many votes each witness receives...

**51 in Ark, 101 in Lisk, 21 in EOS.. in a lot of cases, stakeholders can also vote to change this.*

### 1\. ELECTION OF WITNESSES

Witnesses have a massive responsibility and are crucial to the integrity of the blockchain, therefore, they should have a proven track record before being considered. Those wishing to become witnesses can increase their reputation by make positive contributions to the network - this can come in the form of recruiting new members to the community, marketing, writing code, funding development, community management etc. and lobbying - like running an election campaign.

Stakeholders (everyone who owns tokens) allocate their tokens to witnesses as their vote. The more funds they have, the higher their voting power - they can vote for themselves or for multiple witnesses by splitting their funds across the multiple people.

**Note: I'm using "tokens" and "funds" interchangeably here. "Stakeholders" and "participants" are also interchangeable.*

![Screen Shot 2018-06-09 at 6.39.22 PM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528544417475-4Z1TW73W777AUFSJSHI7/ke17ZwdGBToddI8pDm48kAk2SCjLy-bpX-0_lSaXMcZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1US4IaZwAVuw-pRwg_37ylS7vTsmM_wbPbAzYxxf6Y1Qy7zs2yPjc1ECvpa5Zm_kMqw/Screen+Shot+2018-06-09+at+6.39.22+PM.png?format=1500w)

Ultimately, the witnesses should remain neutral and stakeholders are in control, as stakeholders lose the most when the network does not operate smoothly. Therefore, stakeholders can reassign their tokens to a different witness at any time. The bigger the network grows, the more competitive it will be to make it on the active witnesses list. Therefore, it is in the witness' best interest to be a valued member of the community to avoid getting replaced.

### 2\. BLOCK PRODUCTION

In PoS, stakers are psuedorandomly assigned to create and add the next block - the probability of being assigned being proportional to their locked up funds. In DPoS however, **witnesses take turns** creating and adding new blocks. Because they are already reputable members of the community and were voted in by stakeholders, witnesses have an equal chance of being selected. If a witness misses a block (e.g. because their server went offline), it is passed to the next active witness. This process happens extremely quickly.

![Screen Shot 2018-06-09 at 6.45.43 PM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1528544795352-9O44FG8TZ8EQD7VK5LJM/ke17ZwdGBToddI8pDm48kO_QmtMDz5OcJUkKcpjpPU97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcT8LvYshmA-XcEcsCIJX6N3LYKqG8ZjCubvREttAwOIMW9u6oXQZQicHHG1WEE6fg/Screen+Shot+2018-06-09+at+6.45.43+PM.png?format=1500w)

Since it is the witness' responsibility to validate transactions and produce blocks, it's important they have a stable server 24-7/365 and close to 100% up-time. The receive **transaction fees** or sometimes **block rewards** in return for their work. Witnesses can decide what they do with these rewards, whether it's redistributing their rewards as interest to their voters, funding marketing/development work in the ecosystem, or donate funds to charities. They can refine these plans with the community, and stakeholders can vote according to those they're happy with.

If a network limits its active witnesses to the top 100 nodes, ranked by how many votes they receive, there is an ongoing competition between those who wish to be a witness to increase or maintain their rankings in the network via good relations with the community and contributions to the ecosystem. If they don't do a good job, voters can easily "un-vote" them and reassign their tokens as votes to someone else. In this example, the 101th node will try to surpass the 100th person in votes to get on the active witnesses list.

Examples of DPoS networks: [BitShares](https://bitshares.org/), [Steem](https://steemit.com/), [EOS](https://eos.io/), [Lisk](https://lisk.io/), [Ark](https://ark.io/), [Tezos](https://tezos.com/)

* * * * *

DISCUSSION
----------

Consensus protocols come with their own benefits and tradeoffs. Whether that comes in the form of energy consumption, security, decentralization sacrifice, performance, or scalability, different teams have their reasoning for their implementations depending on use case and community input. Approaches to achieve consensus is an active area of research, each with various reputable advocates arguing for them.

Rather than displaying tradeoffs as "pros and cons", I will present some evaluations of the protocols we've discussed more as "points to consider". At face value, some of these may seem explicitly good or bad, but they do have second order implications that are IMO often overlooked:

### PROOF-OF-WORK

-   **High energy consumption**

    -   PoW networks pay for its security with energy. The more energy spent on maintaining the network, the more secure it is. Miners are competitive and are economically driven to find the most efficient means of retrieving energy, which arguably drives demand for sustainable methods of energy production - turning to renewable resources for example.

-   **Highly secure and censorship-resistant**

    -   As PoW blockchains grow, each block becomes exponentially more tamper-proof with age.

-   **Miner centralization**

    -   Economies of scale in mining operations means that if you have 100x more money, you might get 1000x more leverage/upside by mass-producing hardware and gain more hashing power - the relationship between hashpower and voting power is exponential.

-   Smaller PoW networks [may be more susceptible](https://www.crypto51.app/) to the 51% attack

### PROOF-OF-STAKE

-   **Less expensive, energy efficient** than PoW - as security does not depend on hashing power, there is no "arms race" to get the best hardware

-   **No economies of scale**

    -   100x more funds at stake means a 100x higher chance of being selected - system still favors those who already have significant capital

    -   The more someone stakes, the more money they risk losing, they are also illiquidating their own capital - the relationship between economic stake and voting power is linear

-   **Attacks are very expensive and impractical**

    -   To carry out a 51% attack would mean buying 51% of all the available tokens and then have all of this stake slashed, so all

    -   [**Stake grinding**](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#how-does-validator-selection-work-and-what-is-stake-grinding)**,** [**long range attacks**](https://blog.bitmex.com/complete-guide-to-proof-of-stake-ethereums-latest-proposal-vitalik-buterin-interview/)

### DELEGATED PROOF-OF-STAKE

-   **Energy efficient** - voting power doesn't depend on computational power

-   **Scalable** - fast and cheap

    -   Number of block producers (witnesses) is limited, blocks can be propagated through the network much more efficiently. Blocks can also be consistently and reliably produced in a much smaller time frame.

-   **Democracy via on-chain governance**

    -   Voting power can be allocated to other participants and votes can be changed at any time, creating liquid representative democracy

    -   While voting for witnesses is the primary governance use case, token holder voting can also be used to decide on network parameters (# witnesses), development funding, hard forks etc.

-   **Centralization of block production**

    -   Since the # block producers (witnesses) is explicitly limited, there are some barriers to entry by design as a newcomer cannot easily join and start adding blocks. It also requires participation and coordination by the community to curate the panel of witnesses by voting them in and out

    -   Unlike PoS, the power doesn't lie with those who stake the most coins, but instead with the the stakeholders who vote for their witnesses. Stakeholders can also vote on "slashing conditions" for misbehaving witnesses.

**Decentralization is typically measured by the number of block producers*

When talking about tradeoffs, it makes sense to consider these protocols relative to each other and not in vacuum. Proof-of-work is the original one implemented for blockchains, with subsequent protocols being proposed after we experience its drawbacks... and newer protocols developed still to address the drawbacks of these "second generation" protocols. In a space where individuals have an economic stake in the success of a project, people are inherently motivated to promote one approach over the other, despite rational arguments for and against both.

Cryptoeconomics and the study of consensus algorithms is quickly advancing and ever-evolving thanks to the increasing attention and time being devoted to the topic. In this nascent era of blockchains, it may be naive to completely dismiss projects in the name of scalability, decentralization, or security (the [scalability trilemma](https://github.com/ethereum/wiki/wiki/Sharding-FAQ#this-sounds-like-theres-some-kind-of-scalability-trilemma-at-play-what-is-this-trilemma-and-can-we-break-through-it)) because different use cases will give varying weights to these properties. It may be that the mass-adopted decentralized applications in 20 years will run on a hybrid of these early protocols or one yet to be discovered, its success owing to the research and experiments that is being done today.

Writing about consensus protocols has been incredibly insightful and to wrap this post off I'd like to make a prediction for the fun of it... My (current, non-expert) view is that there will be one planetary-scale PoW blockchain that is maximally secure, permissionless, and censorship resistant. Transactions will be slow and fees will be high, but this is justified by the security and reliability of the network. We'll have ecosystems running on smaller-scale PoW-PoS hybrids, and communities interacting on decentralized applications on DPoS with almost instantaneous transactions for every day use, governed by a dynamic panel of its most respected members. To the end user, all of these complexities will be abstracted away into simple interfaces like that of apps we use today. I'll probably expand on this later...

It will be interesting to see how the conversations shift on this topic and the emergence of new implementations as existing ones become more stress-tested. With such an interdisciplinary technology, the path to mass adoption is fertile grounds for debate and contention - so having strong opinions, but holding them loosely - is more important than ever in bringing us to a decentralized future.

Cheers.

🔸 BTC : 3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR

🔸 ETH : 0xdbF14da8949D157B57acb79f6EEE62412b210900

FURTHER READING & RESOURCES
---------------------------

1.  [[Ethereum](https://www.ethereum.org/)] [Proof of Stake FAQ](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ%20PoS%20FAQ%20ethereum)

2.  [[Vitalik Buterin](https://vitalik.ca/)] [A Proof of Stake Design Philosophy](https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51)

3.  [[Jon Choi](https://medium.com/@jonchoi?source=post_header_lockup)] [Ethereum Casper 101](https://medium.com/@jonchoi/ethereum-casper-101-7a851a4f1eb0)

4.  [[Jacob Horne](https://medium.com/@jacobscott)] [The Emergence of Cryptoeconomic Primitives](https://medium.com/@jacobscott/the-emergence-of-cryptoeconomic-primitives-14ef3300cc10)

5.  [[Zane Witherspoon](https://hackernoon.com/@zanewithspoon)] [A Hitchhiker's Guide to Consensus Algorithms](https://hackernoon.com/a-hitchhikers-guide-to-consensus-algorithms-d81aae3eb0e3)

6.  [[Andreas Antonopoulos](https://twitter.com/aantonop)] [Q&A Proof of Work, Proof of Stake](https://www.youtube.com/watch?v=3W_3AQrQEOM&t=4s)

7.  [[Bitshares](https://bitshares.org/)] [Delegated Proof of Stake](https://bitshares.org/technology/delegated-proof-of-stake-consensus/) [Consensus](https://www.nichanank.com/blog/2018/6/4/consensus-algorithms-pos-dpos#)

8.  [[Lisk](https://lisk.io/)] [What is Delegated Proof of Stake](https://lisk.io/academy/blockchain-basics/how-does-blockchain-work/delegated-proof-of-stake)

9.  [[Steemit](https://steemit.com/)] [A Full Steemit User's Guide to Steem Witnesses](https://steemit.com/steemit-guides/@pfunk/a-full-steemit-user-s-guide-to-steem-witnesses)

10. [[Dan Larimer](https://twitter.com/bytemaster7?lang=en)] [Explanation of DPoS & BFT](https://www.youtube.com/watch?v=Xs1dyZFhIr4) [Pt. 1](https://www.youtube.com/watch?v=Xs1dyZFhIr4),

11. [Dan Larimer] [DPoS Consensus Algorithm](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper) - The Missing White Paper

12. [[Multicoin Capital](https://multicoin.capital/)] [Models for Scaling Trustless Computation](https://multicoin.capital/2018/02/23/models-scaling-trustless-computation/)

13. [[Multicoin Capital](https://multicoin.capital/)] [DPoS Features and Tradeoffs](https://multicoin.capital/wp-content/uploads/2018/03/DPoS_-Features-and-Tradeoffs.pdf)

14. [[Nick Tomaino](https://thecontrol.co/@ntmoney?source=post_header_lockup)] [On the Scalability of Blockchains](https://thecontrol.co/on-the-scalability-of-blockchains-ec76ed769405)