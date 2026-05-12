---
layout: post
title: "Welcome to Dashboard Theme"
date: 2024-01-15 09:00:00 +0000
tags: [jekyll, theme, dashboard, getting-started]
description: "Dashboard Theme brings the aesthetic of a desktop OS to your GitHub Pages blog."
---

Dashboard Theme is a Jekyll theme that turns your GitHub Pages site into something that feels less like a blog and more like a developer's workspace. Every post lives inside a window-chrome card. A persistent sidebar keeps navigation within reach. Stat widgets on the home page give you a glanceable overview of your content.

## Design Philosophy

Most Jekyll themes are websites that happen to be built with Jekyll. Dashboard Theme is a *developer's UI* that happens to be a blog.

The design draws from:

- **GitHub's dark interface** — `#0d1117` backgrounds, `#388bfd` blue accents
- **VS Code / Electron apps** — sidebar-left layout with section headers and active indicators
- **macOS window chrome** — traffic-light dots, title bars, window frames around content

## Installing the Theme

Clone the repository and run Jekyll locally:

```bash
git clone https://github.com/csswitch/jekyll-dashboard-theme.git
cd jekyll-dashboard-theme
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` — you'll have the full Dashboard UI running locally.

## Configuration

Open `_config.yml` and update the core settings:

```yaml
title: "Your Site Name"
description: "Your site description"
url: "https://yourusername.github.io"
baseurl: ""
```

The `dashboard:` block controls theme-specific behavior:

```yaml
dashboard:
  os: "Your OS"          # shown in taskbar
  sidebar: true          # toggle sidebar
  widgets: true          # home stat widgets
  window_chrome: true    # post window frames
  taskbar: true          # bottom bar
```

## Writing Posts

Posts follow standard Jekyll conventions. Add front matter with `layout: post`:

```markdown
---
layout: post
title: "My Post Title"
date: 2024-01-15
tags: [jekyll, tutorial]
---

Your content here.
```

Tags automatically appear in both the Tags page cloud and the post header. The sidebar recent-posts panel updates to show your 5 most recent entries.

## What's Next

Explore the Archive page (`/archive/`) for a year-grouped view of all posts, or head to Tags (`/tags/`) for the full tag cloud. The About page is ready to customize with your own bio and links.
