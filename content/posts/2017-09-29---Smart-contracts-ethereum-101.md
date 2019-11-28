---
title: Smart Contracts & Ethereum 101
date: "2017-09-29T11:20:00.121Z"
template: "post"
draft: false
slug: "/posts/smart-contracts-ethereum-101/"
category: "Technology"
tags:
  - "Blockchain"
  - "Ethereum"
description: "This article gives a gentle introduction to the fundamental ideas behind Ethereum, smart contracts are, and what we could potentially achieve with decentralised applications and programmable money."
socialImage: "/media/42-line-bible.jpg"
---

If you've scoured around for some information on blockchain technology, you are likely to have come across the name *Ethereum*. Like the experience of reading about Bitcoin for the first time, the abundance of technical terms and novel concepts may have left you more confused than when you first started reading. With this post, I aim to give a gentle introduction to the fundamental ideas behind Ethereum, explain what "smart contracts" are, and what we could potentially achieve with the technology.

To avoid repeating myself from the previous post too much, I'll assume you have some understanding of Bitcoin and blockchains. For a detailed (non-technical) introduction to these you can check out my previous post [here](http://www.nichanank.com/blog/2017/8/12/bitcoin-explained-using-emojis).

* * * * *

Let's quickly recap Bitcoin and the blockchain before we look at how Ethereum extends from these concepts.

**Blockchain**: a shared, public ledger of all the transactions that have already occurred. These transactions need not be financial (i.e. money) but *anything* of value - cars, property, insurance...

**Bitcoin**: the first decentralized currency that runs on blockchain technology. Verified transactions are stored on a public ledger (a blockchain) that essentially says:

**Beginning of ledger**\
Sarah 👩🏽‍🎓 → 👩🏻‍🌾 Jane *10 Bitcoins*\
Raj👨🏼‍🍳 → 👩🏻‍🎓 Amy *2.5 Bitcoins*\
Vic 👩🏼‍🌾 → 👨🏽‍🍳 Ali *5 Bitcoins*\
Amy 👩🏻‍🎓 → 👩🏼‍🌾 Vic *2 Bitcoins*\
... 

Bitcoin is a store of value, a "**digital gold**" that can be used as peer-to-peer cash. The decentralized nature of the blockchain removes the need for middlemen like banks, Visa, and PayPal to oversee and authorize a transaction between you and the receiver. Bitcoin is increasingly being used for remittances, micro-payments and e-commerce.

* * * * *

Now that we have seen some of the problems that Bitcoin solves, it's reasonable to ask: **what else can we do with blockchain technology?**

In the real world, we transact in more ways than just sending money back and forth. We buy cars, rent storage spaces, lease apartments... For these higher-complexity transactions, we often have to rely on middlemen, e.g. property agents and insurance agencies, who work to make sure that the transactions go through only* IF certain conditions are met - *that you have no criminal record and a sufficient credit score, for example.

... It turns out that these **conditional** transactions can also be achieved using the blockchain.

*Old capability*: Sarah 👩🏽‍🎓 → 👩🏻‍🌾  Jane *10 Bitcoins*

*New capability*: Sarah 👩🏽‍🎓 → 👩🏻‍🌾  Jane *10 Bitcoins ***IF** it's the first of the month and the year is <2020

This opens up whole new world of possibilities because the conditions after the "IF", and the nature of the transactions can be as complex as we program it to be.

Consider a vending machine that operates using a few simple rules.

> *IF **inserted amount** == **display price** → vend selected item*

> *IF **inserted amount** > **display price** → vend selected item and give (**inserted amount - display price**) as change*

> *IF **inserted amount** < **display price** → do nothing and give back **inserted amount** after 60 seconds of inactivity*

These rules can be seen as a **contract** between you and the snack manufacturer. The contract can be written as code that runs when the buyer interacts with the machine, behaving exactly as programmed and (hopefully) as the buyer would expect it to.

* * * * *

Assuming that the machine vends as expected and is very robust, what else can go wrong for the buyer or manufacturer?

-   Someone with technical knowledge can hack the machine to give themselves free snacks or extra change
-   The manufacturer can get greedy and reprogram the rules, e.g. rounding all change down to the nearest whole number
-   The machine runs out of stock or change
-   Electricity gets cut because the manufacturer forgot to pay the electricity bills

We can try addressing these problems by making the contract (the program) a bit *smarter*, giving it more autonomy, fidelity, and control -- making it a **smart contract** that is:

**Immutable**: the code cannot be tampered with once deployed, even by its own author

**Self-executing**: runs autonomously as programmed and is safe from interference

Able to unilaterally **control digital assets**: can send or receive autonomously

The smart contract *itself* can therefore act as sender/receiver on a blockchain, making transactions and performing tasks exactly as programmed.

**ENTER ETHEREUM...**
---------------------

Like Bitcoin, Ethereum has a blockchain that contains transaction history. Ethereum's native token is called **Ether** which you can send or receive like you do with Bitcoin.

Sarah 👩🏽‍🎓 → 👩🏻‍🌾 Jane *10 ETH*

However, while Bitcoin only has one type of account - a **user account **👤 (Sarah, Jane, Tom etc.) - Ethereum has an additional type of account: a **smart contract** 💿 (computer program).

The Ethereum blockchain might look more like:

**Beginning of ledger**\
Sarah 👩🏽‍🎓 → 👩🏻‍🌾 Jane *10 ETH*\
Jane 👩🏻‍🌾 → 💿 VendingMachine *1 ETH*\
VendingMachine 💿 → 👩🏻‍🌾 Jane *0.5 ETH*\
Amy 👩🏻‍🎓 → 👩🏼‍🌾 Vic *2 ETH*\
... 

In the above example, Jane might have overpaid* for an item in VendingMachine, so the contract automatically gave her the 0.5 ETH**** change as programmed. Note that smart contracts can "hold" digital assets and have nonzero balances as well.

**There's no reason why Jane can't pay the exact amount for an item, as ETH micro-payments are also possible. Perhaps in this example she changed her mind about how many items she wanted*

***0.5 ETH is about $150 at the time of writing... looks like Jane enjoys some bougie snacks*

![Etherscan.io &nbsp;is the Ethereum blockchain explorer. Here, we can see transactions occurring in real time, search transaction IDs (Txhash) to check their status, and explore different accounts on the blockchain. In this example we can see that senders/receivers can either be  normal accounts &nbsp;or  contract accounts  (denoted by 📄).](/static/media/etherscan.png)

[Etherscan.io](https://etherscan.io/) is the Ethereum blockchain explorer. Here, we can see transactions occurring in real time, search transaction IDs (Txhash) to check their status, and explore different accounts on the blockchain. In this example we can see that senders/receivers can either be **normal accounts** or **contract accounts** (denoted by 📄).

So in addition to vending capabilities, we can also program the VendingMachine to take care of things like electricity bills, low-stock alerts, and even payments for the manufacturers' staff. For example:

> *IF **current stock for item x** == **10% of capacity** → send "low stock: item x" message to manufacturer*

> *IF it's the **last day of the month** → send payment to electric company*

> *IF **total balance > 0** after paying electricity costsAND**it's the **last day of the month **→ split profit evenly and send to each of the manufacturers' employees*

A "transaction" on the Ethereum blockchain can refer to:

-   initial deployment of a smart contract onto the blockchain [💿  📖]
-   simple transfer of ETH [👩🏻‍💼→👨🏼‍⚕️* 2 ETH*] or [💿 → 👨🏼‍⚕️ *2 ETH*]
-   transfer of ETH that executes a program [👩🏻‍💼 → 💿* 2 ETH*] or [💿 → 📀* 2 ETH*]

At any given point in time, the Ethereum blockchain therefore contains a **history of transactions** as well as "current" information - the most recent **state **of the all the programs including its account balance, code, and storage.

Like Bitcoin, every (full) node in the network processes every transaction and stores the entire **state**.

* * * * *

Ethereum: a general-purpose blockchain
======================================

Today, anyone can create an app and deploy it to the App Store/Google Play store for people to download and run. These applications are owned by third parties who typically store our information (Instagram followers, Uber rating, credit scores) in centralised servers - single points of failure that are vulnerable to [hacks](https://www.economist.com/news/leaders/21728894-security-breach-equifax-was-handled-spectacularly-badly-other-firms-take-note).

Similarly, anyone can code up a smart contract and upload it onto Ethereum's blockchain for people to interact with. Because the program's *code is on the blockchain* and the program is *executed on the blockchain*, smart contracts are **decentralised applications** (dapps) which share the blockchain's distributed nature, immutability and permanence. The information is scattered across the network, making it immune to hacks *[assuming that the program is w](https://www.coindesk.com/understanding-dao-hack-journalists/)[ell-written](https://www.nichanank.com/blog/2017/9/26/ethereum-smart-contracts-and-tokens-101#)*.

WHAT CAN WE DO WITH DECENTRALISED APPLICATIONS?
-----------------------------------------------

I will explore specific use cases in detail in future posts, but here are some examples I find especially interesting: 

-   **👤  Identity and reputation**

We can use smart contracts to register domain names like "nichanank.com", "ethereum.org". Users can deposit Ether into the a DomainName smart contract account and in return, the program transfers *ownership* of the domain name to the user if it's not already taken. 

Notable projects: [Civic](https://www.civic.com/), [uPort](https://www.uport.me/), [Namecoin](https://namecoin.org/)

-   **☁️  Cloud storage / cloud computing**

Instead of paying for storage space on centralised servers like Dropbox or iCloud, users can store files in a cheaper and safer way on the blockchain. The data is broken into small pieces that are randomly stored on computers across the network. In return, individuals earn small quantities of money by renting out space on their own hard drives - like an "*airbnb for cloud storage".*

We can also distribute tasks that require a lot of computational work such as CGI rendering, protein folding simulations, and movie animations, and have thousands of machines working on different parts of the problem concurrently - collaboratively completing [tasks that usually take days](https://www.quora.com/How-long-does-it-take-to-render-a-Pixar-film) in minutes. Perhaps you can opt to lend your computer CPU to help render a Pixar movie, and get compensated for it.

Notable projects: [Storj](https://storj.io/), [Filecoin](https://filecoin.io/), [Golem](https://golem.network/)

-   **👨‍👩‍👧‍👧  Crowdfunding / donations**

We can have a decentralised version of Kickstarter on the blockchain, where fundraisers and contributors can raise money to fund projects without needing to rely on third-party companies. The rules can be programmed such that the smart contract executes on the project if the target amount has been raised by a given deadline, otherwise the smart contract returns funds automatically.

We could also think about donation platforms that run via smart contracts on the blockchain. Thanks to the transparent nature of the system, we can enjoy the visibility into what our money is being used for. For example if you're someone who is passionate about Alzheimer research, you could transfer your donation to a smart contract that automatically allocates funds to a lab - powering MRI machines and microscopes.

Notable projects: [Starbase](https://starbase.co/), [Giveth](http://www.giveth.io/)

.....

🔮 Back in the dawn of the internet era, we could not have foreseen things like Facebook, Youtube, Spotify or Instagram. Similarly, it is hard to predict today what blockchain technology will be used for in the future. However we can look at its potential and think about how we can begin to solve the problems we currently face.

### FUELLING THE MACHINE...

⚡️ Because programs require computational "work" to perform an action or set of actions, there is a cost associated with executing contracts and transactions on the Ethereum blockchain. This cost is related to the number of computational steps that a program undergoes. Unlike Bitcoin transaction fees which only takes into account the size of a transaction (kB), Ethereum smart contracts can perform an arbitrary number of computational steps. Therefore, the higher the number of operations a program performs, the higher the cost to run it.

⛽️ Ethereum's unit of computational "work", i.e. its unit of program execution/transaction fee, is **gas**. Gas helps to ensure that the network doesn't become bogged down with meaningless (spam) transactions. Transactions carrying insufficient fees "run out of gas" mid-computation -- protecting the network from [infinite loops](https://en.wikipedia.org/wiki/Halting_problem). Gas cannot be "owned" but is instead converted from Ether paid by the sender, then converted back and paid out to miners as Ether -- we do this instead of paying fees directly with Ether to separate the **price**** for the computation** (tied to amount of "work") from the **price of Ether** (tied to market fluctuations).

![MyEtherWallet &nbsp;is an open-source wallet where you can store, send, and receive Ether.&nbsp;(as well as other tokens)](/static/media/myetherwallet.png)

[MyEtherWallet](https://www.myetherwallet.com/) is an open-source wallet where you can store, send, and receive Ether. (as well as other tokens)

This [stackexchange thread](https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas) has a great explanation of gas in detail.

A BRIEF HISTORY
---------------

Ethereum was first proposed in 2013 by [Vitalik Buterin](https://about.me/vitalik_buterin), a programmer who was 19 years old at the time. The [pre-sale of Ether](https://www.ethereum.org/ether) was announced in June of 2014 and went on to raise >$14 million the following month. Also in 2014, [Gavin Wood](http://gavwood.com/) invented a [Turing-complete](https://stackoverflow.com/questions/7284/what-is-turing-complete) object-oriented programming language for writing smart contracts called [Solidity](https://solidity.readthedocs.io/en/develop/).

In late 2015, **ERC-20 **-[a standard for writing Ethereum smart contracts](https://edcon.io/ppt/two/Dmitry%20Khovratovich_Secure%20Token%20Development%20and%20Deployment_EDCON.pdf) - was developed. The standard defines a list of rules about how tokens will function in the Ethereum ecosystem. Companies used this protocol to raise funds via Initial Coin Offerings (ICO). I'll be writing more about tokens in future posts. Today, [hundreds of dapps](https://dapps.ethercasts.com/) are running on the Ethereum blockchain.

The price of ETH reached an all time high of >$400 in June 2017, recording a 5000%+ price surge since the beginning of the year. At the time of writing, ETH is trading at ~$300.

CLOSING REMARKS
---------------

**This is essentially an elaborate version of my [tweet storm](https://twitter.com/nichanank/status/910159355273555969) from a few weeks ago*

Although we have made a lot of progress with blockchain technology over the past few years, it is still very early days. With Ethereum, we have a **general-purpose blockchain** on which anyone can deploy, download, and run decentralised applications. 

It's important to note that blockchain technology still has a ways to go before its capabilities can match that of today's mainstream technologies. For example, while Bitcoin and Ethereum can only process a few transactions per second, whereas Visa can process 1000s/second, and stock exchanges can process 10000s/second. There is ongoing technical work to figure out pave the way forward to scale out blockchain technologies.

While there is no shortage of genuine enthusiasm for the blockchain's potential, there is another motivator that is driving a huge surge of interest into the space - **money**.

A tl;dr summary of most #trading Slack channels:  🚀 *moon* 🤑 💥 *FUD *🤑 💸 *moon* 📈 *fomo* 💯 🚀 

If you take a look at the [stats](https://icostats.com/roi-since-ico) of top performers post-ICO, it is understandable why people have been scrambling in to get a slice of the crypto pie. While I will be writing about specific tokens and trading in the future, my main goal is to advocate for education around blockchain technology and foster discussions about projects beyond token price.

It's also important to note that this massive influx of cash has alleviated the funding pressure for blockchain projects, incentivising development teams across the globe to rapidly implement and iterate on their ideas. In the rough sea of speculations, we as a community are able to directly interact with the founding members of projects that we care about. To me, this is especially exciting beyond riding the wild price fluctuations. Imagine being in a small chatroom with Larry Page, his team, and other early adopters when primitive versions of the Google search engine were being developed!

Today, there are plenty of channels where you can inquire about the product and its roadmap directly, as well as share ideas to help shape what it is to become. If we look beyond trading charts and take advantage of the countless resources at our fingertips, we can shape what the future holds through collaboration and idea-sharing, and hopefully enjoy investment returns along the way.

Here is a presentation I gave for one of our weekly Lunch & Learn sessions at work. Each week, people can volunteer to share their knowledge about any topic of their choice - be it programming languages, new tools, or specialist hobbies. The information presented here is as of late October 2017.

![](https://vimeo.com/249986813)

ADDITIONAL RESOURCES & FURTHER READING
--------------------------------------

1.  An introduction to Ethereum by Vitalik Buterin, [[video](https://www.youtube.com/watch?v=66SaEDzlmP4)] [[slides](http://upyun-assets.ethfans.org/uploads/doc/file/57389fef0d4a4a86a17bd90f5837b03e.pdf?_upd=Ethereum_in_40_Minutes.pdf)]
2.  "Ethereum Deep Dive" presentation by Blockchain@Berkeley. [[video](https://www.youtube.com/watch?v=2jisWLxf38E&t=2215s)] [[slides](https://drive.google.com/file/d/0ByHuc4xBso7TX1BGSk1mYkhwNmM/view)]
3.  A high-level explanation of [smart contracts](https://www.coindesk.com/making-sense-smart-contracts/) from Coindesk
4.  Another useful [video](https://www.youtube.com/watch?v=w9WLo33KfCY) by Kevin Healy on the role of smart contracts in Ethereum
5.  [Ethereum whitepaper](https://github.com/ethereum/wiki/wiki/White-Paper)
6.  Documentation for [Solidity](https://solidity.readthedocs.io/en/develop/), a programming language for smart contracts

*Kudos to reddit user [/u/ianjmeikle](https://www.reddit.com/r/ethereum/comments/67qq1r/anyone_wanna_have_this_design_on_a_t/) for the awesome background image

I'd love to hear your thoughts and what applications of the blockchain you are most excited about. In future posts I will be writing about my thoughts, dive in to specific projects, and share various ways in which you can participate in the community. I hope this post was useful in helping you understand Ethereum a little better!

🔷 ETH - 0xdbF14da8949D157B57acb79f6EEE62412b210900