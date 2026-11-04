/**
 * BUNORA – Category & Live Search Filtering
 * Supports Menu Items & Blog Articles
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- Menu Page Filtering ---
  var menuFilterButtons = document.querySelectorAll('.menu-filter-btn');
  var menuItems = document.querySelectorAll('.menu-filterable-item');
  var menuSearchInput = document.getElementById('menuSearchInput');
  var menuEmptyState = document.getElementById('menuEmptyState');

  function filterMenu() {
    var activeBtn = document.querySelector('.menu-filter-btn.active');
    var activeCategory = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    var searchQuery = menuSearchInput ? menuSearchInput.value.toLowerCase().trim() : '';
    var visibleCount = 0;

    menuItems.forEach(function (item) {
      var itemCategory = item.getAttribute('data-category') || '';
      var itemTitle = (item.querySelector('.food-card-title') || {}).textContent || '';
      var itemDesc = (item.querySelector('.food-card-desc') || {}).textContent || '';
      var textMatch = (itemTitle + ' ' + itemDesc).toLowerCase().includes(searchQuery);
      var categoryMatch = (activeCategory === 'all' || itemCategory === activeCategory);

      if (categoryMatch && textMatch) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (menuEmptyState) {
      menuEmptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (menuFilterButtons.length > 0) {
    menuFilterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        menuFilterButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        filterMenu();
      });
    });
  }

  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', filterMenu);
  }

  // --- Blog Page Filtering ---
  var blogFilterButtons = document.querySelectorAll('.blog-filter-btn');
  var blogItems = document.querySelectorAll('.blog-filterable-item');
  var blogSearchInput = document.getElementById('blogSearchInput');
  var blogEmptyState = document.getElementById('blogEmptyState');

  function filterBlog() {
    var activeCategory = 'all';
    var activeBtn = document.querySelector('.blog-filter-btn.active');
    if (activeBtn) activeCategory = activeBtn.getAttribute('data-category');

    var searchQuery = blogSearchInput ? blogSearchInput.value.toLowerCase().trim() : '';
    var visibleCount = 0;

    blogItems.forEach(function (item) {
      var itemCategory = item.getAttribute('data-category') || '';
      var itemTitle = (item.querySelector('.blog-title') || {}).textContent || '';
      var itemDesc = (item.querySelector('.blog-excerpt') || {}).textContent || '';
      var textMatch = (itemTitle + ' ' + itemDesc).toLowerCase().includes(searchQuery);
      var categoryMatch = (activeCategory === 'all' || itemCategory === activeCategory);

      if (categoryMatch && textMatch) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (blogEmptyState) {
      blogEmptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (blogFilterButtons.length > 0) {
    blogFilterButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        blogFilterButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        filterBlog();
      });
    });
  }

  if (blogSearchInput) {
    blogSearchInput.addEventListener('input', filterBlog);
  }
});
