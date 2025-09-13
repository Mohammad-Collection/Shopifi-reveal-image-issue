/**
 * 3D Reveal Image with Video Banner JavaScript
 * Handles image reveal animations, 3D effects, and video banner functionality
 */

class RevealImageManager {
  constructor() {
    this.containers = [];
    this.intersectionObserver = null;
    this.settings = {
      enableReveal: true,
      enable3D: true,
      revealSpeed: 1.5,
      revealDirection: 'left-to-right',
      enableVideoBanner: true,
      videoPosition: 'right'
    };
    
    this.init();
  }

  init() {
    this.loadSettings();
    this.setupIntersectionObserver();
    this.bindEvents();
    this.initializeContainers();
  }

  loadSettings() {
    // Load settings from Shopify theme settings
    const settingsElement = document.querySelector('#reveal-image-settings');
    if (settingsElement) {
      try {
        const settings = JSON.parse(settingsElement.textContent);
        this.settings = { ...this.settings, ...settings };
      } catch (e) {
        console.warn('Failed to parse reveal image settings:', e);
      }
    }
  }

  setupIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.revealImage(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      }
    );
  }

  bindEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeContainers();
    });

    // Handle window resize
    window.addEventListener('resize', this.debounce(() => {
      this.updateVideoAspectRatios();
    }, 250));

    // Handle theme settings changes (for theme editor)
    document.addEventListener('shopify:section:load', () => {
      this.loadSettings();
      this.initializeContainers();
    });
  }

  initializeContainers() {
    const containers = document.querySelectorAll('.reveal-image-container');
    
    containers.forEach(container => {
      this.setupContainer(container);
    });

    // Initialize video banners
    this.initializeVideoBanners();
  }

  setupContainer(container) {
    if (container.dataset.initialized) return;

    // Apply settings
    this.applySettings(container);

    // Setup 3D effects if enabled
    if (this.settings.enable3D) {
      this.setup3DEffects(container);
    }

    // Add to intersection observer
    this.intersectionObserver.observe(container);

    // Mark as initialized
    container.dataset.initialized = 'true';
    this.containers.push(container);
  }

  applySettings(container) {
    const wrapper = container.querySelector('.reveal-image-wrapper');
    const overlay = container.querySelector('.reveal-overlay');

    // Apply speed
    const speed = this.settings.revealSpeed || 1.5;
    container.style.setProperty('--reveal-speed', `${speed}s`);

    // Apply direction
    const direction = this.settings.revealDirection || 'left-to-right';
    container.classList.add(`reveal-${direction}`);

    // Apply 3D effects
    if (this.settings.enable3D) {
      container.classList.add('enable-3d');
    }

    // Add loading state initially
    container.classList.add('loading');
  }

  setup3DEffects(container) {
    const image = container.querySelector('.reveal-image');
    
    if (!image) return;

    // Add mouse move tracking for 3D tilt effect
    container.addEventListener('mousemove', (e) => {
      if (!this.settings.enable3D) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      const rotateY = deltaX * 10; // Max 10 degrees
      const rotateX = -deltaY * 10; // Max 10 degrees

      const wrapper = container.querySelector('.reveal-image-wrapper');
      if (wrapper) {
        wrapper.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
      }
    });

    // Reset on mouse leave
    container.addEventListener('mouseleave', () => {
      const wrapper = container.querySelector('.reveal-image-wrapper');
      if (wrapper) {
        wrapper.style.transform = '';
      }
    });
  }

  revealImage(container) {
    // Remove loading state
    container.classList.remove('loading');
    
    // Add revealed state with slight delay for effect
    setTimeout(() => {
      container.classList.add('revealed');
      
      // Trigger custom event
      container.dispatchEvent(new CustomEvent('imageRevealed', {
        detail: { container }
      }));
    }, 100);

    // Stop observing this container
    this.intersectionObserver.unobserve(container);
  }

  initializeVideoBanners() {
    const videoBanners = document.querySelectorAll('.video-banner-container');
    
    videoBanners.forEach(banner => {
      this.setupVideoBanner(banner);
    });
  }

  setupVideoBanner(banner) {
    const iframe = banner.querySelector('iframe');
    const video = banner.querySelector('video');
    
    if (iframe) {
      this.setupIframeVideo(iframe, banner);
    } else if (video) {
      this.setupNativeVideo(video, banner);
    }

    // Setup hover effects
    this.setupVideoBannerInteractions(banner);
  }

  setupIframeVideo(iframe, banner) {
    // Handle YouTube and Vimeo videos
    const src = iframe.src;
    
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      // Add autoplay parameter for YouTube
      if (!src.includes('autoplay=')) {
        iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1';
      }
    } else if (src.includes('vimeo.com')) {
      // Add autoplay parameter for Vimeo
      if (!src.includes('autoplay=')) {
        iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&muted=1&loop=1';
      }
    }
  }

  setupNativeVideo(video, banner) {
    // Setup native video properties
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Auto play when visible
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(e => {
              console.warn('Video autoplay failed:', e);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoObserver.observe(banner);
  }

  setupVideoBannerInteractions(banner) {
    const content = banner.querySelector('.video-banner-content');
    
    if (!content) return;

    // Add click to play/pause functionality
    banner.addEventListener('click', (e) => {
      const video = banner.querySelector('video');
      const iframe = banner.querySelector('iframe');
      
      if (video) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
      // Note: iframe videos (YouTube/Vimeo) would need postMessage API for play/pause
    });

    // Add keyboard accessibility
    banner.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        banner.click();
      }
    });
  }

  updateVideoAspectRatios() {
    const videoBanners = document.querySelectorAll('.video-banner-wrapper');
    
    videoBanners.forEach(wrapper => {
      // Re-calculate aspect ratio if needed
      const iframe = wrapper.querySelector('iframe');
      const video = wrapper.querySelector('video');
      
      if (iframe || video) {
        // Force aspect ratio recalculation
        wrapper.style.paddingBottom = '56.25%'; // 16:9
      }
    });
  }

  // Utility method for debouncing
  debounce(func, wait) {
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

  // Public API methods
  revealAll() {
    this.containers.forEach(container => {
      if (!container.classList.contains('revealed')) {
        this.revealImage(container);
      }
    });
  }

  hideAll() {
    this.containers.forEach(container => {
      container.classList.remove('revealed');
      container.classList.add('loading');
    });
  }

  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this.containers.forEach(container => {
      this.applySettings(container);
    });
  }
}

// Initialize when DOM is ready
let revealImageManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    revealImageManager = new RevealImageManager();
  });
} else {
  revealImageManager = new RevealImageManager();
}

// Export for global access
window.RevealImageManager = RevealImageManager;
window.revealImageManager = revealImageManager;

// Shopify theme editor support
document.addEventListener('shopify:section:load', () => {
  if (window.revealImageManager) {
    window.revealImageManager.initializeContainers();
  }
});

document.addEventListener('shopify:section:unload', () => {
  // Cleanup if needed
});

document.addEventListener('shopify:section:select', () => {
  // Handle section selection in theme editor
});

document.addEventListener('shopify:section:deselect', () => {
  // Handle section deselection in theme editor
});