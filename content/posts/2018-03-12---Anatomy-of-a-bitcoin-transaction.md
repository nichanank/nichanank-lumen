---
title: Anatomy of a Bitcoin Transaction
date: "2018-03-12T14:30:37.121Z"
template: "post"
draft: false
slug: "/posts/anatomy-of-a-bitcoin-transaction/"
category: "Technology"
tags:
  - "Blockchain"
  - "Bitcoin"
description: "Our bitcoin transaction ledger now contains 512200+ (at the time of writing) immutable pages of history detailing nothing except who sent how much BTC to whom...
But what exactly happens during each transaction? What are public and private keys and why is it such a big deal to keep the latter a secret? What's in a wallet? What does it mean to verify or *sign* a message in this context? In this article we'll walk through what happens when you send and receive bitcoin, and what it means to truly *own* cryptocurrencies."
socialImage: "/media/image-2.jpg"
---

Many moons ago (pun intended), I wrote a rather lengthy [introduction to bitcoin](http://www.nichanank.com/blog/2017/8/12/bitcoin-explained-using-emojis) and blockchain technology. To summarize the post in one sentence: the bitcoin blockchain is an immutable, append-only database of transaction records, ordered in "blocks" which gets added over time.

When I posted the original article, the [~480700th block](https://blockexplorer.com/blocks-date/2017-08-16) of bitcoin transactions were being appended to the blockchain. At the time of this writing, the ~512200th block is being mined and appended.

Our bitcoin transaction ledger now contains 512200+ immutable pages of history detailing nothing except who sent how much BTC to whom...

But what exactly *happens* during each transaction? What are public and private keys and why is it such a big deal to keep the latter a secret? What's in a wallet? What does it mean to verify or "sign" a message in this context? In this post I will walk through what happens when you send and receive bitcoin and what it means to "own" cryptocurrencies.

* * * * *

METAPHORS - A DOUBLE-EDGED SWORD
--------------------------------

First we address a common misunderstanding that is partially fueled by a misrepresentation in design. In his [talks](https://www.weusecoins.com/video-bitcoin-design-principles/) and book, [Andreas Antonopoulos](https://twitter.com/aantonop) addresses the design principles around bitcoin and brings up the concept of **skeuomorphic design**.

*Skeuomorphism* is when graphical interface objects mimic their real-world counterparts in their appearance or how a user can interact with them. For example, our calculator apps have design elements that mimic a physical calculator such as the numpad button arrangement, the colour contrast between the number and the operator buttons (+ - x /), the screen positioning at the top... A calculator app designed such that each number and operator buttons are on [piano keys](https://i.pinimg.com/736x/00/fd/2f/00fd2f817b2a87a58d695aa080a5757e--music-notes-keyboard.jpg) would perform mathematical operations just as well, but users would likely feel unfamiliar with and uncomfortable using it. 

[Skeuomorphic design](https://www.interaction-design.org/literature/topics/skeuomorphism) helps put the user in a familiar mindset so that they can determine how they should interact with the interface and predict the possible outcomes of their action. Our smartphones apply this concept a lot with their app logos and interface design, especially in the early days where touchscreen smartphones were still new. Without skeuomorphism, new users would have a hard time figuring out how to use their phones, attempting to call someone via the calculator app, for example.

I bring up skeuomorphism because of this:

![The first images you see when you Google search "bitcoin"](/static/media/skeuomorphism.png)

The first images you see when you Google search "bitcoin"

### THERE ARE NO COINS

Granted, it's very hard to visualize and draw bitcoin because nothing like it has ever existed before, neither in concept nor physical manifestation. These renderings and the coin/wallet metaphor have both good and bad consequences. On the one hand, the image of a shiny gold coin indicates that it is something of value and can be owned or spent like the coins we use today. These illustrations put us in the mindset of storing money in a wallet, and keeping that wallet safe - at a high level, this is what we're also doing with bitcoin and other cryptocurrencies.

Where the metaphor breaks down is that we typically don't need keys to unlock wallets, let alone public and private keys, addresses, and transaction "verifications". We also can't spend 0.5 or 0.000001th of a normal coin, whereas bitcoin micro-transactions occur all the time.

To address this gap, let's peel of the metaphoric layers and see what's actually happening...

***CRYPTO***CURRENCY
--------------------

The term *crypto* has become quite ubiquitous in the past year amongst online publishing and casual conversations. Despite its common reference to cryptocurrencies, it stems from *cryptography*, the security backbone of bitcoin and all other altcoins.

![Google search trends for "crypto" from 2004-present](/static/media/crypto-google-trends.png)

Google search trends for "crypto" from 2004-present

The [Wikipedia definition](https://en.wikipedia.org/wiki/Cryptography) of cryptography that it is the practice and study of techniques for **secure communication in the presence of third parties** called adversaries. While there are multiple types of cryptography, we'll look at one in particular: public key cryptography.

Public key cryptography uses a pairing of public and private keys, which are linked via a mathematical function, to encrypt and decrypt data. The public key can be shared with everyone, while the private key must be kept secret.

One use case of public key cryptography is **encryption**. Going back to the Wikipedia definition above, encryption allows you to send messages through an unsecure network (e.g. the internet) without it being understood or tampered with - *secure communication in the presence of third parties*. Once Bob encrypts his message using Alice's public key, only Alice can decrypt the message (assuming she is the only one in possession of her private key).

![Actual public/private keys look more like  this](/static/media/pkc-graphic.png)

Actual public/private keys look more like [this](https://www.gpg4win.org/doc/images-compendium/sc-wordpad-editOpenpgpKey_en.png)

### PUBLIC KEY CRYPTOGRAPHY IN BITCOIN

🔏 In bitcoin, we use another application of public key cryptography called [**digital signatures**](https://en.wikipedia.org/wiki/Digital_signature). Digital signatures provide an inherently secure way to assure evidence to origin, identity and status of an electronic document, transaction or message, as well as acknowledging informed consent by the signer. It is the electronic equivalent of a hand-signature or stamped seal that cannot be impersonated or tampered with.

Digital signatures can only be created with a private key. Anybody can then use its corresponding public key to verify that a signature was indeed created by that private key. The signature serves as proof that the signer owns that private key, without revealing what the key is.

Both keys in the public/private key pair are needed for a successful transaction. They are cryptographically related and there is no way to determine the private key using the public key.

-   📫The **public key** is used to determine if a digital signature is valid. It is hashed into an ***address***which serves as a source or destination in a transaction, visible to the public.

-   🔏The **private key** serves as a unique pen that can produce the digital signature, verifying that the sender of the transaction is the owner of the coins.

![Source:  http://tech.eu/features/808/bitcoin-part-one/](/static/media/digital-signature-validation.png)

Source: [http://tech.eu/features/808/bitcoin-part-one/](https://www.nichanank.com/blog/2018/3/5/anatomy-of-a-bitcoin-transaction#)

This is why the private key needs to be kept secret and safe. If you lose it, you cannot spend or do anything else with the coins controlled by that address. If someone else gets a hold of it, they can do whatever they want to with the coins on that address. **Ownership**, as far as the network is concerned,is therefore determined by possession of the private key.

In fact, the [whitepaper](https://bitcoin.org/bitcoin.pdf) defines "coin" as a chain of digital signatures. Coin owners can transfer coins by digitally signing a [**hash**](https://en.wikipedia.org/wiki/Hash_function)*** of the previous transaction** and the **public key of the next owner**, and adding these to the end of the coin. Payees can verify the signatures for the chain of ownership.

**a brief walkthrough of hashes in a* [*previous post*](http://www.nichanank.com/blog/2017/8/12/bitcoin-explained-using-emojis)

### HAVING ACCESS TO THE PRIVATE KEY MEANS HAVING CONTROL OVER THE FUNDS

Since you need the private key to produce a digital signature, and you need the digital signature to make a transaction, **access to the private key is the equivalent of coin ownership**. If someone gets a hold of your private keys they have just as much control over the funds as you do. This is why it's so important to keep your private keys safe, a secret, and backed up offline. You could also opt to keep it in your head.

If the private key is lost, there is no way to retrieve it. In fact, millions of dollars worth in bitcoin has gone out of circulation because of [private key loss](http://fortune.com/2017/11/25/lost-bitcoins/) or [death](http://fortune.com/2017/09/26/cryptocurrency-bitcoin-death/) of the owner.

![Source:  Bitcoin whitepaper](/static/media/transaction-blocks-bitcoin.png)

Source: [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

TRANSACTIONS, DISSECTED
-----------------------

While it may be more intuitive to think of how many bitcoin we have as an account balance like our wallet interfaces make it seem, what we're actually seeing is our address's **unspent transaction output** (UTXO). A closer look at what this means:

A **transaction** contains inputs and outputs:

-   All inputs into a transaction must be spent

-   Inputs are **unspent outputs** from a previous transaction

-   Outputs will be *unspent* until they are used in a new transaction

In the [genesis block](https://blockchain.info/block-index/14849) (Block 0) at the inception of bitcoin and its blockchain, 50 BTCwere generated and sent to the address [*1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa*](https://blockchain.info/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa)*, *which belongs to the first ever bitcoin owner, let's call him/her Satoshi 👤

💭Now, a hypothetical scenario:

If Satoshi remained the only owner of all bitcoin, it wouldn't have much value. For its value to increase, it has to be accepted as payment by an increasingly large network of people. To begin the circulation, Satoshi decides to send 2 BTC to a new address xxx123xxx

-   **Before the transaction**: Satoshi's address has 50 BTC in UTXO - aka they have 50 BTC available to spend

-   **During the transaction**:

    -   Satoshi sends 2 BTC to xxx123xxx, which is now the *spent* output for Satoshi's address and the *unspent* output for the receiver's address.

    -   Since all transaction inputs must be spent, what Satoshi is actually doing here is putting 50 BTC as input into this transaction, spending 2 BTC, and getting 48 BTC *unspent output* back as change.*

-   **After the transaction**: Satoshi's address has 48 BTC available to spend, and xxx123xxx has 2 BTC available to spend in UTXO.

**in reality it will add up to a little less than 50 as we have transaction fees that goes to miners.*

Transactions do allow for multiple inputs and outputs. Normally it will be that a sum of smaller inputs (UTXOs) are adding up to equal an output amount, or one larger input is split and spent on multiple smaller outputs.

You can't have more inputs than outputs, because at least one output will go back to the sending address as "change" (new UTXO for the sending address). The fact that transactions can have multiple inputs and outputs allows for "coins" to be split and combined - therefore, a transfer of 0.000001th of a bitcoin is possible.

![Source:  Bitcoin whitepaper](/static/media/transaction-utxo.png)

Source: [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

One common misconception is that the public key is the same as the address. While the two are mathematically related, this is not quite the case. The address is actually a hash of the public key. We don't give the public key out directly for security reasons explained [here](https://www.reddit.com/r/Bitcoin/comments/3filud/whats_the_difference_between_public_key_and/).

![A screenshot from  Blockexplorer  which depicts transactions in real time. The  U  and  S  to the right stands for  unspent  and  spent  outputs to the receiving addresses](/static/media/blockexplorer.png)

A screenshot from [Blockexplorer](https://blockexplorer.com/block/000000000000000000294298dc272e85ef79a8914e60132911ad073a7fe60f5e) which depicts transactions in real time. The **U **and **S** to the right stands for **unspent** and **spent** outputs to the receiving addresses

> "A bitcoin transaction can be transmitted over completely unsecured Wi-Fi. By smoke signal. By light signal. With carrier pigeons. It doesn't matter. Nothing in that message can be compromised

--- Andreas Antonopoulos

ROLE OF A WALLET
----------------

Our cryptocurrency "wallets" could therefore be more accurately described as **keychains** which hold a collection of **public and private key pairs**. Instead of directly storing an account balance and updating it with each transaction, what software wallets like [Electrum](https://electrum.org/#home) do is it:

-   Refers to the private keys it controls

-   Checks the blockchain network to find transactions to the corresponding address

-   Adding unspent transaction outputs (UTXOs) together to determine the balance

-   Determine transaction fees - *more on this in later posts*

-   Maintains a ledger of transactions to and from the address

Remember that the blockchain does not contain any coins or balances, only transaction data. The wallet updates itself by syncing with the network to update the sum of UTXOs to its keys. You can add an extra layer of protection and encrypt your wallet with a password.

A screenshot of the interface for the [Ledger Nano](https://www.ledgerwallet.com/), a popular hardware wallet.

![Source:  ledgerwallet.com](/static/media/wallet-view.png)

Source: [ledgerwallet.com](https://www.ledgerwallet.com/images/apps/chrome-send.png)

BACK TO METAPHORS
-----------------

My opening spiel about skeuomorphic design may seem out of place at this point. I wanted to start and close with some remarks on design because from the hardware, software, and online wallets that I've seen, none have been completely intuitive from the get go. This may partially be due to the fact that the mechanisms behind cryptocurrency transactions as described above do not map to any real-world experiences that we are used to, even with online payments. 

Though wallet interfaces like those of the [Ledger Nano](https://www.ledgerwallet.com/), [MyEtherWallet](https://www.myetherwallet.com/), [Electrum](https://electrum.org/#home) etc. are significantly more user-friendly than those in the early days of bitcoin, we still have a ways to go to educate the public on how to interact with their cryptocurrency, and how to keep their funds safe. If we asked a teenager today to describe their experiences with a phone, we would likely get a completely different answer from a teenager in the 90s. Likewise, we can describe wallets today as the container for our cards and cash. But the wallets of tomorrow may mean a different thing - the safeguard for our private keys.

Our interactions with "wallets" may be different, and we are already seeing some of this with mobile wallets and paying with QR code. Cryptocurrency wallets today might feel intimidating to use because of this foreign notion of signing and verifying messages, locking/unlocking wallets, backing them up, generating new sending and receiving addresses and so on... Product teams will need more than engineers to ease the transition to this exciting new technology. They will need designers to abstract away the confusing details, users to actively give feedback regarding their experience, security experts to advise on how to get it right, and public-facing figures to educate the masses on how to interact with it safely. All of this will take time and there will be failures along the way, but some of the brightest minds have been in and increasingly are entering the space to help solve this problem. I imagine we'll eventually be at a point where we'll transact using cryptocurrency wallets, exchanging coins/tokens for goods and signing messages without a middleman or a second thought. Ultimately, what we're doing is gradually replacing the need for trust with cryptographic proof - this is the rock solid foundation beneath the noise and speculation in the space today.

There are many ways to store bitcoin and other cryptocurrency - which I will write about in a future post. But for now after having having read this, I hope you have a better idea of what happens to your BTC when you donate it to:

3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR 😉

* * * * *

ZOOMING OUT TO THE BLOCKCHAIN
-----------------------------

I hope that was useful. My motivation for this post was the level of confusion I've been seeing around wallets, public and private keys. Note that other cryptocurrencies may use an account balance model rather than UTXOs, but nevertheless operate on the same principles of public key cryptography. [Ivan on Tech](https://www.youtube.com/channel/UCrYmtJBtLdtm2ov84ulV-yg) has a great summary for transactions on his blockchain fundamentals [course](https://ivanontech.teachable.com/p/blockchain-fundamentals), a roadmap I'll roughly follow for future posts. The bold is what we've covered here.

1.  **Construct and Broadcast**

    1.  Wallet constructs transaction, decides transaction fee (free market)

    2.  Decides inputs and outputs (input - output = txn fee)

    3.  Signs transaction using private key

    4.  Broadcasts transaction, which gets propagated to the network

2.  Mempool

    1.  Nodes put transaction in their mempool

    2.  Wait for a miner to include the transaction in their next block

3.  Mining

    1.  Miner includes transaction in next block

    2.  Competes with other miners to solve PoW

        1.  If win, append block to blockchain

        2.  Receive block reward + transaction fee

4.  Wait for confirmations

    1.  Wait for several confirmations to decrease the probability of the transaction being reversed (due to being in a stale block)

Until next time.

REFERENCES & FURTHER READING
----------------------------

1.  SCALABILITY! [Lightning Network](https://lightning.network/)

2.  Why not just use an account/balance set-up instead of UTXOs? Discussion on [StackExchange](https://bitcoin.stackexchange.com/questions/29780/why-does-bitcoin-store-all-transaction-inputs-and-outputs-instead-of-just-an-a) and [Corda](https://www.corda.net/2016/12/rationale-tradeoffs-adopting-utxo-style-model/)

3.  A powerful [image](http://i.imgur.com/CzyO1yv.jpg) on cryptographic proofs in bitcoin

4.  [Skeuomorphic Design](https://medium.muz.li/skeuomorphic-design-a-controversial-ux-approach-that-is-making-a-comeback-a0b6e93eb4bb) by [Justin Baker](https://twitter.com/justinucd)

5.  More notes on [Skeuomorphism](https://www.interaction-design.org/literature/article/skeuomorphism-is-dead-long-live-skeuomorphism) from [Interaction Design Foundation](https://www.interaction-design.org/)

6.  Where it all began - the [genesis block](https://blockchain.info/block-index/14849) and [block 1](https://blockexplorer.com/block/00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048) of the bitcoin blockchain (2009)

7.  [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

8.  [Bitcoin Design Principles](https://www.youtube.com/watch?v=shbz5ic88SM) - a talk by [Andreas Antonopoulos](https://twitter.com/aantonop)

9.  [Internet of Money](https://www.amazon.com/Internet-Money-Andreas-M-Antonopoulos-ebook/dp/B01L9WM0H8) by [Andreas Antonopoulos](https://twitter.com/aantonop)

10. [How Bitcoin Transactions Work](https://www.coindesk.com/information/how-do-bitcoin-transactions-work/) by CoinDesk