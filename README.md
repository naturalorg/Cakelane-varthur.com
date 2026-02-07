# 🎂 Cake Lane - Custom Cake Shop Website

A beautiful, professional website for Cake Lane - your neighborhood cake shop in Varthur, Bengaluru with WhatsApp integration for easy ordering.

## ✨ Features

- **Modern Blue Theme**: Clean blue and white design with professional aesthetics
- **Fully Responsive**: Perfect experience on mobile phones, tablets, and desktops
- **WhatsApp Integration**: Direct ordering through WhatsApp (9886757309)
- **Product Filtering**: Filter cakes by category (Wedding, Birthday, Custom)
- **Product Modal**: Detailed view with full product information
- **Weight Display**: Shows cake weight in grams next to Order button
- **Easy to Update**: Simple product management system
- **Fast Loading**: Optimized for all devices
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 File Structure

```
cake-shop/
│
├── index.html          # Main HTML file
├── styles.css          # All styling (Blue & White theme)
├── script.js           # Main JavaScript for navigation & interactions
├── products.js         # Product database and management
├── README.md           # This file
├── DEPLOYMENT-GUIDE.md # GitHub deployment guide
│
└── assets/            # Image folder (you need to create this)
    ├── cake1.jpg
    ├── cake2.jpg
    ├── cake3.jpg
    └── ... (add your cake images here)
```

## 🏪 Shop Information

**Shop Name:** Cake Lane  
**Address:** Balagere Main Rd, Adhishakthi Layout, Devasthanagalu, Varthur, Bengaluru, Karnataka 560087  
**Phone:** +91 98867 57309  
**WhatsApp:** 9886757309

## 🚀 Quick Start Guide

### Step 1: Set Up Your Files

1. Download all the files (index.html, styles.css, script.js, products.js)
2. Create a folder called `assets` in the same directory
3. Add your cake images to the `assets` folder

### Step 2: Add Your Cake Images

Place your cake photos in the `assets` folder with names like:
- `cake1.jpg`
- `cake2.jpg`
- `cake3.jpg`
- etc.

**Image Tips:**
- Use high-quality images (minimum 800x600 pixels)
- JPG format is recommended for photos
- Keep file sizes under 500KB for faster loading
- Use consistent aspect ratios (4:3 or 1:1 works best)

### Step 3: Customize Your Products

Open `products.js` and modify the products array:

```javascript
{
    id: 10,  // Unique ID (increment from last)
    name: "Your Cake Name",
    category: "wedding", // Options: wedding, birthday, custom
    description: "Brief description of your cake",
    image: "assets/your-image.jpg",
    weight: "500g", // Weight in grams (e.g., 350g, 500g, 750g)
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4"
    ],
    whatsappMessage: "Hi! I'm interested in Your Cake Name (500g)"
}
```

Simply copy an existing product object and modify it with your details!

### Step 4: Test Locally

1. Double-click `index.html` to open in your browser
2. Check that all images load correctly
3. Test the WhatsApp buttons
4. Try filtering products
5. Click on cakes to see the modal

## 📱 Deploy to GitHub Pages (FREE Hosting!)

Follow these steps to host your website for free on GitHub:

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up" and create a free account
3. Verify your email address

### Step 2: Create a New Repository

1. Click the "+" icon in the top-right corner
2. Select "New repository"
3. Name your repository: `cake-shop` (or any name you like)
4. Make it **Public**
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Files

**Method 1: Using GitHub Web Interface (Easiest)**

1. In your repository, click "Add file" → "Upload files"
2. Drag and drop ALL your files:
   - index.html
   - styles.css
   - script.js
   - products.js
   - The entire `assets` folder with all images
3. Scroll down and click "Commit changes"

**Method 2: Using Git Commands (For Advanced Users)**

```bash
# Navigate to your project folder
cd path/to/your/cake-shop

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 1-2 minutes

### Step 5: Access Your Website

Your website will be live at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

For example: `https://johnsmith.github.io/cake-shop/`

## 🎨 Customization Guide

### Change Colors

Edit the CSS variables in `styles.css` (lines 2-12):

```css
:root {
    --primary-color: #2563eb;      /* Blue color */
    --primary-dark: #1e40af;       /* Darker blue */
    --accent-color: #eff6ff;       /* Light blue background */
    /* ... modify these to your brand colors */
}
```

### Update Business Name

1. In `index.html`, find "Artisan Cakes" and replace with your shop name
2. Update the `<title>` tag (line 6)
3. Update the logo in the navigation (around line 22)

### Change WhatsApp Number

In `products.js`, line 103:
```javascript
const whatsappNumber = "919886757309"; // Replace with your number
```

### Modify Contact Information

In `index.html`, find the contact section and update:
- Phone number
- Business hours
- Social media links

## 📊 Adding New Products

1. Open `products.js`
2. Scroll to the `products` array
3. Copy an existing product object
4. Paste it at the end (before the closing `]`)
5. Update all the details
6. Increment the `id` number
7. Save the file
8. Add your image to the `assets` folder
9. Upload changes to GitHub

**Example:**

```javascript
const products = [
    // ... existing products ...
    {
        id: 10,
        name: "Chocolate Dream",
        category: "custom",
        description: "Rich chocolate layers with ganache",
        image: "assets/cake10.jpg",
        weight: "600g",
        features: [
            "3 chocolate layers",
            "Belgian chocolate ganache",
            "Serves 15-20 guests",
            "Can be customized"
        ],
        whatsappMessage: "Hi! I'm interested in the Chocolate Dream cake (600g)"
    }
];
```

## 🔧 Troubleshooting

### Images Not Showing

- Check that the `assets` folder is in the same directory as `index.html`
- Verify image file names match exactly (case-sensitive)
- Make sure images are in JPG, PNG, or WebP format

### WhatsApp Button Not Working

- Verify your WhatsApp number in `products.js` includes country code
- Format: "919663800144" (no + symbol, no spaces)

### GitHub Pages Not Working

- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Clear your browser cache and try again
- Make sure repository is Public, not Private

### Website Looks Broken on Mobile

- Open browser developer tools (F12)
- Click the mobile/responsive icon
- Test on different screen sizes
- Clear cache and refresh

## 📞 Support

If you need help:
1. Check this README carefully
2. Search for your issue on [Stack Overflow](https://stackoverflow.com)
3. Ask in GitHub Discussions
4. Review GitHub Pages [documentation](https://docs.github.com/en/pages)

## 📝 License

This template is free to use for your cake shop business. Modify as needed!

## 🎯 Next Steps

1. ✅ Replace placeholder images with your actual cake photos
2. ✅ Update all products with your cakes
3. ✅ Change colors to match your brand
4. ✅ Add your business information
5. ✅ Test all WhatsApp links
6. ✅ Deploy to GitHub Pages
7. ✅ Share your website URL!

## 🌟 Tips for Success

- **Photos**: Use high-quality, well-lit cake photos
- **Descriptions**: Be specific about flavors and sizes
- **Updates**: Add new cakes regularly to keep site fresh
- **SEO**: Use descriptive file names for images (chocolate-wedding-cake.jpg)
- **Marketing**: Share your website on Instagram, Facebook, etc.
- **Analytics**: Consider adding Google Analytics to track visitors

---

**Made with ❤️ for your cake business success!**

Questions? Feel free to reach out or open an issue on GitHub.
