// Global JavaScript utilities for the theme

class Utils {
  // Debounce function for performance optimization
  static debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }

  // Throttle function for scroll events
  static throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Check if element is in viewport
  static isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= -offset &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
  }

  // Animate element with CSS classes
  static animateElement(element, animationClass, duration = 600) {
    return new Promise((resolve) => {
      element.classList.add(animationClass);
      setTimeout(() => {
        element.classList.remove(animationClass);
        resolve();
      }, duration);
    });
  }

  // Load image with promise
  static loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  // Get CSS custom property value
  static getCSSCustomProperty(property) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(property)
      .trim();
  }

  // Set CSS custom property value
  static setCSSCustomProperty(property, value) {
    document.documentElement.style.setProperty(property, value);
  }

  // Format currency (basic implementation)
  static formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount / 100); // Assuming amount is in cents
  }

  // Get query parameter value
  static getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Set query parameter
  static setQueryParam(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
  }

  // Remove query parameter
  static removeQueryParam(param) {
    const url = new URL(window.location);
    url.searchParams.delete(param);
    window.history.pushState({}, '', url);
  }

  // Check if user prefers reduced motion
  static prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Check if user prefers dark mode
  static prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Generate unique ID
  static generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Trap focus within element (for modals, dropdowns)
  static trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
      if (e.key === 'Escape') {
        element.dispatchEvent(new CustomEvent('focustrap:escape'));
      }
    };

    element.addEventListener('keydown', handleTabKey);
    
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  }
}

// Accessibility utilities
class A11y {
  // Announce to screen readers
  static announce(message, priority = 'polite') {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.classList.add('visually-hidden');
    document.body.appendChild(announcer);
    
    announcer.textContent = message;
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }

  // Set up skip links
  static setupSkipLinks() {
    const skipLinks = document.querySelectorAll('.skip-to-content-link');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.focus();
          target.scrollIntoView();
        }
      });
    });
  }

  // Enhanced focus management
  static manageFocus(element) {
    element.setAttribute('tabindex', '-1');
    element.focus();
    
    const handleBlur = () => {
      element.removeAttribute('tabindex');
      element.removeEventListener('blur', handleBlur);
    };
    
    element.addEventListener('blur', handleBlur);
  }
}

// Performance utilities
class Performance {
  // Lazy load images
  static initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Preload critical resources
  static preloadResource(href, as, type = null) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
}

// Initialize utilities when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  A11y.setupSkipLinks();
  Performance.initLazyLoading();
});

// Export utilities globally
window.Utils = Utils;
window.A11y = A11y;
window.Performance = Performance;