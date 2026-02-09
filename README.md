# 🎂 Cake Lane - Custom Cake Shop Website

A beautiful, modern, and fully responsive website for **Cake Lane**, a custom cake shop located in Varthur, Bengaluru. Built with vanilla HTML, CSS, and JavaScript with a focus on clean design, mobile optimization, and user experience.

![Cake Lane](https://img.shields.io/badge/Status-Ready%20to%20Deploy-brightgreen)
![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-blue)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-orange)

## 📋 Table of Contents
- [Features](#features)
- [File Structure](#file-structure)
- [Quick Start](#quick-start)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)
- [Contact](#contact)

---

## ✨ Features

### 🎨 Modern Design
- **Webify-inspired theme** with clean, professional aesthetics
- **Blue & white color scheme** (customizable via CSS variables)
- **Smooth animations** and hover effects throughout
- **Professional typography** using Google Fonts (Cormorant Garamond & Montserrat)

### 📱 Fully Responsive
- **Mobile-first approach** with optimized layouts for all devices
- **Breakpoints**: 968px, 768px, 576px, 375px
- **Touch-friendly** buttons and interactive elements (min 44px targets)
- **Optimized filter buttons** (2 per row on mobile, single row on desktop)

### 🛒 Product Showcase
- **9 Sample Products** with images, descriptions, and pricing
- **Dynamic filtering** by category (All, Wedding, Birthday, Custom)
- **Product modals** with detailed information and features
- **WhatsApp integration** for direct ordering
- **Weight and price display** on all products

### 🔍 Interactive Features
- **Smooth scroll navigation** to all sections
- **Hamburger menu** for mobile devices
- **Product filtering system** with animated transitions
- **Modal popups** for detailed product views
- **Category cards** in "Our Collection" section
- **Scrollable modals** on mobile devices

### 📞 Direct Contact
- **WhatsApp integration** throughout the site
- **Click-to-call** phone number
- **Business hours** and location information
- **Social media links** (Instagram, Facebook)

---

## 📁 File Structure

```
cake-lane-website/
├── index.html           # Main HTML file
├── styles.css           # All CSS styles and responsive design
├── script.js            # JavaScript for interactions and navigation
├── products.js          # Product data and modal functionality
├── README.md            # This file
└── assets/              # Images folder
    ├── cake1.jpg - cake9.jpg     # Product images
    ├── section1.jpg               # Bespoke Service section image
    └── section2.jpg               # About/Founders section image
```

---

## 🚀 Quick Start

### 1. Download Files
Download all files and maintain the folder structure.

### 2. Add Images
Place your cake images in the `assets/` folder:
- **Product images**: `cake1.jpg` through `cake9.jpg`
- **Section images**: `section1.jpg` (Custom design photo), `section2.jpg` (Founders/team photo)

### 3. Open in Browser
Simply open `index.html` in any modern web browser.

### 4. Customize (Optional)
Follow the [Customization Guide](#customization-guide) below.

---

## 🎨 Customization Guide

### 📝 Update Shop Information

#### Contact Details
In `index.html` and `products.js`, update:
```javascript
// Phone number
+91 98867 57309

// WhatsApp number
919886757309

// Address
Balagere Main Rd, Adhishakthi Layout,
Devasthanagalu, Varthur,
Bengaluru, Karnataka 560087
```

#### Business Hours
In `index.html`, update the Contact section:
```html
<p>Mon-Sat: 9AM - 7PM<br>Sunday: 10AM - 6PM</p>
```

---

### 🍰 Add/Edit Products

Open `products.js` and add new products to the `products` array:

```javascript
{
    id: 10,                    // Unique ID
    name: "Your Cake Name",
    category: "wedding",       // Options: wedding, birthday, custom
    description: "Cake description here",
    image: "assets/cake10.jpg",
    weight: "600g",           // Display weight
    price: "₹799/-",          // Display price
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Serves X guests"
    ],
    whatsappMessage: "Hi! I'm interested in Your Cake Name (600g) - ₹799"
}
```

**Important**: 
- Add corresponding image to `assets/` folder
- Use unique ID for each product
- Category must be: `wedding`, `birthday`, or `custom`

---

### 🎨 Change Color Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --primary-dark: #1e40af;       /* Darker blue for hover */
    --primary-light: #3b82f6;      /* Lighter blue */
    --accent-light: #dbeafe;       /* Light blue backgrounds */
    --text-dark: #0f172a;          /* Dark text */
    --text-light: #64748b;         /* Light gray text */
}
```

**Example - Change to Purple Theme**:
```css
--primary-color: #8b5cf6;     /* Purple */
--primary-dark: #7c3aed;      /* Dark purple */
--primary-light: #a78bfa;     /* Light purple */
--accent-light: #ede9fe;      /* Very light purple */
```

---

### 📸 Update Images

#### Product Images
1. Save images as `cake1.jpg`, `cake2.jpg`, etc.
2. Place in `assets/` folder
3. Update image path in `products.js`

**Recommended image specs**:
- Format: JPG or PNG
- Size: 800x600px minimum
- File size: < 500KB (optimized)

#### Section Images
- `assets/section1.jpg` - Custom cake design photo (shown in Bespoke Service section)
- `assets/section2.jpg` - Founders/team photo (shown in About section)

---

### 📱 Update Social Media Links

In `index.html`, find the social links section:

```html
<div class="social-links">
    <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">
        <!-- Instagram icon -->
    </a>
    <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">
        <!-- Facebook icon -->
    </a>
</div>
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended - FREE)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Click Save

3. **Access Your Site**
   - URL: `https://username.github.io/repository-name`
   - Takes 2-5 minutes to deploy

### Option 2: Netlify (FREE)

1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant live URL
3. Optional: Connect to GitHub for automatic deployments

### Option 3: Vercel (FREE)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts
4. Get instant deployment URL

### Option 4: Traditional Web Hosting

Upload all files via FTP to your hosting provider:
- Ensure `index.html` is in root directory
- Upload `assets/` folder with all images
- Upload all CSS and JS files

---

## 💻 Technologies Used

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **Vanilla JavaScript** - No frameworks or libraries

### Fonts
- **Cormorant Garamond** (Headings) - Google Fonts
- **Montserrat** (Body text) - Google Fonts

### Design System
- **CSS Variables** for easy theme customization
- **Mobile-first** responsive design
- **BEM-inspired** CSS naming convention
- **Smooth scrolling** and animations

### No Dependencies Required
- ✅ No jQuery
- ✅ No Bootstrap
- ✅ No React/Vue/Angular
- ✅ Pure vanilla JavaScript
- ✅ Fast loading times
- ✅ Easy to maintain

---

## 📊 Page Sections

1. **Navigation Bar**
   - Fixed position
   - Smooth scroll links
   - Mobile hamburger menu
   - Active link highlighting

2. **Hero Section**
   - Welcome message
   - Call-to-action buttons
   - Scroll indicator
   - Parallax effect

3. **Products Section**
   - Filter buttons (All, Wedding, Birthday, Custom)
   - 9 product cards with:
     - Product image
     - Category badge
     - Name and description
     - Weight and price
     - Order button (WhatsApp)
   - Click to view modal with full details

4. **Our Collection Section**
   - 6 category cards:
     - 💍 Wedding Cakes
     - 🎂 Birthday Cakes
     - 🎨 Custom Design
     - ❤️ Anniversary Cakes
     - 💼 Corporate Events
     - 🎭 Themed Cakes
   - Click to filter products and scroll

5. **Bespoke Service Section**
   - Custom design information
   - Feature list with icons
   - WhatsApp CTA button
   - Image display (section1.jpg)

6. **About Section**
   - Shop story
   - Location information with address
   - Feature cards (Custom Designs, Fresh & Quality, Made with Love)
   - Founders/team image (section2.jpg)

7. **Contact Section**
   - Phone, WhatsApp, Address, Hours
   - Social media links
   - WhatsApp CTA card

8. **Footer**
   - Branding
   - Address
   - Copyright

---

## 📱 Responsive Design Details

### Desktop (>968px)
- Full navigation menu
- 3-column product grid
- 2-column custom/about sections
- Filter buttons in single row
- Side-by-side modal layout

### Tablet (768px - 968px)
- Hamburger menu
- 2-column product grid
- Stacked content sections
- Filter buttons wrap as needed

### Mobile Portrait (<576px)
- Single column layouts
- Full-width buttons
- 2 filter buttons per row
- Single-column product grid
- Scrollable modals
- Optimized typography (smaller sizes)
- Reduced spacing and padding

### Mobile Landscape
- Reduced hero height
- Optimized modal sizing
- Adjusted spacing

---

## 🎯 Key Features Explained

### Product Modal System
- Click any product card to open detailed modal
- Shows:
  - Large product image
  - Full description
  - All features with checkmarks
  - Weight and price
  - WhatsApp order button
- **Mobile**: Scrollable to see all content
- **Desktop**: Side-by-side layout
- Close with: X button, click outside, or ESC key

### Filter System
Products can be filtered by category:
- Click filter buttons to show specific categories
- Smooth fade-in animation
- Active button highlighted
- Category cards also trigger filtering

### WhatsApp Integration
Multiple WhatsApp CTAs throughout:
- Product card "Order Now" buttons
- Modal "Order on WhatsApp" button
- Custom design section CTA
- Contact section CTA

Pre-filled message includes:
- Product name
- Weight
- Price

### Smooth Navigation
- All anchor links scroll smoothly
- 80-100px offset to account for fixed navbar
- Active section highlighted in navigation
- Mobile menu auto-closes on link click

---

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Minimum supported versions**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🐛 Troubleshooting

### Products Not Showing
- Check that `products.js` is loaded after `index.html`
- Verify product images are in `assets/` folder
- Open browser console (F12) to check for errors

### Images Not Loading
- Verify image filenames match exactly (case-sensitive)
- Check images are in `assets/` folder
- Ensure images are JPG, PNG, or WebP format

### WhatsApp Links Not Working
- Verify WhatsApp number format: `919886757309` (no spaces, + or -)
- Test on mobile device with WhatsApp installed
- Check URL encoding in `products.js`

### Smooth Scroll Not Working
- Ensure all section IDs match navigation href values
- Check JavaScript is not blocked
- Verify `scroll-behavior: smooth` in CSS

---

## 🔧 Advanced Customization

### Add New Category
1. Add category button in `index.html` (Products section):
```html
<button class="filter-btn" data-filter="anniversary">Anniversary</button>
```

2. Add products with matching category in `products.js`:
```javascript
category: "anniversary"
```

3. Add category card in "Our Collection" section

### Change Font
Replace Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap">
```

Update CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Modify Animations
Edit animation properties in `styles.css`:
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Change to faster/slower:
```css
--transition: all 0.2s ease;  /* Faster */
--transition: all 0.5s ease;  /* Slower */
```

---

## 📞 Support & Contact

**Cake Lane**
- 📍 Address: Balagere Main Rd, Varthur, Bengaluru - 560087
- 📞 Phone: +91 98867 57309
- 💬 WhatsApp: [Chat with us](https://wa.me/919886757309)
- 🕐 Hours: Mon-Sat 9AM-7PM, Sunday 10AM-6PM

---

## 📄 License

This website template is created for Cake Lane. Feel free to customize and use it for your business.

---

## 🎉 Version History

### v1.0 - Initial Release
- Complete responsive website
- 9 product showcase
- WhatsApp integration
- Blue & white theme
- Mobile-optimized

### Recent Updates
- ✅ Fixed "Explore Our Cakes" button functionality
- ✅ Made modals scrollable on mobile
- ✅ Optimized filter buttons (2 per row on mobile)
- ✅ Added category cards in Our Collection
- ✅ Added price display system
- ✅ Improved mobile responsiveness

---

## 🙏 Credits

- **Design**: Modern Webify-inspired design system
- **Icons**: SVG icons (embedded)
- **Fonts**: Google Fonts (Cormorant Garamond, Montserrat)
- **Color Scheme**: Blue (#2563eb) & White

---

## 📝 Notes

- All placeholder images should be replaced with actual cake photos
- Update all contact information before going live
- Test on multiple devices and browsers
- Optimize images for web (compress before uploading)
- Update social media links
- Consider adding Google Analytics for tracking

---

**Made with ❤️ for Cake Lane**

*Last Updated: February 2026*
