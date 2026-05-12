---
layout: default
title: Archive
permalink: /archive/
---

<div class="section-header">
  <span class="section-header__title">All Posts</span>
  <span class="section-header__count">{{ site.posts.size }}</span>
</div>

{% assign years = site.posts | group_by_exp:"p", "p.date | date: '%Y'" %}
{% for year in years %}
<h2 style="font-family:'JetBrains Mono',monospace;font-size:0.9rem;color:#484f58;margin:1.5rem 0 0.5rem;">{{ year.name }}</h2>
<ul class="archive-list">
{% for post in year.items %}
  <li class="archive-list__item">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="archive-list__item__date">{{ post.date | date: "%b %d" }}</span>
  </li>
{% endfor %}
</ul>
{% endfor %}
