---
title: "A fresh start"
date: "2020-10-21"
author: "Seeds 🌱"
featuredImage: 
previewText: "We are thrilled to introduce the new UI version of the 1hive DAO"
---

# A fresh start

As expressed in previous blog posts, we had an issue with the conviction voting app configuration, which prompted an adjustment which disabled execution of funding proposals until we could pass a vote to change the configuration. 

After this first vote passed we were comfortable re-enabling conviction funding proposals, but also created a second vote to install a fresh instance of the conviction voting app to avoid any odd inconsistenties related to interactions that may have occured prior to the configuration being updated. 

Since then, the vote has passed and we now have a fresh instance of Conviction Voting installed. Because this is a new installation of the app, all  existing proposals have been cleared. They still exist in the old instance of the app, but that app no longer has permission to access the common pool or interact with the token manager.

We have seen a lot of proposals not following the [appropriate guidelines](https://forum.1hive.org/new-topic?category=proposals) for creating proposals or creating proposals without a forum post link, so we also took this opportunity to request more quality and carefully considered proposals. If you had submitted a proposal that was still active, you can go ahead resubmit your proposals now. 

And what better way to start this new instance than with a new frontend!

## Honeypot V2

![](https://i.imgur.com/gNOOb8i.png)

We are thrilled to introduce the new UI version of the 1hive DAO, which introduces a new proposals feed look and feel with profiles integration.

The new proposal feed also includes administrative votes (Decisions) where everyone can participate on the DAO's configuration decisions, previously these votes were only accessible via the Aragon interface, but this change makes them much harder to miss moving forward. We intend for administrative decisions to continue to be rare, and only used when they are absolutely necessary. 

### Profiles

Since we are an open community driven by members we think that having open profiles could be a cool way to visualize members interactions with the system as well as some basic information like profile picture, name, github user and twitter.

In order to have this information in a decentralized way we decided to use [3Box](https://3box.io/).

In a future iteration this is also going to be the place where we can see each member's skills, in which areas of the community they are contributing and what proposals they are supporting.

### New Feed

With our renovated feed view we are introducing a couple of new functionalities that we want to share with you.

* Mixed feed: You will be able to see conviction voting proposals (Proposals for Funding proposals and Suggestions for Signaling propsoals) and dandelion voting administrative votes (aka Decisions) in only one dashboard.

* Quick actions:
    1. Proposals and Suggestions: Performing a thumbs up stakes 5% of your balance to the proposal (suggestions accepted about this number). Performing a thumbs down withdraws your entire support from the proposal.
    2. Decisions: By performing thumbs up you are voting in favour of the proposal and with thumbs down against it.


### Decisions

For those new around the community the dandelion votes can be seen as administrative votes to perform actions directly into the DAO like new app installations and app configuration updates.

These votes have a two week duration and two days of delay between the vote passes and it can be executed.

Keep in mind that if you vote yes on a decision, your entire token balance will be locked for the duration of the vote. This biases the results of administrative decisions towards no action, and ensures that people who support changes are locked in to the outcome of those decisions.

### What's next?

Our next steps towards a more fair community is to give members the ability to challenge proposals through the disputable version of conviction voting plus Celeste a fork of the Aragon court.