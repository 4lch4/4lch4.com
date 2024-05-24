---
title: How My Website Was Hacked
summary: 'How someone took over my unused domain name w/ GitHub Pages.'
createdDate: '2022-02-01T09:55:00-06:00'
modifiedDate: '2022-07-25T12:05:31-06:00'
publishedDate: '2022-02-14T14:54:12-06:00'
tags:
  - GitHub-Pages
  - Websites
  - Hacked
  - OSINT
  - Website-Defacers
---

I recently learned that one of my websites was "hacked". This blog post is my way of putting all the information in one place, sharing it with the world, and hopefully prevent this from happening to others. Or at the very least, if it _does_ happen to you, maybe this will help you get it back and find out how they did it.

## Update (2022/07/25)

I had this story come to mind this past week and decided to see if the individual who had defaced my website still had their GitHub account online and what do ya know, it's gone!

![Goodbye-Loser][Culprit-Gone]

## Terminology

This section will likely be cut out before being posted, but I want a section on the post where I discuss/comment on the various terms I use throughout.

### Hack(ed)

I use the word hack, hacked, or hacker quite a bit throughout this post but what was done isn't truly hacking, in my opinion. What was _actually_ done was my site had been defaced. They didn't gain access to any of my infrastructure or other tools, just stood up another site and had my DNS point to it.

_Relevant XKCD:_

[![XKCD-932][XKCD-Comic-Img]][XKCD-Comic-URL]

### Defacing/Defacer

> **Website defacement** is an attack on a website that changes the visual appearance of a [website][6] or a [web page][5].

Aside from the basic definition above, from Wikipedia, I think what happened is best described with the above XKCD comic. There are a wide variety of ways to make it look like a website was "hacked" when in reality it was just defaced, and none of the actual infrastructure involved in hosting the site was touched.

## Initial Discovery

On January 29th, 2022, I decided to update one of my simple websites (4lch4.social) that provides links to my various social media accounts. When I pulled up the site, I was greeted with a lovely message that I had been hacked:

![4lch4.social-Hacked-0.png][4lch4.social-Hacked-0]

## Digging In

So, I decided to dig in and figure out how they'd done this. At first I checked my DNS entries with `dog`, and with my DNS host (Google Domains), and verified the DNS entries were still pointed to GitHub pages. Since they were, that meant someone was hosting the site using GitHub pages.

Initially, I wanted to find out as much as I could about the individual "X'Boy Linux" and see what other stuff they'd done. I dropped their name into [a Google search][0] and started going through the results:

![4lch4.social-Hacked-1.png][4lch4.social-Hacked-1]

The first few were a Facebook with no real useful information, a profile on a defacer site, a few hacked sites, and then a [YouTube channel][1]. I opened the YouTube channel and the video that it shows off is a YouTube story where they're showing off hacking a site. They do this by hosting a website using GitHub pages with the victim domain name in a `CNAME` file. While watching it, I realized they left [the username of the GitHub account][2] they used in the video.

I went to the account and noticed quite a few repositories that were exactly the same. A `CNAME` file with a DNS entry, and an `index.html` that contained the HTML of a site saying they were hacked by X'Boy Linux. One of them, [called didi][3], contained the DNS entry for my domain (4lch4.social).

## Getting it Back

In order to re-gain control of my domain, I tried using the [verified domain names][4] that GitHub offers. However, even after verifying that I owned it by adding a TXT record, I still couldn't use it. I read a few different articles and finally landed on one that recommended I open a support ticket. Honestly, I didn't even know regular users could open support tickets with GitHub 😅

After opening a ticket, I got a reply within a few hours from a bot that verified I did indeed own the domain name, and removed it from the hacker's account. By the next day I was able to use my domain again and stood up a basic page so someone else couldn't just hijack my domain (again).

[0]: https://www.google.com/search?q=%22X%27Boy+Linux%22
[1]: https://www.youtube.com/c/XBOYLINUX
[2]: https://github.com/CYBERANONYMOUS1
[3]: https://github.com/CYBERANONYMOUS1/didi
[4]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
[5]: https://en.wikipedia.org/wiki/Web_page
[6]: https://en.wikipedia.org/wiki/Website
[Culprit-Gone]: https://assets.4lch4.cloud/projects/blog/4lch4.social/Culprit-Gone.png
[4lch4.social-Hacked-0]: https://assets.4lch4.cloud/projects/blog/4lch4.social/4lch4.social-Hacked-0.png
[4lch4.social-Hacked-1]: https://assets.4lch4.cloud/projects/blog/4lch4.social/4lch4.social-Hacked-1.png
[XKCD-Comic-Img]: https://imgs.xkcd.com/comics/cia.png
[XKCD-Comic-URL]: https://xkcd.com/932/
