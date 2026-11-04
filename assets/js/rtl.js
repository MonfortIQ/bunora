/**
 * BUNORA – Direction Switcher (LTR / RTL)
 * Persists layout direction via localStorage
 */
(function () {
  'use strict';

  var DIR_KEY = 'bunora_direction';

  function getPreferredDir() {
    var stored = localStorage.getItem(DIR_KEY);
    return stored || 'ltr';
  }

  function setDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_KEY, dir);
    updateRTLButtons(dir);
  }

  function updateRTLButtons(dir) {
    var buttons = document.querySelectorAll('.rtl-toggle-btn');
    buttons.forEach(function (btn) {
      if (dir === 'rtl') {
        btn.innerHTML = '<span style="font-weight:800; font-size:0.8rem;">LTR</span>';
        btn.setAttribute('title', 'Switch to LTR Layout');
        btn.setAttribute('aria-label', 'Switch to LTR Layout');
      } else {
        btn.innerHTML = '<span style="font-weight:800; font-size:0.8rem;">RTL</span>';
        btn.setAttribute('title', 'Switch to RTL Layout');
        btn.setAttribute('aria-label', 'Switch to RTL Layout');
      }
    });
  }

  // Set direction immediately before DOM loads
  var initialDir = getPreferredDir();
  document.documentElement.setAttribute('dir', initialDir);

  document.addEventListener('DOMContentLoaded', function () {
    updateRTLButtons(initialDir);

    var buttons = document.querySelectorAll('.rtl-toggle-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var current = document.documentElement.getAttribute('dir') || 'ltr';
        var next = current === 'rtl' ? 'ltr' : 'rtl';
        setDirection(next);
      });
    });
  });

  window.bunoraSetDirection = setDirection;
})();
