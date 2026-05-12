---
layout: default
title: Tags
permalink: /tags/
---

<div class="section-header">
  <span class="section-header__title">Tags</span>
  <span class="section-header__count">{{ site.tags.size }}</span>
</div>

<div class="tags-cloud">
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  <a class="tag-pill" href="#{{ tag[0] | slugify }}">{{ tag[0] }} ({{ tag[1].size }})</a>
{% endfor %}
</div>

{% for tag in sorted_tags %}
<div class="tag-section" id="{{ tag[0] | slugify }}">
  <div class="tag-section__heading">{{ tag[0] }}</div>
  <ul class="tag-section__list">
  {% for post in tag[1] %}
    <li class="tag-section__item">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="tag-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}
