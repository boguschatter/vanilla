// Admin Panel JavaScript for Portfolio Gallery

class PortfolioAdmin {
    constructor() {
        this.form = document.getElementById('artworkForm');
        this.previewBtn = document.getElementById('previewBtn');
        this.clearFormBtn = document.getElementById('clearForm');
        this.copyHTMLBtn = document.getElementById('copyHTML');
        this.previewSection = document.getElementById('previewSection');
        this.htmlSection = document.getElementById('htmlSection');
        this.artworkPreview = document.getElementById('artworkPreview');
        this.generatedHTML = document.getElementById('generatedHTML');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadSavedData();
    }
    
    setupEventListeners() {
        // Form submission
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
        
        // Preview button
        if (this.previewBtn) {
            this.previewBtn.addEventListener('click', this.showPreview.bind(this));
        }
        
        // Clear form button
        if (this.clearFormBtn) {
            this.clearFormBtn.addEventListener('click', this.clearForm.bind(this));
        }
        
        // Copy HTML button
        if (this.copyHTMLBtn) {
            this.copyHTMLBtn.addEventListener('click', this.copyHTML.bind(this));
        }
        
        // Auto-save form data
        const formInputs = this.form.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', this.saveFormData.bind(this));
        });
        
        // Image URL validation
        const imageInput = document.getElementById('artworkImage');
        if (imageInput) {
            imageInput.addEventListener('blur', this.validateImageURL.bind(this));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = this.getFormData();
        
        if (!this.validateForm(formData)) {
            return;
        }
        
        this.generateHTML(formData);
        this.showMessage('Artwork HTML generated successfully! Copy the code below and add it to your index.html file.', 'success');
        this.showHTMLSection();
        this.clearFormData();
    }
    
    getFormData() {
        return {
            title: document.getElementById('artworkTitle').value.trim(),
            image: document.getElementById('artworkImage').value.trim(),
            description: document.getElementById('artworkDescription').value.trim(),
            tags: document.getElementById('artworkTags').value.trim(),
            height: document.getElementById('artworkHeight').value
        };
    }
    
    validateForm(data) {
        const errors = [];
        
        if (!data.title) {
            errors.push('Title is required');
        }
        
        if (!data.image) {
            errors.push('Image URL is required');
        } else if (!this.isValidURL(data.image)) {
            errors.push('Please enter a valid image URL');
        }
        
        if (!data.description) {
            errors.push('Description is required');
        }
        
        if (errors.length > 0) {
            this.showMessage('Please fix the following errors:\n• ' + errors.join('\n• '), 'error');
            return false;
        }
        
        return true;
    }
    
    isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    async validateImageURL() {
        const imageInput = document.getElementById('artworkImage');
        const url = imageInput.value.trim();
        
        if (!url) return;
        
        try {
            // Create a test image to verify URL is valid
            const img = new Image();
            img.onload = () => {
                imageInput.style.borderColor = 'rgba(76, 175, 80, 0.5)';
            };
            img.onerror = () => {
                imageInput.style.borderColor = 'rgba(244, 67, 54, 0.5)';
                this.showMessage('Warning: Unable to load image from this URL. Please verify the URL is correct.', 'error');
            };
            img.src = url;
        } catch (error) {
            imageInput.style.borderColor = 'rgba(244, 67, 54, 0.5)';
        }
    }
    
    showPreview() {
        const formData = this.getFormData();
        
        if (!this.validateForm(formData)) {
            return;
        }
        
        this.createPreview(formData);
        this.previewSection.style.display = 'block';
        this.previewSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    createPreview(data) {
        const previewHTML = `
            <div class="preview-artwork-item">
                <div class="preview-artwork-image" style="background-image: url('${data.image}')"></div>
                <div class="preview-artwork-info">
                    <div class="preview-info-content">
                        <h2 class="preview-artwork-title">${this.escapeHTML(data.title)}</h2>
                        <div class="preview-artwork-description">
                            <p>${this.escapeHTML(data.description)}</p>
                            <div class="artwork-actions">
                                <div class="social-share">
                                    <button class="share-btn" data-platform="twitter" aria-label="Share on Twitter">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </button>
                                    <button class="share-btn" data-platform="facebook" aria-label="Share on Facebook">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </button>
                                    <button class="share-btn" data-platform="pinterest" aria-label="Share on Pinterest">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                        </svg>
                                    </button>
                                    <button class="share-btn" data-platform="email" aria-label="Share via Email">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a1 1 0 001.42 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </button>
                                </div>
                                <button class="download-btn" aria-label="Download image">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.artworkPreview.innerHTML = previewHTML;
    }
    
    generateHTML(data) {
        const html = `<section class="artwork-item" data-title="${this.escapeHTML(data.title)}" data-description="${this.escapeHTML(data.description)}" data-tags="${this.escapeHTML(data.tags)}">
    <div class="artwork-image" style="background-image: url('${data.image}')"></div>
    <div class="artwork-info">
        <div class="info-content">
            <h2 class="artwork-title">${this.escapeHTML(data.title)}</h2>
            <div class="artwork-description">
                <p>${this.escapeHTML(data.description)}</p>
                <div class="artwork-actions">
                    <div class="social-share">
                        <button class="share-btn" data-platform="twitter" aria-label="Share on Twitter">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </button>
                        <button class="share-btn" data-platform="facebook" aria-label="Share on Facebook">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </button>
                        <button class="share-btn" data-platform="pinterest" aria-label="Share on Pinterest">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                            </svg>
                        </button>
                        <button class="share-btn" data-platform="email" aria-label="Share via Email">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a1 1 0 001.42 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </button>
                    </div>
                    <button class="download-btn" aria-label="Download image">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 712-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        <span>Download</span>
                    </button>
                </div>
            </div>
            <button class="expand-btn" aria-label="Expand description">
                <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 32 32">
                    <path d="M16 25.3333V6.66667M16 6.66667L6.66667 16M16 6.66667L25.3333 16"/>
                </svg>
            </button>
        </div>
    </div>
</section>`;
        
        this.generatedHTML.value = html;
    }
    
    showHTMLSection() {
        this.htmlSection.style.display = 'block';
        this.htmlSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    copyHTML() {
        if (!this.generatedHTML.value) {
            this.showMessage('No HTML to copy. Please generate artwork HTML first.', 'error');
            return;
        }
        
        this.generatedHTML.select();
        this.generatedHTML.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            this.showMessage('HTML copied to clipboard! Paste it into your index.html file.', 'success');
        } catch (err) {
            // Fallback for modern browsers
            navigator.clipboard.writeText(this.generatedHTML.value).then(() => {
                this.showMessage('HTML copied to clipboard! Paste it into your index.html file.', 'success');
            }).catch(() => {
                this.showMessage('Unable to copy to clipboard. Please manually select and copy the HTML above.', 'error');
            });
        }
    }
    
    clearForm() {
        if (confirm('Are you sure you want to clear the form? This will remove all entered data.')) {
            this.form.reset();
            this.previewSection.style.display = 'none';
            this.htmlSection.style.display = 'none';
            this.clearFormData();
            this.showMessage('Form cleared successfully.', 'success');
        }
    }
    
    saveFormData() {
        const formData = this.getFormData();
        localStorage.setItem('portfolioAdminData', JSON.stringify(formData));
    }
    
    loadSavedData() {
        try {
            const savedData = localStorage.getItem('portfolioAdminData');
            if (savedData) {
                const data = JSON.parse(savedData);
                
                if (data.title) document.getElementById('artworkTitle').value = data.title;
                if (data.image) document.getElementById('artworkImage').value = data.image;
                if (data.description) document.getElementById('artworkDescription').value = data.description;
                if (data.tags) document.getElementById('artworkTags').value = data.tags;
                if (data.height) document.getElementById('artworkHeight').value = data.height;
            }
        } catch (error) {
            console.warn('Unable to load saved form data:', error);
        }
    }
    
    clearFormData() {
        localStorage.removeItem('portfolioAdminData');
    }
    
    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    showMessage(message, type = 'success') {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.textContent = message;
        
        // Insert message at the top of the form section
        const formSection = this.form.closest('.admin-section');
        formSection.insertBefore(messageEl, formSection.firstChild);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
        
        // Scroll to message
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Utility method to generate suggested tags based on title and description
    generateSuggestedTags(title, description) {
        const commonArtTags = [
            'mixed media', 'abstract', 'canvas', 'acrylic', 'oil paint', 'watercolor',
            'sculpture', 'installation', 'digital art', 'photography', 'collage',
            'textile', 'fabric', 'recycled materials', 'found objects', 'metal',
            'wood', 'plastic', 'glass', 'paper', 'charcoal', 'ink', 'pastel',
            'contemporary', 'modern', 'conceptual', 'experimental', 'urban',
            'nature', 'environment', 'sustainability', 'technology', 'social'
        ];
        
        const text = (title + ' ' + description).toLowerCase();
        const suggestedTags = commonArtTags.filter(tag => 
            text.includes(tag) || tag.split(' ').every(word => text.includes(word))
        );
        
        return suggestedTags.slice(0, 8); // Limit to 8 suggestions
    }
    
    // Method to help with image URL suggestions
    generateUnsplashURL(query, width = 1440, height = 1200) {
        const encodedQuery = encodeURIComponent(query);
        return `https://images.unsplash.com/photo-${Date.now()}?w=${width}&h=${height}&fit=crop&crop=center&q=${encodedQuery}`;
    }
}

// Initialize the admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioAdmin = new PortfolioAdmin();
});

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio Admin Error:', e.error);
});

// Prevent accidental page reload when form has data
window.addEventListener('beforeunload', (e) => {
    const formData = document.getElementById('artworkForm');
    if (formData) {
        const hasData = Array.from(formData.elements).some(element => 
            element.value && element.value.trim() !== ''
        );
        
        if (hasData) {
            e.preventDefault();
            e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
            return e.returnValue;
        }
    }
});

// Auto-save interval (every 30 seconds)
setInterval(() => {
    if (window.portfolioAdmin) {
        window.portfolioAdmin.saveFormData();
    }
}, 30000);

// Image dimension checker utility
function checkImageDimensions(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            resolve({
                width: this.naturalWidth,
                height: this.naturalHeight,
                aspectRatio: this.naturalWidth / this.naturalHeight
            });
        };
        img.onerror = reject;
        img.src = url;
    });
}

// Export function for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioAdmin;
}