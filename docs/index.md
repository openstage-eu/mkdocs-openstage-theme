# Welcome to openstage

This is a test site for the openstage MkDocs theme.

## Features

The theme provides:

- Clean, book-like layout with sidebar navigation
- Built-in search via MkDocs search plugin
- On-page table of contents
- Dark mode with light/dark/auto toggle and persistence
- Subsite bar for linking back to a parent project
- Configurable sidebar footer links and site footer text
- Responsive design (three-column, two-column, single-column)
- highlight.js code highlighting with automatic light/dark switching

## Quick Start

Install the theme and add it to your `mkdocs.yml`:

```yaml
theme:
  name: openstage
```

Then run:

```bash
mkdocs serve
```

## Sample Content

Here is some **bold text** and *italic text* and `inline code`.

> This is a blockquote to test styling.

| Column A | Column B | Column C |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

### Code Example

```python
def hello(name: str) -> str:
    """Greet someone."""
    return f"Hello, {name}!"

print(hello("World"))
```
