/**
 * Shared BUNORA footer, newsletter form, and footer interactions.
 * Set window.BUNORA_NEWSLETTER_ENDPOINT or the form data-endpoint to enable subscriptions.
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var existingFooter = document.querySelector('.site-footer');
  var pageHadFooter = !!existingFooter;
  if (!existingFooter) {
    existingFooter = document.createElement('footer');
    existingFooter.className = 'site-footer';
    document.body.appendChild(existingFooter);
  }

  // Remove older newsletter strips so every content page has one consistent signup.
  if (pageHadFooter) {
    document.querySelectorAll('section').forEach(function (section) {
      if (section.querySelector('#newsletterForm')) section.remove();
    });
  }

  var mount = document.createElement('div');
  mount.innerHTML = `
    <section class="bunora-newsletter-band" aria-labelledby="bunoraNewsletterTitle">
      <div class="container">
        <div class="bunora-newsletter-card footer-reveal">
          <div class="bunora-newsletter-art">
            <img src="assets/images/home-1/special-burger.jpg" alt="" loading="lazy">
            <span class="bunora-newsletter-art-badge" aria-hidden="true"><i class="fa-solid fa-burger"></i></span>
          </div>
          <div class="bunora-newsletter-copy">
            <span class="bunora-eyebrow"><i class="fa-solid fa-envelope-open-text"></i> The BUNORA Newsletter</span>
            <h2 id="bunoraNewsletterTitle">Good Food. Great News.</h2>
            <p>Get exclusive offers, fresh menu updates, and delicious deals straight to your inbox.</p>
          </div>
          <form class="bunora-newsletter-form" data-endpoint="" novalidate>
            <label class="visually-hidden" for="bunoraNewsletterEmail">Email address</label>
            <div class="bunora-newsletter-controls">
              <input id="bunoraNewsletterEmail" name="email" type="email" autocomplete="email" placeholder="Your email address" required>
              <button type="submit"><span>Subscribe</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <p class="bunora-newsletter-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>

    <section class="bunora-promise-band" aria-label="The BUNORA promise">
      <div class="container bunora-promise-inner footer-reveal">
        <span class="bunora-promise-icon" aria-hidden="true"><i class="fa-solid fa-fire-flame-curved"></i></span>
        <p>Freshly Made. Always Delicious. <span>That’s the BUNORA Promise.</span></p>
        <a href="menu.html" class="bunora-promise-link">Explore the Menu <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </section>

    <footer class="site-footer bunora-site-footer">
      <div class="container">
        <div class="bunora-footer-grid">
          <section class="bunora-footer-brand footer-reveal" aria-labelledby="bunoraFooterBrand">
            <a class="bunora-footer-logo" href="index.html" aria-label="BUNORA home">
              <img src="assets/images/logo-dark.svg" alt="BUNORA Gourmet Burgers and Deli" class="logo-dark">
              <img src="assets/images/logo-light.svg" alt="" aria-hidden="true" class="logo-light">
            </a>
            <h2 id="bunoraFooterBrand" class="bunora-footer-tagline">Gourmet Burgers <span>&amp; Fresh Sandwiches</span></h2>
            <p class="bunora-footer-description">Crafting unforgettable flavours with freshly sourced ingredients, handcrafted recipes, and a passion for exceptional food.</p>
            <div class="bunora-footer-mark" aria-hidden="true"><i class="fa-solid fa-burger"></i><span>Made fresh, every day</span></div>
            <nav class="bunora-social-links" aria-label="BUNORA social media">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            </nav>
          </section>

          <nav class="bunora-footer-column footer-reveal" aria-labelledby="bunoraExploreTitle">
            <h2 id="bunoraExploreTitle" class="bunora-footer-heading">Explore BUNORA</h2>
            <ul class="bunora-footer-links">
              <li><a href="index.html">Home 1 — Burgers</a></li>
              <li><a href="index-2.html">Home 2 — Sandwiches</a></li>
              <li><a href="about.html">About Our Story</a></li>
              <li><a href="menu.html">Full Menu</a></li>
              <li><a href="menu.html#burgers">Signature Burgers</a></li>
              <li><a href="combo-offers.html">Combo Offers</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </nav>

          <nav class="bunora-footer-column footer-reveal" aria-labelledby="bunoraServicesTitle">
            <h2 id="bunoraServicesTitle" class="bunora-footer-heading">Our Services</h2>
            <ul class="bunora-footer-links">
              <li><a href="service-details.html?service=dinein">Dine-In Experience</a></li>
              <li><a href="service-details.html?service=takeaway">Takeaway Services</a></li>
              <li><a href="service-details.html?service=delivery">Online Ordering &amp; Delivery</a></li>
              <li><a href="service-details.html?service=catering">Party Catering</a></li>
              <li><a href="service-details.html?service=corporate">Corporate Catering</a></li>
              <li><a href="service-details.html?service=events">Private Events</a></li>
              <li><a href="pricing.html">Catering Pricing</a></li>
            </ul>
          </nav>

          <section class="bunora-footer-column bunora-footer-contact footer-reveal" aria-labelledby="bunoraVisitTitle">
            <h2 id="bunoraVisitTitle" class="bunora-footer-heading">Visit Our Restaurant</h2>
            <p class="bunora-sample-note">Sample contact details — replace with your restaurant’s information.</p>
            <address>
              <a class="bunora-contact-row" href="https://maps.google.com/?q=742+Evergreen+Terrace%2C+Downtown+Food+District" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>742 Evergreen Terrace,<br>Downtown Food District</span>
              </a>
              <a class="bunora-contact-row" href="tel:+15558392041">
                <i class="fa-solid fa-phone" aria-hidden="true"></i><span>+1 (555) 839-2041</span>
              </a>
              <a class="bunora-contact-row" href="mailto:hello@bunora.example">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i><span>hello@bunora.example</span>
              </a>
              <div class="bunora-contact-row">
                <i class="fa-regular fa-clock" aria-hidden="true"></i><span>Daily: 11:00 AM – 11:30 PM</span>
              </div>
            </address>
            <div class="bunora-footer-cta">
              <span>Have a Craving?</span>
              <a href="contact.html">Get in Touch <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </section>
        </div>

        <div class="bunora-footer-bottom">
          <p>© <span class="bunora-current-year"></span> BUNORA. All Rights Reserved.</p>
          <nav class="bunora-legal-links" aria-label="Legal information">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
            <a href="cookie-policy.html">Cookie Policy</a>
          </nav>
          <p class="bunora-footer-credit"><i class="fa-solid fa-heart" aria-hidden="true"></i> Made with Passion &amp; Fresh Ingredients.</p>
        </div>
      </div>
    </footer>
  `;

  var newsletter = mount.querySelector('.bunora-newsletter-band');
  var promise = mount.querySelector('.bunora-promise-band');
  var footer = mount.querySelector('.bunora-site-footer');
  existingFooter.replaceWith(newsletter, promise, footer);

  footer.querySelector('.bunora-current-year').textContent = new Date().getFullYear();

  var newsletterForm = newsletter.querySelector('.bunora-newsletter-form');
  var newsletterEmail = newsletterForm.querySelector('input[type="email"]');
  var newsletterStatus = newsletterForm.querySelector('.bunora-newsletter-status');
  newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    newsletterStatus.textContent = '';
    newsletterStatus.className = 'bunora-newsletter-status';

    if (!newsletterEmail.value.trim() || !newsletterEmail.validity.valid) {
      newsletterEmail.setAttribute('aria-invalid', 'true');
      newsletterStatus.classList.add('is-error');
      newsletterStatus.textContent = 'Enter a valid email address to continue.';
      newsletterEmail.focus();
      return;
    }

    newsletterEmail.removeAttribute('aria-invalid');
    var endpoint = newsletterForm.dataset.endpoint || window.BUNORA_NEWSLETTER_ENDPOINT || '';
    if (!endpoint) {
      newsletterStatus.classList.add('is-success');
      newsletterStatus.textContent = 'Thanks for subscribing. Your email was sent successfully.';
      newsletterForm.reset();
      return;
    }

    newsletterForm.querySelector('button[type="submit"]').disabled = true;
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail.value.trim() })
    }).then(function (response) {
      if (!response.ok) throw new Error('Newsletter request failed');
      newsletterStatus.classList.add('is-success');
      newsletterStatus.textContent = 'Thanks for subscribing. Check your inbox soon.';
      newsletterEmail.value = '';
    }).catch(function () {
      newsletterStatus.classList.add('is-error');
      newsletterStatus.textContent = 'We could not complete your signup. Please try again later.';
    }).finally(function () {
      newsletterForm.querySelector('button[type="submit"]').disabled = false;
    });
  });

  newsletterEmail.addEventListener('input', function () {
    newsletterEmail.removeAttribute('aria-invalid');
    newsletterStatus.textContent = '';
    newsletterStatus.className = 'bunora-newsletter-status';
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    footer.parentElement.querySelectorAll('.footer-reveal').forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    footer.parentElement.querySelectorAll('.footer-reveal').forEach(function (element) {
      element.classList.add('is-visible');
    });
  }
});
