# social feed algorithms

Ideas, discussions and prototypes for social feed algorithms that give the users what they are interested in but also sparks new ideas. 

This project intends to solve the issues of common newsfeed-algorithms using some new approaches.

## riddles to solve

Social networks are a great way to express, learn and teach or just hang out. But not everyone is using a network the same way, some are looking for information, some for connections and others just watch funny cat videos all day long.

So how could an algorithm look that counters these inherent issues? What formula could be smart enough to brighten any users view if they just want to?

### missing out on fellows

No one can checkout 100+ Virtual Friends across networks each and every day and you'll surely miss something great in between!

### self-censoring

In common networks you built out your bubble over time and that's it, most people will never see anything outside their own bubble because it's simply to much content.

### needle in a haystack

We all know that moment, you talk with a friend about an article you've read online and you can't remember that important piece of information then on your hunt to look it up you find yourself in a wild google search session.

### lose couples can still be friends

There is at current no relation between content, you've got your post on network x and it's comments, maybe some likes for dopamine.

### trust the sender but not the message

We all at least heard of someone beeing hacked sending messages around that look like they've been sent by a fellow. People commonly trust their peers on messages if they're privat or public.

## HOW !?!?

okay let's do it one by one.

**missing out on fellows**

one way we could solve this would be to give boosters into users hands. Think of it like mana in some rpg game as a resource that you can spent to "boost" content. A portion is consumed when used and it fills up again over time or by certain actions.

![alt text](https://github.com/appinteractive/Social-Feed-Algorithms/blob/master/twtr.png "highlight the important")

1. the main feed
2. suggestions for topics
3. suggestions for peers

the main feed itself can be sorted and changed using the algorithm building the feed. 

Throwing in a booster for each user, the issue would remain because there's 200 peers that boosted their posts.

A few considerations to fight this:

- highlight important information and remove topic suggestions
- while scrolling through a piece of content (or even scrolling newsfeed) change highlighted "suggestions" so they rotate when the user has not reacted to it after 3 times seeing it
- peers are the blood of social networks, users however should decide by content if they want to follow or not

> TODO: how could that post boosting work?

**self-censoring**

Users tend to self-censor. This usually happens during the onboarding process of social networks these days. The user is presented with several topics/interests to pick from, they should follow some people and once they have a few they can get started.

This is good and bad at the same time and it's also a common chicken-egg problem since you don't want to guess what the User may likes and with a bit of input you can feed some algo to get content suggested by Graph or alike.

But now our User is stuck in an artificial bubble he does not even notice.

*How to get out?* Stairs! Wait what? Yes you heard right, built some stairs or a lift! Okay enough jokes. Have you ever thought what facebook would look like without notifications (or let's call them distractions for that part)?

So to burst the bubble we want to add something like this:

> TODO: add image

**needle in a haystack**

have related links and content at hand not somewhere on page 3854. "Follow the white rabbit principle". However the Network should not automagically link content and only do what it's job is, link the content by Topic. All other connections should be added by users.

So as an example:
User A posted some content and User B wants to complement it with a link to another Post or even some external information (wiki, youtube video or something).

In the old we embedded the content and done. However these embeds get lost in a wall of paginated comments and maybe lost forever. Instead we decouple comments, discussion and information. 

**COMMENT**

**DISCUSSION**

**INFORMATION**


> **idea:** remember these old a-z navigations? let's mix that up with a date or date range because a letter is easier to remember than a clickbait title might be.

**lose couples can still be friends**

add a list of related/suggested content ordered by weight.

**trust the sender but not the message**

the internet is full of fakenews and false messages which intend no good to the readers.

however instead of deleting fakenews we could take the approach to clearly flag them by crowd. This will enable users to hook them up again anytime among all the proof related to it so they can send it to others. Away from single source of truth to crowd verified information.

## Peer-Weight-Peer

consider n peers interacted with a piece of content. The peers maybe connected with each other adding a modifier in. Any interaction will change the weight.

TODO ... waaaaaaaaay more explanation required

