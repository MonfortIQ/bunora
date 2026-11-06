/**
 * BUNORA – Core Application Scripts (main.js)
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 01. Sticky Header on Scroll ---
  var siteHeader = document.querySelector('.site-header');
  var backToTopBtn = document.getElementById('backToTopBtn');

  // Keep theme and direction controls in the page header instead of the side widget.
  var headerNavbar = siteHeader && siteHeader.querySelector('.navbar');
  var headerToggler = headerNavbar && headerNavbar.querySelector('.navbar-toggler');
  var headerActions = headerNavbar && headerNavbar.querySelector('.navbar-actions');
  var floatingControls = document.querySelectorAll('.floating-widget-wrap .theme-toggle-btn, .floating-widget-wrap .rtl-toggle-btn');

  if (headerNavbar && headerToggler && floatingControls.length) {
    var headerControls = document.createElement('div');
    headerControls.className = 'header-display-controls d-flex align-items-center gap-2 me-2';

    floatingControls.forEach(function (button) {
      button.classList.remove('floating-btn');
      headerControls.appendChild(button);
    });

    if (headerActions) {
      var primaryAction = headerActions.firstElementChild;
      headerActions.insertBefore(headerControls, primaryAction);
    } else {
      headerNavbar.insertBefore(headerControls, headerToggler);
    }
  } else {
    // Utility pages already include these controls in their own header.
    floatingControls.forEach(function (button) {
      button.remove();
    });
  }

  document.querySelectorAll('.floating-widget-wrap').forEach(function (widget) {
    if (!widget.children.length) widget.remove();
  });

  // Keep the mobile sidebar consistent on every page. Some utility and inner
  // pages do not have sidebar controls in their original markup, so add the
  // same icon-only controls after the shared header setup.
  document.querySelectorAll('.offcanvas .offcanvas-body').forEach(function (offcanvasBody) {
    var controls = offcanvasBody.querySelector('.offcanvas-display-controls, .d-flex.gap-2.mb-4');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'offcanvas-display-controls d-flex gap-2 mb-4';
      controls.innerHTML = '<button type="button" class="theme-toggle-btn" title="Switch theme" aria-label="Switch theme"><i class="fa-solid fa-moon"></i></button><button type="button" class="rtl-toggle-btn" title="Switch layout direction" aria-label="Switch layout direction"><span>RTL</span></button>';
      offcanvasBody.insertBefore(controls, offcanvasBody.firstElementChild);

      var themeButton = controls.querySelector('.theme-toggle-btn');
      var directionButton = controls.querySelector('.rtl-toggle-btn');
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeButton.setAttribute('title', 'Switch to Light Mode');
        themeButton.setAttribute('aria-label', 'Switch to Light Mode');
      }
      if (document.documentElement.getAttribute('dir') === 'rtl') {
        directionButton.innerHTML = '<span>LTR</span>';
        directionButton.setAttribute('title', 'Switch to LTR Layout');
        directionButton.setAttribute('aria-label', 'Switch to LTR Layout');
      }
      themeButton.addEventListener('click', function () {
        var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        if (window.bunoraSetTheme) window.bunoraSetTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
      directionButton.addEventListener('click', function () {
        var currentDirection = document.documentElement.getAttribute('dir') || 'ltr';
        if (window.bunoraSetDirection) window.bunoraSetDirection(currentDirection === 'rtl' ? 'ltr' : 'rtl');
      });
    } else {
      controls.classList.add('offcanvas-display-controls');
      controls.querySelectorAll('.theme-toggle-btn, .rtl-toggle-btn').forEach(function (button) {
        button.classList.remove('flex-fill');
      });
    }

    // Use one predictable mobile navigation on every page. The desktop menu
    // can keep its compact top-level links while the sidebar exposes the
    // complete page list without page-specific duplicates.
    var mobileList = offcanvasBody.querySelector('.mobile-nav-list');
    if (mobileList) {
      var currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
      var mobileLinks = [
        ['index.html', 'Home 1 – Modern Burger'],
        ['index-2.html', 'Home 2 – Artisan Deli'],
        ['about.html', 'About Brand'],
        ['menu.html', 'Menu & Food'],
        ['product-details.html', 'Product Details'],
        ['combo-offers.html', 'Combo Offers'],
        ['services.html', 'Services & Catering'],
        ['blog.html', 'Food Stories & Blog'],
        ['pricing.html', 'Catering Pricing'],
        ['404.html', '404 Page'],
        ['coming-soon.html', 'Coming Soon'],
        ['maintenance.html', 'Maintenance'],
        ['contact.html', 'Contact & Location']
      ];

      mobileList.innerHTML = mobileLinks.map(function (link) {
        var active = link[0] === currentPage ? ' active' : '';
        return '<li class="mobile-nav-item"><a class="mobile-nav-link' + active + '" href="' + link[0] + '">' + link[1] + '</a></li>';
      }).join('');
    }
  });

  // Add the shared Pages dropdown to every desktop navbar.
  var desktopNav = document.querySelector('.site-header .navbar-nav');
  if (desktopNav && !desktopNav.querySelector('.pages-nav-item')) {
    var pagesItem = document.createElement('li');
    pagesItem.className = 'nav-item dropdown pages-nav-item';
    pagesItem.innerHTML = '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages <i class="fa-solid fa-chevron-down nav-chevron"></i></a>' +
      '<ul class="dropdown-menu">' +
      '<li><a class="dropdown-item" href="pricing.html">Pricing &amp; Catering</a></li>' +
      '<li><a class="dropdown-item" href="404.html">404 Page</a></li>' +
      '<li><a class="dropdown-item" href="coming-soon.html">Coming Soon</a></li>' +
      '<li><a class="dropdown-item" href="maintenance.html">Maintenance</a></li>' +
      '</ul>';

    var contactNavLink = desktopNav.querySelector('a[href="contact.html"]');
    var contactNavItem = contactNavLink && contactNavLink.closest('.nav-item');
    if (contactNavItem) {
      desktopNav.insertBefore(pagesItem, contactNavItem);
    } else {
      desktopNav.appendChild(pagesItem);
    }
  }

  // Show service-specific detail content for the card that opened this page.
  var serviceDetailImage = document.getElementById('serviceDetailImage');
  if (serviceDetailImage) {
    var serviceDetailsByType = {
      dinein: {
        image: 'assets/images/services/service-dinein.jpg',
        imageAlt: 'Urban dine-in experience at BUNORA',
        title: 'Urban Dine-In Experience',
        badge: 'Made for Good Gatherings',
        intro: 'Settle into BUNORA for flame-grilled burgers, fresh sandwiches, and warm neighborhood hospitality.',
        description: 'Enjoy the open kitchen, relaxed booth seating, and our heated patio. Whether you are stopping in for a quick lunch or planning an evening out, our team will make your visit easy and welcoming.',
        benefitsTitle: 'A Better Dine-In Experience',
        benefits: [
          ['Open Kitchen', 'Watch every burger come fresh off the grill.'],
          ['Comfortable Seating', 'Choose a booth, counter seat, or heated patio table.'],
          ['Easy Reservations', 'Book ahead for dinner, weekends, and groups.'],
          ['Friendly Service', 'Our crew is ready with menu guidance and thoughtful options.']
        ],
        processTitle: 'Your Visit in Four Easy Steps',
        steps: [
          ['Choose a Time', 'Walk in or reserve a table ahead.'],
          ['Get Seated', 'We will find the right spot for your party.'],
          ['Order Your Favorites', 'Pick a burger, sandwich, side, and drink.'],
          ['Enjoy Your Meal', 'Everything is grilled fresh and served hot.']
        ],
        faqTitle: 'Dine-In Questions',
        faqs: [
          ['Can I reserve a table?', 'Yes. Contact our team to request a reservation, especially for larger groups and busy evenings.'],
          ['Do you have outdoor seating?', 'Yes. Heated patio seating is available, subject to weather and availability.'],
          ['Can you accommodate dietary needs?', 'Tell your server about allergies or dietary preferences and we will help you choose suitable items.'],
        ],
        sidebarTitle: 'Plan Your Visit',
        sidebarIntro: 'Reserve a table or stop by for a freshly grilled meal.',
        priceLabel: 'Dining options',
        price: 'À la carte',
        priceUnit: 'menu',
        sidebarBadge: 'Walk-ins welcome',
        sidebarFeatures: ['Open-kitchen dining room', 'Heated patio seating', 'Freshly grilled to order', 'Reservations for groups'],
        primaryLabel: 'Reserve a Table',
        primaryHref: 'contact.html',
        secondaryLabel: 'View the Menu',
        secondaryHref: 'menu.html',
        contactPrompt: 'Questions before your visit?'
      },
      takeaway: {
        image: 'assets/images/burgers/burger-3.jpg',
        imageAlt: 'BUNORA burgers prepared for takeaway',
        title: 'Express Takeaway & Pickup',
        badge: 'Ready When You Are',
        intro: 'Order ahead and pick up a hot, freshly made BUNORA meal on your schedule.',
        description: 'We prepare your order close to pickup time and pack it in insulated, vented containers to help keep burgers crisp and sides warm on the way home.',
        benefitsTitle: 'Takeaway Made Easy',
        benefits: [
          ['Order Ahead', 'Place your order online before you leave.'],
          ['Quick Pickup', 'Collect from our dedicated express counter.'],
          ['Careful Packing', 'Vented packaging helps protect the crisp texture.'],
          ['Curbside Option', 'Let us know when you arrive and we can bring it out.']
        ],
        processTitle: 'From Order to Pickup',
        steps: [
          ['Choose Your Meal', 'Browse burgers, sandwiches, sides, and drinks.'],
          ['Place Your Order', 'Add any preferences and choose a pickup time.'],
          ['We Prepare It Fresh', 'The kitchen starts your order before pickup.'],
          ['Grab and Go', 'Pick up at the express counter or request curbside.']
        ],
        faqTitle: 'Takeaway Questions',
        faqs: [
          ['How long does pickup take?', 'Most takeaway orders are ready in about 15 minutes. Your selected pickup time is shown when you order.'],
          ['Can I order for a specific time?', 'Yes. Choose an available pickup time during checkout.'],
          ['Is curbside pickup available?', 'Yes. Contact us when you arrive and our team can bring your order to your car.']
        ],
        sidebarTitle: 'Order for Pickup',
        sidebarIntro: 'Choose your meal and a pickup time that works for you.',
        priceLabel: 'Typical prep time',
        price: '15 min',
        priceUnit: 'or less',
        sidebarBadge: 'Express counter',
        sidebarFeatures: ['Order ahead online', 'Freshly prepared near pickup', 'Insulated takeaway packaging', 'Curbside pickup available'],
        primaryLabel: 'Start an Order',
        primaryHref: 'menu.html',
        secondaryLabel: 'Contact the Team',
        secondaryHref: 'contact.html',
        contactPrompt: 'Need help with an order?'
      },
      delivery: {
        image: 'assets/images/services/service-delivery.jpg',
        imageAlt: 'BUNORA hot food delivery by bike',
        title: 'Lightning Fast Hot Delivery',
        badge: 'Hot to Your Door',
        intro: 'Get flame-grilled BUNORA favorites delivered fresh to your home or workplace.',
        description: 'Our delivery team packs each order in travel-ready containers and keeps you updated from the kitchen to your door. Choose contactless drop-off at checkout for a convenient handoff.',
        benefitsTitle: 'Delivery You Can Count On',
        benefits: [
          ['Fast Local Delivery', 'Our nearby fleet gets meals moving as soon as they are ready.'],
          ['Live Order Updates', 'Follow your order from preparation through delivery.'],
          ['Contactless Drop-Off', 'Add delivery instructions for a no-contact handoff.'],
          ['Travel-Ready Packing', 'Packaging helps keep hot items warm and fries crisp.']
        ],
        processTitle: 'How Delivery Works',
        steps: [
          ['Browse the Menu', 'Choose your meal and enter a delivery address.'],
          ['Place Your Order', 'Add drop-off notes and contactless preferences.'],
          ['We Cook Fresh', 'Your order is prepared and packed for the trip.'],
          ['Track to Your Door', 'Follow the delivery updates and enjoy.']
        ],
        faqTitle: 'Delivery Questions',
        faqs: [
          ['Where do you deliver?', 'Enter your address when ordering to check whether it is within our delivery area.'],
          ['Can I request contactless delivery?', 'Yes. Add contactless drop-off instructions during checkout.'],
          ['Is delivery free?', 'Delivery fees and any current offers are displayed before you confirm your order.']
        ],
        sidebarTitle: 'Get Delivery',
        sidebarIntro: 'Check your address and order your BUNORA favorites for delivery.',
        priceLabel: 'Typical delivery time',
        price: '22 min',
        priceUnit: 'average',
        sidebarBadge: 'Free over $35',
        sidebarFeatures: ['Local bike and scooter fleet', 'Order progress updates', 'Contactless drop-off option', 'Vented packaging for hot food'],
        primaryLabel: 'Order Delivery',
        primaryHref: 'menu.html',
        secondaryLabel: 'Check Our Service Area',
        secondaryHref: 'contact.html',
        contactPrompt: 'Need help with delivery?'
      },
      catering: {
        image: 'assets/images/services/service-catering.jpg',
        imageAlt: 'Party and gathering catering by BUNORA',
        title: 'Party & Gathering Catering',
        badge: 'Event Favorite',
        intro: 'Elevate birthdays, celebrations, watch parties, and social reunions with BUNORA slider stations, artisan deli platters, and loaded sides.',
        description: 'From an intimate dinner to a lively celebration, our culinary catering team helps plan a menu that suits your guests. We provide hot-hold options, serving pieces, and a coordinator to keep your event running smoothly.',
        benefitsTitle: 'Why Choose BUNORA Catering?',
        benefits: [
          ['Hot Platter Delivery', 'Insulated transport helps burgers and sides arrive fresh and warm.'],
          ['Custom Slider Variety', 'Mix Wagyu beef, chicken, pastrami, and plant-based options.'],
          ['Full Tableware Setup', 'Compostable plates, cutlery, napkins, and serving tongs are available.'],
          ['Event Concierge', 'A dedicated coordinator helps plan portions and timing.']
        ],
        processTitle: 'Our Seamless 4-Step Catering Workflow',
        steps: [
          ['Select Menu', 'Choose slider packages, sides, and craft beverages.'],
          ['Confirm Details', 'Share guest count, dietary requests, and timing.'],
          ['Kitchen Prep', 'Our chefs prepare your food fresh before the event.'],
          ['Hot Setup', 'We deliver and arrange the food ready to serve.']
        ],
        faqTitle: 'Catering Questions',
        faqs: [
          ['How much notice is required?', 'We recommend at least 24 hours for smaller orders and 48 hours for larger gatherings.'],
          ['Can you accommodate dietary needs?', 'Yes. Share dietary needs when requesting a quote so we can plan suitable choices.'],
          ['Are serving warmers and utensils provided?', 'Serving equipment and tableware options can be arranged with your catering package.']
        ],
        sidebarTitle: 'Catering Quick Quote',
        sidebarIntro: 'Get an estimate and menu consultation from our events coordinator.',
        priceLabel: 'Starting from',
        price: '$14.50',
        priceUnit: '/ person',
        sidebarBadge: 'Min 10 Guests',
        sidebarFeatures: ['3 gourmet mini sliders per person', 'Loaded truffle fries platter', 'Choice of 2 craft drinks', 'Chafing kits and setup'],
        primaryLabel: 'Book Catering Inquiry',
        primaryHref: 'contact.html',
        secondaryLabel: 'View Catering Packages',
        secondaryHref: 'pricing.html',
        contactPrompt: 'Need urgent booking?'
      },
      corporate: {
        image: 'assets/images/services/service-corporate.jpg',
        imageAlt: 'Corporate lunch orders prepared by BUNORA',
        title: 'Corporate Food Orders',
        badge: 'Made for the Workday',
        intro: 'Keep meetings and office teams fueled with individually packed BUNORA lunches and fresh drinks.',
        description: 'Choose labeled meal boxes for client presentations, team lunches, or boardroom meetings. We coordinate quantities, delivery timing, and dietary notes so each order arrives organized and ready to enjoy.',
        benefitsTitle: 'Office Lunches, Organized',
        benefits: [
          ['Individually Labeled', 'Make it easy for everyone to find their meal.'],
          ['Flexible Menus', 'Build an order from burgers, sandwiches, sides, and drinks.'],
          ['Reliable Timing', 'Schedule delivery around your meeting or lunch break.'],
          ['Repeat Ordering', 'Set up a regular team lunch with our catering team.']
        ],
        processTitle: 'Plan Your Office Order',
        steps: [
          ['Share Your Needs', 'Tell us the date, headcount, and budget.'],
          ['Choose the Menu', 'Select meals and send dietary notes.'],
          ['Confirm the Schedule', 'We agree on quantities and delivery timing.'],
          ['Serve Your Team', 'Labeled meals arrive ready to hand out.']
        ],
        faqTitle: 'Corporate Order Questions',
        faqs: [
          ['Can meals be labeled by name?', 'Yes. Send the attendee names and meal selections when confirming the order.'],
          ['Can you handle recurring orders?', 'Yes. Contact our team to discuss a recurring schedule for your office.'],
          ['How early should I place an order?', 'For larger office orders, please contact us at least 48 hours ahead when possible.']
        ],
        sidebarTitle: 'Plan an Office Lunch',
        sidebarIntro: 'Tell us about your team order and we will help build a menu.',
        priceLabel: 'Order pricing',
        price: 'Custom',
        priceUnit: 'quote',
        sidebarBadge: 'Group orders',
        sidebarFeatures: ['Individually labeled meals', 'Flexible menu packages', 'Scheduled office delivery', 'Dietary notes accommodated'],
        primaryLabel: 'Request an Office Quote',
        primaryHref: 'contact.html',
        secondaryLabel: 'Browse the Menu',
        secondaryHref: 'menu.html',
        contactPrompt: 'Planning a large meeting?'
      },
      events: {
        image: 'assets/images/services/service-events.jpg',
        imageAlt: 'Private dining event at BUNORA',
        title: 'Private Dining & Buyouts',
        badge: 'Make It a Night',
        intro: 'Bring your guests together for a private BUNORA dinner, celebration, or full restaurant buyout.',
        description: 'Host a rehearsal dinner, birthday, brand launch, or chef-led tasting in a space set aside for your group. Our team will help coordinate the room, menu, bar, and service details around your plans.',
        benefitsTitle: 'A Private Event Built Around You',
        benefits: [
          ['Private Dining Space', 'Gather your guests in a reserved area of the restaurant.'],
          ['Full Buyout Option', 'Ask about booking the restaurant for your event.'],
          ['Dedicated Event Team', 'Coordinate the menu, timing, and room details in advance.'],
          ['Food and Drink Pairings', 'Build a menu with burgers, shareable sides, and beverages.']
        ],
        processTitle: 'Plan Your Private Event',
        steps: [
          ['Tell Us Your Plan', 'Share your event date, guest count, and occasion.'],
          ['Choose a Space', 'Discuss private dining or a full restaurant buyout.'],
          ['Build the Menu', 'Select food and drink options for your guests.'],
          ['Celebrate at BUNORA', 'Our team takes care of the details on the day.']
        ],
        faqTitle: 'Private Event Questions',
        faqs: [
          ['How many guests can you host?', 'Capacity depends on the room and event setup. Contact us with your guest count for available options.'],
          ['Can we customize the menu?', 'Yes. Our team can help create a menu and pairings suited to your event.'],
          ['Can we book the full restaurant?', 'Full restaurant buyouts may be available on select dates. Contact us to discuss your plans.']
        ],
        sidebarTitle: 'Plan a Private Event',
        sidebarIntro: 'Tell us the occasion, date, and guest count to start planning.',
        priceLabel: 'Event packages',
        price: 'Custom',
        priceUnit: 'quote',
        sidebarBadge: 'Up to 120 guests',
        sidebarFeatures: ['Private dining room options', 'Full restaurant buyouts', 'Dedicated event coordinator', 'Custom food and drink menus'],
        primaryLabel: 'Ask About Your Date',
        primaryHref: 'contact.html',
        secondaryLabel: 'View Catering Packages',
        secondaryHref: 'pricing.html',
        contactPrompt: 'Have an event question?'
      }
    };
    var requestedService = new URLSearchParams(window.location.search).get('service');
    var serviceDetails = serviceDetailsByType[requestedService] || serviceDetailsByType.catering;

    function setServiceText(id, value) {
      var element = document.getElementById(id);
      if (element) element.textContent = value;
    }

    serviceDetailImage.src = serviceDetails.image;
    serviceDetailImage.alt = serviceDetails.imageAlt;
    setServiceText('serviceDetailBreadcrumb', serviceDetails.title);
    setServiceText('serviceDetailBadge', serviceDetails.badge);
    setServiceText('serviceDetailTitle', serviceDetails.title);
    setServiceText('serviceDetailIntro', serviceDetails.intro);
    setServiceText('serviceDetailDescription', serviceDetails.description);
    setServiceText('serviceBenefitsTitle', serviceDetails.benefitsTitle);
    setServiceText('serviceProcessTitle', serviceDetails.processTitle);
    setServiceText('serviceFaqTitle', serviceDetails.faqTitle);
    setServiceText('serviceSidebarTitle', serviceDetails.sidebarTitle);
    setServiceText('serviceSidebarIntro', serviceDetails.sidebarIntro);
    setServiceText('servicePriceLabel', serviceDetails.priceLabel);
    setServiceText('servicePriceValue', serviceDetails.price);
    setServiceText('servicePriceUnit', serviceDetails.priceUnit);
    setServiceText('serviceSidebarBadge', serviceDetails.sidebarBadge);
    setServiceText('servicePrimaryActionLabel', serviceDetails.primaryLabel);
    setServiceText('serviceContactPrompt', serviceDetails.contactPrompt);

    var primaryAction = document.getElementById('servicePrimaryAction');
    var secondaryAction = document.getElementById('serviceSecondaryAction');
    if (primaryAction) primaryAction.href = serviceDetails.primaryHref;
    if (secondaryAction) {
      secondaryAction.href = serviceDetails.secondaryHref;
      secondaryAction.textContent = serviceDetails.secondaryLabel;
    }

    serviceDetails.benefits.forEach(function (benefit, index) {
      setServiceText('serviceBenefitTitle' + (index + 1), benefit[0]);
      setServiceText('serviceBenefitText' + (index + 1), benefit[1]);
    });

    serviceDetails.steps.forEach(function (step, index) {
      setServiceText('serviceStepTitle' + (index + 1), step[0]);
      setServiceText('serviceStepText' + (index + 1), step[1]);
    });

    serviceDetails.faqs.forEach(function (faq, index) {
      setServiceText('serviceFaqQuestion' + (index + 1), faq[0]);
      setServiceText('serviceFaqAnswer' + (index + 1), faq[1]);
    });

    var sidebarFeatures = document.getElementById('serviceSidebarFeatures');
    if (sidebarFeatures) {
      sidebarFeatures.replaceChildren();
      serviceDetails.sidebarFeatures.forEach(function (feature) {
        var item = document.createElement('li');
        var icon = document.createElement('i');
        icon.className = 'fa-solid fa-check text-green';
        item.appendChild(icon);
        item.appendChild(document.createTextNode(' ' + feature));
        sidebarFeatures.appendChild(item);
      });
    }

    document.title = serviceDetails.title + ' | BUNORA Services';
  }

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
