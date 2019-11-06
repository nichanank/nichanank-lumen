---
title: Bitcoin Scaling, Lightning Network & The Future with Micropayments
date: "2019-01-05T23:19:04.121Z"
template: "post"
draft: false
slug: "/posts/bitcoin-scaling-lightning-network-the-future-with-micropayments/"
category: "Technology"
tags:
  - "Blockchain"
  - "Scalability"
  - "Bitcoin"
description: "The Lightning Network is a network of payment channels that was originally built on top of Bitcoin and has since extended to other blockchains. Individuals can open up peer-to-peer payment channels with one another and make many transactions without accruing the costs of on-chain fees whilst reaping the benefits of having a decentralized blockchain as an underlying layer of security. In this article we will explore how Lightning works, its use cases, and implications of the ability to do micropayments."
socialImage: "/media/image-2.jpg"
---

As we saw from previous articles on sidechains and state channels, scaling solutions built on top of an existing blockchain can greatly enhance its usability in payments and other applications. The [Lightning Network](https://lightning.network/) is a network of payment channels that was originally built on top of Bitcoin and has since extended to other blockchains. On Lightning, individuals can open up peer-to-peer payment channels with one another and make many transactions without accruing the costs of on-chain fees whilst reaping the benefits of having a decentralized blockchain as an underlying layer of security.

![A high-level depiction of payment channels, a type of state channel which specifically handles payment transfers. Implementations of state channels can vary - notable projects include  Lightning Network ,  Raiden ,  Trinity ,  FunFair , and  SpankChain .](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1546914956746-USG2EBW9TSMPNUORK10E/ke17ZwdGBToddI8pDm48kNG2KodaeIUo8oxmvEAw9nNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEKIo6liMpCK26T9LJk4Otf7gMnyHVzL87i6n8NCZeCxmbSd6kfRtgWHgNMDgGnmDY/Screen%2BShot%2B2018-10-08%2Bat%2B11.42.45%2BAM.png?format=1000w)

A high-level depiction of payment channels, a type of state channel which specifically handles payment transfers. Implementations of state channels can vary - notable projects include [Lightning Network](http://lightning.network/), [Raiden](https://raiden.network/), [Trinity](https://trinity.tech/), [FunFair](https://funfair.io/), and [SpankChain](https://spankchain.com/).

At any point, there is assurance that the blockchain will be there as an "unbribable" arbiter when the individuals want to settle or in case of dispute. Like on-chain Bitcoin payments, Lightning payments do not rely on trust and are cryptographically secured using hashes.  Fundamentally, it uses the underlying blockchain as a court, allowing people to transact millions of times **off-chain** to achieve instant finality for a fraction of the on-chain fees. Some stats:

![A snapshot of Lightning Network statistics as of 24/01/2019, courtesy of  1ml . Note that the fees are a far cry from that of on-chain transactions which can range from cents to several dollars.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1548347751121-C9TP271T8RHM8OAZTU5A/ke17ZwdGBToddI8pDm48kKiDXlMyLD_MNK9RkdnLSKIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2doyNu2sKLrzsSxXUMjqGLyr94tLkT2bWA5LIl_yi3uR_CjLISwBs8eEdxAxTptZAUg/Screen+Shot+2019-01-24+at+11.35.33+PM.png?format=1500w)

A snapshot of Lightning Network statistics as of 24/01/2019, courtesy of [1ml](https://1ml.com/statistics). Note that the fees are a far cry from that of on-chain transactions which can range from cents to several dollars.

BUILDING BLOCKS FOR PAYMENT CHANNELS
------------------------------------

So what are the key ingredients that makes these instantaneously final, low-fee transactions on Bitcoin possible?

-   **🔑Multisig addresses** are essentially wallets that require multiple private keys to "unlock" and spend bitcoins from. Multisig addresses can be set up to require any M out of N keys to unlock. For instance to require 2 out of 3 possible keys, 3 out of 5 etc.

    -   The Lightning Network often uses two out of two (2-of-2) multisig set-ups. Unlocking bitcoins from 2-of-2 multisig addresses requires two signatures from two dedicated keys, each held by the two transacting parties.

-   **⏳Time-locks** are limited smart contracts that are programmed to "lock bitcoins up" in an output and make them spendable (to be included in a subsequent input) only at some point in the future. Two types of time locks:

    -   **Absolute** type - CheckLockTimeVerify (CLTV) locks bitcoins up until a (more or less) concrete time in the future: an actual time and date, or a specific block height.

    -   **Relative** type - CheckSequenceVerify (CSV) takes a specific amount of blocks from tthe time a CVS transaction is recorded before the bitcoins can be spent again.

-   🔒A "value" (or "**secret**") is a long *unique* string of numbers that is practically impossible to guess, even for a computer with infinite tries. This secret can be "hashed" to produce a different string of numbers called a "hash."

    -   The hashing process is *one-way* meaning that producing the hash from a given value is straightforward, but it is virtually impossible to derive the value from its hash

These building blocks allow parties to make transact many times without the majority of them recorded on the blockchain at all, yet at any point in time, a party can submit their latest state of "balances" on the blockchain and claim their funds. Ultimately, payments on Lightning can be more accurately described as **Non-Broadcasted, Zero-Confirmation, Multi-Signature** bitcoin transactionswith some added *security mechanisms.* [4][5]

⚡️TRANSACTIONS ON LIGHTNING
---------------------------

A quick overview of the steps involved in Lightning transactions. Let's imagine a situation in which Alice wants to send $5 to Bob - for simplicity we'll be talking in dollars instead of BTC.

### **OPENING A CHANNEL**

1.  Both parties deposit $10 to a 2-of-2 multisig address in an **opening transaction**,recorded on the blockchain. Funds can only be spent from this address if *both* Alice and Bob sign a subsequent transaction. Additionally, Alice and Bob each create a **secret** and exchange its hash.

    Channel balances after initial deposit:

    ```
    🙍🏻‍♂️Bob $10
    ```

    ```
    💁🏻‍♀️Alice $10
    ```

2.  Alice now immediately creates and signs a "**commitment transaction**", in which she sends $5 to herself and $15 to a second multisig address. Instead of broadcasting the transaction to the network, she gives it to Bob. This second multisig contains a **CSV lock**, which means it can only be unlocked by Bob after a predefined number of blocks have been mined -let's say 100. It can also be unlocked by Alice if she knows Bob's secret (which she doesn't - she only has the hash)

3.  Meanwhile, Bob does the same but mirrored. He creates a commitment transaction as well, in which he sends himself $15, and $5 to a new multisig address. Alice can unlock this address if she waits an additional 100 blocks, or Bob can unlock it with Alice using her secret. Bob signs this half, and gives it to Alice.

    Balances after the commitment transaction:

    ```
    🙍🏻‍♂️Bob $15
    ```

    ```
    💁🏻‍♀️Alice $5
    ```

4.  After exchanging these "half-valid" commitment transactions and hashes of secrets, they *both* sign and broadcast the opening transaction. This transaction is recorded on the blockchain and officially opens the channel. This process takes ~10 minutes (the average time it takes for a new block to be added to the Bitcoin blockchain).

At this point, both Alice and Bob could sign and broadcast the half-valid commitment transaction they got from the other. If Alice does, Bob gets $15 immediately. If Bob does, Alice gets $5 immediately. But whomever signs and broadcasts the transaction will have to wait 100 blocks to unlock the subsequent multisig address and claim the remaining funds.

### **UPDATING A CHANNEL**

After this initial transaction to open the channel, Alice and Bob can transact with each other instantly using the funds allocated. Instantaneous transactions are made by passing signed transactions back and forth, spending from the 2-of-2 ledger entry. Let's continue with a scenario where Bob wants to send Alice $2 back. They want to update the channel state, to make the balance reflect this:

1.  Both create a **commitment transaction** in the same process described above. This time, Bob sends himself $13 and $7 to a new multisig while Alice sends herself $7 and $13 to a new multisig. These new multisig-addresses require **new secrets**: both Alice and Bob provide each other with new hashes, sign their new half valid commitment transaction, and give it to each other. They also hand each other their *previous* secrets used in the initial step.

    Balances after the latest commitment transaction:

    ```
    🙍🏻‍♂️Bob $13
    ```

    ```
    💁🏻‍♀️Alice $7
    ```

2.  Here again, both Alice and Bob could sign and broadcast the latest "half valid" commitment transaction they just got. Their counterparts would get their latest reflected balance immediately, while the broadcaster would have to wait 100 blocks. As such, the channel is updated.

If Bob were to broadcast the older commitment transaction in which he has $15, he would immediately $5 to Alice... and he would have to wait 100 blocks to claim his own $15. What's stopping him from doing this is the fact that Alice now knows his secret that's required to unlock the wallet, she could use this time to immediately claim her money as well as Bob's $15! The same is true the other way around. If Alice tries to sign and broadcast an old commitment transaction, Bob can claim all the money in the channel because he has Alice's secret.

The inclusion of the time-lock and secret therefore **incentivizes each party to play to play fair** and only ever sign/broadcast the **most recent** state of the channel.

### **CLOSING A CHANNEL**

If Alice and Bob cooperatively wish to close a payment channel, their funds can be cleared to the blockchain in ~10 minutes (the normal confirmation time). Prior to this, Alice and Bob may have transacted thousands of times on Lightning Network, unloading a huge burden away from the blockchain.

To close the channel, Alice and Bob simply have to sign and broadcast new commitment transactions to update the latest balances as above. From this closing transaction, they send themselves their fair share of the channel total as reflected in most recent channel state. [5]

🌐A **NETWORK** OF CHANNELS
---------------------------

If Alice wanted to pay $5 to a third person Charlie, she and Charlie *could* open up a payment channel between them - BUT they don't actually have to if Bob and Charlie already have an open channel with each other. Alice could **route** the money to Charlie by sending $5 to Bob, then Bob can send $5 to Charlie.

```
Alice routes $5 to Charlie through Bob
```

```
💁🏻‍♀️Alice → 🙍🏻‍♂️Bob → 👩🏼Charlie
```

The → here represents an open payment channel

There are 2 issues that arise with this naive setup:

-   What if Alice pays Bob, but he never pays Charlie?

-   What if Alice pays Bob and Bob pays Charlie, but Charlie claims she never received the money?

Alice needs to **ensure** that she only pays Bob $5 *if* he also pays Charlie $5. This can be accomplished again with cryptography. When Alice wants to send Charlie money, she tells Charlie to create a secret and send her the hash, then exchange the original secret with Bob for $5.

1.  Alice takes the hash from Charlie and tells Bob she will give him $5 if he provides her its corresponding secret that was created by Charlie.

2.  Bob turns to Charlie, gives Charlie $5 in return for the secret, then returns to Alice with the secret. Alice knows Bob must have gotten the secret from Charlie and therefore concludes that Charlie has got her $5. Alice can therefore confidently give Bob the money.

However, this is still not the *trustless* setup we would like because middleman Bob still has to:

-   Trust Charlie to really give him the secret after he sent her $5

-   Trust Alice to really give him $5 once he presents her the secret

### IN ORDER FOR THESE INTERACTIONS TO BE TRUSTLESS, THE **MONEY-FOR-SECRET TRANSACTIONS MUST BE ABSOLUTELY GUARANTEED ALONG THE NETWORK**

If Bob gives $5 to Charlie, he must be **guaranteed** to get $5 back from Alice. How can we ensure this? Again, this is where time-locks come in.

Rather than sending Bob $5 right away, Alice sends $5 to a **new** multisig address. The money locked up on this address can be unlocked in two different ways.

-   🖋Bob includes his signature and the secret

-   🔏Alice to includes her own signature with a CLTV-timelock: Alice can sign and broadcast the transaction only after a specified number of time has passed - let's say a week.

This **hashed timelock contract (**HTLC**)** ensures that Bob has a week to create a subsequent transaction in which he includes his signature + secret, and broadcast it to claim money from the multisig. Bob can only claim Alice's money if he provides the secret and broadcasts it over the Bitcoin network for Alice to see. If Bob doesn't provide the value in time, there is a "**time-out** alternative" for Alice to get her money back.

Meanwhile, Bob and Charlie has also established an HTLC. If Charlie claims her money from Bob, Bob will get the secret value in return and this will be visible on the blockchain.

It is important to note that Bob needs to obtain the secret from Charlie *before* Alice can reclaim the $5 from Bob. If Bob gets the value from Charlie only after Alice already reclaimed hers back, Bob is stuck in the middle. The time-out in Bob and Charlie's HTLC must expire ***before*** the time-out in Alice and Bob's HTLC expires. This is why HTLCs need **CheckLockTimeVerify** (absolute) and not CheckSequenceVerify (relative).

Bob functions as a "node" on the Lightning network, which are somewhat analogous to [miners on Bitcoin](https://www.coindesk.com/laolu-building-watchtower-fight-bitcoin-lightning-fraud). Bitcoin miners function as servers that process the transactions on the network in a decentralized manner without having control over the funds they help move. Bob cannot steal Alice's funds, as he will only receive her incoming payment if he has already sent the outgoing payment to the Charlie.

### WITH LIGHTNING NODES, RECEIVING A PAYMENT IS DEPENDENT ON HAVING ALREADY FORWARDED IT

Bob and intermediary nodes could opt to collect very small fees to participate in Lightning. The sender could opt to choose the route that works best for them (lowest fees, lowest latency etc.) So while there are *some* transaction fees within channels, they are on a completely different scale to on-chain fees.

🌐In summary, you can combine multiple payment channels to create a **routed network**. If my friend and I both have a payment channel open with the bar, say, for our tabs. I could send money to my friend *through* the payment channels that we have open with the bar. Via this mechanism, we can have a large network of payment channels where individuals can **route their payments** using the intermediary nodes to their destination address without having to establish new channels every time. The payments are **atomic**, meaning either the entire payment goes through all participants, or is timed out and cancelled entirely. [7]

✍🏼Essentially, the route is a series of trustless IOUs. None of the intermediary nodes can 'cheat' because the network is implemented per the contract terms. In fact, you don't even have to know who the intermediaries are --- just like you don't know how many hops it takes for your search query to reach Google. The first implementation of Lightning network is actually based on [**onion routing**](https://www.onion-router.net/Summary.html) like Tor. You don't know if the person you're getting it from is the source of the transaction or someone just relaying it, and you don't know if the next person is the destination or just the next intermediary, adding a layer of privacy. See a great explainer for how this works by Rene Pickhart [here](https://www.youtube.com/watch?v=toarjBSPFqI) and Andreas Antonopoulos [here](https://www.youtube.com/watch?v=D-nKuInDq6g).

![An infographic illustrating how onion routing works.  Source . Here is an  article  detailing onion routing by Bitcoin developers](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1548415649864-CQS8S2JHYQJVLZ1NDBOS/ke17ZwdGBToddI8pDm48kL7Tdkf7awovm37u-jqgAwEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc58tyWpEiLGr9Ta2twzG6oz7XiZayBcUXUGqjuGV4BzHS1KEWvKmP0nuHTG3FLAcD/image-asset.jpeg?format=1500w)

An infographic illustrating how onion routing works. [Source](https://pbs.twimg.com/media/CKhWOMrW8AAO8Tp.jpg). Here is an [article](https://coinjournal.net/bitcoin-developers-explain-tor-style-onion-routing/) detailing onion routing by Bitcoin developers

⚡️MICROPAYMENTS, REVISITED
--------------------------

One of the implications for a network of payment channels is that it allows us to do **micropayments** -- payments which are typically of sub-$10 in value transacted over the internet. With payment channels these micropayments can go down to [fractions of a cent](https://bitcoinmagazine.com/articles/sold-lightning-network-art-auction-goes-lowest-bidder/). Though prototype iterations of micropayment systems have been around since the mid-90s, their viability has been limited due to the technical hurdles that had to be overcome, major issues pertaining to:

-   **Security**: failure of the underlying software or hardware would drastically decrease trust in the system.

-   **Scalability**: the ability to handle a larger network of participants and rapid increases in transaction traffic. Most existing micropayment schemes is the heavy load on the trusted, centralized broker who handle accounts, distribute and cash coins. Third parties become a bottleneck as traffic gets heavy because they have to be involved in every transaction.

-   **Reliability**: most commercial cryptographic systems aren't as robust as they could be, and attacks are continuously reported on ATMs and utility meters. The perceived need for design and operational secrecy motivates banks and other central entities to build their own cryptography from scratch as opposed to iterating on and learning from other implementers. These novel systems engineering schemes often come with there are large holes, reducing the reliability of today's centralized micropayment systems

-   **Interoperability:** in previous iterations of micropayment systems, funds represented in one system can hardly be converted into that of another. Customers could only pay merchants that were affiliated to the same bank. At scale, digital cash and tokens should be seamlessly transferable in different micropayment systems and be fully inter-exchangeable between protocols

-   **Anonymity:** the amount of knowledge other parties have of others. Anonymity is a technical challenge that is defined on a fine line. [6]

Decentralized, permissionless technology like the Bitcoin blockchain could be the foundation upon which a global micropayments network is built, armed with the inherent properties that allows us to overcome the aforementioned technical hurdles.

The term "Internet of Value" has been commonly used when people talk about bitcoin and various other blockchain applications. What could the Internet of Value look like in the context of Lightning Network and micropayments? There are a myriad implications for our daily activities that arise from the ability to send unimaginably small amounts of value in real time.

STREAMING MONEY
---------------

Everyday transactions on Lightning are currently being conducted by those with more technical knowhow and enthusiasts. Its user pool is certainly small compared to the number of people it could serve as infrastructure gets more robust and user-friendly interfaces are built. Aside from millions of low-transaction-cost peer to peer transactions between Alice and Bob, a network for micropayments would bode significant implications on how we interact with consumer goods and services.

-   **📶Pay-as-you-go resources**

    -   How many times have you paid in bulk for an hour of metered street parking when you only need 20 minutes? Or paid a lump sum for 24 hours of internet for when you only need to do a few hours of work there? With micropayments, it becomes feasible for you to "stream" payments to Boingo for wifi or the city for your parking, accruing sums like $2.04 in costs instead of a pre-determined lump sum for an arbitrary period of use. 

-   **📨Pay-as-you-go services**

    -   [Earn.com](https://earn.com/) allows you to attach a small fee to an email. If the recipient responds to your email, they receive the attached fee. The fee becomes a small incentive for them to respond. At the moment this is typically used by influencers and people who receive tons of messages vying for their attention. If you want expert advice or had a query for a public figure, a message on Earn will increase the likelihood of getting a response than cold email. Perhaps micropayments could allow you to have private pay-as-you-go consultations and participate in Q&As with experts around the world, and you would only be billed for the amount of time you spent in the room. This transaction would instantaneously be settled thanks to a technology like Lightning.

    -   I found out about Earn (then 21.co) during my time as a technical recruiter - engineers are also signing up on Earn and asking that recruiters use the platform to reach out to them about a role, so there's that.

-   **📚Pay-as-you-consume content**

    -   [Yalls](https://yalls.org/) is a blogging platform where the content gets revealed as readers gradually pay as they read via Lightning. The money goes straight to the author without a middleman, and the reader can stop reading/paying whenever they want instead of having to first pay a lump subscription fee. What if we did this with e-books and other paid content? For the user, it would mean that instead of having to buy books one at a time you get access to millions of books, sending micropayments as you scroll down the page. If you're not enjoying it, you can just stop reading without having to spend money on the entire book*. Authors can come to a Lightning-based e-book platform to leverage its network effects. Recommendation engines, automated playlists or "reading lists" can be built on top, influencers can make a reading list and people can follow them and so on. If the platform itself adds value by building out the interface and various features (like Spotify), it could collect a subscription fee from the users but pay authors out real time with micropayments as people are consuming their content.

Of course, it's one thing to imagine the upside potential of how this would all work, but there are important social issues to also consider when building a world with micropayments. Micropayments aggregated across a period of time for a fiscally burdened family may be burdensome, and we should consider the implications of this business model on consumer behavior. The smallest of fees could be a big enough deterrent for a user from viewing a website, and free content is evolutionarily stable when it is open and resistant to change. I certainly wouldn't be happy if much of the online content I consume for free suddenly starts charging as I go through it. However, platforms like Yalls is an interesting way for content creators to be compensated for their work in real time in a way that wasn't previously possible. Lightning is a permissionless network that will, like the internet, be fertile grounds to experiment with business models that allows creators to be compensated in fairer ways without compromising on user experience. Such is the nature of experiments, many will fail. But from these efforts we could derive viable new business models that can disrupt entire industries.

UPDATE 28/2/2019 - I've added a [tippin.me](https://tippin.me/) button below to demonstrate a simple tipping app running on Lightning. You can link your tippin account to your twitter and share a QR code to receive tips on Lightning network. I haven't come across a lot of online tipping services, but something like tippin could in the future be added to Youtube, Medium, or Twitch-like platforms where you can tip small amounts of money to creators instantaneously.

ON THE SHOULDERS OF GIANTS
--------------------------

The internet as we know it transfers data in different packets. On the application layer protocol, we see a set of network "rules" that enables different features of the internet: email ([SMTP/POP](https://www.hmailserver.com/documentation/v4.2/?page=whatis_pop3imapsmtp)), voice transfer ([VoIP](https://computer.howstuffworks.com/ip-telephony.htm)), secure transfer and connection ([TLS/SSL](https://www.digicert.com/ssl/)). By being "online" - you can be on a Skype call whilst sending an email and securely browsing a website. These activities are governed by protocols running on the [internet protocol](https://www.computerhope.com/jargon/t/tcpip.htm) (IP). How this data is transferred is abstracted away in lower layers, and everything just *works* on our end thanks to the infrastructure that allows application developers to build user-friendly interfaces that we interact with without having to worry about how the data packets reaching and leaving our devices.

![Source](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1548385733676-EINQNUHHX9PE0VP1IMD3/ke17ZwdGBToddI8pDm48kFPFaBBkrKpwlLe51WEjbU9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx7nhPB_Q-t0OSgqfLcYpa_q3YPtgAcBWCZh0uzofrsB1fwMT6Pz7Bii7T2DkH1D-0/internet_layers.png?format=1500w)

[Source](http://www.snb.guru/sh_gcse/a-level/tcp_ip.php)

With the internet, you don't have to care how your search queries are being transmitted to Google's servers. The browser handles requests and responses for you and renders the information that you need. The Lightning Network as intended will allow us to do this with money. You can hit "send" and not have to worry about *how* it gets to the destination, but it will arrive almost right away without you having to trust a third party. With bitcoin and Lightning Network, we can attach *value* to the data being transferred and have **payments as packets**. These can come in the form of an on-chain, high value transaction or *streamed* to you as instant micropayments. The value attached to your transaction could be so small that it's unimaginable to do today. It doesn't make sense to bank transfer or Venmo someone 0.0001c. But with micropayments we could "stream" a series of transactions with 0.0001c for a certain period of time for a product or service, and creators can get paid in real time. [2]

💡The innovations that we are seeing today is occurring not just in the base layer (public blockchains), but those on top. Applications build on top of it can anchor to the underlying layer for transaction data. "Layer 2" can be the HTTP for blockchains with payment channel networks like Lightning enabling instant, high volume transactions. If one party goes offline, there are time-locked transactions on the chain such that all the other party has to do is broadcast the transactions and still get her money, **limiting counterparty risk**. [2][3]

![Taken from Elizabeth Stark's  presentation  - "The Importance of Layer 2" at Blockstack Summit 2017.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1548385676179-ZGHM7RB0VOB9DU8RJV7B/ke17ZwdGBToddI8pDm48kID_IKzwy3QH2A-E01w1E_kUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc-8BkNvWnPm2Xri8YUNWc7B7P4kSMzmSDO3zrgz5dhVuOY_H4EXRrVStnRZM8vZiS/Screen+Shot+2019-01-05+at+7.36.45+PM.png?format=1500w)

Taken from Elizabeth Stark's [presentation](https://www.youtube.com/watch?v=3PcR4HWJnkY) - "The Importance of Layer 2" at Blockstack Summit 2017.

Additional security and privacy features can be implemented on top of Lightning as well. Implementations of proposals for [sphinx](https://medium.com/chainrift-research/invoiceless-lightning-payments-with-sphinx-ce14af83cb8c) and [Watchtower](https://www.coindesk.com/laolu-building-watchtower-fight-bitcoin-lightning-fraud) enables things like invoiceless (spontaneous) payments on Lightning and privacy-preserving outsourcing of fraud monitoring respectively. These improvements will render the network to be more versatile toward a wider variety of use cases.

![👀A  Lightning Network explorer  mapping nodes around the world by ACINQ. One of  many](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1548405462364-YTDZD3ALOMN70EOV6Q4C/ke17ZwdGBToddI8pDm48kMYb5ZvuJU79lVrGXCSIVBJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfTNEEYxUbn27Z4JbWwPx6rTL51nIbLa3jEuZJFJE76_7zs2yPjc1ECvpa5Zm_kMqw/Screen+Shot+2019-01-25+at+3.37.13+PM.png?format=1500w)

👀A [Lightning Network explorer](https://explorer.acinq.co/) mapping nodes around the world by ACINQ. One of [many](https://gist.github.com/bretton/798ec38165ffabc719d91e0f4f67552d)

Like in the early days of the www. It is hard to imagine how the innovations enabled by the underlying technology can affect our personal lives and society at large. Articles from decades back that attempted to paint a picture of a future with "the World Wide Web" are mostly miles off, and this blog post may be laughable when read 10-20 years from now. What we *are* seeing is that Lightning is on a promising trajectory, with nodes being lit up around the world and transaction traffic growing steadily. Thought leaders and technical talent are chiming in to improve and build on Lightning, and well-funded companies around the world are making headway with interoperability, privacy, and security features.

In the next article we will explore some of these efforts in greater detail. Until then, do share your thoughts on Lightning and micropayments? Implications of money streaming? Receiving your salaries every minute instead of having to wait until the end of the month?

I hope this article was a useful primer to seed your understand of the Lightning Network, please share your thoughts, questions, and feedback below!

🥃Cheers

*If you appreciated this post,*

*BTC:* 3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR *🙏🏼*

⚡️ tippin.me

FURTHER READING & RESOURCES
---------------------------

1.  [Lightning Network whitepaper](https://lightning.network/lightning-network-paper.pdf)

2.  [[Elizabeth Stark](https://twitter.com/starkness)] [The Importance of Layer 2](https://www.youtube.com/watch?v=3PcR4HWJnkY)

3.  [Elizabeth Stark] [What is Lightning Network](https://coincenter.org/entry/what-is-the-lightning-network)

4.  [Brand7] [Lightning FAQ](https://medium.com/@The1Brand7/lightning-faq-67bd2b957d70)

5.  [[Aaron van Wirdum](https://twitter.com/AaronvanW)] Understanding the Lightning Network - parts [1](https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791/), [2](https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-creating-the-network-1465326903/), [3](https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-completing-the-puzzle-and-closing-the-channel-1466178980/)

6.  [Micropayments: a viable business model?](https://cs.stanford.edu/people/eroberts/cs181/projects/2010-11/MicropaymentsAndTheNet/issues.html)

7.  [[Andreas Antonopoulos](https://twitter.com/aantonop)] [Bitcoin, Lightning, and Streaming Money](https://www.youtube.com/watch?v=gF_ZQ_eijPs)

8.  [[Arjun Balaji](https://twitter.com/arjunblj)] [Lightning Network Infrastructural Build Out](https://www.theblockcrypto.com/2019/01/18/from-reckless-to-wumbology-lightning-networks-infrastructural-build-out/)

9.  [[Nick Szabo](https://twitter.com/NickSzabo4)] [A Mental Accounting Barrier to Micropayments](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/micropayments.html)

10. [[Dmytro Spilka](https://twitter.com/spilkadi)] [Micropayments: Bringing Cryptocurrency to Everyday Life](https://thebitcoinnews.com/micropayments-bringing-cryptocurrencies-into-everyday-life/)

11. [Lightning Network visualizer](https://graph.lndexplorer.com/)

12. [Onion Routing on Lightning with HTLCs](https://www.youtube.com/watch?v=toarjBSPFqI)

Background [image source](http://nadyn.biz/wp-content/uploads/HTML/Lightning-Backgrounds-14.html)