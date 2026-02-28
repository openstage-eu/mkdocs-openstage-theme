# Advanced Usage

## Custom Blocks

The `base.html` template defines several overridable blocks:

- `site_meta` -- meta tags
- `htmltitle` -- page title
- `styles` -- CSS links
- `libs` -- JavaScript libraries
- `extrahead` -- additional head content
- `body` -- entire body content
- `sidebar` -- entire sidebar
- `sidebar_header` -- logo/title area
- `search` -- search widget
- `nav` -- navigation tree
- `sidebar_links` -- sidebar footer links section
- `header` -- mobile header
- `content` -- page body
- `toc` -- table of contents
- `footer` -- prev/next and copyright
- `scripts` -- JavaScript at end of body

Override any block in your own `main.html`:

```html
{% extends "base.html" %}

{% block extrahead %}
<link rel="stylesheet" href="{{ 'css/custom.css'|url }}">
{% endblock %}
```

## Subsite Bar

The subsite bar renders a back-navigation link above the sidebar content. It is useful when the documentation site is a subsite of a larger project or organization page.

```yaml
theme:
  subsite:
    text: "Back to openstage"
    url: "https://openstage.eu"
    logo: img/parent-logo.png  # optional
```

The bar includes a back-arrow icon, optional logo, and the link text. It sits outside the scrollable sidebar area so it is always visible.

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| > 1100px   | Full three-column layout |
| 769-1100px | Sidebar + content (TOC hidden) |
| < 768px    | Content only, sidebar off-canvas |

## Dark Mode

The theme supports three color modes:

- **light**: Light background, dark text
- **dark**: Dark background, light text
- **auto**: Follows operating system preference

The current mode is stored in `localStorage` under the key `os-color-mode` and persists across page loads. The toggle button cycles through: light, dark, auto.

The label on the toggle button defaults to "Toggle dark mode" and can be changed with the `color_toggle_label` option:

```yaml
theme:
  color_toggle_label: "Theme"
```

### CSS Integration

Dark mode works by setting `data-color-mode="dark"` on the `<html>` element. All color variables are redefined under that selector:

```css
[data-color-mode="dark"] {
  --os-bg: #1e1e1e;
  --os-text: #d4d4d4;
  /* ... */
}
```

## Search

Search is powered entirely by MkDocs' built-in search plugin (lunr.js). The theme provides the required HTML elements with specific IDs that MkDocs binds to automatically:

- `#mkdocs-search-query` -- the search input
- `#mkdocs-search-results` -- the results container

No custom JavaScript is needed for search functionality.
