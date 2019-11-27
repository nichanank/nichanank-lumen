---
title: Bitcoin explained using emojis
date: "2017-08-16T22:30:30.121Z"
template: "post"
draft: false
slug: "/posts/bitcoin-explained-using-emojis/"
category: "Technology"
tags:
  - "Blockchain"
  - "Bitcoin"
description: "I first came across Bitcoin a few years ago as it gained wider traction across online forums and social media. Initially, I dismissed it as a form of digital money that ran on the same technology on which our traditional online banking systems rely.
I eventually gave in to an ever-increasing sense of FOMO as Bitcoin became enthusiastically discussed amongst friends and colleagues, as well as on my favourite podcasts. I decided to do my own research on the topic, making an effort to understand its fundamentals and why it has a potential to affect billions of lives. As a result..."
socialImage: "/media/image-2.jpg"
---

I first came across the term *Bitcoin* a few years ago as it gained wider traction across online forums and social media. Initially, I dismissed it as a form of digital money that ran on the same technology on which our traditional online banking systems rely.

I eventually gave in to an ever-increasing sense of FOMO as Bitcoin became enthusiastically discussed amongst friends and colleagues, as well as on my favourite podcasts. I decided to do my own research on the topic, making an effort to understand its fundamentals and why it has a potential to affect billions of lives. As a result, it became evident to me that my initial disregard for Bitcoin was out of pure naïveté. 

In an effort to solidify my own understanding of Bitcoin and share what I've learned with those curious about the topic, I'll be using an analogy to introduce Bitcoin, as well as peek into the underlying technology and most importantly (IMO), outline some of its potential. 

* * * * *

SETTING THE SCENE: DECENTRALISING FINANCIAL CONTROL
---------------------------------------------------

Let's start with an analogy to set up some of the problems that Bitcoin solves:

Imagine an island occupied by a tribe - consisting of a chief (denoted by *) and its tribespeople. We'll call them Grads

👩🏽‍🎓 👩🏻‍🎓 👨🏿‍🎓 👨🏼‍🎓   *👩🏾‍🎓

Grads use a rare stone, 🔵  as their currency. Instead of carrying the heavy stones around, they use a bookkeeping system where every transaction is reported to a bookkeeper, 👩🏽‍🎓 📖.

When tribesmen want to transfer ownership of 🔵 to one another, they make a transaction request to the bookkeeper who then has to:

-   🆔 Verify that they are who they say they are (to prevent people from spending someone else's money)

-   💵 Check that the sender has sufficient funds to send

-   📖 Record the transaction on a list - a **ledger**

As a result, the bookkeeper has a record of all the transactions that have ever been made.

👩🏻‍🎓 → 👨🏿‍🎓 *500g 🔵*\
👩🏽‍🎓 → 👨🏼‍🎓 *3kg 🔵*\
👨🏿‍🎓 → 👩🏽‍🎓 *450g 🔵* ... and so on

The ledger is kept in a special building 🏦, which the bookkeeper alone has access to. The bookkeeper only works 📆 Mondays-Fridays, and charges a fee for her work on each transaction. Sometimes, the sender and recipient has to wait days for their transactions to go through. She also charges higher fees with larger transaction amounts 📈.

The bookkeeper assures the tribespeople that the ledger is accurate and secure, and they simply has to *trust* that it is so.

This is banking as we know it today, sending sensitive transaction information through an intermediary, a *trusted third party. *We're relinquishing our privacy and control over our own money to banks and payment processing companies, similar to how the tribespeople are doing so by relying on the bookkeeper.

👩🏻‍🎓 → 🏦 →👨🏿‍🎓

...

The island population grows and is now occupied by 3 tribes,  each with its own chief, currency, and bookkeeper/ledger:

👩🏽‍🎓 👩🏻‍🎓 👨🏿‍🎓👨🏼‍🎓    🏦   *👩🏾‍🎓 Grads use 🔵 as its currency.

👩🏼‍🌾 👩🏻‍🌾 👨🏿‍🌾 👨🏾‍🌾   🏦   *👨🏽‍🌾  Farmers use 🔴 as its currency.

👨🏼‍🍳 👨🏽‍🍳 👨🏿‍🍳👩🏻‍🍳    🏦   *👩🏾‍🍳 Chefs use ⚫️ as its currency.

-   💼 The individuals can move to live and work in different tribes, but must adopt the currency of whatever tribe they are in during their stay.

-   💰 They must pay a significant fee if they wanted to send money across tribes, as well as deal with the exchange rates.

-   💥 If two chiefs dispute, they may block a transaction between their respective tribes completely.

Frustrated with long wait times, hefty fees, and lack of control over his own funds, a computer-savvy Farmer 👩🏻‍🌾 devises a set of rules (a protocol) for a new kind of money that* does not have centralized control* - he gives it the name **Bitcoin**.

The fundamental difference between Bitcoin and 🔵, 🔴 and ⚫️ is that Bitcoin transactions *do not rely on a bookkeeper.* The farmer designed a system such that *everybody* has a copy of the ledger - where transactions can be made at anytime and completed almost instantaneously for a very low flat fee.

📖  🌐  📖

The Farmer proposes this to a group of friends, some of whom find it lucrative enough to recognise Bitcoin as money and are willing to accept some Bitcoin instead of their usual tribal stones as a payment. These enthusiasts agree to become participants, a **node** 👩🏻‍💻, in the Bitcoin **network** - they do so by installing the Bitcoin software 📀 and downloading a copy of the ledger.

When they want to transfer Bitcoins to each other, they announce it to everybody on the network (in reality, this is done through devices with Internet connection). 📣 After each transaction is announced, the Bitcoin software on each node works to verify the transaction by looking at the entire ledger to see if the sender has sufficient funds.

**Beginning of ledger**\
Sarah 👩🏽‍🎓 → 👩🏻‍🌾 Jane *10 Bitcoins*\
Raj👨🏼‍🍳 → 👩🏻‍🎓 **Amy** *2.5 Bitcoins*\
Vic 👩🏼‍🌾 → 👨🏽‍🍳 Ali *5 Bitcoins*\
**Amy** 👩🏻‍🎓 → 👩🏼‍🌾 Vic *2 Bitcoins*\
...

If Amy 👩🏻‍🎓 announces she wants to send some Bitcoins, each node checks if she has enough money by looking through the ledger - they calculate her available balance by adding up the Bitcoins that she has received and subtracting the amount she has sent.

*Potential to be added*\
Amy 👩🏻‍🎓 → 👩🏽‍🎓 Sarah *1 Bitcoin* ❌ Not Valid\
Amy 👩🏻‍🎓 → 👩🏽‍🎓 Sarah *0.5 Bitcoin* ✅ Valid

After the transaction is verified, it can be added to the ledger (more on how later). This shared, public ledger is the called the **blockchain**.

In incorporating the use of this *distributed* ledger, we now have a **de-centralised** transaction system. A **network-centric** system that:

-   Does not involve an intermediary between sender and receiver

👩🏻‍💼 → 👩🏼‍💼 instead of 👩🏻‍💼 → 🏦 → 👩🏼‍💼

-   Does not care where the money is coming from, where it's going, or the amount being transferred. The transactions are **peer-to-peer** - *every node is equal*.

[👩🏽‍🎓 → 👩🏻‍🌾  *20 Bitcoins*]is treated the same as [👨🏼‍🍳 → 👨🏽‍🍳  *0.25 Bitcoins*]

In summary, Bitcoin is essentially an abstract token of value of which transactions are recorded in an open, distributed ledger (the "blockchain").

So...

Why are people excited about it?

Bitcoin is increasingly being recognised as a **store of value 🔸**. The network grows as more tribespeople accept Bitcoin as if it was their traditional tribal stone - they are attracted to the fact that they don't have to rely on the bookkeeper to store, send and receive money.

Dismissing Bitcoin as "just another currency" would be like saying the tribespeople simply decided to adopt a new type of stone, 🔘 as money - while still relying on the bookkeeper to transfer ownership of it. The key difference here is that the ledger is now open, public, *distributed* - giving its users the flexibility, [transparency, and privacy](https://bitcoin.org/en/protect-your-privacy) like they've never seen before.

-   **Yours, and yours alone**

🏪 If you go to buy a product in a store and pay by cash 💵 - physically handing the storeowner the banknotes - that's the end of that transaction. No one else is involved besides the two of you. You don't have to wait for anything to be checked out or "cleared".

💻 However, if you online shop and use PayPal or card 💳, that money is in an account that is owned by a third party. If your bank or payment processing company decides your account is being misused, they may freeze your funds, 🚫 blocking access to your own money.

🆔 With Bitcoin, you don't need to identify yourself to anybody or sign up for an account, just like when you pay directly by cash. You don't need an account to carry around a wad of bills 💵, and if you lose those bills, there is no way to get it back. Similarly, the Bitcoins you own are completely yours unless you spend it (or lose it). A Bitcoin transaction is more like the physically-paying-by-cash example above than the online shopping example in this regard, with the added advantage that you can be half a world away from the storeowner.

-   **Indiscriminate of source, destination, and transaction amount**

✈️ Those of us who travel frequently have experienced the pain of having to exchange money abroad, pay fees when withdrawing cash abroad and walking around with multiple currencies in our wallets at once. In contrast, 10 Bitcoins in Japan is 10 Bitcoins in Norway and the US and Zimbabwe. 🌎 It doesn't care where you reside in the world.

💰 Banks charge fees for wire transfers, which increases with the amount you are sending. With Bitcoin there is a relatively very low (maybe [<$2](https://bitcoinfees.21.co/)!) flat fee no matter how much you are sending. This is a great feature for [remittances](https://techcrunch.com/2015/05/25/bitcoin-might-be-the-next-big-thing-in-the-remittance-market/), as it would allow immigrants to send money home in minutes at a much lower cost.

🖥 *Micro-transactions* - the ability to send fractions of a Bitcoin - will allow content creators to monetise their content. For example, if you were a YouTube vlogger you could directly receive donations and payments from viewers to watch your content. Conversely, companies can pay you a few cents worth of Bitcoin for watching their adverts. To the viewer, it will be like sending fractions of a dollar to watch their favourite content. Content creators can generate great revenue from these micro-payments in accumulation.

🛂 There is also a use-case for those with [limited to no access to banking](https://www.coindesk.com/can-bitcoin-deliver-promise-worlds-unbanked/). With Bitcoin you don't need to have a bank account or verify that you are even eligible for one. So those living in rural areas can send and receive payments from anywhere through a procedure as simple as sending an email. 

[Andreas Antonopoulos](https://antonopoulos.com/extended-bio/) ([@aantonop](https://twitter.com/aantonop)) refers to Bitcoin as "The Internet of Money". In his [book](http://amzn.to/2vABsD4) of the same name, he emphasizes that currency is just the first application of this decentralized technology, much like 📧 email is an application of the Internet. The fact that there is no central control allows anyone to create software-based payment systems [without asking anyone for permission](https://www.internetsociety.org/blog/tech-matters/2014/04/permissionless-innovation-openness-not-anarchy), much like building websites on the Internet.

HOW DOES A DE-CENTRALISED LEDGER WORK?
--------------------------------------

The core innovation of Bitcoin is de-centralisation of the ledger itself (i.e. making the ledger public and distributed to everyone). At any given point in time, the participants of the network has established an agreement - a **consensus** - about the transactions that have happened so far. Therefore removing the need for a trusted third party.

*So without a central party in charge of checking and adding transactions, how is the ledger updated?*

To avoid erroneous, unchecked transactions being added to the ledger, it is **locked** **with a password** - which means no one can easily add information or manipulate previous transactions. There is some work to be done in order to add to the ledger.

... This is where **miners** ⛏ come in.

Miners ⛏ are nodes who volunteer to take on two tasks:

-   ✅ Verify that a transaction is valid (relatively straight forward, just need to check previous transactions to calculate the sender's available balance)

-   🔗 Add the verified transaction to the ledger (difficult)

Continuing with Amy's transaction - she has 0.5 available Bitcoins to send. She broadcasts to the network that she'd like to send this to Sarah.

📣 *Broadcasted, not yet verified*\
Amy 👩🏻‍🎓 → 👩🏽‍🎓 Sarah *0.5 Bitcoin*

Suppose  Ali 👨🏽‍🍳 and Jane 👩🏻‍🌾 are miners. They verify the transaction, but still need to "unlock" the ledger in order to add the transaction to it.

Finding the password to unlock the ledger is difficult and energy-intensive because **the search for the password is completely random**. Essentially, Ali and Jane have to try potentially hundreds or thousands of passwords before they stumble upon the right one.

Suppose Jane wins this case:\
👨🏽‍🍳 Ali  🔑 🔑🔑🔑🔑🔑🔑🔑🔑🔑🔑\
👩🏻‍🌾 Jane 🔑🔑🔑🔑🔑🔑🔑🔑  ✅

She "unlocks" the ledger and adds Amy's 0.5 transaction to the blockchain. Everybody's ledgers gets updated and Jane gets a small reward in Bitcoins for her work. The search for a new password begins again to add the next transaction.

*Note that the "lock" does not prevent the network from seeing what's inside the ledger - the information is still public. The lock just prevents people from freely modifying what's inside - like an unbreakable, *transparent* vault. The public ledger is called the *blockchain* because it is a series of blocks of transactions.

* * * * *

In reality, the energy-intensive search for the "password" is actually the miners' computers racing to solve a difficult computational puzzle.

A brief technical overview using a great visualisation tool from <https://anders.com/blockchain/> :

The locked ledger-and-password analogy above represents Bitcoin's utilisation of a *secure hash algorithm* ([SHA-256](https://en.wikipedia.org/wiki/SHA-2)). This [cryptographic hash function](https://en.wikipedia.org/wiki/SHA-2) creates a digital fingerprint from a piece of given text or data. 

Here, for a piece of data 𝑫 put into the function, the function will produce a hash 𝑯 as the output.

𝑫 → 𝑯

🔒 The hash acts like a digital lock that can be opened using a password. Depending on what the data is, the function will give a hash that corresponds with that data.

Let's look at some:

![A blank input produces a 64-character hash](/static/media/empty-text-hash.png)

A blank input produces a 64-character hash

!["hello" has its 64-character hash](/static/media/hello-hash.png)

"hello" has its 64-character hash

![Same word with the H capitalized produces a completely different hash.](/static/media/hello-capitalized-hash.png)

Same word with the H capitalized produces a completely different hash.

-   No matter what you type in the data field (can be one word, a sentence, or an entire library of books), it will always produce a 64-character hash.

-   The algorithm is ***collision resistant***, which means no two pieces of data should produce the same hash.

-   Identical data will produce the same hash (so "Hello" will always produce the 185f... hash above)

-   The hash function is ***one way***, it is virtually impossible to figure out what the data was for a given hash - there is no way to figure out that the data was "Hello" if you were just given its hash.

* * * * *

Let's look at a **block**

![](/static/media/block.png)

-   The **data** (input text) is empty

-   The 🔒 **hash** ("digital lock") begins with 0000 - in the picture above, the block is unlocked*

-   The 🔑 **nonce** (password) "unlocks" the hash

In the above example, the empty data gets put into the function. The function gives its corresponding digital lock (Hash *0000f727...*). The password that unlocks this is *72608*.

*Our definition of "unlocked" in these examples will be blocks whose hash begins with 0000.

If I change the data in any way, the block is no longer valid (hash no longer begins with four zeros) and I have to find the 🔑nonce for the 🔒hash that was given by data "test".

![The data has been changed and the hash no longer begins with 0000.. we need to find a nonce such that the hash is in the 0000.. format.](/static/media/test-nonce-nonzero.png)

The data has been changed and the hash no longer begins with 0000.. we need to find a nonce such that the hash is in the 0000.. format.

I **mine** (try out) different passwords until I find the one that unlocks the block.

![Looks like the password for "test" is  156384 .](/static/media/nonce-success.png)

Looks like the password for "test" is *156384*.

Now let's look at a series of blocks, a **blockchain**

![Here, each block has a  previous  field, which is the  unlocked  hash (0000...) of the previous block.](/static/media/blank-blockchain.png)

Here, each block has a **previous** field, which is the *unlocked* hash (0000...) of the previous block.

If I manipulate some data in the middle of the chain, all the blocks that follow becomes invalid and I have to *re-mine* (search for a new password) the block whose data I changed as well as the ones that follow.

![](/static/media/test-blockchain-data-change.png)

With Bitcoin's public ledger, we have blocks of transaction data instead of simple text:

![In practice, instead of names or identifying information, we see  public keys  in the "To" and "From" fields. Public keys are like addresses of where the coins are stored and to be sent to.](/static/media/blockchain-with-transactions.png)

In practice, instead of names or identifying information, we see **public keys** in the "To" and "From" fields. Public keys are like addresses of where the coins are stored and to be sent to.

Let's say someone tries to manipulate the ledger (e.g. give themselves 1000 Bitcoins). Here I changed the transaction from Charlotte to Elizabeth to be 10 instead of 6.42

![A minor change in any of the fields (sender, recipient, amount) will result in the tampered block and all those that come after it to become invalid (hash no longer in the 0000.. format).](/static/media/blockchain-with-tx-manipulation.png)

A minor change in any of the fields (sender, recipient, amount) will result in the tampered block and all those that come after it to become invalid (hash no longer in the 0000.. format).

This is what happens after I re-mine all three blocks. Although they are all "valid", the hashes are drastically different from those in the untampered chain.

![Transactions on the same block are considered to have occurred at the same time. The further back the block, the older the transaction.](/static/media/blockchain-remined.png)

Transactions on the same block are considered to have occurred at the same time. The further back the block, the older the transaction.

So, what's stopping people from just changing the data like this, giving themselves Bitcoins then re-mining everything?

This is where the network and the power of a [**consensus protocol**](https://www.coindesk.com/short-guide-blockchain-consensus-protocols/) comes in. Since everybody has a copy of the ledger, the tampered version will be different from the rest. Here, Peer A with the tampered transaction history has a blockchain that does not agree with the rest of the network.

![](/static/media/blockchain-peer-A.png)

![](/static/media/blockchain-peer-B.png)

![](/static/media/blockchain-peer-C.png)

In order to add a new transaction, the 🔑nonce needs to be found for which the 🔒hash is 0000... for the given data. For the transaction to be accepted by the network, **the majority** 👥 of the network has to **agree** on that version of the blockchain.

This is what prevents people from spending money that they don't have. The older the transaction, the harder it is to tamper with. Nick Szabo ([@nickszabo4](https://twitter.com/NickSzabo4)) gives a great analogy of this being like a [fly trapped in amber](https://medium.com/@giftedproducts/cryptocurrencies-with-tim-ferriss-nick-szabo-and-naval-ravikant-51a99d037e04). The depth of the amber here represents the length of the block chain - older the amber layer, the harder it becomes to undo.

🎥 Here's a [video of the visual demo](https://www.youtube.com/watch?v=_160oMzblY8&t=616s)

A BRIEF HISTORY
---------------

In late 2008, an anonymous individual(s) who identified themselves as *Satoshi Nakamoto* published a paper on a cryptography mailing list describing the Bitcoin currency and how it solves the [double-spending problem](https://www.bitcoin.com/info/what-is-bitcoin-double-spending). The "Genesis Block" (Block 0 of the blockchain) was first mined in 2009.

In October of 2009, an exchange rate was established at US$1 = 1309.03 BTC. Bitcoin reached price parity with the US Dollar for the first time in February 2011. Over the past few years Bitcoin has ushered a wave of new [cryptocurrencies](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) ("altcoins") built on decentralised, peer-to-peer networks. However, it remains the de-facto standard with the [highest market capitalisation](https://coinmarketcap.com/).

At the time of writing, the value of one Bitcoin has reached an all-time high of US$4400. 

CLOSING REMARKS
---------------

I decided to write about this topic because I'm quite enthusiastic about the technology and feel that it is here to stay. Beyond currency, applications that are built on this **decentralised, network-centric** technology has the potential to drastically change how we transact, store, and agree on information by *removing the middlemen. *With this potential comes promises and speculation that drives some of the dramatic headlines we see today.

Instead of blindly giving into hype, or conversely, dismissing the technology completely, I believe it is important to understand its core fundamentals and capabilities before forming opinions about it. Hopefully, this post has effectively given you a brief overview of Bitcoin's blockchain technology, how it works, and why it matters.

This post was not intended for use as investment advice. The most valuable suggestion I can give here is to conduct your own due diligence and decide for yourself what you think about the technology. The speculation and general lack of understanding oftentimes lead to price volatility and the self-fulfilling-prophecy nature of the news articles that follow. See reddit user /u/SecondNad's visualization on Bitcoin search trends vs. its value:

![Source:  reddit](/static/media/search-trend-btc-val.png)

Source: [reddit](https://www.reddit.com/r/dataisbeautiful/comments/6aiked/bitcoin_google_search_trend_vs_bitcoin_value_oc/)

The peaks and troughs of this graph is roughly where you would find articles discussing either the unstoppable nature of Bitcoin or its impending doom. If you understand the fundamentals, you will have an easier time skimming these articles with a grain of salt. You'll come across stories of people who made a $200 investment a few years ago and are now millionaires from Bitcoin's price hike (see [Bitcoin pizza](http://uk.businessinsider.com/bitcoin-pizza-day-passes-2000-20-million-2017-5)). Keep in mind that these [HODL](https://bitcointalk.org/index.php?topic=375643.0)ers would have had to sit through some painful crashes without knowing whether it would ever recover, and hindsight is always 20/20.

It's also important to remember that the path to this world of decentralised systems is not without its obstacles. There are economic and regulatory challenges that the community has to overcome before we see this adopted by the masses. I invite you to check out some of the blockchain projects that are out there to fully appreciate the problems that this technology is capable of solving.

FURTHER READING & ADDITIONAL RESOURCES
--------------------------------------

1\. [The Internet of Money](http://amzn.to/2wHXB2E) by Andreas Antonopoulos was my first reading on Bitcoin. This book is actually a collection of speech transcripts by the author, who is one of the most well-known and respected figures in Bitcoin. It gives a very high-level (non-technical) view of the technology and gives great examples of its potential. It's a quick read and is in my opinion does an excellent job of breaking it down to layman's terms. The author also wrote [Mastering Bitcoin](http://amzn.to/2wHUWWF), another (more technical) bestseller on the topic.

2\. [Whiteboard visualization of the blockchain](https://www.youtube.com/watch?v=93E_GzvpMA0). This was THE video that gave me my "a-ha" moment on blockchain and the role of miners.

3\. [Blockchain visual demo](https://www.youtube.com/watch?v=_160oMzblY8&t=616s). A walkthrough of how new blocks are added to the chain, and why data on the blockchain is difficult to manipulate.

4\. The [original white paper](https://bitcoin.org/bitcoin.pdf) by Satoshi Nakamoto proposing the implementation of this peer-to-peer electronic cash system.

5\. [Timeline of Bitcoin's history](http://historyofbitcoin.org/)

6\. [How Bitcoin mining works](https://www.coindesk.com/information/how-bitcoin-mining-works/)

That's all for now guys, I hope this information was useful to you. While I did my best to deliver it as accurately as possible by only going off reputable sources, I am still very much a novice in the space. If there are any omissions or errors please do correct me. Otherwise, leave a comment below to let me know your thoughts and sentiment on Bitcoin! Have a good one,

- New Kid on the Blockchain

***Donations***:

🔸 BTC : 3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR

🔸 ETH : 0xdbF14da8949D157B57acb79f6EEE62412b210900

🔸 OMG : 0x04104047e0dd8e0e8456b828087610765878ebd7