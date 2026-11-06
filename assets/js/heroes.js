/* Page-specific BUNORA hero compositions. */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var page = location.pathname.split('/').pop() || 'index.html';
  var blogPosts = {
    'smash-patty': {
      eyebrow: 'Burger Science - Chef Marcus Vance', title: 'The Physics Behind the 450 F Smashed Patty',
      copy: 'A five-minute read on the heat, timing, and technique behind a beautifully browned burger.', image: 'assets/images/blog/blog-1.jpg', alt: 'BUNORA smashed burger with a deeply browned crust', category: 'Burger Recipes &amp; Culinary Technique', author: 'Chef Marcus Vance', role: 'Executive Chef &amp; Co-Founder', avatar: 'assets/images/about/about-chef.jpg', date: 'Oct 28, 2026', readTime: '5 Min Read', comments: '18 Comments', tags: ['#SmashBurger', '#Maillard', '#WagyuBeef'],
      body: `<p>The best smash burger begins with a cold, loosely packed ball of beef and a plancha that is already radiating serious heat. That contrast gives the patty its signature lace edge while keeping the centre tender.</p><h3 id="section-maillard" class="fw-bold text-primary mt-5 mb-3">1. Build the crust first</h3><p>Press the beef once, firmly, during the first few seconds on the griddle. The extra surface contact drives browning and creates the savoury crust that makes a BUNORA burger memorable.</p><div class="editorial-quote-box my-4"><h4>Great texture comes from heat, timing, and one confident press.</h4><span>- Chef Marcus Vance</span></div><h3 id="section-timing" class="fw-bold text-primary mt-5 mb-3">2. Give the patty time to finish</h3><p>After the initial press, leave the patty alone until the edges are crisp and the juices begin to rise. Scrape underneath, flip once, add aged cheddar, and serve immediately.</p>`
    },
    'cold-fermentation': {
      eyebrow: 'Bread Craft - Elena Rossi', title: 'Why 48-Hour Cold Fermentation Makes Sourdough Unstoppable',
      copy: 'A slow, cool fermentation guide to deeper flavour, an open crumb, and a beautifully crisp sandwich loaf.', image: 'assets/images/blog/blog-2.jpg', alt: 'Fresh sourdough loaves prepared for BUNORA sandwiches', category: 'Sandwich Stories &amp; Bread Craft', author: 'Elena Rossi', role: 'Co-Founder &amp; Master Baker', avatar: 'assets/images/about/about-sous-chef.jpg', date: 'Oct 18, 2026', readTime: '6 Min Read', comments: '12 Comments', tags: ['#Sourdough', '#Fermentation', '#BreadCraft'],
      body: `<p>Our sourdough starts with patience. A long, cold rest gives wild yeast time to work slowly, building aroma and a crumb that stays light without losing its chew.</p><h3 id="section-fermentation" class="fw-bold text-primary mt-5 mb-3">1. Let time develop flavour</h3><p>We mix the dough gently, fold it at regular intervals, and then move it into the cooler overnight. The slower pace protects the dough structure while allowing the natural culture to create layers of flavour.</p><div class="editorial-quote-box my-4"><h4>Good bread is made with a schedule, but great bread is made with patience.</h4><span>- Elena Rossi</span></div><h3 id="section-bake" class="fw-bold text-primary mt-5 mb-3">2. Bake for colour and structure</h3><p>A hot oven and a short burst of steam help the loaf expand before the crust sets. We cool every loaf fully before slicing so each sandwich gets a clean, generous bite.</p>`
    },
    'craft-sauces': {
      eyebrow: 'Sauce Lab - BUNORA Kitchen', title: '10 Craft Burger Sauces Ranked by Heat &amp; Boldness',
      copy: 'From sweet bourbon notes to bright fermented chilli, these house sauces bring a different kind of energy to every bite.', image: 'assets/images/blog/blog-3.jpg', alt: 'House-made burger sauce with fresh tomatoes and herbs', category: 'Food Culture &amp; Sauce Lab', author: 'Chef Marcus Vance', role: 'Executive Chef &amp; Co-Founder', avatar: 'assets/images/about/about-chef.jpg', date: 'Oct 05, 2026', readTime: '4 Min Read', comments: '9 Comments', tags: ['#BurgerSauce', '#Chilli', '#KitchenLab'],
      body: `<p>A sauce should support the burger, not hide it. We taste every batch against a hot patty, toasted bun, and crisp lettuce so the balance works in a real bite.</p><h3 id="section-balance" class="fw-bold text-primary mt-5 mb-3">1. Start with balance</h3><p>Acid keeps rich beef lively, sweetness rounds the heat, and a little salt makes every ingredient more expressive. Our favourite recipes build those three notes in layers.</p><div class="editorial-quote-box my-4"><h4>The best sauce gives you a reason to take another bite.</h4><span>- BUNORA Sauce Lab</span></div><h3 id="section-pairings" class="fw-bold text-primary mt-5 mb-3">2. Match sauce to the filling</h3><p>Smoky sauces love grilled onions, bright relishes lift crispy chicken, and a creamy pepper sauce gives aged cheddar a warm, lingering finish.</p>`
    },
    'local-suppliers': {
      eyebrow: 'From Our Partners - BUNORA Journal', title: 'Meet Our Local Grass-Fed Angus &amp; Cheese Partners',
      copy: 'The farmers, cheesemakers, and makers who help us keep every BUNORA ingredient honest and full of flavour.', image: 'assets/images/blog/blog-4.jpg', alt: 'Local ingredients selected for BUNORA burgers and sandwiches', category: 'Ingredients &amp; Local Partners', author: 'Elena Rossi', role: 'Co-Founder &amp; Master Baker', avatar: 'assets/images/about/about-sous-chef.jpg', date: 'Sep 24, 2026', readTime: '7 Min Read', comments: '15 Comments', tags: ['#LocalFood', '#GrassFed', '#BUNORAPartners'],
      body: `<p>Great food starts long before it reaches our kitchen. We work with nearby farms and small producers who care for their land, animals, and craft with the same attention we bring to the grill.</p><h3 id="section-beef" class="fw-bold text-primary mt-5 mb-3">1. Beef with a clear story</h3><p>Our grass-fed Angus partners raise cattle with room to graze and time to mature. That gives us beef with a clean flavour, a satisfying texture, and the confidence to keep seasoning simple.</p><div class="editorial-quote-box my-4"><h4>When the ingredient is cared for, the plate needs less decoration.</h4><span>- Elena Rossi</span></div><h3 id="section-cheese" class="fw-bold text-primary mt-5 mb-3">2. Cheese that finishes the burger</h3><p>Our aged cheese partners make wheels in small batches, allowing each one to develop a rounded savoury finish that melts evenly over a freshly seared patty.</p>`
    },
    'classic-reuben': {
      eyebrow: 'Deli Classics - BUNORA Journal', title: 'Anatomy of the Classic New York Reuben',
      copy: 'A closer look at the crisp rye, tender brisket, sharp kraut, and dressing that make this deli classic so satisfying.', image: 'assets/images/blog/blog-5.jpg', alt: 'A classic Reuben sandwich prepared with deli ingredients', category: 'Sandwich Stories &amp; Deli Classics', author: 'Chef Marcus Vance', role: 'Executive Chef &amp; Co-Founder', avatar: 'assets/images/about/about-chef.jpg', date: 'Sep 14, 2026', readTime: '5 Min Read', comments: '11 Comments', tags: ['#Reuben', '#DeliClassics', '#RyeBread'],
      body: `<p>A memorable Reuben is a study in contrast: warm and cool, crisp and tender, rich and bright. Every layer has a job, and the order matters as much as the ingredients.</p><h3 id="section-layers" class="fw-bold text-primary mt-5 mb-3">1. Layer for every texture</h3><p>We start with toasted rye, add warm sliced brisket, then pile on tangy kraut and aged cheese. The final layer of dressing brings the sandwich together without making the bread heavy.</p><div class="editorial-quote-box my-4"><h4>A deli sandwich should be generous, balanced, and just a little messy.</h4><span>- Chef Marcus Vance</span></div><h3 id="section-toast" class="fw-bold text-primary mt-5 mb-3">2. Toast the bread properly</h3><p>Even browning gives rye enough structure to carry the filling. We toast it in butter until the edges are crisp and the centre still has a little give.</p>`
    },
    'crispy-fries': {
      eyebrow: 'Side Notes - BUNORA Kitchen', title: 'The Crispy Science of Double-Blanched Fries',
      copy: 'Why a careful soak, a gentle first fry, and a hot final finish create fries that stay crisp from first bite to last.', image: 'assets/images/blog/blog-6.jpg', alt: 'Golden double-fried fries served fresh at BUNORA', category: 'Food Culture &amp; Kitchen Technique', author: 'Elena Rossi', role: 'Co-Founder &amp; Master Baker', avatar: 'assets/images/about/about-sous-chef.jpg', date: 'Sep 02, 2026', readTime: '4 Min Read', comments: '7 Comments', tags: ['#CrispyFries', '#KitchenScience', '#BUNORASides'],
      body: `<p>Crunchy fries are not an accident. The right potato, a clean soak, and two carefully controlled cooking stages remove surface starch and build a shell around a fluffy centre.</p><h3 id="section-soak" class="fw-bold text-primary mt-5 mb-3">1. Rinse away the surface starch</h3><p>We soak the cut potatoes in cold water, changing it until the water runs clear. This keeps the exterior from turning gummy and helps each fry cook evenly.</p><div class="editorial-quote-box my-4"><h4>Crispness is built in stages, not rushed in one hot fryer.</h4><span>- BUNORA Kitchen Team</span></div><h3 id="section-fry" class="fw-bold text-primary mt-5 mb-3">2. Fry twice for the perfect finish</h3><p>The first fry cooks the centre gently. After a short rest, the second fry sets the golden shell at a higher temperature so the fries arrive crunchy, fluffy, and ready for sauce.</p>`
    }
  };
  var selectedBlogPost = page === 'blog-details.html'
    ? (blogPosts[new URLSearchParams(location.search).get('post')] || blogPosts['smash-patty'])
    : null;
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
  if (page === 'blog-details.html' && selectedBlogPost) {
    config = {
      eyebrow: selectedBlogPost.eyebrow,
      title: selectedBlogPost.title,
      copy: selectedBlogPost.copy,
      image: selectedBlogPost.image,
      alt: selectedBlogPost.alt,
      cta: 'Read the Story',
      href: '#articleBody',
      style: 'article'
    };
    document.title = selectedBlogPost.title.replace(/&amp;/g, '&') + ' - BUNORA Journal';
  }
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
        var detailBadge = articleColumn.querySelector('.badge-custom');
        var detailTitle = articleColumn.querySelector('h1');
        var detailMeta = articleColumn.querySelector('.d-flex.flex-wrap.align-items-center.justify-content-between');
        var detailImage = articleColumn.querySelector('.rounded-4.overflow-hidden.shadow-lg.border img');
        var detailBody = articleColumn.querySelector('.article-body');
        if (detailBadge) detailBadge.innerHTML = selectedBlogPost.category;
        if (detailTitle) detailTitle.textContent = selectedBlogPost.title.replace(/&amp;/g, '&');
        if (detailMeta) {
          var authorImage = detailMeta.querySelector('img');
          var authorName = detailMeta.querySelector('h6');
          var authorRole = detailMeta.querySelector('span.text-muted');
          var metaItems = detailMeta.querySelectorAll('.d-flex.gap-3.text-muted.small span');
          if (authorImage) {
            authorImage.src = selectedBlogPost.avatar;
            authorImage.alt = selectedBlogPost.author;
          }
          if (authorName) authorName.textContent = 'By ' + selectedBlogPost.author;
          if (authorRole) authorRole.innerHTML = selectedBlogPost.role;
          if (metaItems[0]) metaItems[0].innerHTML = '<i class="fa-regular fa-calendar text-accent me-1"></i> ' + selectedBlogPost.date;
          if (metaItems[1]) metaItems[1].innerHTML = '<i class="fa-regular fa-clock text-accent me-1"></i> ' + selectedBlogPost.readTime;
          if (metaItems[2]) metaItems[2].innerHTML = '<i class="fa-regular fa-comment text-accent me-1"></i> ' + selectedBlogPost.comments;
        }
        if (detailImage) {
          detailImage.src = selectedBlogPost.image;
          detailImage.alt = selectedBlogPost.alt;
        }
        if (detailBody) detailBody.innerHTML = selectedBlogPost.body;

        var detailTags = articleColumn.querySelectorAll('.widget-tag');
        selectedBlogPost.tags.forEach(function (tag, index) {
          if (detailTags[index]) detailTags[index].textContent = tag;
        });

        articleColumn.querySelector('.badge-custom')?.remove();
        articleColumn.querySelector('h1')?.remove();
        articleColumn.querySelector('.d-flex.flex-wrap.align-items-center.justify-content-between')?.remove();
        articleColumn.querySelector('.rounded-4.overflow-hidden.shadow-lg.border')?.remove();
      }

      var detailSidebar = articleSection && articleSection.querySelector('.col-lg-4');
      if (detailSidebar) {
        var sidebarAuthorImage = detailSidebar.querySelector('img.rounded-circle');
        var sidebarAuthorName = detailSidebar.querySelector('.text-center h5');
        var sidebarAuthorRole = detailSidebar.querySelector('.text-center .text-accent');
        if (sidebarAuthorImage) {
          sidebarAuthorImage.src = selectedBlogPost.avatar;
          sidebarAuthorImage.alt = selectedBlogPost.author;
        }
        if (sidebarAuthorName) sidebarAuthorName.textContent = selectedBlogPost.author;
        if (sidebarAuthorRole) sidebarAuthorRole.innerHTML = selectedBlogPost.role;
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
