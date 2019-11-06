---
title: Privacy in Crypto - Intro to MimbleWimble & Grin
date: "2019-02-23T21:25:20.121Z"
template: "post"
draft: false
slug: "/posts/privacy-in-crypto-intro-to-mimblewimble-amd-grin/"
category: "Technology"
tags:
  - "Blockchain"
  - "Privacy"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/image-2.jpg"
---

One of the great things about being in the crypto space is the ability to experience and witness revolutionary ideas being proposed, tested, and evolve in real time. I'm not talking about the ICO shills, but truly innovative open protocols that leverage cryptographic primitives to enable us to transact in a more private and decentralized manner.

The industry is filled with personalities with all sorts of technical, financial, and legal backgrounds who often clash on ideologies on what the future of money should look like. Most are known persons with existing reputation, but once in a while, anonymous, mysterious actors appear completely out of nowhere to make game-changing contributions to the space.

We've seen this with the infamous Satoshi Nakamoto and his/her/their Bitcoin whitepaper in 2009. And today, we are seeing the advancement of an exciting new, privacy-preserving blockchain protocol called MimbleWimble, the history and concepts of which I will explore here.

HARRY POTTER AND THE HISTORY OF MIMBLEWIMBLE
--------------------------------------------

🤐In late 2016, a pseudonymous character named Tom Elvis Jedusor showed up on the bitcoin developers' chatroom and posted a tor link, which hosted a single file named [MIMBLEWIMBLE](https://download.wpsoftware.net/bitcoin/wizardry/mimblewimble.txt), outlining a new design for a privacy-preserving, massively prunable blockchain. Tom Elvis Jedusor, as some may recognize, is the name of Voldemort's given name in the French Harry Potter books. Diehard fans will also recognize MimbleWimble as the spell that ties the target's tongue in a knot, [preventing coherent speech](https://harrypotter.fandom.com/wiki/Tongue-Tying_Curse). Tom Elvis Jedusor to this date has never logged into the chatroom again. Here is Tom's first and only post:

![Screen Shot 2019-02-24 at 2.00.00 AM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550948590214-FFB465241SSQ9NE1OVAJ/ke17ZwdGBToddI8pDm48kPOdIH1zTnq6vSTl1elu2zwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2droGBYRy5N56_SIGlXoPfmgdXSIaZLc1EOUBMgbEI7OXCjLISwBs8eEdxAxTptZAUg/Screen+Shot+2019-02-24+at+2.00.00+AM.png?format=1500w)

During the weeks following, cryptography experts examine MimbleWimble's trust model and quickly came to recognize its legitimacy. Cryptographers [Andrew Poelstra](https://www.weusecoins.com/andrew-poelstra/) and Avi Kulkarni soon develop a "**sinking signatures**"extension to improve the protocol's scaling properties.

A while later, a character named Ignotus Peverell (the original owner of Harry's invisibility cloak) appeared on the chatroom and announced a project to implement the MimbleWimble protocol. More Harry Potter characters, including Seamus Finnigan and Moaning Myrtle, later arrived to further [add to the project](https://github.com/mimblewimble/grin/graphs/contributors). This MimbleWimble implementation is called Grin. Before we can dive into that, let's look at the protocol itself...

WHAT IS MIMBLEWIMBLE?
---------------------

MimbleWimble is a blockchain-based ledger designed to bring strong privacy and confidentiality guarantees. Its implementation is very different from Bitcoin in that it does not store transaction details that could be used to trace specific txns back to an entity. A reminder of how Bitcoin's (UTXO-based*) transactions work...

A **transaction** contains inputs and outputs:

-   All inputs into a transaction must be spent

-   Inputs are **unspent outputs** from a previous transaction.

-   Outputs will be *unspent* (i.e. still **spendable**) until they are used in a new transaction

![The wallet software automatically aggregates various txn inputs that add up to construct the desired output amount. For example, if you have been sent $5, $2, and $10 on separate occasions, the wallet will decide how to best use these  unspent  input to construct an outgoing transaction worth $15.  Image source:  Bitcoin whitepaper](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550726081542-T6KDDMH120LPUZNKH0UL/ke17ZwdGBToddI8pDm48kOz4mw4Z_YLtV5tQWw1AnNNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIbGO9HaFRjNeE7zfFOdMMjpreCW577X64nqiu7Ode_Yk/image-asset.png?format=1500w)

The wallet software automatically aggregates various txn inputs that add up to construct the desired output amount. For example, if you have been sent $5, $2, and $10 on separate occasions, the wallet will decide how to best use these *unspent* input to construct an outgoing transaction worth $15.

Image source: [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

The inputs of a transaction become the **spendable outputs** of a subsequent transaction in later blocks. To sync with the Bitcoin network, a node must verify that all transactions are valid by replaying *all* transactions starting from the genesis block to see if each txn outputs equal its inputs (minus mining fees). Because of this, the blockchain has to preserve individual transaction data -- making it quite memory intensive.

*UTXO = unspent transaction output

### JOINING THE NETWORK AND VERIFYING TRANSACTIONS

🔑Since you need the private key to produce a digital signature, and the digital signature to make a transaction, **access to the private key is the equivalent of coin ownership**. If someone gets a hold of your private keys they have just as much control over the funds as you do. This is why it's so important to keep your private keys safe and secret. A diagram of how Bitcoin transactions are linked:

![Image source:  Bitcoin whitepaper](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550548154985-DW9PD6S13KU0QZGC3Q6Q/ke17ZwdGBToddI8pDm48kBfRfcUYsjKUciDw2WdsnO8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dj4wX6PtS9kXwVG5Vr1CLwa5xMgU_j4Ntx-wmw2opCUOCjLISwBs8eEdxAxTptZAUg/Screen%2BShot%2B2018-03-10%2Bat%2B3.31.56%2BPM.png?format=1500w)

Image source: [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

"Bitcoin"s are ultimately transaction outputs sent to an address associated with a **public key.** The person who holds its corresponding *private* key (i.e. the recipient) now has the rights to spend that Bitcoin in a subsequent transaction. The **current transaction input is a reference to a previous transaction output** -- thus, you can't create and spend bitcoins out of nowhere. Nodes are working to verify that:

-   The **inputs** of the transaction are **unspent**

-   Sum of inputs is **greater than or equal to** sum of outputs

    -   Individual transaction input/output values are visible and nodes can validate a transaction by checking inputs and outputs

-   The ScriptSig successfully unlocks the previous ScriptPubKey --- meaning that the person holding the private key signing to authorize the current transaction has, at some point, been the recipient of the bitcoins they are trying to spend.

Each input is an output from a past transaction. For each input there is a distinct signature (scriptsig) which is created in accordance the past-output that it is spending (scriptpubkey). [17]

![Every input has a key (" ScriptPubKey ") associated with it, along with a signature (" ScriptSig ") for a transaction with that key.   Image source : Programming Bitcoin by Jimmy Song](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550319920471-9GFRWWGBEG3D0KWJWFUC/ke17ZwdGBToddI8pDm48kJCRYvs0R00UqLqiqBfL4ilZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHNCf3S-0G0OHKQM53KroOm3QsS_2mEtt8zraANqZjY0rRBW_h4VpY7Sfr3yg3_3os/Screen+Shot+2019-02-14+at+2.28.01+AM.png?format=1000w)

Every input has a key ("*ScriptPubKey*") associated with it, along with a signature ("*ScriptSig*") for a transaction with that key.

[Image source](https://github.com/jimmysong/programmingbitcoin/blob/master/ch07.asciidoc): Programming Bitcoin by Jimmy Song

You can learn about bitcoin transactions in detail in my [previous post](https://www.nichanank.com/blog/2018/3/5/anatomy-of-a-bitcoin-transaction).

The MimbleWimble network, like Bitcoin, is one in which users may join or leave the system at any time in a decentralized, permissionless manner. Upon (re)joining the network, anyone should be able to determine the current network state and verify that it is the outcome of valid state transitions - without having to trust any third parties.

### CRYPTOGRAPHIC PRIMITIVES FOR MIMBLEWIMBLE

To understand how privacy is achieved on MimbleWimble, we take a look at **confidential transactions** and **Coinjoin** -- proposed strategies to enhance privacy on bitcoin.

[**Confidential transactions**](https://people.xiph.org/~greg/confidential_values.txt) allow you to encrypt transaction values and cryptographically verify that the outputs and inputs add up to zero *without* having to know the amounts itself. Verifiers only care about whether the sum going in equals the funds going out. They can do so without knowing the specific values involved using something called **Pedersen commitments**. [4]

[**CoinJoin**](https://en.bitcoin.it/wiki/CoinJoin)is a [scheme proposed](https://bitcointalk.org/index.php?topic=279249.0) by Gregory Maxwell. This technique allows us to join multiple transaction inputs together and route the appropriate values to their destinations without knowing exactly who paid whom how much. This protocol involves *N* users agreeing on a uniform output size and provide inputs amounting to that size. The users then all sign the transaction, which then could be transmitted. [16']

![This coinjoin implementation is  interactive  as everybody who is transacting has to consent to it as per the protocol. If Alice wanted to make a coinjoin payment, she can find someone else who also wants to make a payment (e.g. Bob) and they can make a joint payment together. Externally, it is unclear who paid Ted and who paid Carol.   Image source](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550348086607-HX3XTQWK1W2YGC7TNVZQ/ke17ZwdGBToddI8pDm48kGTE-TMl8iUx1EZ-qT1eZ4xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIVLVJFOEmq19mmGmHWFqmTSIMBnQk1CsGdjQ8-ynhwWc/coinjoin.png?format=1500w)

This coinjoin implementation is **interactive** as everybody who is transacting has to consent to it as per the protocol. If Alice wanted to make a coinjoin payment, she can find someone else who also wants to make a payment (e.g. Bob) and they can make a joint payment together. Externally, it is unclear who paid Ted and who paid Carol.

[Image source](https://wiki2.org/en/CoinJoin)

Alice and Bob's signatures for their respective inputs are **completely independent** of one another. They can agree on the set of inputs to spend, the set of outputs to pay to, and then separately sign a transaction and later merge their signatures. The transaction will not be accepted by the network unless both Alice and Bob's signatures are provided. They do not have to trust each other in order to participate in a coinjoin transaction as each party has to consent to it themselves.

### HOW THESE ARE APPLIED TO PRESERVE PRIVACY (AND SPACE) ON MIMBLEWIMBLE

So, a blockchain is simply a chain of blocks containing a list of transactions. The public blockchains that we've seen so far (e.g. Bitcoin and Ethereum) exposes the sender and receiver's addresses for each txn as well as their amounts. Nodes can use this information to verify that there is no unexpected inflation of coins, no [double spends](https://bitcoin.stackexchange.com/questions/4974/what-is-a-double-spend).

How do we preserve this verifiability withoutrevealing specific transaction details? MimbleWimble does so by extending the ideas behind coinjoin and confidential transactions for the *entire* set of transactions within a block. MimbleWimble transactions contain:

-   **Inputs**: references to old outputs

-   **Outputs**: confidential transaction outputs - group elements which blind and commit to amounts

    -   Along with a proof that the encrypted output does not represent a negative value ("**rangeproof**")

-   **Kernels** (excess): the difference between outputs and inputs of that block, plus the **signatures** of all transacting parties in that block (for authentication and proof of non-inflation).

In MimbleWimble, we want to verify that

```
sum of inputs - sum of outputs - mining fee = kernel
```

Instead of making each transaction input and output values public, MimbleWimble aggregates all the transacting parties and verifies the entire sum instead of *each* signature. We calculate **sum of inputs - sum of outputs** to end up with a multi-signature "**kernel**" that was authorized by everybody involved in that block of transactions - the owner of every input and the owner of every output. This means we don't have store individual addresses and amounts on the blockchain. Two transactions which can be merged into a block to form one, removing all intermediary information. [8]

![This diagram is based off of Andrew Poelstra's  presentation  on MimbleWimble.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550931513328-2EQTVTHSJ78S3KLS1VGF/ke17ZwdGBToddI8pDm48kNxhWDl0kD1NJi9yZBekolYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dse4q49O8hU1Bx786RzO5kVRHzgBbdovZDhWVcBfiwJECjLISwBs8eEdxAxTptZAUg/Screen+Shot+2019-02-23+at+9.17.50+PM.png?format=1500w)

This diagram is based off of Andrew Poelstra's [presentation](https://cyber.stanford.edu/sites/g/files/sbiybj9936/f/andrewpoelstra.pdf) on MimbleWimble.

So if Bob sends 1 Bitcoin to Alice who then sends 1 BTC to Carol, the end result would be as if Bob sent 1 BTC to Carol. But since Alice's signature is preserved in the excess, it is provable that this transaction did not take place without Alice's consent.

If we zoom out and extend this idea to the entire blockchain, we can get a better idea of which information is preserved and which can be pruned away:

![Only  unspent outputs ,  aggregated signatures  and new currency generation ( coinbase ) are stored on the blockchain, saving huge amounts of space  This diagram is based off of Andrew Poelstra's  presentation  on MimbleWimble.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550934071906-S1G2437QHQ17IHGKTH3O/ke17ZwdGBToddI8pDm48kLKblPbT2O-kgWfusDmuUrB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm2_YXWcRX3rD8JXD-nfUwRY2rsIy7azWz3KhFCoTS5E64qq8mRDu9PjT5aNwuXtAj/Screen+Shot+2019-02-23+at+10.00.52+PM.png?format=1500w)

Only **unspent outputs**, **aggregated signatures** and new currency generation (**coinbase**) are stored on the blockchain, saving huge amounts of space

This diagram is based off of Andrew Poelstra's [presentation](https://cyber.stanford.edu/sites/g/files/sbiybj9936/f/andrewpoelstra.pdf) on MimbleWimble.

This is massively space and time-saving when someone wants to sync with the blockchain for the first time. In Bitcoin this can take days, because what the node has to do is build the blockchain from scratch, verifying that every transaction from the first ever one in 2009 until today is valid.

Because of the differences in MimbleWimble's blockchain design and that of Bitcoin, integrating it as a feature on Bitcoin is a very difficult task. However, we could experiment with it as a sidechain to Bitcoin. One of the hinderances to backward-compatibility is the fact that MimbleWimble transactions are *scriptless* - meaning that it does not support the Script programming language that Bitcoin uses to construct and verify transactions. Having a scripting language is useful because you can extend other features on the blockchain, the downside being lower privacy. Essentially, MimbleWimble puts privacy first at the expense of all other features. [9]

Despite the difficulty of building MW on Bitcoin right away, there is consensus that the protocol is worth experimenting with. Thanks to some Harry Potter characters, we have a live implementation of the MimbleWimble protocol on the mainnet...

😁GRIN
------

In Grin, there are no addresses, no amounts, and 2 transactions which "spend" one another can be merged to form one - with all intermediary information removed. A Grin block looks just like one big transaction and **original associations between inputs and outputs are not preserved on the blockchain**. Unless you directly participated in the transaction, all inputs and outputs look like random pieces of data:

![Information on block #53132 on  GrinExplorer](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550949069387-S0TXBCE9OOK2PFNEUH2G/ke17ZwdGBToddI8pDm48kApTBBCQPQgWDu2Q6xNhrUV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW0sq80I-LGeDvNrGcE6IQsFYG1r3PwPBqi6aUJ9GTDTG6v6ULRah83RgHXAWD5lbQ/Screen+Shot+2019-02-24+at+2.10.22+AM.png?format=1500w)

Information on block #53132 on [GrinExplorer](https://grinexplorer.net/block/000010eb58c75cfa8d11f0feec8c97542522133bd0ab0bf5156f91fb0573543e)

Transactions in this block, plus its kernels:

![Inputs are  Pedersen commitments  which are references to previous outputs, there are also no identifiable addresses. To an observer this is indistinguishable from random pieces of data.  There are  no visible amounts  and transactions are aggregated - making it very hard to link individual inputs to its outputs. Each Grin block is essentially a big coinjoin transaction signed by all parties involved.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550948943399-IZEGKKYHGV9WZS7NOSK3/ke17ZwdGBToddI8pDm48kPtIIX8HfrzPBLHJv7lXCbt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URpa-2XMv_NSSmsc5I3zW50IK4ywHgWxB1VcQ6KYnCBeOpYghpI-Ha_TwZsqqmJXng/image-asset.png?format=1500w)

Inputs are **Pedersen commitments** which are references to previous outputs, there are also no identifiable addresses. To an observer this is indistinguishable from random pieces of data.

There are **no visible amounts **and transactions are aggregated - making it very hard to link individual inputs to its outputs. Each Grin block is essentially a big coinjoin transaction signed by all parties involved.

![Kernels  represent the  excess value , lockheight, fees, and  signatures of the transacting parties  involved.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1550949186554-YYV5FAZH9CSDE22AEDZD/ke17ZwdGBToddI8pDm48kCAaznS_bOWvnm5gnYfkIHAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcI3PgpNRCw9df6K4EXiKkJSujLyERM_mRI59uOdnhYoBnYjdczS_NLe3mWA7MwDOD/kernels.png?format=1500w)

**Kernels** represent the** excess value**, lockheight, fees, and **signatures of the transacting parties** involved.

-   ### NO ADDRESSES

    -   All outputs in Grin are unique and have no common data with any previous output. Instead of relying on a known address to send money, transactions have to be built interactively, with two (or more) wallets exchanging data with one another. This interaction **does not require both parties to be online at the same time**.

-   ### NO INDIVIDUAL TRANSACTION DATA

    -   Grin nodes can verify the correctness of total coin supply by comparing the sum of all money created by mining with the total sum of money that's being held by users

-   ### ZERO-CONFIRMATION CUT-THROUGHS

    -   This refers to the Bob ---> Alice ---> Carol transactions mentioned above. If the coins end up with Carol we can remove the intermediary transaction information (Bob ---> Alice) altogether whilst preserving its integrity, saving space.

-   ### SCALABILITY

    -   Most outputs end up being spent by another input in a later block. Thus, *all spent outputs can be removed* - and the whole blockchain can be stored, downloaded and fully verified in just a few GBs or less (assuming # txns similar to bitcoin). The Grin blockchain **scales with the number of users** (unspent outputs), **not the number of transactions**.

    -   We currently also need to preserve the kernel (~100 bytes) for each transaction

Grin's emission rate is linear, meaning that a fixed amount is emitted every year and it never drops. The block reward is currently set at 60 grin with a block goal of 60 seconds. The rationale given for this is that 1) dilution trends toward zero and 2) a non-negligible amount of coins gets lost or destroyed every year. In contrast, Bitcoin's initial 50 BTC block reward is halved every 4 years until there are 21 million bitcoin in circulation. [12] Here is [Grin's monetary policy in detail](https://github.com/mimblewimble/docs/wiki/Monetary-Policy).

Grin leverages [Dandelion relay](https://github.com/mimblewimble/grin/blob/master/doc/dandelion/dandelion.md), which provides additional anonymity as to which IP or client the transaction originated from. [11]

Grin launched on January 15th 2019 and is still highly experimental. Unlike many cryptocurrencies today, it began with a cypherpunk-y ethos in that there was no incentives skewed towards creators. There was no ICO, no pre-mine, no advisors, no investors, nor founders' rewards. The project is largely [community-driven](https://grin-tech.org/friends) and [funded by donations](https://grin-tech.org/funding).

### CHALLENGES & CAVEATS

With sophisticated monitoring, it *is* still possible to reconstruct a transaction graph. Therefore it's still remains to be tested how resistant the privacy features of Grin are to motivated adversaries.

While MimbleWimble is scriptless, many contracts that would require a script in Bitcoin can be achieved with Grin thanks to some cryptographic tricks (see: [**scriptless scripts**](https://www.youtube.com/watch?v=EN-JMlzr8Qw)). So far, there are ongoing developments and discussions to include multi-signature transactions, atomic swaps, time-locked transactions and outputs and even [Lightning Network](https://nichanank.squarespace.com/blog/2019/1/5/bitcoin-scaling-lightning-network-micropayments) on Grin. These can work in theory but have yet to be tested in the wild, so proceed with caution! [12]

LOOKING FORWARD...
----------------

**Fungibility** is the ability for equal units to be interchangeable. Cash of equal units is *fungible* as most people wouldn't think twice about exchanging two $10 bills for a $20 bill. However, if chain analysis allows companies to track cryptocurrencies, there is a chance some UTXOs on could be flagged ("**tainted**") unless you use add-on privacy features like on a sidechain or take additional steps to obscure transaction information which, at its current stage of development, is not straightforward for the layman. If for some reason your crypto has been traced to a blacklisted source, [there is a chance it won't be accepted](https://www.ccn.com/us-blacklists-bitcoin-addresses-of-iranians-behind-samsam-ransomware). Privacy is therefore an extremely important when considering something to be used as a money. [15]

There is a lot of work ahead to make privacy work on open blockchains at scale, and at the moment this technology is still highly experimental and proposals that seem theoretically sound are likely to face unexpected issues when used in practice. Lack of developer tools and poor UX are also bottlenecks for people looking to help out with the project or enter the ecosystem. This is why the Ethereum ecosystem has arguably been most successful at attracting new contributors - a lot of infrastructure is available out-of-the-box for developers to get started, with ample documentation and video courses to guide them.

Besides new privacy protocols and cryptographic tricks, there are products in the crypto ecosystem that helps users maintain their privacy as well. Bitcoin wallets like [**Samourai**](https://samouraiwallet.com/) and [**Wasabi**](https://www.wasabiwallet.io/) have features that make transactions more difficult to trace. Samourai enables something called [**stonewalling**](https://samouraiwallet.com/stonewall) which makes regular payments look like a coinjoin transaction - essentially creating "fake change" that sends Bitcoin back to addresses that *you* control while appearing like it's a coinjoin txn involving multiple parties. Another feature is something called [**ricochet**](https://samouraiwallet.com/ricochet), which adds multiple hops to your transactions to make it look like it has gone through more intermediaries. So instead of sending bitcoin from your mobile wallet (non-identifying in formation) directly to your Coinbase account (with identifying information), you can enable ricochet to obscure an entity that can identify you from your wallet address. [14]

Without turning this article into a guide on crypto-privacy, I'd like to end on a similar note to my previous articles by concluding that there are plenty of rabbit holes to enter when it comes to privacy in crypto. MimbleWimble is an exciting technology to follow, with a potential to greatly enhance the privacy and fungibility of bitcoin. Implementing MimbleWimble on a separate chain with its own coin provides a good testbed for its privacy and scalability features. We could consider Grin as an experimental chain on which to innovate quickly and enhance privacy features - and sometime in the future, implement the MimbleWimble protocol as a sidechain on Bitcoin once the community considers it adequately robust. Grin's cypherpunk ethos and community are perhaps its greatest strength in addition to its exciting technology. I look forward to exploring more privacy-enhancing protocols in future articles. I hope this was helpful to you as a primer to Grin and MW, please leave a comment and spread the knowledge! Thanks for reading,

🥃Cheers

BTC*:* 3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR

or... buy me coffee on Lightning Network with [tippin](https://tippin.me/)!

⚡️ tippin.me

FURTHER READING & RESOURCES
---------------------------

1.  [Tom Elvis Jedusor] [Mimblewimble whitepaper](https://download.wpsoftware.net/bitcoin/wizardry/mimblewimble.txt)

2.  [Arjun Balaji] [MimbleWimble: History, Technology, and the Mining Industry](https://www.theblockcrypto.com/2019/01/08/mimblewimble-history-technology-and-the-mining-industry/)

3.  [Ignotus Peverell] [Introduction to MimbleWimble and Grin](https://www.theblockcrypto.com/2019/01/08/mimblewimble-history-technology-and-the-mining-industry/)

4.  [Greg Maxwell] [Confidential Transactions](https://people.xiph.org/~greg/confidential_values.txt)

5.  [Jimmy Song] [What is MimbleWimble](https://www.youtube.com/watch?v=fRWf7Hf4czc)

6.  [Andreas Antonopoulos] B[itcoin Q&A MimbleWimble and Dandelion](https://www.youtube.com/watch?v=LjDJGTpK_lE)

7.  [Andrew Poelstra] [Scriptless Scripts with MimbleWimble](https://www.youtube.com/watch?v=EN-JMlzr8Qw)

8.  [Andrew Poelstra] [MimbleWimble](https://cyber.stanford.edu/sites/g/files/sbiybj9936/f/andrewpoelstra.pdf)

9.  [The Crypto Show] [MimbleWimble, Andrew Poelstra, Pieter Wuille, Brian Weery and Chris Odom](https://soundcloud.com/heryptohow/mimblewimble-andrew-poelstra-peter-wuille-brian-deery-and-chris-odom)﻿

10. [Blockexplorer] [What is MimbleWimble](https://blockexplorer.com/news/what-is-mimblewimble/)

11. [Grin] [Dandelion relay & How it's used in Grin](https://github.com/mimblewimble/grin/blob/master/doc/dandelion/dandelion.md)

12. [Grin] [Grin 4 Bitcoiners](https://github.com/mimblewimble/grin/blob/master/doc/grin4bitcoiners.md)

13. [Grin](https://grin-tech.org/) website

14. [Andreas Antonopoulos] [Coin Selection and Privacy](https://www.youtube.com/watch?v=3Ck683CQGAQ&t=112s)

15. [Coindesk] [MimbleWimble: Silly Sounding Tech Could Seriously Reform Bitcoin](https://www.coindesk.com/mimblewimble-silly-sounding-tech-seriously-reform-bitcoin)

16. [Greg Maxwell] [Coinjoin: Bitcoin Privacy for the Real World](https://bitcointalk.org/index.php?topic=279249.0)

17. [Jimmy Song] [Transaction Creation and Validation](https://github.com/jimmysong/programmingbitcoin/blob/master/ch07.asciidoc)

18. [Grin's monetary policy](https://github.com/mimblewimble/docs/wiki/Monetary-Policy)