/* Page-specific BUNORA hero compositions. */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var page = location.pathname.split('/').pop() || 'index.html';
  var pages = {
    'about.html': {eyebrow:'Our Story', title:'More than a burger. It’s our passion.', copy:'Meet the people, craft, and carefully chosen ingredients behind every BUNORA meal.', image:'assets/images/about/about-hero.jpg', alt:'BUNORA kitchen team preparing a meal', cta:'Explore Our Menu', href:'menu.html', style:'story'},
    'menu.html': {eyebrow:'Made to Crave', title:'Explore our delicious menu.', copy:'From signature smash burgers to fresh deli sandwiches, find something worth gathering around.', image:'assets/images/burgers/burger-4.jpg', alt:'BUNORA signature burger served fresh', cta:'Discover Our Specials', href:'combo-offers.html', style:'menu'},
    'services.html': {eyebrow:'BUNORA Hospitality', title:'More than great food. A complete experience.', copy:'Dine in, pick up, celebrate, or gather your team. We make every occasion delicious.', image:'assets/images/services/service-dinein.jpg', alt:'Warm, modern BUNORA dining room', cta:'Explore Our Services', href:'#servicesGrid', style:'hospitality'},
    'contact.html': {eyebrow:'We’re Here to Help', title:'Let’s make something delicious happen.', copy:'Questions, catering enquiries, or simply want to say hello? Our team would love to hear from you.', image:'assets/images/about/about-interior.jpg', alt:'Welcoming restaurant interior', cta:'Send Us a Message', href:'#contactForm', style:'contact'},
    'pricing.html': {eyebrow:'Gather Around', title:'Delicious packages for every occasion.', copy:'From team lunches to big celebrations, explore flexible catering packages made to share.', image:'assets/images/services/service-catering.jpg', alt:'BUNORA catering spread for a gathering', cta:'Explore Packages', href:'#pricingPackages', style:'pricing'},
    'combo-offers.html': {eyebrow:'Good Things Come Together', title:'More flavour. More value. More to love.', copy:'Discover satisfying burger and sandwich combinations, golden sides, and a little extra joy in every order.', image:'assets/images/combos/combo-2.jpg', alt:'Burger, fries, and drink combo', cta:'Explore All Combos', href:'#comboGrid', style:'combos'},
    'blog.html': {eyebrow:'The BUNORA Food Journal', title:'Stories worth savouring.', copy:'Food inspiration, ingredient secrets, and the people and ideas behind every bite.', image:'assets/images/blog/blog-5.jpg', alt:'Fresh ingredients ready for a BUNORA recipe', cta:'Read the Journal', href:'#featuredArticle', style:'journal'},
    'blog-list.html': {eyebrow:'From Our Kitchen', title:'Stories behind every flavour.', copy:'Fresh ideas, kitchen inspiration, and thoughtful guides for curious food lovers.', image:'assets/images/blog/blog-4.jpg', alt:'Ingredients sourced for BUNORA dishes', cta:'Browse Stories', href:'#articleList', style:'list'},
    'blog-details.html': {eyebrow:'Burger Science · Chef Marcus Vance', title:'The culinary physics behind the 450°F smashed patty.', copy:'A five-minute read on the heat, timing, and technique behind a beautifully browned burger.', image:'assets/images/blog/blog-1.jpg', alt:'Wagyu patty searing on a hot cast iron grill', cta:'Read the Story', href:'#articleBody', style:'article'},
  };
  var config = pages[page];
  var oldBanner = document.querySelector('.inner-hero');
  if (config && oldBanner) {
    var hero = document.createElement('section');
    hero.className = 'bunora-page-hero hero-' + config.style;
    hero.setAttribute('aria-labelledby', 'bunoraPageHeroTitle');
    hero.innerHTML = '<div class="container"><nav class="bunora-hero-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><i class="fa-solid fa-chevron-right" aria-hidden="true"></i><span>' + config.eyebrow + '</span></nav><div class="bunora-page-hero-grid"><div class="bunora-page-hero-copy"><span class="bunora-page-hero-eyebrow">' + config.eyebrow + '</span><h1 id="bunoraPageHeroTitle">' + config.title + '</h1><p>' + config.copy + '</p><a class="btn btn-accent btn-lg" href="' + config.href + '">' + config.cta + ' <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a><div class="bunora-hero-proof"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Freshly prepared with care, every day</div></div><figure class="bunora-page-hero-image"><img src="' + config.image + '" alt="' + config.alt + '" fetchpriority="high"><figcaption><span class="bunora-hero-image-mark"><i class="fa-solid fa-fire-flame-curved"></i></span><span>Handcrafted at BUNORA</span></figcaption></figure></div></div>';
    oldBanner.replaceWith(hero);
    if (page === 'blog-details.html') {
      var articleSection = hero.nextElementSibling;
      if (articleSection) articleSection.classList.add('bunora-article-body-section');
      var articleColumn = articleSection && articleSection.querySelector('.col-lg-8');
      if (articleColumn) {
        articleColumn.querySelector('.badge-custom')?.remove();
        articleColumn.querySelector('h1')?.remove();
        articleColumn.querySelector('.d-flex.flex-wrap.align-items-center.justify-content-between')?.remove();
        articleColumn.querySelector('.rounded-4.overflow-hidden.shadow-lg.border')?.remove();
      }
    }
  }
  if (page === 'product-details.html') {
    document.querySelector('.inner-hero')?.classList.add('bunora-detail-breadcrumb');
    document.querySelector('.product-detail-gallery')?.closest('.section-padding')?.classList.add('bunora-product-hero');
    var productName = document.querySelector('.product-detail-gallery')?.parentElement?.parentElement?.querySelector('h1');
    if (productName) productName.insertAdjacentHTML('beforebegin', '<span class="bunora-page-hero-eyebrow">BUNORA Signature · Chef’s Special</span>');
  }
  if (page === 'service-details.html') {
    document.querySelector('.inner-hero')?.classList.add('bunora-detail-breadcrumb');
    document.getElementById('serviceDetailImage')?.closest('.section-padding')?.classList.add('bunora-service-hero');
  }
  if (page === 'blog-details.html') document.querySelector('.article-body')?.setAttribute('id','articleBody');
  if (page === 'blog-list.html') document.querySelector('.section-padding .col-lg-8')?.setAttribute('id','articleList');
  if (page === 'services.html') document.querySelector('.bunora-page-hero + .section-padding .row.g-4')?.setAttribute('id','servicesGrid');
  if (page === 'combo-offers.html') document.querySelector('.bunora-page-hero + .section-padding .row.g-4')?.setAttribute('id','comboGrid');
  if (page === 'pricing.html') document.querySelector('.bunora-page-hero + .section-padding .row.g-4')?.setAttribute('id','pricingPackages');
  if (page === 'contact.html') document.querySelector('form')?.setAttribute('id','contactForm');
  if (page === 'blog.html') document.querySelector('.bunora-page-hero + .section-padding-sm')?.setAttribute('id','featuredArticle');

  var utility = document.querySelector('.utility-page-wrapper');
  if (utility && (page === '404.html' || page === 'coming-soon.html' || page === 'maintenance.html')) {
    utility.classList.add('bunora-utility-hero', 'utility-' + page.replace('.html',''));
    var image = page === '404.html' ? 'assets/images/burgers/burger-6.jpg' : page === 'coming-soon.html' ? 'assets/images/combos/combo-4.jpg' : 'assets/images/about/about-chef.jpg';
    var alt = page === '404.html' ? 'BUNORA burger illustration' : page === 'coming-soon.html' ? 'A BUNORA meal prepared for the new opening' : 'BUNORA chef at work';
    var visual = document.createElement('figure');
    visual.className = 'bunora-utility-visual';
    visual.innerHTML = '<img src="' + image + '" alt="' + alt + '" fetchpriority="high"><span><i class="fa-solid fa-fire-flame-curved"></i> Made fresh at BUNORA</span>';
    utility.querySelector('.container .row > div')?.appendChild(visual);
  }
});
