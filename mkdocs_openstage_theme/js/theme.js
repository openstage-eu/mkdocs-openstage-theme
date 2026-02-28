/**
 * openstage MkDocs Theme - JavaScript
 * Handles: sidebar collapse, mobile toggle, dark mode, TOC scroll spy
 */

(function () {
  "use strict";

  /* -----------------------------------------------------------------------
     Sidebar section collapse/expand
     ----------------------------------------------------------------------- */
  function initNavToggle() {
    document.querySelectorAll(".os-nav-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = this.getAttribute("aria-expanded") === "true";
        var list = this.nextElementSibling;
        if (!list) return;

        this.setAttribute("aria-expanded", String(!expanded));
        list.hidden = expanded;
      });
    });
  }

  /* -----------------------------------------------------------------------
     Mobile sidebar toggle
     ----------------------------------------------------------------------- */
  function initMobileToggle() {
    var sidebar = document.getElementById("os-sidebar");
    var toggle = document.getElementById("os-sidebar-toggle");
    var overlay = document.getElementById("os-overlay");

    if (!sidebar || !toggle) return;

    function openSidebar() {
      sidebar.classList.add("os-sidebar--open");
      if (overlay) overlay.classList.add("os-overlay--visible");
    }

    function closeSidebar() {
      sidebar.classList.remove("os-sidebar--open");
      if (overlay) overlay.classList.remove("os-overlay--visible");
    }

    toggle.addEventListener("click", function () {
      if (sidebar.classList.contains("os-sidebar--open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    if (overlay) {
      overlay.addEventListener("click", closeSidebar);
    }
  }

  /* -----------------------------------------------------------------------
     Color mode (light / dark / auto)
     ----------------------------------------------------------------------- */
  function initColorMode() {
    var toggle = document.getElementById("os-color-toggle");
    var html = document.documentElement;
    var hljsLight = document.getElementById("hljs-light");
    var hljsDark = document.getElementById("hljs-dark");

    var modes = ["light", "dark", "auto"];

    function getStoredMode() {
      try {
        return localStorage.getItem("os-color-mode");
      } catch (e) {
        return null;
      }
    }

    function storeMode(mode) {
      try {
        localStorage.setItem("os-color-mode", mode);
      } catch (e) {
        // ignore
      }
    }

    function resolveMode(mode) {
      if (mode === "auto") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return mode;
    }

    function applyMode(mode) {
      var resolved = resolveMode(mode);
      html.setAttribute("data-color-mode", resolved);

      // Toggle highlight.js stylesheets
      if (hljsLight) hljsLight.disabled = resolved === "dark";
      if (hljsDark) hljsDark.disabled = resolved !== "dark";
    }

    // Restore from localStorage on load
    var stored = getStoredMode();
    if (stored && modes.indexOf(stored) !== -1) {
      applyMode(stored);
    }

    // Listen for OS theme changes when in auto mode
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function () {
        var current = getStoredMode() || "light";
        if (current === "auto") {
          applyMode("auto");
        }
      });

    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var current = getStoredMode() || html.getAttribute("data-color-mode") || "light";
      var idx = modes.indexOf(current);
      var next = modes[(idx + 1) % modes.length];

      storeMode(next);
      applyMode(next);
    });
  }

  /* -----------------------------------------------------------------------
     TOC scroll spy
     ----------------------------------------------------------------------- */
  function initScrollSpy() {
    var tocLinks = document.querySelectorAll(".os-toc-link");
    if (!tocLinks.length) return;

    var headings = [];
    tocLinks.forEach(function (link) {
      var id = link.getAttribute("href");
      if (!id || id.charAt(0) !== "#") return;
      var el = document.getElementById(id.substring(1));
      if (el) headings.push({ el: el, link: link });
    });

    if (!headings.length) return;

    var activeClass = "os-toc-link--active";
    var currentActive = null;

    function update() {
      var scrollY = window.scrollY || window.pageYOffset;
      var offset = 100; // pixels from top to consider "active"
      var active = null;

      for (var i = headings.length - 1; i >= 0; i--) {
        if (headings[i].el.offsetTop <= scrollY + offset) {
          active = headings[i];
          break;
        }
      }

      // If scrolled to top, pick first heading
      if (!active && headings.length) {
        active = headings[0];
      }

      if (active && active.link !== currentActive) {
        if (currentActive) currentActive.classList.remove(activeClass);
        active.link.classList.add(activeClass);
        currentActive = active.link;
      }
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          update();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial highlight
    update();
  }

  /* -----------------------------------------------------------------------
     Search results visibility
     Hide "No results found" when search input is empty or not focused.
     ----------------------------------------------------------------------- */
  function initSearchVisibility() {
    var input = document.getElementById("mkdocs-search-query");
    var results = document.getElementById("mkdocs-search-results");
    if (!input || !results) return;

    // Start hidden
    results.classList.add("os-search-results--hidden");

    function updateVisibility() {
      if (input.value.length > 0 && document.activeElement === input) {
        results.classList.remove("os-search-results--hidden");
      } else if (input.value.length === 0) {
        results.classList.add("os-search-results--hidden");
      }
    }

    input.addEventListener("input", updateVisibility);
    input.addEventListener("focus", updateVisibility);
    input.addEventListener("blur", function () {
      // Small delay so clicking a result link works before hiding
      setTimeout(function () {
        if (input.value.length === 0) {
          results.classList.add("os-search-results--hidden");
        }
      }, 200);
    });
  }

  /* -----------------------------------------------------------------------
     Initialize on DOM ready
     ----------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initMobileToggle();
    initColorMode();
    initScrollSpy();
    initSearchVisibility();
  });
})();
