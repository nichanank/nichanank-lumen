---
title: Dig my Crate - a Ruby project inspired by record collecting
date: "2018-02-03T14:20:11.121Z"
template: "post"
draft: false
slug: "/posts/dig-my-crate/"
category: "Side Projects"
tags:
  - "Programming"
  - "Ruby on Rails"
  - "Music"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/image-2.jpg"
---

Ted Mosby from How I Met Your Mother believes that [nothing good happens after 2am](http://how-i-met-your-mother.wikia.com/wiki/Nothing_Good_Happens_After_2_A.M.). However, I'm sure I'm not alone in experiencing random episodes of sudden thought clarity and a idea trains while trying to get some sleep(?).

I went to bed with a half-finished post on record collecting and thought it would be nice if somehow, non-collectors can explore someone's collection in a simple, interactive way. Like many, I keep track of my collection with [Discog](http://discogs.com/user/nichanank/collection)[s](https://www.nichanank.com/blog/2018/1/31/dig-my-crate-my-first-ruby-project-inspired-by-record-collecting#) and, while packed with crowd-sourced information about each release, there isn't a way for someone to peruse the records without being bombarded with details they might not care about. In addition, there may be some records that collectors forgot they even had or have not listened to in a while. Though the tactility of crate digging is part of the allure to vinyl in the first place, I thought it'd be fun to also have a tool to pick something for you at random. So, my post-2am idea was to do something about it... 💭

![The collection view on Discogs](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517420204062-5KSU8PHCOQUVMR85FFWF/ke17ZwdGBToddI8pDm48kEfgNFm8qNLVPp4pP6dwYdl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud9DRyQHLG1VT0T-kUwz7ufU7pmSwPUlhq-42Qmj1kEjOpYghpI-Ha_TwZsqqmJXng/Screen+Shot+2018-02-01+at+12.36.12+AM.png?format=1500w)

The collection view on Discogs

GETTING STARTED
---------------

I've been wanting to play around with the [Discogs API](https://api.discogs.com/) for a while and until recently, I wasn't sure where to begin. Fortunately there is a [Ruby wrapper](https://github.com/buntine/discogs) for the API, which provides a layer of abstraction from the boilerplate code. Nevertheless, this took some trial and error on my end as it was my first time working with [Hashie](https://github.com/intridea/hashie)s.

I made a skeleton rails app using the [Cloud9 IDE](https://en.wikipedia.org/wiki/Cloud9_IDE) and began by making a barebones landing page using HTML/CSS. I found this [fun icon](https://pixabay.com/en/vinyl-platinum-disk-music-dj-2241789/) by google image searching "vinyl", then played around with some color schemes from [Behance](https://www.behance.net/gallery/32154055/Minimalist-Color-Palettes-2015) until it looked somewhat decent. The main goals for this page were to give an indication of what the program is supposed to do, and to provide a clear call to action for next steps. I went with a modern, minimalist design for this first iteration.

When the user clicks the "Pick a record!" button, the program is to select a random record from my collection and display its details on the record information view.

![Image source . What I really like about this icon is that it resembles my own player ( Audio Technica LP120 )](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517422821534-X9JT78E9NYXJL0EJMTWF/ke17ZwdGBToddI8pDm48kL9R5NBuRylSqZmKIBO6Dst7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWlNVQaydzuW-lMQG0ZhN2GyTnhT9V3VXA0uUCWxGl5Im7cT0R_dexc_UL_zbpz6JQ/Screen+Shot+2018-02-01+at+1.00.09+AM.png?format=1500w)

[Image source](https://pixabay.com/en/vinyl-platinum-disk-music-dj-2241789/). What I really like about this icon is that it resembles my own player ([Audio Technica LP120](http://amzn.to/2EDktVn))

Then came the more interesting part: how to display the information for each record, and how to interact with the data obtained using the wrapper. Each record's attributes is wrapped in a Hashie object, which looks like this when printed to the console:

![😱 Interacting with this was relatively straightforward for the purposes of this app, but printing to the terminal like this helps give an understanding of how the raw data is structured, and therefore how it can be called.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517643725355-41E8C5CX3F1OR297C7TP/ke17ZwdGBToddI8pDm48kKHarl55ekKjntmwvMulpZAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dlTEYHEO1vuyFGRAIJDZRWUMvOilUoBKf2dhmHlkKtHoCjLISwBs8eEdxAxTptZAUg/Screen+Shot+2018-02-03+at+2.41.05+PM.png?format=1500w)

😱 Interacting with this was relatively straightforward for the purposes of this app, but printing to the terminal like this helps give an understanding of how the raw data is structured, and therefore how it can be called.

The purpose of the app is to present high level information about each record, so we only needed a few pieces of information out of this raw data: the title, year, artist, genre, and style. It took some playing around with the syntax and Hashie structure before it successfully displayed the information as below. There were still problems with incomplete data (e.g. styles array returning empty, record description unavailable...) but aside from some anomalies in the collection, this rudimentary feature was functioning.

![Screen Shot 2018-02-03 at 2.50.45 PM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517644284260-UGUVD705W4895PK4N499/ke17ZwdGBToddI8pDm48kFg7TUavBQWxxVwvpo6t9IUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnF8-F_P-84fIzoxSyHnrM5ewJhRoxVoZHlqdMWiKgj6wJgwdqU1T3Sh3EkgYisiL9w/Screen+Shot+2018-02-03+at+2.50.45+PM.png?format=1500w)

What felt missing now was the track list. Thanks to the wrapper, the information was easy to obtain and manipulate using a few lines of code:

**From**:

![Screen Shot 2018-02-03 at 3.10.12 PM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517645440448-854WQ12LN77N3LX7ZZTY/ke17ZwdGBToddI8pDm48kLWksNAu-RXUOJOkNVE673YUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtYTPbew77XFjLL0PYvWJk0tcNYH5RBMLQIUxEqoJ5g2CjLISwBs8eEdxAxTptZAUg/Screen+Shot+2018-02-03+at+3.10.12+PM.png?format=1500w)

**To**:

![Screen Shot 2018-02-04 at 12.58.45 AM.png](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517680784338-0RPUSLK5T0VLVVFT2VFY/ke17ZwdGBToddI8pDm48kCEnCXKIjDlsisiUE21AuopZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHxXOqSt7so2xRrZW2ZMYBlB5u-1Jq1XT3_3T_8w0UItG0nsU3dfn6w--du8-EjPUE/Screen+Shot+2018-02-04+at+12.58.45+AM.png?format=750w)

**Using**:

![🎶 @picked_record is a Record object with an instance variable called "tracklist" - an array of Hashie objects for each track](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517645564658-8T0BB889OWPCXWQ29IR9/ke17ZwdGBToddI8pDm48kL163bVpwYO1efG2dPX056JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIamf0wCw9WmTLluGLjokYU1YmktojkbWqIdOlTOa-9-w/Screen+Shot+2018-02-03+at+3.12.10+PM.png?format=1500w)

🎶 @picked_record is a Record object with an instance variable called "tracklist" - an array of Hashie objects for each track

While I won't dive too deep into the implementation, it was fun to play around with the design of the application - not just visually but also the application logic as well. You can have a look at the code on [Github](https://github.com/nichanank/digmycrate) but in a nutshell, the models used are: Collection, Record, and Artist.

When the user presses the "Dig" button, my username is passed into the Discogs API wrapper, which returns the high-level data about each record in my collection, including their Discogs IDs - from this, I make an array of IDs of records - e.g. [235254, 92874, 845214, 243046]

A random ID is selected and passed on to the wrapper using the .get_release(id) method. This returns the Hashie object containing all the information available on Discogs for that record. From this I instantiate a new Record object, only passing on the attributes that would be used in the app.

The Artist class is used for extension purposes. After adding the track list, I also decided to include the artists' profile on the record display page like so:

![Here, the text originally contained hyperlinks and is thus improperly displayed e.g.  [a=Illa J] .](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1517647320974-MWSVT0CYUH799D4GZFEW/ke17ZwdGBToddI8pDm48kC1Aj7mwZWSPhup5--1X2WJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jToqHo0R3UcFmcnkVAGo7kmVN4IjMWmWdoSCjBxkG03iPuluAH1vPYyXnMESwDs4w/Screen+Shot+2018-02-03+at+3.41.35+PM.png?format=1500w)

Here, the text originally contained hyperlinks and is thus improperly displayed e.g. *[a=Illa J]*.

What felt missing from the page at this point was some form of media related to the record. The [release page](https://www.discogs.com/Pink-Floyd-Obscured-By-Clouds/release/3092412) on Discogs often contains a set of YouTube videos for some of the tracks on that album, the YouTube IDs for which is thankfully included in the Hashie. To give the page some more life, I added an embedded YouTube video of a track from the album. Then, at the very bottom of the page is a "Dig Again" button which selects a new record when clicked.

What I'd love to also display is the cover art above the release title. However, this requires [authentication](https://www.discogs.com/developers/#page:images) and is subject to rate-limiting, so I am leaving that for now while figuring out the best way to go about this...

REFLECTION & TO DO'S
--------------------

For a simple program, there was already plenty of things to play around with to get it going. A part of the challenge was that it was completely self-directed unlike assigned projects or those guided by online course videos.  It was fun to play around with my collection this way and I plan to add a feature where users can input a different Discogs username and explore other collections - I am still figuring out how to implement this (*help me *😩)

I'd also like to truncate the Tracklist and About the Artist sections after it reaches a certain length as some albums have a very long list of songs, or a very elaborate artist profile. Perhaps adding a [collapse/expand toggle](https://v4-alpha.getbootstrap.com/components/collapse/) will do.

📱 The page layout may also look awkward on some devices depending on screen size. I made and tested this on a 13" MacBook, and already I can see that it doesn't display properly on my mobile device. So there are foreseeable problems when viewing on different screen sizes and browsers as well which needs to be addressed.

### OTHER IDEAS

-   🎧 Embedded Spotify player (requires login and may not be available in some countries)
-   📺 Link each song on tracklist to YouTube videos (may not be available in some countries)
-   📝 Add album description (maybe pulled from Wikipedia?)

The original idea of this app was actually to emphasize the the backstory behind each album as opposed to the artist's profile. My favorite thing about vinyl collecting is the end-to-end ritual of digging crates at the store, examining the condition of each disc, taking it home, putting it on the player, moving the tonearm onto it, and reading the inlays/liner notes whilst listening to it. I enjoy reading the liner notes a lot because it often gives intimate accounts about how the album came to be, and the story behind each track... an experience that is lost when streaming music. Sometimes, the liner notes also include a letter from the artist to the listener ([example](http://aln3.albumlinernotes.com/New.html)), giving a sense of connection to the artist while their music is playing. I don't think there are any comprehensive archives for liner notes online, but ideally this app would tell a story about each album as well. I'm looking forward to adding new features to the app and continuously polishing it - it was great to be working on a programming project related to music, all thanks to acute insomnia! (... 🤔)

You can have look a the code on [Github](https://github.com/nichanank/digmycrate) and play around with the app [here](https://digmycrate.herokuapp.com/). Bare with it for the time being as there needs to be some layout polishing as well as some error handling that needs to be done. I am learning as I go and am glad to now have this little project to point to what to do next. If you have some suggestions for how to extend this, or comments on the implementation, or some pointers for the issues I mentioned above I'd love to hear from you!

If you're considering learning how to code and don't know how to get started, I'd be happy to give some suggestions and pass along some resources I've used. What I realized from this first project was that coding along with tutorial videos is deceptively easy, but the sooner you get started with your own project from scratch the better, because you'll probably have to return to the videos or look for answers elsewhere anyway. Don't think that it's beyond you or be discouraged by the fact that you're starting from zero! Remember that you don't need to have a career in programming to know how to code, you don't need to be  CS major to know how to code, you just need to want to learn how and get started.

Cheers 🖥 🥃