---
title: Scalability pt. 2 - State Channels & Counterfactual Instantiation
date: "2018-10-12T10:29:32.121Z"
template: "post"
draft: false
slug: "/posts/scalability-pt-2-state-channels-counterfactual-instantiation/"
category: "Technology"
tags:
  - "Blockchain"
  - "Scalability"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/image-2.jpg"
---

As a follow on to my previous post on scalability and sidechains I thought it would make sense to give state channels a closer look. I'll introduce some core ideas and features of state channels, explore current techniques for *generalized* state channels, and current challenges and limitations. By the end, you'll hopefully have a better understanding of state channels and the implications of having a generalized framework for them. Without further ado let's get right to it!

TACKLING SCALABILITY WITH LAYER 2
---------------------------------

In order to achieve day-to-day usability at scale, blockchain applications (whether it be for payments, games, trading etc.) need to give users a seemingly frictionless experience where they don't need to wait a many seconds to minutes before the next 'thing' can happen. An online money-at-stake game of chess or tic-tac-toe would be pretty unplayable if you had to wait ~20 seconds for your move to be recorded and mined into the next block. Worse still, you would have to pay gas fees with every move.

Fast transactions *on* the blockchain typically come at the cost of decentralization: in more centralized networks, you don't have to wait for as many nodes to come to consensus on the latest state of the blockchain.

The essence of ***layer 2*** scaling solutions such as [sidechains](https://nichanank.squarespace.com/blog/2018/8/26/sidechains-scalability-a-closer-look-at-rootstock-rsk) and state channels is that the **majority of transactions do not have to occur on the main blockchain itself**. Instead, they can occur on an "off-chain" system that is anchored to the main chain - so users can enjoy speed and low costs in addition to security that comes with the decentralized "first layer" blockchain such as Bitcoin and Ethereum. You can find out about sidechains in my [previous post](https://nichanank.com/blog/2018/8/26/sidechains-scalability-a-closer-look-at-rootstock-rsk), which also lists additional resources about sidechains and scaling.

Now, onto state channels...

A **state channel** is a two-way channel between two parties (e.g. between two users or between a user and a machine). The transactions take place entirely ***off* the blockchain** and **exclusively between the participants**, meaning that:

-   In-channel transactions are subject to much lower transaction fees

-   On-chain transaction fees are only charged to "open" and "close" the channel... settling final state changes by updating the blockchain

![A high-level depiction of payment channels, a type of state channel which specifically handles payment transfers. Implementations of state channels can vary - notable projects include  Lightning Network ,  Raiden ,  Trinity ,  FunFair , and  SpankChain .](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1538973787597-A3DQUNMBERNDEU6ZQORL/ke17ZwdGBToddI8pDm48kNG2KodaeIUo8oxmvEAw9nNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEKIo6liMpCK26T9LJk4Otf7gMnyHVzL87i6n8NCZeCxmbSd6kfRtgWHgNMDgGnmDY/Screen+Shot+2018-10-08+at+11.42.45+AM.png?format=1000w)

A high-level depiction of payment channels, a type of state channel which specifically handles payment transfers. Implementations of state channels can vary - notable projects include [Lightning Network](http://lightning.network/), [Raiden](https://raiden.network/), [Trinity](https://trinity.tech/), [FunFair](https://funfair.io/), and [SpankChain](https://spankchain.com/).

While **payment channels** allow for instant *payments* between two parties (e.g. [Lightning Network](http://lightning.network/) on Bitcoin), **state** channels apply this to idea *any* kind of operation that update the **state** of programs running on the blockchain. In other words, state channels are the more generalized form of payment channels, its use case extending from payments to more complex applications.

Essentially, transactions within a state channel are transactions which *could* occur on the blockchain itself, but are instead conducted *off* the blockchain for scalability. The main blockchain is only used for settlement and verification.

[Yall's](https://yalls.org/) is a blogging platform that allows writers to monetize their content without having to rely on a third party. Readers can make **micropayments** to gain access to the content incrementally, each payment gradually revealing more of the content should the reader decide that it's worth continuing. This sort of micropayment or "**money streaming**" use case would be slow and quickly accrue in transaction costs if it were conducted on the blockchain itself. Instead, payment channels enable this use case. Yall's is powered by [Lightning Network](http://lightning.network/), a payment channel network that runs on Bitcoin.

![A blog post on Y'alls](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1539287544020-KPS2ONGVWAU9QKH646Q1/ke17ZwdGBToddI8pDm48kJrU3GQImEHj_lVRX6ng7zwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dluvbnoANZ6pVbbjPADt95KHcDJAillefKgYvhVlpaeRCjLISwBs8eEdxAxTptZAUg/Screen+Shot+2018-10-12+at+2.52.08+AM.png?format=1500w)

[A blog post on Y'alls](https://yalls.org/articles/97d67df1-d721-417d-a6c0-11d793739be9:0965AC5E-56CD-4870-9041-E69616660E6F/907bf246-3a65-4afb-99a6-3ddef4903b84)

What if we wanted to do something similar with more complex programs? Can decentralized applications (dapps) be "channelized" and used with **minimal on-chain footprint**?

### 💡HERE IS HOW THEY MIGHT DO SO USING STATE CHANNELS...

Say Bob wants to enter a game of tic-tac-toe with Alice where the winner gets 1 ETH. He enters a state channel and invites Alice to play. If Alice accepts, they can start the game as follows:

1.  **Agree to start a game** and each **deposit** 1 ETH each into the a smart contract, which functions as an escrow wallet

2.  **Enter into a state channel** which initializes a blank 3x3 board

3.  Take turns to place **X**s and **O**s on the board (updating the "state" each time)

    -   If Bob is placing an **X**, we check if:

        -   It's Bob's turn

        -   There's an empty square where Bob wants to place the X

        -   ...and vice versa with Alice's **O**s

    -   In general we update state with **f (current state, next action) ---> new state**

4.  Repeat to update the state each time until one of 3 end-states is reached:

    1.  Bob wins OR

    2.  Alice wins OR

    3.  It's a draw

5.  **Exit the channel** when the game is over, and escrowed funds are then distributed in whatever way that was first agreed upon (e.g. winner takes all)

📑There are two main pieces of logic at play here. The **game logic** (the rules of tic tac toe) and the **state channel logic**,a "judge" contractwhose purpose is to hold deposited funds in escrow and distribute winnings when the game is over. In this example, the gas fees are paid when Bob submits a game invitation to Alice, when they open the state channel, and when they close the state channel. **In-channel transactions that update the game state do not accrue on-chain gas fees**.

![You can read the technical details for implementing this channelized tic tac toe game  here .](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1539274118079-D4ZXM0JFXQW3USNF5V12/ke17ZwdGBToddI8pDm48kCRW_o2yYO9yDV5YMBxwaq5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwLdWwZ9UiRIsoA8OqkjVC07qnALMfUR3kMuTOY-JOC--h6al3duDUrvd0en_pZvyw/Screen+Shot+2018-10-11+at+11.08.03+PM.png?format=1500w)

You can read the technical details for implementing this channelized tic tac toe game [here](https://medium.com/statechannels/state-channel-applications-1f170e7d542e).

In this tic-tac-toe state channel, Bob and Alice are engaging in a rapid "countersigning" of updated game states - a cryptographic acknowledgement that says "Yes, this is indeed the latest state". When a player makes the winning move, this most updated "state" can now be used to claim funds.

Each state update is timestamped and the **latest update would "trump" the previous one**. Each party holds a record of these previous states. So if Bob lost and he submitted an outdated, "state" state in which he still had a chance of winning, Alice could submit the latest end state and prove that Bob was cheating. Bob can then face whatever repercussions was agreed upon.

*Note that while we are constantly referring to the on-chain contract for the rules of the game, we are not calling it as part of a transaction. This type of interaction with the blockchain is not subject to fees and used to simply "view" what's on the blockchain without making changes to it, e.g. what [Etherscan](http://etherscan.io/) does.

### WHAT DO STATE CHANNELS OFFER?

-   **Faster transaction speed, lower costs**:micropayments and money streaming would be impractically expensive if performed as on-chain transactions. Instead, they become viable in a state channel

-   **Privacy**: only the channels' opening and closing transactions are public. The main activity is happening "inside" a channel between participants, off the blockchain

-   **Instant finality**: because any change of state requires countersigning (cryptographic consent) from the parties involved, as soon as they sign a state update it can be considered final - no need to await "confirmations" from a blockchain.

    -   This feature is thanks to the requirement that **total consent** from both parties must be obtained to enter the channel in the first place, giving users very high guarantee that they can "enforce" the latest state on-chain if necessary

    -   Because of this continual need for obtaining and proving direct consent, state channels depend heavily on the **availability** and **responsiveness** of state channel participants (or their delegates).

State channels are particularly useful where a **defined** set of participants are going to be exchanging ***many* state updates** over a long period of time.While there is an initial cost in deploying the "judge" contract to open a channel, once participants enter the channel the cost per in-channel state update is extremely low.

💡HOW CAN WE IMPROVE ON THIS IDEA?
----------------------------------

So far, we've managed to move some transactions off-chain for some fast, cheap, instantly final transactions. But still, what a big UX impediment it is to have to open and close one state channel, and open *another* channel every time you wanted to run a new channelized app?

🛣What if we designed a system such that, instead of entering into silo'd, app-specific channel for each game, we enter a **metachannel** in which you can quickly go from one "subchannel" to another, without having to interact with the blockchain at all? You can join various subchannels and play games, make fast payments, and run dapps (using smart contracts), all managed by one metachannel contract.

This is possible thanks to a technique called **counterfactual instantiation**. When participants enter into a metachannel, they are agreeing to be bound by an *off-chain* contract. In other words, the app logic and settlement logic of games within these metachannels are smart contracts that ***could* be on the blockchain, but are not**.

💭If the blockchain was a world in which you had to pay fees for every move you make. You want to play chess with your friend, how might you minimize your costs? One way would be to *not* make "real" moves in the world to play this game. Instead, you and your friend can *imagine* that you are playing this game, taking turns to update this shared imaginary game state. If you disagree on the game state at any point, you could instantaneously turn this imaginary state into something that is true in the real world, and make a claim that this is the **latest** agreed upon state. If you won, your friend would be bound to make a real-world payment to you accordingly. The process of imagining this game is counterfactual instantiation.

Counterfactual instantiation enables us to sign commitments in state channels **without** actually requiring these contracts to be deployed or invoked. What's important is that the contracts **could** be deployed unilaterally if there is a dispute. Once the commitments have been signed inside a state channel, **participants can act as though it were a final on the blockchain** because at any time, they *could* deploy it to the blockchain. If all is well, the game contract needn't be deployed at all.

### 🤔WHAT *DO* WE NEED ON THE BLOCKCHAIN TO ENABLE THIS?

-   **MULTI-SIGNATURE WALLET**: In order to enter into a metachannel, the participants still need to make an initial deposit to open it. Therefore, an on-chain multi-signature wallet will hold these deposited funds in escrow, its signers being channel participants

    -   Participants can also make **instant deposits** and **instant withdrawals** into or out of the metachannel by making on-chain transactions to this multisig

-   An on-chain **REGISTRY** is needed to keep track of counterfactually instantiated contracts. The same instance of it is shared among all subchannels. The registry allows participants to:

    -   Counterfactually instantiate a contract and refer to it without having to deploy it

    -   Resolve the mapping of **counterfactual addresses** to **Ethereum addresses** (similar to how DNS maps domain names to IP addresses)*

    -   Deploy counterfactually instantiated contracts if there is a dispute, and register the deployed contract on the blockchain

*Contract addresses are deterministically generated by content. You don't need to deploy an address to the blockchain in order to obtain the address for it --- just compute it's hash!

A depiction of what an Alice-Bob metachannel might look like:

![Solid borders = on chain, Dotted borders = counterfactual objects  * Note that metachannels can have more than 2 participants. There can be an arbitrary number of participants, as long as the  set of participants are defined  when the multisignature wallet gets created.  My primary sources when making this illustration were Spankchain's generalized state channels  implementation  and  L4's paper  for generalized state channels.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1539317395938-GIZ0VU2EJEUK3VVD024T/ke17ZwdGBToddI8pDm48kIxLyQKNvCJV1VqlQdvRw1V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm1FhocyD9gYphub6l63vn0CVBnqXSLUrwyXVsPf6Tc-QA9sAQ_wx2hqx-oBbvclHT/Screen+Shot+2018-10-12+at+11.09.06+AM.png?format=1500w)

Solid borders = on chain, Dotted borders = counterfactual objects

* Note that metachannels can have more than 2 participants. There can be an arbitrary number of participants, as long as the **set of participants are defined** when the multisignature wallet gets created.

My primary sources when making this illustration were Spankchain's generalized state channels [implementation](https://github.com/SpankChain/general-state-channels) and [L4's paper](https://l4.ventures/papers/statechannels.pdf) for generalized state channels.

With this setup, the installation and the opening/closing of new applications (i.e. subchannels) will not require any on-chain transactions. The user experiences channelization by default, taking advantage of the blockchain in a cheaper (no on-chain transactions), instant, and privacy-preserving way.

When a dispute needs to be resolved, you can deploy the counterfactually instantiated contract onto the blockchain with the conditional payments intact. This then communicates to the multisig how the funds should be distributed.

In our imagined game analogy above, if all goes well you and your friend can just keep imagining up new games and play them without having to make real world moves at all. The only thing that *does* occur in the real world is deposits and withdrawals.

* * * * *

[**Counterfactual**](https://counterfactual.com/) is an [open source project](https://github.com/counterfactual/contracts) to build a generalized framework that manages the "heavy lifting" of generalized channel architecture, providing an out-of-the-box infrastructure for developers to deploy their applications inside a state channel. Counterfactual presents a simple API of basic functionality to the application, where developers don't have to be state channel experts to deploy channelized applications. They can simply reuse standard functionality such as simple payment, conditional payment, atomic swaps, etc.

Their approach is object-oriented, modular and contract-based. They are not the only team working on this framework but in the future, developers will be able the build channelized decentralized applications (dapps) that take advantage of the primitives that derive from this research, without having to implement the core functionalities from scratch.

⛓COMPARISON TO OTHER L2 SCALING SOLUTIONS
-----------------------------------------

... specifically Plasma and other childchain/sidechain models

### SIMILARITIES

-   **Both allow users to restore state to the original blockchain** even when the off-chain state modification-mechanism has failed

-   **Both depend on the assumption that new transactions can be published to (and finalized on) the underlying blockchain**.

    -   Transactions are needed when depositing to or withdrawing from a deposit into a channel or childchain. The blockchain can also serve as a judge who is able to resolve dispute amongst participants

-   **Both assume censorship resistance of the original blockchain**: selective censorship of a participant's submissions to the main chain can prevent that participant from safely exiting a channel or child chain

    -   Therefore, state channels' safety properties depend directly on the **safety** and **liveness** properties of the blockchains where their state deposits are locked

### DIFFERENCES

-   State channels don't involve the creation of "childchains" pegging to the main blockchain, but rather **back-and-forth signing of state updates** in a channel, the latest update trumping an older ("stale") one

-   State channels can perform **instant withdrawals** when all of the parties consent to the withdrawal. If Alice and Bob agree to close out a channel, they can agree on the final state and get their assets out of the channel immediately. Childchains mandate a delay ("**challenge period**") when withdrawing state to the main chain

-   State channels proceed by **total consent**. When participants enter into state channels, they choose other parties they want to interact with and add them to the set whose consent must be obtained to operate on the deposited state.

-   Unlike Plasma, state channels must have a **defined participant set**. While you can have an arbitrarily large number of participants in a channel network, you can't send channelized payments to someone who isn't in the network without doing an on-chain transaction to update the participant set.

    -   This means **channelization isn't currently suitable for some applications**. For example, a bounty that is put up to find code bugs or solve other problems would require that anyone should be able to submit a solution and claim the bounty. If they aren't in the channel already, they would have to make a deposit to join the channel and *then* collect the bounty - cancelling out the benefits over just offering this bounty on-chain.

In general state channels are more tightly constrained compared to other scaling solutions. However, its features render it a suitable candidate for many use cases. It's important to also note that we aren't limited to just picking *one* of these scaling solutions! Building a state channel on a child-chain and doing many transactions on it *should* be cheaper and faster than performing those transactions on the childchain directly.

CONCLUSION
----------

Battle-tested, security audited smart contract frameworks such as those from [OpenZeppelin](https://openzeppelin.org/) have allowed for common token standard implementations (e.g. ERC20, ERC721) to be reused across many [decentralized applications](http://stateofthedapps.com/). Similarly, we are seeing the backbone for scaling infrastructures being researched and developed by various teams - [Spankchain](https://github.com/SpankChain/general-state-channels), [Funfair](https://www.youtube.com/watch?v=I7KFKqq9Ue0), [Perun](https://www.perun.network/), and [Counterfactual](https://counterfactual.com/), to name a few for state channels. Over time, standardized childchain and state channel implementations could be reused without each developer team having to reinvent the wheel, meaning that we could see these L2 dapps pop up at a much faster rate! (how many of them survive is a different question...)

🛠The success of state channels remain dependent upon their **integration with cryptocurrency wallets**. In other words, the software that holds your cryptocurrency should be able to understand the protocol that these channels operate on. The internet would not be what it is today if we had to manually switch the way our browsers work every time we switched from sending emails to browsing Twitter to downloading files. All these protocols: SMTP, TCP/IP, and FTP respectively, operate under the hood and is abstracted away from the interfaces that we interact with. In a future article I will explore interoperability projects and some techniques that allow us to do cross-chain token swaps.

It remains to be seen how blockchain protocols, infrastructure, and applications mature over time. While the industry will converge to some extent on how everything interoperates, like innovation on the internet, there will be mistakes, hacks, disagreements, and retrospectively dreadful user experience. However I remain optimistic that these factors will pressure the industry to continue iterating towards a valuable use case at scale.

🎨While these layer-2 scaling techniques are certainly exciting (to some at least 😅), **good UX** and **clear language** are crucial factors for mass adoption. How can we, as blockchain developers or startups, articulate the value that the technology will bring to peoples' lives without going into the jargon? How do we abstract away the low level details and provide a product or service that is enjoyable/valuable/useful and *just works*? I look forward to doing a deep dive on design considerations for these applications in the near future.

I hope you found this useful and thanks for reading! Please leave a comment, share, or point out any mistakes you see. Until next time, 🥃

*If you appreciated this post,*

*BTC:* 3JaB3nHHfvWZVsnfHSNRepc8xAKubLSkZR 🙏🏼

FURTHER READING & RESOURCES
---------------------------

1.  [[Jeff Coleman](https://twitter.com/technocrypto)] Original description of [State Channels](https://www.jeffcoleman.ca/state-channels/) published in 2015

2.  [[Liam Horne](https://twitter.com/liamihorne) - [L4 Ventures](http://l4.ventures/)] [Counterfactual Instantiation](https://www.youtube.com/watch?v=TtaSL8WEbwY) presentation video

3.  [[Li Xuanji](https://twitter.com/lixuanji) - L4 Ventures] [Generalized State Channels](https://www.youtube.com/watch?v=kZH_ty82jKY) presentation video

4.  [[Counterfactual](https://counterfactual.com/)] Generalized State Channels [**paper**](https://l4.ventures/papers/statechannels.pdf) and [**code**](https://github.com/counterfactual/contracts)

5.  [Counterfactual] [Generalized State Channels on Ethereum](https://medium.com/statechannels/counterfactual-generalized-state-channels-on-ethereum-d38a36d25fc6) blog post

6.  [Counterfactual] [Generalized State Channels ethresear.ch](https://ethresear.ch/t/counterfactual-generalized-state-channels/2223/2)

7.  [Liam Horne - L4 Ventures] [State Channels Applications](https://medium.com/statechannels/state-channel-applications-1f170e7d542e) blog post

8.  [Understanding Counterfactual and the Evolution of Payment Channels & State Channels](https://medium.com/coinmonks/understanding-counterfactual-and-the-evolution-of-payment-channels-and-state-channels-9e939d7c6f34)

9.  [[Ameen Soleimani](https://twitter.com/ameensol) - [Spankchain](https://spankchain.com/)] [A State Channels Adventure with Counterfactual Rick](https://medium.com/spankchain/a-state-channels-adventure-with-counterfactual-rick-part-1-ce68e16252ea)

10. [Ameen Soleimani - Spankchain] [State Channels & Generalized State Channels](https://www.youtube.com/watch?v=UVRAdmycOhg) explantion

11. [[Funfair](https://funfair.io/)] [Technical Whitepaper](https://funfair.io/wp-content/uploads/FunFair-Technical-White-Paper.pdf)

12. [Funfair] [Approach to Turing Complete State Channels](https://funfair.io/approach-turing-complete-state-channels-part-1/)

13. [[Magmo](https://magmo.com/)] [Force-Move Games Framework for State Channels](https://medium.com/statechannels/introducing-the-force-move-games-framework-for-state-channels-b32dd953c13f)

14. [[Blockchannel](https://blockchannel.com/)] [A Crash Course in Mechanism Design for Cryptoeconomic Applications](https://medium.com/blockchannel/a-crash-course-in-mechanism-design-for-cryptoeconomic-applications-a9f06ab6a976)

15. [Blockchannel] [The Redemptive Greed That Will Drive Decentralization & Generalized State Channels](https://medium.com/blockchannel/the-redemptive-greed-that-will-drive-decentralization-generalized-state-channels-in-depth-part-71ce68c28f85)