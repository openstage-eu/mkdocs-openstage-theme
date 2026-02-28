# Installation

## Requirements

- Python 3.9 or later
- MkDocs 1.5 or later

## Install from GitHub

The theme is not yet published on PyPI. Install directly from GitHub:

```bash
pip install git+https://github.com/openstage-eu/mkdocs-openstage-theme.git
```

For local development, clone the repository and install in editable mode:

```bash
git clone https://github.com/openstage-eu/mkdocs-openstage-theme.git
cd mkdocs-openstage-theme
pip install -e .
```

## Verify Installation

Check that the theme is available:

```bash
mkdocs serve
```

Navigate to `http://localhost:8000` to see the theme in action.

## Dependencies

The theme has a single dependency: `mkdocs>=1.5`. It uses no CSS frameworks or JavaScript libraries beyond what MkDocs provides (lunr.js for search).
