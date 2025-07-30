# GitHub Repository Integration & Deployment Guide

## 📋 Overview
This guide will help you connect your artist portfolio to the GitHub repository: https://github.com/boguschatter/vanilla

## 🚀 Quick Setup Steps

### 1. Initialize Git Repository (if not already done)
```bash
git init
git remote add origin https://github.com/boguschatter/vanilla.git
```

### 2. Essential Files for Deployment

Your portfolio includes these key files that should be committed to GitHub:

**Core Portfolio Files:**
- `index.html` - Main gallery page
- `about.html` - Artist information page  
- `admin.html` - Content management interface

**Assets:**
- `styles/main.css` - All portfolio styling
- `styles/admin.css` - Admin panel styling
- `scripts/main.js` - Gallery functionality (search, social sharing, downloads)
- `scripts/admin.js` - Admin panel functionality

**Documentation:**
- `README.md` - Project documentation
- `Attributions.md` - Image and library credits

### 3. Commit and Push to GitHub
```bash
# Add all portfolio files
git add index.html about.html admin.html
git add styles/ scripts/
git add README.md Attributions.md

# Commit with descriptive message
git commit -m "Add complete artist portfolio with social sharing and admin panel"

# Push to GitHub
git push -u origin main
```

## 🌐 Deploy to Netlify from GitHub

### Option 1: Netlify Dashboard (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `boguschatter/vanilla`
5. Configure build settings:
   - **Build command:** (leave empty - static site)
   - **Publish directory:** `/` (root directory)
6. Click "Deploy site"

### Option 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from project directory
netlify deploy --prod --dir=.
```

## 📁 File Structure for GitHub

```
vanilla/
├── index.html              # Main gallery page
├── about.html              # About page
├── admin.html              # Admin panel
├── styles/
│   ├── main.css            # Main styles
│   └── admin.css           # Admin styles
├── scripts/
│   ├── main.js             # Gallery functionality
│   └── admin.js            # Admin functionality
├── README.md               # Project documentation
├── Attributions.md         # Credits
└── DEPLOYMENT_GUIDE.md     # This guide
```

## 🔧 Key Features Included

✅ **Instagram-style vertical scrolling gallery**
✅ **Responsive design** (mobile, tablet, desktop)
✅ **Social sharing** (Twitter, Facebook, Pinterest, Email)
✅ **Download with watermark** ("image©benjaminc")
✅ **Live search functionality**
✅ **Admin panel** for content management
✅ **Expandable artwork descriptions**
✅ **Dark theme** optimized for artwork viewing

## 🌟 Post-Deployment Checklist

After your site is live:

1. **Test all functionality:**
   - Search works across all artworks
   - Social sharing opens correct platforms
   - Download adds watermark properly
   - Admin panel saves content (if using)

2. **Update social sharing URLs:**
   - Replace any hardcoded URLs with your live domain
   - Test sharing on each platform

3. **SEO optimization:**
   - Add your domain to Google Search Console
   - Update meta descriptions in HTML files
   - Consider adding structured data for artwork

4. **Analytics setup:**
   - Add Google Analytics or similar
   - Track social sharing engagement
   - Monitor download activity

## 📱 Custom Domain (Optional)

To use a custom domain:
1. In Netlify dashboard, go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings with your domain provider
4. Netlify will automatically provision SSL certificate

## 🔄 Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Deploy when you push to the main branch
- Generate preview deployments for pull requests
- Provide deploy logs and rollback capabilities

## 🆘 Troubleshooting

**Common Issues:**

1. **CSS/JS not loading:**
   - Check file paths are relative (no leading slashes)
   - Ensure case-sensitive file names match

2. **Images not displaying:**
   - Verify all image URLs are accessible
   - Check if external images allow hotlinking

3. **Admin panel not saving:**
   - Admin panel currently uses localStorage
   - Consider integrating with Netlify CMS for persistent storage

## 📞 Support

If you encounter issues:
- Check Netlify deploy logs for errors
- Verify all file paths are correct
- Test locally before pushing to GitHub

Your portfolio is ready for professional deployment! 🎨