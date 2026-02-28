# mkdocs-openstage-theme

A clean, book-like MkDocs theme with sidebar navigation, search, and dark mode.

## Install

The theme is not yet published on PyPI. Install directly from GitHub:

```bash
pip install git+https://github.com/openstage-eu/mkdocs-openstage-theme.git
```

## Usage

```yaml
# mkdocs.yml
theme:
  name: openstage
```

## Features

- Fixed left sidebar with collapsible navigation
- Built-in search (MkDocs lunr.js, zero custom JS)
- On-page table of contents (right sidebar)
- Dark mode with light/dark/auto toggle and localStorage persistence
- Subsite bar for linking documentation back to a parent project
- Configurable sidebar footer links and site footer text
- Configurable fonts, colors, and layout widths via CSS custom properties
- Responsive: three-column > two-column > single-column with off-canvas sidebar
- Highlight.js with automatic light/dark stylesheet switching
- Previous/next page navigation in footer
- LLM-readable via optional `mkdocs-llmstxt` plugin support

## Configuration

All options go under `theme:` in your `mkdocs.yml`:

```yaml
theme:
  name: openstage

  # Colors
  color_mode: light          # light, dark, auto
  color_toggle: true         # show toggle button
  color_toggle_label: "Toggle dark mode"  # toggle button label text
  primary_color: "#1a73e8"
  accent_color: "#1a73e8"

  # Typography
  font_family_body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  font_family_code: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace"
  font_size_body: "16px"

  # Layout
  content_max_width: "48rem"
  sidebar_width: "18rem"
  toc_width: "14rem"

  # Navigation
  navigation_depth: 4
  toc_depth: 3
  show_toc: true
  show_sidebar_dividers: true

  # Branding
  logo: null                 # path to logo image, or null for text
  site_title: null           # override site_name in sidebar

  # Subsite bar
  subsite:                   # null to disable
    text: "Back to main site"
    url: "https://example.com"
    logo: img/parent-logo.png  # optional

  # Sidebar footer links
  nav_links:
    - title: GitHub
      url: https://github.com/my-org/my-project

  # Footer
  site_footer: "Built with openstage theme"

  # Code highlighting
  highlightjs: true
  hljs_style: github
  hljs_style_dark: github-dark
  hljs_languages: []
```

## LLM-readable documentation

To generate an `/llms.txt` file for your site, install the optional `mkdocs-llmstxt` plugin:

```bash
pip install mkdocs-llmstxt
```

Then add it to your `mkdocs.yml`:

```yaml
plugins:
  - search
  - llmstxt
```

## Origin

This theme was primarily developed for the [openstage](https://github.com/openstage-eu) project with the help of agentic coding tools. It is free to reuse under the MIT license, but there are no guarantees of stability or continued maintenance.


