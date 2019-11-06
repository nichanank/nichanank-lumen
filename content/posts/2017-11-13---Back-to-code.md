---
title: Back to Code
date: "2017-11-13T12:20:30.121Z"
template: "post"
draft: false
slug: "/posts/back-to-code/"
category: "Programming"
tags:
  - "Ruby on Rails"
  - "Vinyl"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/image-2.jpg"
---

A few weeks ago I decided it was time to revive a hobby I had begun to pursue in college: computer programming. I enrolled in a Data Structures & Algorithms [course](http://datastructur.es/sp16/) during my final semester in an attempt to fight off senioritis - and despite the allnighters spent debugging and balancing [red-black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree), this decision ended up being one of the best I made at Cal.

The course is one of the prerequisites for CS majors, taught in Java. We built a [text editor](http://datastructur.es/sp16/materials/proj/proj2/proj2.html) from scratch, as well as a Google Maps [clone](http://datastructur.es/sp16/materials/proj/proj3/proj3.html) of Berkeley that gives you the shortest path between two points using the [A* search](https://en.wikipedia.org/wiki/A*_search_algorithm) algorithm. The projects were challenging, but they opened my eyes to the joys of programming beyond the theory. Although I didn't take these projects as far as I would have liked due to other obligations and priorities I had at the time, I came away knowing that I would be writing code again in one way or another.

![Shortest path from the library to Kip's bar (as you do) using A* search. The background photo for the post title is code from this project - aptly named BearMaps](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1510511705558-HZHW36ULGFJLQMNNU5CJ/ke17ZwdGBToddI8pDm48kB8QVnDCEHqHqQSzd4Lmmr17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k6hc73dCNVBgUhRvNqFcN1nhvHyLTvAIG9KOqjcyurRH_IztENQwT_i1M6gYsPQHg/Screen+Shot+2017-11-13+at+1.33.38+AM.png?format=1500w)

Shortest path from the library to Kip's bar (as you do) using A* search. The background photo for the post title is code from this project - aptly named BearMaps

* * * * *

TESTING THE WATERS...
---------------------

In my first few months as a junior sourcer*, I spent my days scraping the web and social media for iOS Engineers. I perused countless mobile developer profiles and stumbled across hundreds of apps along the way. Occasionally, the projects themselves caught my attention as they either [solved a real life problem](https://www.hopper.com/) or [enabled an experience](https://www.detour.com/) that wasn't possible before. While I sourced, I kept a list of projects that sounded particularly interesting so that I remembered to download and play around with them later - and after reading a myriad of invigorating LinkedIn summaries about how one fell in love with app development, I decided to learn Swift.

I'm not sure how many of you have had the experience of writing code and then seeing your phone behave in a way you just dictated - for me, this feeling was quite something. While the college projects had prepped me with some fundamentals, this was the first time I felt like I could potentially build something that I could use in every day life - unconstrained by syllabi or concerns about grades. The Udemy course I enrolled in begun with an introduction to Swift syntax, and then quickly dove into the first project - a Pokedex app.

**For those unfamiliar with recruiting terms, [sourcing](https://www.hellotalent.com/blog/what-does-a-talent-sourcer-actually-do/) involves proactively identifying and reaching out to prospects that look like a good fit, as opposed to interviewing and closing candidates.*

![Pokedex app that displays pokemon details when you click on their icon, also has search functionality. Written in Swift 3 -  code](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1510510843051-QR24AIM7R673UV5J6PR3/ke17ZwdGBToddI8pDm48kBVxyjRi1K3b0_68KtJRnCRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGTfHFUEvM4CD6-cmk1AonyocUEYzxsc-_bZiatt4VN4aEcAfnVBrEqrgp1UxUHGkY/Screen+Shot+2017-11-13+at+1.18.07+AM.png?format=750w)

Pokedex app that displays pokemon details when you click on their icon, also has search functionality. Written in Swift 3 - [code](https://github.com/nichanank/pokedex-app)

I was about three quarters of the way through the course when a friend of mine mentioned that he was working on a proprietary app whose team needed some help on the iOS front. Eager to work on a real project (perhaps prematurely so), I decided to join the team and work on the app on my own time. The code was in dire need of refactoring and there were a lot of bugs and performance issues we had to wade through, but after a few months, we completed the feature and I deployed it onto the App Store.

The Apple developer portal has an analytics dashboard where you can see information about downloads, usage, crashes etc. of your app. It was crazy to see that people were interacting with the product and making requests after a measly few weeks of my learning howto write it. After I completed the Swift course and rolled off from the project, I was eager to explore platforms outside of iOS, and work on a something I could use every day that reached a wider audience..

A NEW PLATFORM
--------------

The web applications realm seemed to make the most sense: learning resources are abundant, the tools to get started are free, and most importantly, the end product is accessible from anywhere and changes can be quickly deployed. This site is currently built on Squarespace, and while it comes with professional-looking themes and insightful analytics out of the box, I'd love to have more control over the layout and perhaps add some features of my own - and what is a better way to achieve this than to build the thing myself! 

For the backend framework, I narrowed my options down to [Ruby on Rails](http://rubyonrails.org/) and [NodeJS](https://nodejs.org/en/). While neither are perfect and one may perform better than the other depending on what kind of app you're building, I have decided to start with RoR due to its allowance for rapid prototyping, robust conventions, and vibrant developer community. Ruby is a concise, expressive language that I find refreshing after having worked in Java. The RoR ecosystem also offers a wide array of open-sourced libraries ("[gems](https://rubygems.org/)") that I look forward to playing around with.

![Some Ruby code on Cloud 9, a browser-based IDE.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1510589911044-YO8YJTTDSEGM03I5POV6/ke17ZwdGBToddI8pDm48kKSzZN-tF5G4dIliu3D3q7R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pqRZ-xQcWIwOn69OZqOg2kB2iVJ4RKsK5Qwdm8axQ599JE0Ad1-hBiBqrU6QS3MRg/Screen+Shot+2017-11-13+at+11.18.05+PM.png?format=1500w)

Some Ruby code on Cloud 9, a browser-based IDE.

At the time of writing I have completed Rob Percival's introductory RoR [course](https://www.udemy.com/the-complete-ruby-on-rails-developer-course/learn/v4/overview) which involved building a simple blogging app, a stock price tracker app, and a image-uploading app. These are deployed on Heroku and has integrations with [Stripe](https://www.nichanank.com/blog/2017/11/9/back-to-code#) (payments), [Sendgrid](https://sendgrid.com/) (emailing users) as well as Yahoo! Finance (stock quotes). The course takes these projects as far as basic functionality implementations and rudimentary layouts using [Bootstrap](http://getbootstrap.com/). I'll be building upon these and link them on here once I feel they have been adequately enhanced. For now though you can have a look at the code [here](https://github.com/nichanank?tab=repositories).

On the frontend side of things, I have been interested in [React](https://reactjs.org/) for a while and hope to eventually incorporate this into my project as well. For now, the aforementioned projects utilize [embedded Ruby](https://en.wikipedia.org/wiki/ERuby) along with HTML and CSS.

![HTML with embedded Ruby.](https://images.squarespace-cdn.com/content/v1/55fb0ce3e4b0e3c27323dd7c/1510590354140-5XSRQYFXO60NG0AHH3FS/ke17ZwdGBToddI8pDm48kHIF8xHkcF4D1Oy2W1KY2pcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2diO3Esk0WtM7CTF2iNTta5CwYxR6IT6D47NGljC8TW6FCjLISwBs8eEdxAxTptZAUg/Screen+Shot+2017-11-13+at+11.24.38+PM.png?format=1500w)

HTML with embedded Ruby.

All well and good so far I think. I am aiming to strike a balance between implementation in practice and learning the theories behind design and application architecture (if anyone has tips to share on this that would be great). I'll be doing in-depth reflections and progress updates in future posts, but here are some takeaways so far:

-   **Take the time to apply new concepts before moving on**

It feels good to blast through a course video after video. I made the mistake of doing this early on and then having to go back to rewatch previous lectures when I realized I couldn't remember how the instructor did it. "Coding along" is deceptively easy, but taking the time to do the problems on your own will help solidify concepts in the long run. This is why I prefer the courses that gives you  *adequately challenging* problems to test your knowledge right after a video. I added the "adequately challenging" because I've seen some courses ask questions like: "Which one of the following is **not** a programming language? a. Ruby, b. Objective-C, c. Python, d. Potato"

-   **Don't limit yourself to one resource**

Having a reliable "go-to" resource is good, but it's also important to recognize any areas in which this resource is lacking. I was in a course that was great with implementation walkthroughs and interesting projects, but was weak in explanations around application architecture (namely [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)). And so for this, I looked for videos and posts online that *did *explain it adequately. I have found that knowledge gained from different resources build upon one another in a non-linear way. This doesn't mean spreading yourself as thin across as many as possible, it means finding the combination of complementing resources that best suited to your style of learning.

-   **Ask, talk to, and help people** 

Teaching is perhaps the most effective of all three in solidifying understanding. Explaining concepts by breaking them down to fundamental levels will point you to what you don't know, and therefore what you have to go and find out. In my experience I have found the community to be very helpful. When there is a roadblock, I visit the discussion boards and find that I'm seldom alone in my struggles. Discussion is mutually beneficial, and collaboration makes for a more enjoyable learning experience.

I hope this series of posts will be insightful for those interested in learning how to program, or even those with passive curiosity about how a website might be written. If you have any tips or experiences to share with online programming resources I'd also love to hear from you. I am fortunate to be around professional developers on a daily basis and, although some things they discuss may be lost on me, it's great to hear about the hard problems that are being solved in order to build the technologies that seem to make the world go round. My exposure to these is definitely a contributing factor to my decision to continue with programming. This is all for now, looking forward to sharing some progress updates!