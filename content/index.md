---
layout: layouts/base.njk
eleventyNavigation:
  key: Test
  order: 3
eleventyExcludeFromCollections: true
---

{% set postslist = collections.posts %}
{% include "postslist.njk" %}
