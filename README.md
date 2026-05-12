# Dashboard Theme

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-ready-brightgreen?logo=github)](https://csswitch.github.io/jekyll-dashboard-theme/)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red?logo=jekyll)](https://jekyllrb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

> An OS desktop UI–inspired Jekyll theme. Window chrome cards, sidebar navigation, stat widgets, and a GitHub dark palette — built for developer blogs and project showcases.

**[Live Demo →](https://csswitch.github.io/jekyll-dashboard-theme/)**

---

## Features

- **Window chrome cards** — traffic-light dots, titlebar bar on every post card and code block
- **OS sidebar layout** — persistent left nav with active indicator, recent posts panel, section headers
- **Stat widgets** — home-page glanceable counters (post count, latest date, tag count, status)
- **Reading progress bar** — 2px blue line that tracks scroll position
- **Tag system** — tag cloud + grouped tag list pages, tag pills on every card
- **Copy-to-clipboard** — button auto-injected into every `<pre>` code block
- **Mobile sidebar drawer** — toggle opens a fixed sidebar on small screens
- **Zero dependencies** — vanilla JS only, no jQuery
- **GitHub Pages compatible** — safe plugins only (jekyll-seo-tag, jekyll-feed, jekyll-sitemap, jekyll-paginate)
- **GitHub dark palette** — four-layer background depth system (`#0d1117` → `#21262d`)
- **Fonts:** Inter (UI) + JetBrains Mono (code/mono)

---

## Quick Start

```bash
git clone https://github.com/csswitch/jekyll-dashboard-theme.git my-site
cd my-site
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`

---

## Configuration

Edit `_config.yml`:

```yaml
title: "My Dev Blog"
description: "A short tagline"
url: "https://yourusername.github.io"
baseurl: ""

dashboard:
  os: "macOS 14.0"       # displayed in taskbar
  sidebar: true           # show/hide sidebar
  widgets: true           # home stat widgets
  window_chrome: true     # post window frames
  taskbar: true           # bottom bar
  sidebar_widgets: true   # recent posts in sidebar
```

---

## Writing Posts

```markdown
---
layout: post
title: "My Post"
date: 2024-01-15
tags: [css, jekyll, tutorial]
description: "Short description for SEO"
---

Content here...
```

---

## File Structure

```
jekyll-dashboard-theme/
├── _config.yml
├── _layouts/
│   ├── default.html      # OS shell (topbar + sidebar + taskbar)
│   ├── home.html         # Widgets + post grid
│   ├── post.html         # Window chrome article
│   └── page.html         # Generic page
├── _posts/               # Sample content
├── _sass/
│   ├── _variables.scss   # Design tokens, mixins
│   ├── _base.scss        # Reset, typography
│   ├── _layout.scss      # Topbar, sidebar, workspace
│   └── _components.scss  # Cards, widgets, pills, pagination
├── assets/
│   ├── css/main.scss
│   ├── js/dashboard.js
│   └── img/favicon.svg
├── index.html
├── about.md
├── archive.md
└── tags.md
```

---

## GitHub Pages Deployment

1. Fork or push this repo to `yourusername/yourusername.github.io`
2. Go to **Settings → Pages**
3. Set source to **main branch, / (root)**
4. Your site is live at `https://yourusername.github.io`

For project pages, set `baseurl: "/repo-name"` in `_config.yml`.

---

## License

MIT © [csswitch](https://github.com/csswitch)

Part of the **csswitch** premium Jekyll template pack.  
Browse all themes at [csswitch.github.io](https://csswitch.github.io)
