# Configuration

All theme options go under the `theme:` key in your `mkdocs.yml`.

## Colors

```yaml
theme:
  name: openstage
  color_mode: light          # light, dark, or auto
  color_toggle: true         # show toggle button in sidebar
  color_toggle_label: "Toggle dark mode"  # label text for the toggle
  primary_color: "#1a73e8"
  accent_color: "#1a73e8"
```

| Option | Default | Description |
|--------|---------|-------------|
| `color_mode` | `light` | Initial color mode: `light`, `dark`, or `auto` (follows OS) |
| `color_toggle` | `true` | Show the color mode toggle button in the sidebar footer |
| `color_toggle_label` | `"Toggle dark mode"` | Label text displayed next to the toggle button |
| `primary_color` | `"#1a73e8"` | Primary accent color used for links and active states |
| `accent_color` | `"#1a73e8"` | Secondary accent color |

## Typography

```yaml
theme:
  name: openstage
  font_family_body: "'Georgia', serif"
  font_family_code: "'Fira Code', monospace"
  font_size_body: "17px"
```

| Option | Default | Description |
|--------|---------|-------------|
| `font_family_body` | `"'Inter', -apple-system, ..."` | CSS font-family for body text |
| `font_family_code` | `"'JetBrains Mono', ..."` | CSS font-family for code blocks |
| `font_size_body` | `"16px"` | Base font size |

## Layout

```yaml
theme:
  name: openstage
  content_max_width: "50rem"
  sidebar_width: "20rem"
  toc_width: "16rem"
```

| Option | Default | Description |
|--------|---------|-------------|
| `content_max_width` | `"48rem"` | Maximum width of the main content area |
| `sidebar_width` | `"18rem"` | Width of the left navigation sidebar |
| `toc_width` | `"14rem"` | Width of the right table-of-contents sidebar |

## Navigation

```yaml
theme:
  name: openstage
  navigation_depth: 4
  toc_depth: 3
  show_toc: true
  show_sidebar_dividers: true
```

| Option | Default | Description |
|--------|---------|-------------|
| `navigation_depth` | `4` | Maximum nesting depth for sidebar navigation |
| `toc_depth` | `3` | Maximum heading depth for the on-page TOC |
| `show_toc` | `true` | Show the right-hand table of contents sidebar |
| `show_sidebar_dividers` | `true` | Show divider lines between sidebar navigation sections |

## Branding

```yaml
theme:
  name: openstage
  logo: img/logo.png
  site_title: "My Project"
```

| Option | Default | Description |
|--------|---------|-------------|
| `logo` | `null` | Path to a logo image for the sidebar header. If not set, the site name is displayed as text. |
| `site_title` | `null` | Override the site name displayed in the sidebar header |

## Announcement Bar

Display a dismissal-free banner at the top of the content area. Useful for version notices, deprecation warnings, or status updates.

### Site-level configuration

```yaml
theme:
  name: openstage
  announcement: "v2.0 has been released. <a href='/changelog/'>See what's new</a>."
  announcement_level: info
```

| Option | Default | Description |
|--------|---------|-------------|
| `announcement` | `null` | Text or HTML content for the banner. Set to `null` (or omit) to hide. |
| `announcement_level` | `info` | Visual style of the banner. One of `info`, `warning`, `danger`, `success`. |

### Available levels

| Level | Use case |
|-------|----------|
| `info` | General notices, version announcements (blue) |
| `warning` | Deprecation notices, upcoming changes (amber) |
| `danger` | Breaking changes, critical alerts (red) |
| `success` | Positive updates, resolved issues (green) |

### Page-level front matter

Override or suppress the announcement on individual pages:

```yaml
---
announcement: "This page has a custom notice."
announcement_level: warning
---
```

To suppress the site-level announcement on a specific page:

```yaml
---
announcement: false
---
```

## Subsite Bar

The subsite bar adds a navigation link above the sidebar, useful when this documentation site is part of a larger project.

```yaml
theme:
  name: openstage
  subsite:
    text: "Back to openstage"
    url: "https://openstage.eu"
    logo: img/parent-logo.png  # optional
```

| Option | Default | Description |
|--------|---------|-------------|
| `subsite` | `null` | Set to enable the subsite bar. Expects an object with the keys below. |
| `subsite.text` | -- | Link text shown in the bar |
| `subsite.url` | -- | URL the bar links to |
| `subsite.logo` | `null` | Optional small logo displayed next to the text |

## Repository Link

If you set the standard MkDocs `repo_url` option, the theme renders a link in the sidebar footer. MkDocs auto-detects the label from the URL (e.g. "GitHub"), or you can set `repo_name` explicitly.

```yaml
repo_url: https://github.com/my-org/my-project
repo_name: GitHub   # optional, auto-detected from URL
```

## Sidebar Footer Links

Add additional links to the bottom of the sidebar, above the color toggle. These appear alongside the repository link if both are set.

```yaml
theme:
  name: openstage
  nav_links:
    - title: API Reference
      url: /api/
    - title: Discord
      url: https://discord.gg/example
```

Links starting with `http` automatically open in a new tab.

## Site Footer

Set custom footer text displayed at the bottom of every page.

```yaml
theme:
  name: openstage
  site_footer: "Built with openstage theme for MkDocs"
```

If not set, no custom footer text is shown (the prev/next navigation still appears).

## Code Highlighting

The theme uses highlight.js with automatic light/dark stylesheet switching.

```yaml
theme:
  name: openstage
  highlightjs: true
  hljs_style: github
  hljs_style_dark: github-dark
  hljs_languages:
    - yaml
    - python
```

| Option | Default | Description |
|--------|---------|-------------|
| `highlightjs` | `true` | Enable highlight.js for code blocks |
| `hljs_style` | `"github"` | highlight.js theme for light mode |
| `hljs_style_dark` | `"github-dark"` | highlight.js theme for dark mode |
| `hljs_languages` | `[]` | Additional languages to load beyond the highlight.js defaults |
