// Main JavaScript for Portfolio Gallery

class PortfolioGallery {
    constructor() {
        this.header = document.getElementById('header');
        this.logo = document.getElementById('logo');
        this.backToTop = document.getElementById('backToTop');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchOverlay = document.getElementById('searchOverlay');
        this.searchInput = document.getElementById('searchInput');
        this.searchClose = document.getElementById('searchClose');
        this.searchResults = document.getElementById('searchResults');
        this.gallery = document.getElementById('gallery');
        
        this.artworkData = [];
        this.searchIndex = [];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.buildSearchIndex();
        this.setupIntersectionObserver();
        this.setupImageLazyLoading();
    }
    
    setupEventListeners() {
        // Scroll events
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // Back to top button
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Search functionality
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', this.toggleSearch.bind(this));
        }
        
        if (this.searchClose) {
            this.searchClose.addEventListener('click', this.closeSearch.bind(this));
        }
        
        if (this.searchInput) {
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
            this.searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeSearch();
                }
            });
        }
        
        // Artwork expand/collapse functionality
        this.setupArtworkInteractions();
        
        // Social sharing and download functionality
        this.setupSocialSharing();
        this.setupDownloadFunctionality();
        
        // Close search on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.searchOverlay.classList.contains('active')) {
                this.closeSearch();
            }
        });
        
        // Logo click handler for about page
        if (this.logo && this.logo.tagName === 'A') {
            this.logo.addEventListener('click', (e) => {
                if (window.location.pathname.includes('about.html')) {
                    e.preventDefault();
                    window.location.href = 'index.html';
                }
            });
        }
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Header transparency and logo scaling
        if (this.header) {
            if (scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }
        
        // Back to top button visibility
        if (this.backToTop) {
            if (scrollY > 500) {
                this.backToTop.classList.add('visible');
            } else {
                this.backToTop.classList.remove('visible');
            }
        }
    }
    
    setupArtworkInteractions() {
        const artworkItems = document.querySelectorAll('.artwork-item');
        
        artworkItems.forEach(item => {
            const expandBtn = item.querySelector('.expand-btn');
            const artworkInfo = item.querySelector('.artwork-info');
            
            if (expandBtn && artworkInfo) {
                expandBtn.addEventListener('click', () => {
                    artworkInfo.classList.toggle('expanded');
                    
                    // Update aria-expanded for accessibility
                    const isExpanded = artworkInfo.classList.contains('expanded');
                    expandBtn.setAttribute('aria-expanded', isExpanded);
                });
            }
        });
    }
    
    setupSocialSharing() {
        const shareButtons = document.querySelectorAll('.share-btn');
        
        shareButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const platform = button.dataset.platform;
                const artworkItem = button.closest('.artwork-item');
                
                if (artworkItem) {
                    const title = artworkItem.dataset.title || '';
                    const description = artworkItem.dataset.description || '';
                    const imageUrl = this.getArtworkImageUrl(artworkItem);
                    
                    this.shareToSocial(platform, title, description, imageUrl);
                }
            });
        });
    }
    
    setupDownloadFunctionality() {
        const downloadButtons = document.querySelectorAll('.download-btn');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const artworkItem = button.closest('.artwork-item');
                
                if (artworkItem) {
                    const title = artworkItem.dataset.title || 'Artwork';
                    const imageUrl = this.getArtworkImageUrl(artworkItem);
                    
                    this.downloadImageWithWatermark(imageUrl, title);
                }
            });
        });
    }
    
    getArtworkImageUrl(artworkItem) {
        const artworkImage = artworkItem.querySelector('.artwork-image');
        if (artworkImage) {
            const style = artworkImage.getAttribute('style') || '';
            const urlMatch = style.match(/url\(['"]?([^'"]+)['"]?\)/);
            return urlMatch ? urlMatch[1] : '';
        }
        return '';
    }
    
    shareToSocial(platform, title, description, imageUrl) {
        const url = window.location.href;
        const encodedTitle = encodeURIComponent(title);
        const encodedDescription = encodeURIComponent(description);
        const encodedUrl = encodeURIComponent(url);
        const encodedImageUrl = encodeURIComponent(imageUrl);
        
        let shareUrl = '';
        
        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=art,recycledart,boguschatter`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle} - ${encodedDescription}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImageUrl}&description=${encodedTitle} - ${encodedDescription}`;
                break;
            case 'email':
                const subject = encodeURIComponent(`Check out this artwork: ${title}`);
                const body = encodeURIComponent(`I thought you might like this artwork by bogus ch@tter:\n\n${title}\n${description}\n\nView it here: ${url}`);
                shareUrl = `mailto:?subject=${subject}&body=${body}`;
                break;
        }
        
        if (shareUrl) {
            if (platform === 'email') {
                window.location.href = shareUrl;
            } else {
                window.open(shareUrl, '_blank', 'width=600,height=600');
            }
            
            // Show feedback
            this.showNotification(`Sharing "${title}" on ${platform}!`);
        }
    }
    
    async downloadImageWithWatermark(imageUrl, title) {
        try {
            // Show loading state
            this.showNotification('Preparing download...');
            
            // Create canvas for watermarking
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Load the image
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = () => {
                // Set canvas size to match image
                canvas.width = img.width;
                canvas.height = img.height;
                
                // Draw the image
                ctx.drawImage(img, 0, 0);
                
                // Add watermark
                this.addWatermarkToCanvas(ctx, canvas.width, canvas.height);
                
                // Convert to blob and download
                canvas.toBlob((blob) => {
                    if (blob) {
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `${this.sanitizeFilename(title)}_image©benjaminc.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                        
                        this.showNotification(`Downloaded "${title}" with watermark!`);
                    }
                }, 'image/jpeg', 0.9);
            };
            
            img.onerror = () => {
                this.showNotification('Error downloading image. Please try again.');
            };
            
            img.src = imageUrl;
            
        } catch (error) {
            console.error('Download error:', error);
            this.showNotification('Error downloading image. Please try again.');
        }
    }
    
    addWatermarkToCanvas(ctx, width, height) {
        // Save the current context
        ctx.save();
        
        // Set watermark properties
        const watermarkText = 'image©benjaminc';
        const fontSize = Math.max(24, Math.min(width, height) * 0.04);
        ctx.font = `${fontSize}px Inter, sans-serif`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        
        // Measure text
        const textMetrics = ctx.measureText(watermarkText);
        const textWidth = textMetrics.width;
        const textHeight = fontSize;
        
        // Position watermark in bottom-right corner
        const padding = 20;
        const x = width - textWidth - padding;
        const y = height - padding;
        
        // Add background rectangle for better readability
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(x - 10, y - textHeight, textWidth + 20, textHeight + 10);
        
        // Draw watermark text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(watermarkText, x, y);
        ctx.strokeText(watermarkText, x, y);
        
        // Restore context
        ctx.restore();
    }
    
    sanitizeFilename(filename) {
        return filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    }
    
    buildSearchIndex() {
        const artworkItems = document.querySelectorAll('.artwork-item');
        
        artworkItems.forEach((item, index) => {
            const title = item.dataset.title || '';
            const description = item.dataset.description || '';
            const tags = item.dataset.tags || '';
            
            this.artworkData.push({
                index,
                title,
                description,
                tags,
                element: item
            });
            
            // Create searchable text
            const searchableText = `${title} ${description} ${tags}`.toLowerCase();
            this.searchIndex.push({
                index,
                text: searchableText,
                title,
                description: this.truncateText(description, 100)
            });
        });
    }
    
    toggleSearch() {
        if (!this.searchOverlay) return;
        
        const isActive = this.searchOverlay.classList.contains('active');
        
        if (isActive) {
            this.closeSearch();
        } else {
            this.openSearch();
        }
    }
    
    openSearch() {
        if (!this.searchOverlay || !this.searchInput) return;
        
        this.searchOverlay.classList.add('active');
        setTimeout(() => {
            this.searchInput.focus();
        }, 100);
    }
    
    closeSearch() {
        if (!this.searchOverlay) return;
        
        this.searchOverlay.classList.remove('active');
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        if (this.searchResults) {
            this.searchResults.innerHTML = '';
        }
    }
    
    handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
            this.searchResults.innerHTML = '';
            return;
        }
        
        const results = this.searchIndex.filter(item => 
            item.text.includes(query)
        );
        
        this.displaySearchResults(results);
    }
    
    displaySearchResults(results) {
        if (!this.searchResults) return;
        
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="search-result"><p>No artworks found matching your search.</p></div>';
            return;
        }
        
        const resultsHTML = results.map(result => `
            <div class="search-result" onclick="portfolioGallery.scrollToArtwork(${result.index})">
                <h3>${this.highlightSearchTerm(result.title, this.searchInput.value)}</h3>
                <p>${this.highlightSearchTerm(result.description, this.searchInput.value)}</p>
            </div>
        `).join('');
        
        this.searchResults.innerHTML = resultsHTML;
    }
    
    highlightSearchTerm(text, term) {
        if (!term) return text;
        
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<mark style="background-color: rgba(255,255,255,0.2); color: inherit;">$1</mark>');
    }
    
    scrollToArtwork(index) {
        const artwork = this.artworkData[index];
        if (artwork && artwork.element) {
            this.closeSearch();
            artwork.element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
    
    setupIntersectionObserver() {
        // Observe artwork items for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.2
        });
        
        const artworkItems = document.querySelectorAll('.artwork-item');
        artworkItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    setupImageLazyLoading() {
        // Enhanced image loading with better error handling
        const images = document.querySelectorAll('.artwork-image[style*="background-image"]');
        
        images.forEach(imageEl => {
            const style = imageEl.getAttribute('style');
            const urlMatch = style.match(/url\(['"]?([^'"]+)['"]?\)/);
            
            if (urlMatch) {
                const imageUrl = urlMatch[1];
                const img = new Image();
                
                img.onload = () => {
                    imageEl.style.opacity = '1';
                };
                
                img.onerror = () => {
                    // Fallback to a placeholder or different image
                    console.warn(`Failed to load image: ${imageUrl}`);
                    imageEl.style.backgroundColor = '#333';
                };
                
                img.src = imageUrl;
            }
        });
    }
    
    // Utility method for sharing artwork
    shareArtwork(index) {
        const artwork = this.artworkData[index];
        if (!artwork) return;
        
        if (navigator.share) {
            navigator.share({
                title: artwork.title,
                text: artwork.description,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback to copying URL to clipboard
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    this.showNotification('Link copied to clipboard!');
                })
                .catch(err => {
                    console.log('Could not copy link:', err);
                });
        }
    }
    
    showNotification(message) {
        // Simple notification system
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Fade in
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        
        // Fade out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
}

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioGallery = new PortfolioGallery();
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced error handling for development
window.addEventListener('error', (e) => {
    console.error('Portfolio Gallery Error:', e.error);
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}