# bogus ch@tter - Artist Portfolio Gallery

A visually engaging artist's portfolio gallery website showcasing artwork created with recycled materials and mixed media. Built with vanilla HTML, CSS, and JavaScript for optimal performance and accessibility.

🌐 **Live Site**: [Deploy your own from GitHub!](https://github.com/boguschatter/vanilla)  
📁 **GitHub Repository**: [https://github.com/boguschatter/vanilla](https://github.com/boguschatter/vanilla)  
🚀 **Deployment Guide**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

## Features

### 🎨 Visual Design

- **Full-screen gallery experience** - Images take up the entire viewport like Instagram
- **Dark theme** - Minimal distraction from the artwork
- **Responsive design** - Optimized for mobile, tablet, and desktop
- **Bold typography** - Clean, modern fonts that complement the artwork

### 🖼️ Gallery Functionality

- **Expandable descriptions** - Click to reveal detailed artwork information
- **Smooth scrolling** - Fluid navigation between artworks
- **Image lazy loading** - Optimized performance for large galleries
- **High-resolution support** - Perfect for showcasing detailed artwork

### 🔍 Interactive Features

- **Search functionality** - Find artwork by title, description, or materials
- **Social sharing** - Share individual artworks on Twitter, Facebook, Pinterest, and Email
- **Image downloads** - Download artwork with copyright watermark "image©benjaminc"
- **Back-to-top button** - Easy navigation for long galleries
- **Header transparency** - Logo scales and becomes transparent on scroll
- **Keyboard navigation** - Full accessibility support

### 📱 Mobile Optimization

- **Touch-friendly interface** - Optimized for mobile browsing
- **Responsive layouts** - Adapts seamlessly to all screen sizes
- **Fast loading** - Minimal JavaScript for optimal mobile performance

## File Structure

```
/
├── index.html              # Main gallery page
├── about.html              # Artist information and contact
├── styles/
│   └── main.css           # All styling and responsive design
├── scripts/
│   └── main.js            # Gallery functionality and interactions
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone or download** this repository
2. **Open index.html** in a web browser to view the gallery
3. **Host on any web server** for production use

### Recommended Hosting

- **Netlify** - Simple drag-and-drop deployment
- **GitHub Pages** - Free hosting for repositories
- **Vercel** - Fast CDN deployment

## Customization

### Adding New Artwork

1. **Use the admin panel** at `admin.html` to easily create new artwork entries
2. **Or manually add sections** to `index.html` in the gallery:

```html
<section class="artwork-item"
         data-title="Your Artwork Title"
         data-description="Detailed description of materials and inspiration"
         data-tags="materials, tags, for, search">
    <div class="artwork-image" style="background-image: url('your-image-url.jpg')"></div>
    <div class="artwork-info">
        <div class="info-content">
            <h2 class="artwork-title">Your Artwork Title</h2>
            <div class="artwork-description">
                <p>Detailed description...</p>
                <div class="artwork-actions">
                    <div class="social-share">
                        <!-- Social sharing buttons -->
                    </div>
                    <button class="download-btn" aria-label="Download image">
                        <!-- Download button -->
                    </button>
                </div>
            </div>
            <button class="expand-btn" aria-label="Expand description">
                <!-- SVG arrow icon -->
            </button>
        </div>
    </div>
</section>
```

2. **Replace image URL** with your artwork image
3. **Update title, description, and tags** for search functionality

### Customizing Colors and Fonts

Edit `styles/main.css`:

```css
/* Main background color */
body {
  background-color: #1f1f1f; /* Change this */
}

/* Logo font */
.logo-text {
  font-family: "Krub", sans-serif; /* Change this */
}

/* Body text font */
body {
  font-family: "Inter", sans-serif; /* Change this */
}
```

### Adding Contact Information

Edit the **about.html** file to update:

- Artist bio and statement
- Contact information
- Exhibition history
- Materials and process description

## Technical Details

### Performance Features

- **CSS Grid and Flexbox** for responsive layouts
- **Intersection Observer** for scroll animations
- **Throttled scroll events** for smooth performance
- **Image lazy loading** for faster initial page load
- **Canvas-based watermarking** for copyright protection on downloads

### Accessibility Features

- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements
- **High contrast mode** support
- **Reduced motion** respect for user preferences

### Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Progressive enhancement** for older browsers

## Development

### Local Development

1. Open files in a code editor
2. Use a local server (Live Server, Python SimpleHTTPServer, etc.)
3. Make changes and refresh browser

### Adding New Features

- JavaScript functionality is in `scripts/main.js`
- All styling is in `styles/main.css`
- HTML structure is in `index.html` and `about.html`

## Deployment to GitHub

1. **Create new repository** on GitHub
2. **Add files** to repository
3. **Enable GitHub Pages** in repository settings
4. **Access via** `https://yourusername.github.io/repository-name`

## Hosting on Netlify

1. **Drag and drop** the project folder to Netlify
2. **Custom domain** can be configured in settings
3. **Automatic deployments** when connected to GitHub

## License

This project is open source and available under the [MIT License](LICENSE).

## Social Sharing & Download Features

### Social Platforms Supported

- **Twitter** - Share artwork with title and hashtags
- **Facebook** - Share with title and description
- **Pinterest** - Share with image, title, and description
- **Email** - Send via email with formatted message

### Download Functionality

- **Automatic watermarking** - All downloads include "image©benjaminc" watermark
- **High-quality downloads** - JPEG format with 90% quality
- **Copyright protection** - Ensures artwork attribution

### Usage

1. **Expand artwork description** by clicking the arrow button
2. **Click social icons** to share on desired platform
3. **Click download button** to save image with watermark
4. **Share URLs** include the current page for easy navigation

## Credits

- **Fonts**: Inter and Krub from Google Fonts
- **Icons**: Custom SVG icons for social sharing and downloads
- **Images**: Sample images from Unsplash (replace with your artwork)
- **Copyright**: All downloads automatically include "image©benjaminc" watermark

---

**Built for artists who want to showcase their work beautifully, simply, and securely.**