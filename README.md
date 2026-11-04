# BUNORA – Premium Burger & Sandwich Restaurant HTML Template

**BUNORA** is a commercial-grade, ultra-responsive HTML5 website template meticulously engineered for modern gourmet burger joints, artisan sourdough delis, craft taprooms, and fast-casual dining destinations. 

Built with semantic HTML5, modern modular CSS3, Vanilla JavaScript, and Bootstrap 5, BUNORA features two completely different homepage concepts, 4K food photography, interactive menu filters, dynamic price calculators, working Light/Dark themes, complete RTL (Right-to-Left) layout support, and FormSubmit-ready inquiry forms.

---

## 🌟 Key Highlights & Features

- **Two Distinct Homepage Concepts**:
  - **Homepage 1 (`index.html`)**: Bold, editorial, dark-charcoal & tomato-red aesthetic spotlighting flame-grilled smashed Wagyu burgers, chef specials, floating seal badges, and urban restaurant ambience.
  - **Homepage 2 (`index-2.html`)**: Bright, sunny, warm cream & golden-yellow food magazine layout celebrating 48-hour fermented sourdough, heritage deli cuts, fresh produce, and bakery craftsmanship.
- **Pure Frontend Architecture**:
  - Pure HTML5, CSS3, and Vanilla JavaScript.
  - No React, Next.js, TypeScript, or heavy node-modules dependencies.
  - Instant deployment to any static host, Apache, NGINX, cPanel, or GitHub Pages.
- **Working Light & Dark Themes**:
  - Instant theme switching without screen flash via `localStorage` persistence.
  - High-contrast typography and custom dark-mode token variables.
  - Dual SVG brand logos (`logo-dark.svg` and `logo-light.svg`).
- **Complete RTL (Right-to-Left) Support**:
  - Full directional layout transformations for Arabic and Hebrew languages (`dir="rtl"`).
  - Automatically flips navigation dropdowns, carousels, cards, badges, and icons.
  - Preserved across all pages via `localStorage`.
- **Interactive Menu & Live Search**:
  - Instant category filtering (*All Items, Signature Burgers, Gourmet Sandwiches, Sides & Snacks, Shakes & Drinks, Desserts*).
  - Real-time instant keyword search with friendly empty-state handling.
- **Customizable Product Details Page**:
  - Interactive gallery thumbnail switcher.
  - Nutritional profile grid (*Calories, Protein, Carbs, Fats*).
  - Live quantity stepper and add-on price calculator (*Extra Truffle Mayo, Bacon, Melted Cheddar*).
- **FormSubmit-Ready Contact & Catering Forms**:
  - Configurable FormSubmit recipient endpoint.
  - Client-side validation for required fields, email format, and phone numbers.
  - Hidden honeypot anti-spam protection (`_honey`).
- **Complete 15-Page Template Suite**:
  - `index.html` (Home 1 – Modern Bold Burger)
  - `index-2.html` (Home 2 – Artisan Sandwich Deli)
  - `about.html` (Brand Story, Mission & Chefs)
  - `menu.html` (Interactive Menu with Search & Category Filters)
  - `product-details.html` (Individual Food Item View with Add-ons)
  - `services.html` (Dine-In, Takeaway, Delivery, Party & Corporate Catering)
  - `service-details.html` (Catering Deep Dive with 4-Step Workflow & FAQs)
  - `combo-offers.html` (Value Deals & Savings Bundles)
  - `blog.html` (Food Magazine 3-Column Grid with Filter)
  - `blog-list.html` (Magazine List with Widget Sidebar)
  - `blog-details.html` (Full Editorial Article, TOC & Comments UI)
  - `pricing.html` (Catering & Group Package Comparison Matrix)
  - `contact.html` (Contact Info, FormSubmit & Google Map Embed)
  - `404.html` (Custom Restaurant Error Page with Navigation)
  - `coming-soon.html` (Target Date Countdown Clock & VIP Signup)
  - `maintenance.html` (System Upgrade Notice & Hotline)

---

## 📁 File & Folder Structure

```
BUNORA/
├── index.html                  # Homepage 1 – Modern Burger
├── index-2.html                # Homepage 2 – Artisan Deli
├── about.html                  # Brand story, mission, and chefs
├── menu.html                   # Interactive food menu with live search
├── product-details.html        # Individual product view with add-ons
├── services.html               # Restaurant services overview
├── service-details.html        # Service deep dive with workflow & FAQ
├── combo-offers.html           # Promotional combos & discount deals
├── blog.html                   # Food magazine grid layout
├── blog-list.html              # Blog list layout with sidebar
├── blog-details.html           # Full article details with TOC & comments
├── contact.html                # Location, FormSubmit form & Google Map
├── pricing.html                # Catering packages & comparison table
├── 404.html                    # Creative restaurant error page
├── coming-soon.html            # Opening countdown timer & VIP signup
├── maintenance.html            # Scheduled maintenance notice
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Core styling and design tokens
│   │   ├── dark-mode.css       # Complete dark mode overrides
│   │   ├── rtl.css             # Right-to-Left bidirectional layout
│   │   └── responsive.css      # Fluid scaling (4K to 320px)
│   │
│   ├── js/
│   │   ├── main.js             # Sticky header, back-to-top, countdown
│   │   ├── theme.js            # Light/Dark mode manager & persistence
│   │   ├── rtl.js              # LTR/RTL manager & persistence
│   │   ├── menu.js             # Product gallery & dynamic add-on totals
│   │   ├── filters.js          # Menu and blog category + search filters
│   │   └── validation.js       # FormSubmit & client-side validation
│   │
│   └── images/
│       ├── logo-dark.svg       # Vector logo for light theme
│       ├── logo-light.svg      # Vector logo for dark theme
│       ├── favicon.svg         # Geometric vector favicon
│       ├── badge-artisan.svg   # Rotating seal badge
│       ├── home-1/             # Hero burger and restaurant ambience
│       ├── home-2/             # Sourdough, fresh produce, and deli
│       ├── burgers/            # 8 high-res gourmet burger photos
│       ├── sandwiches/         # 8 high-res artisan sandwich photos
│       ├── sides/              # Truffle fries, nachos, wings, rings
│       ├── drinks/             # Shakes, cold brew, lemonade, craft beer
│       ├── desserts/           # Lava cake, churros, crumble, waffles
│       ├── combos/             # 6 bundle photos
│       ├── services/           # Catering, dine-in, delivery photos
│       ├── blog/               # 6 high-res editorial food photos
│       └── about/              # Chefs, kitchen team, and interior
│
└── README.md                   # Documentation & Setup Guide
```

---

## 🎨 Color Palette & Design Tokens

BUNORA uses CSS custom properties defined in `assets/css/style.css`:

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `--brand-primary` | `#171717` | Deep Charcoal (Hero text, dark mode base) |
| `--brand-secondary` | `#FFF7E9` | Warm Cream (Section backgrounds, card accents) |
| `--brand-accent` | `#E74732` | Tomato Red (Primary CTA buttons, badges, links) |
| `--brand-highlight` | `#F6B83F` | Golden Yellow (Stars, secondary CTAs, ribbons) |
| `--brand-green` | `#10B981` | Fresh Green (Vegan badges, checkmarks) |
| `--bg-body` | `#FFFBF5` | Ultra-soft warm white body background |

---

## ⚙️ How to Customize

### 1. Connecting FormSubmit to Your Email
In `contact.html` and `pricing.html`, find the `<form>` elements:
```html
<form id="contactForm" action="https://formsubmit.co/your-email@example.com" method="POST" class="needs-validation" novalidate>
```
Replace `your-email@example.com` with your real email address. The first time you submit the form, FormSubmit will send a confirmation link to that email address to verify your inbox. Once verified, all messages will be delivered directly to your inbox.

### 2. Changing the Countdown Target Date
In `assets/js/main.js`, locate line 57:
```javascript
var targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 45); // Set to desired days or hardcoded ISO date
```
You can replace this with any specific date string (e.g. `new Date('2026-12-31T00:00:00')`).

### 3. Modifying Typography
Fonts are loaded in `assets/css/style.css`:
- **Headings**: `Outfit` (Weights: 400, 600, 700, 800, 900)
- **Body Text**: `Plus Jakarta Sans` (Weights: 400, 500, 600, 700)

To change fonts, update the `@import` URL at the top of `style.css` and the `--font-heading` or `--font-body` variables.

---

## 📜 Credits & Dependencies

- **Framework**: [Bootstrap 5.3.3](https://getbootstrap.com/)
- **Icons**: [Font Awesome 6.5.1](https://fontawesome.com/)
- **Typography**: [Google Fonts (Outfit & Plus Jakarta Sans)](https://fonts.google.com/)
- **Food Photography**: Curated 4K Food Photography via [Unsplash](https://unsplash.com/)

---

## 📄 License
Commercial-ready frontend website template. Suitable for personal portfolios, client restaurant deliveries, and template marketplace distribution.
