/**
 * BUNORA – Core Application Scripts (main.js)
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 01. Sticky Header on Scroll ---
  var siteHeader = document.querySelector('.site-header');
  var backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    var scrollPos = window.scrollY || window.pageYOffset;

    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // --- 02. Back to Top Click ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 03. Active Navigation State ---
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-link');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
      // If inside dropdown, also highlight parent dropdown toggle
      var parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        var toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });

  // --- 04. Current Year in Footer ---
  var yearEls = document.querySelectorAll('.current-year');
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = currentYear;
  });

  // --- 05. Countdown Timer (Coming Soon Page) ---
  var countdownWrap = document.getElementById('countdownTimer');
  if (countdownWrap) {
    // Target date: 45 days from current date
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    var daysEl = document.getElementById('days');
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');

    function updateCountdown() {
      var now = new Date().getTime();
      var distance = targetDate.getTime() - now;

      if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        return;
      }

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
      if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
      if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
      if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});
