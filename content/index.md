---
layout: layouts/base.njk
eleventyNavigation:
  key: Test
  order: 3
eleventyExcludeFromCollections: true
---

# Posts
{% set postslist = collections.posts %}
{% include "postslist.njk" %}

# About Me
{% inlineImage "./25.jpg", "Me", 220, "left", "rounded", 24, "", "margin-left: 10px;margin-top: 10px;margin-right: 18px;margin-bottom: 10px;" %}

I’m Lasse, a researcher/engineer with a passion for making complex systems move. My background blends hands-on work in space systems and robotics with a deep curiosity for control theory and mathematical optimization. After work, you’ll likely find me tinkering with synthesizers, reading, or busy with some woodworking/DIY project. This blog is a space to document (unfinished) ideas, hobby projects, and whatever else I find worth sharing.

