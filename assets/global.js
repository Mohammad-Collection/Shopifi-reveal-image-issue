// Reveal Image JavaScript Functionality
class RevealImage {
  constructor(element) {
    this.element = element;
    this.card = element.querySelector('.reveal-card');
    this.animationType = element.dataset.animation || 'flip';
    this.isRevealed = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupIntersectionObserver();
    
    // Add animation class
    this.element.classList.add(`reveal-${this.animationType}`);
    
    // Apply 3D effects if enabled
    if (this.element.dataset.enable3d === 'true') {
      this.enable3DEffects();
    }
  }

  setupEventListeners() {
    // Click to reveal
    this.element.addEventListener('click', () => {
      this.toggleReveal();
    });

    // Keyboard support
    this.element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleReveal();
      }
    });

    // Mouse leave to hide (optional)
    if (this.element.dataset.autoHide === 'true') {
      this.element.addEventListener('mouseleave', () => {
        this.hideReveal();
      });
    }
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.element.classList.add('fade-in');
          
          // Auto-reveal after delay if specified
          const autoRevealDelay = parseInt(this.element.dataset.autoRevealDelay);
          if (autoRevealDelay) {
            setTimeout(() => {
              this.showReveal();
            }, autoRevealDelay);
          }
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.element);
  }

  toggleReveal() {
    if (this.isRevealed) {
      this.hideReveal();
    } else {
      this.showReveal();
    }
  }

  showReveal() {
    if (this.isRevealed) return;
    
    this.isRevealed = true;
    this.element.classList.add('revealed');
    
    switch (this.animationType) {
      case 'flip':
        if (this.card) {
          this.card.classList.add('flipped');
        }
        break;
      case 'slide':
      case 'fade':
      case 'zoom':
        // Classes are handled by CSS
        break;
    }

    // Trigger custom event
    this.element.dispatchEvent(new CustomEvent('reveal:shown', {
      detail: { element: this.element }
    }));

    // Analytics tracking
    this.trackReveal('shown');
  }

  hideReveal() {
    if (!this.isRevealed) return;
    
    this.isRevealed = false;
    this.element.classList.remove('revealed');
    
    if (this.card) {
      this.card.classList.remove('flipped');
    }

    // Trigger custom event
    this.element.dispatchEvent(new CustomEvent('reveal:hidden', {
      detail: { element: this.element }
    }));

    // Analytics tracking
    this.trackReveal('hidden');
  }

  enable3DEffects() {
    this.element.classList.add('reveal-3d-effect', 'reveal-shine');
    
    // Add mousemove parallax effect
    this.element.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return; // Disable on mobile
      
      const rect = this.element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      this.element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = '';
    });
  }

  trackReveal(action) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'reveal_image_interaction', {
        event_category: 'engagement',
        event_label: action,
        custom_parameter_1: this.animationType
      });
    }

    // Shopify Analytics
    if (typeof ShopifyAnalytics !== 'undefined') {
      ShopifyAnalytics.lib.track('reveal_image_interaction', {
        action: action,
        animation_type: this.animationType
      });
    }
  }

  // Public API methods
  reveal() {
    this.showReveal();
  }

  hide() {
    this.hideReveal();
  }

  destroy() {
    // Clean up event listeners
    this.element.style.transform = '';
    this.element.classList.remove('revealed', 'fade-in', `reveal-${this.animationType}`);
    
    if (this.card) {
      this.card.classList.remove('flipped');
    }
  }
}

// Video Banner Class
class VideoBanner {
  constructor(element) {
    this.element = element;
    this.video = element.querySelector('video');
    this.playButton = element.querySelector('.video-play-button');
    this.isPlaying = false;
    this.init();
  }

  init() {
    if (!this.video) return;

    this.setupEventListeners();
    this.setupIntersectionObserver();
    
    // Set initial state
    if (this.video.autoplay && this.video.muted) {
      this.play();
    }
  }

  setupEventListeners() {
    if (this.playButton) {
      this.playButton.addEventListener('click', () => {
        this.togglePlayback();
      });
    }

    this.video.addEventListener('click', () => {
      this.togglePlayback();
    });

    this.video.addEventListener('play', () => {
      this.isPlaying = true;
      this.element.classList.add('playing');
      if (this.playButton) {
        this.playButton.style.display = 'none';
      }
    });

    this.video.addEventListener('pause', () => {
      this.isPlaying = false;
      this.element.classList.remove('playing');
      if (this.playButton) {
        this.playButton.style.display = 'flex';
      }
    });

    this.video.addEventListener('ended', () => {
      this.isPlaying = false;
      this.element.classList.remove('playing');
      if (this.playButton) {
        this.playButton.style.display = 'flex';
      }
    });
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (this.video.autoplay && this.video.muted) {
            this.play();
          }
        } else {
          // Pause video when out of view to save bandwidth
          this.pause();
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(this.element);
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (this.video) {
      this.video.play().catch(e => {
        console.log('Video autoplay prevented:', e);
      });
    }
  }

  pause() {
    if (this.video) {
      this.video.pause();
    }
  }
}

// Global JavaScript functionality
class GlobalJS {
  constructor() {
    this.init();
  }

  init() {
    this.initRevealImages();
    this.initVideoBanners();
    this.initLazyLoading();
    this.initAccessibility();
    this.initPerformanceOptimizations();
  }

  initRevealImages() {
    const revealElements = document.querySelectorAll('.reveal-image-container');
    revealElements.forEach(element => {
      new RevealImage(element);
    });
  }

  initVideoBanners() {
    const videoBanners = document.querySelectorAll('.video-banner-container');
    videoBanners.forEach(element => {
      new VideoBanner(element);
    });
  }

  initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  initAccessibility() {
    // Add ARIA labels and keyboard navigation
    document.querySelectorAll('.reveal-image-container').forEach(element => {
      if (!element.getAttribute('role')) {
        element.setAttribute('role', 'button');
      }
      
      if (!element.getAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }

      if (!element.getAttribute('aria-label')) {
        element.setAttribute('aria-label', 'Click to reveal image');
      }
    });

    // Focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  initPerformanceOptimizations() {
    // Preload critical resources
    this.preloadCriticalImages();
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('.reveal-image-front img[data-priority="high"]');
    criticalImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src || img.dataset.src;
      document.head.appendChild(link);
    });
  }

  handleResize() {
    // Recalculate dimensions if needed
    const revealElements = document.querySelectorAll('.reveal-image-container');
    revealElements.forEach(element => {
      // Reset any transform styles that might be affected by resize
      if (window.innerWidth < 768) {
        element.style.transform = '';
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new GlobalJS();
});

// Shopify theme editor support
if (Shopify && Shopify.designMode) {
  document.addEventListener('shopify:section:load', () => {
    // Reinitialize components when sections are loaded in theme editor
    new GlobalJS();
  });
}

// Export classes for external use
window.RevealImage = RevealImage;
window.VideoBanner = VideoBanner;