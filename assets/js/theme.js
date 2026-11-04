/**
 * BUNORA – Theme Switcher (Light / Dark Mode)
 * Persists selection via localStorage with zero flash
 */
(function () {
  'use strict';

  var THEME_KEY = 'bunora_theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeButtons(theme);
  }

  function updateThemeButtons(theme) {
    var buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach(function (btn) {
      if (theme === 'dark') {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        btn.setAttribute('title', 'Switch to Light Mode');
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        btn.setAttribute('title', 'Switch to Dark Mode');
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    });
  }

  // Set theme immediately before DOM content loads to prevent flash
  var initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    updateThemeButtons(initialTheme);

    var buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    });
  });

  window.bunoraSetTheme = setTheme;
})();
