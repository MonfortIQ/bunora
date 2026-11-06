/* Apply the same primary BUNORA navigation to the standalone legal pages. */
(function () {
  'use strict';

  var page = window.location.pathname.split('/').pop();
  var legalPages = ['privacy-policy.html', 'terms-and-conditions.html', 'cookie-policy.html', '404.html', 'coming-soon.html', 'maintenance.html'];
  if (legalPages.indexOf(page) === -1) return;

  var header = document.querySelector('.site-header') || document.querySelector('body > header');
  if (!header) return;

  header.outerHTML = `
    <header class="site-header">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html" aria-label="BUNORA home">
            <img src="assets/images/logo-dark.svg" alt="BUNORA Logo" class="logo-dark">
            <img src="assets/images/logo-light.svg" alt="BUNORA Logo" class="logo-light">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileOffcanvas" aria-controls="mobileOffcanvas" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars-staggered"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home <i class="fa-solid fa-chevron-down nav-chevron"></i></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="index.html">Home 1 – Modern Burger</a></li>
                  <li><a class="dropdown-item" href="index-2.html">Home 2 – Artisan Deli</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
              <li class="nav-item"><a class="nav-link" href="menu.html">Menu</a></li>
              <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
              <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
            </ul>
            <div class="navbar-actions">
              <button type="button" class="theme-toggle-btn" title="Switch theme" aria-label="Switch theme"><i class="fa-solid fa-moon"></i></button>
              <button type="button" class="rtl-toggle-btn" title="Switch layout direction" aria-label="Switch layout direction"><span>RTL</span></button>
              <a href="menu.html" class="btn btn-accent btn-sm"><i class="fa-solid fa-bag-shopping"></i> Order Online</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileOffcanvas" aria-labelledby="mobileOffcanvasLabel">
      <div class="offcanvas-header">
        <a href="index.html" aria-label="BUNORA home">
          <img src="assets/images/logo-dark.svg" alt="BUNORA Logo" class="logo-dark" style="height: 38px;">
          <img src="assets/images/logo-light.svg" alt="BUNORA Logo" class="logo-light" style="height: 38px;">
        </a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="offcanvas-display-controls">
          <button type="button" class="theme-toggle-btn" title="Switch theme" aria-label="Switch theme"><i class="fa-solid fa-moon"></i></button>
          <button type="button" class="rtl-toggle-btn" title="Switch layout direction" aria-label="Switch layout direction"><span>RTL</span></button>
        </div>
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="index.html">Home 1 – Modern Burger</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="index-2.html">Home 2 – Artisan Deli</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="about.html">About Brand</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="menu.html">Menu &amp; Food</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="product-details.html">Product Details</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="combo-offers.html">Combo Offers</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="services.html">Services &amp; Catering</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="blog.html">Food Stories &amp; Blog</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="pricing.html">Catering Pricing</a></li>
          <li class="mobile-nav-item"><a class="mobile-nav-link" href="contact.html">Contact &amp; Location</a></li>
        </ul>
      </div>
    </div>`;
})();
