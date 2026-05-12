---
layout: post
title: "Building OS-Style UI with CSS: Window Chrome, Sidebars & Widgets"
date: 2024-01-22 09:00:00 +0000
tags: [css, ui, jekyll, design-system, dark-mode]
description: "How Dashboard Theme recreates OS desktop UI patterns — window chrome, sidebar layouts, and stat widgets — using pure CSS and Sass."
---

The most distinctive thing about Dashboard Theme is that it looks like an operating system, not a website. This post breaks down the CSS techniques that make that work — all pure CSS, no JS for layout, no external component libraries.

## The Palette: GitHub Dark

The entire color system is built on GitHub's dark interface palette. The key insight is that GitHub uses *four* background layers, not one:

```scss
$bg-desktop:  #0d1117;  // outermost — the "desktop"
$bg-sidebar:  #161b22;  // sidebar panel
$bg-panel:    #1c2128;  // card surfaces
$bg-titlebar: #21262d;  // titlebar / elevated chrome
```

Each layer is ~6–8 hex steps lighter. This subtle progression creates genuine depth without needing `box-shadow` for every panel.

## Window Chrome: CSS Pseudo-elements

The window card header uses `::before` and `::after` on the `<pre>` element for the traffic-light dots:

```scss
pre {
  border-top: #{$titlebar-h} solid $bg-titlebar;
  position: relative;

  &::before {
    content: '◉  ◉  ◉';
    position: absolute;
    top: 0; left: 0;
    height: $titlebar-h;
    color: $text-dim;
    letter-spacing: 0.3em;
    font-size: 0.5rem;
    line-height: $titlebar-h;
    padding: 0 12px;
  }
}
```

The trick is `border-top: 36px solid $bg-titlebar` — that creates the titlebar *space* without a separate element. The `::before` pseudo-element then sits absolutely positioned inside that space.

## Sidebar Layout

The workspace is a two-column flex container:

```scss
.dash-workspace {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.dash-sidebar {
  width: $sidebar-width;   // 240px
  flex-shrink: 0;
}

.dash-content {
  flex: 1;
  overflow-y: auto;
}
```

The active sidebar link uses an `::after` right-border indicator — the same pattern VS Code uses:

```scss
.dash-sidebar__link.active::after {
  content: '';
  position: absolute;
  right: 0; top: 0;
  width: 3px; height: 100%;
  background: $blue;
  border-radius: 2px 0 0 2px;
}
```

## Stat Widgets: CSS Grid Auto-fill

The home-page widget row uses `auto-fill` with a min-width constraint so it reflows without media queries:

```scss
.widget-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}
```

Four widgets → four columns on wide screens, two columns on tablet, one column on mobile. No breakpoints written.

## Reading Progress Bar

A thin 2px `fixed` bar at `top: 40px` (just below the topbar). JavaScript updates `width` as a percentage:

```js
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = docH > 0 ? (scrollTop / docH * 100) + '%' : '0%';
}, { passive: true });
```

The `passive: true` option prevents the browser from waiting for `preventDefault()` before scrolling — important for smooth 60fps on mobile.

## Mobile: Sidebar Drawer

On mobile, the sidebar switches from a persistent panel to a drawer via a single class toggle:

```scss
@media (max-width: 768px) {
  .dash-sidebar {
    display: none;
    position: fixed;
    top: 40px; left: 0;
    height: calc(100vh - 40px);
    z-index: 150;

    &.open { display: block; }
  }
}
```

JavaScript toggles `.open` on the hamburger button click. An outside-click handler removes it. No `transform: translateX()` animation needed — the instant show/hide matches OS behavior better than a slide.

## Takeaway

The whole Dashboard aesthetic comes down to three decisions:

1. **Multiple background layers** (not one dark color)
2. **Border-top titlebar** + `::before` for window chrome (no extra elements)
3. **Flex + overflow:hidden** on the workspace (OS layout in two lines of CSS)

Everything else — widgets, tag pills, status dots — follows from those foundations.
