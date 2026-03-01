# Overview

## Architecture

The openstage theme is a standalone MkDocs theme built with vanilla HTML, CSS, and JavaScript. It uses CSS Grid for layout and CSS custom properties for all configurability.

### Layout Structure

The page uses a three-column layout:

1. **Left sidebar** (fixed): Navigation tree, search, and optional subsite bar
2. **Main content** (scrollable): Page content with max-width constraint
3. **Right sidebar** (sticky): On-page table of contents

### Key Features

- Configurable colors, fonts, and layout dimensions
- Dark mode with light/dark/auto toggle and localStorage persistence
- Subsite bar for linking back to a parent project
- Sidebar footer links for external resources
- Custom site footer text
- highlight.js code highlighting with automatic light/dark switching

### File Organization

```
mkdocs_openstage_theme/
  base.html            # Full page skeleton with blocks
  main.html            # Extends base.html (entry point)
  mkdocs_theme.yml     # Theme defaults
  partials/
    nav.html           # Recursive sidebar navigation
    toc.html           # On-page table of contents
    search.html        # Search input and results
    header.html        # Mobile header with toggles
    footer.html        # Prev/next links and copyright
  css/
    theme.css          # All styles in one file
  js/
    theme.js           # All behavior in one file
```

## Design Principles

- No CSS framework dependencies
- No build step required
- Single CSS file, single JS file
- All customization through CSS custom properties
- Progressive enhancement for search and dark mode
