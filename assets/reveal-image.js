// Additional reveal image specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize reveal images with settings from theme
  const revealSpeed = parseInt(document.documentElement.style.getPropertyValue('--reveal-animation-speed')) || 800;
  
  // Add smooth scroll behavior for reveal elements
  document.querySelectorAll('a[href^="#reveal"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });

  // Handle theme settings changes in real-time (for theme editor)
  if (window.Shopify && Shopify.designMode) {
    document.addEventListener('shopify:section:load', function() {
      // Reinitialize reveal images when settings change
      initializeRevealImages();
    });
  }

  function initializeRevealImages() {
    const containers = document.querySelectorAll('.reveal-image-container');
    containers.forEach(container => {
      // Apply settings from theme customizer
      const animationType = container.dataset.animation || 'flip';
      const enable3d = container.dataset.enable3d === 'true';
      
      // Update CSS custom properties
      if (container.dataset.speed) {
        container.style.setProperty('--reveal-animation-speed', container.dataset.speed + 'ms');
      }
    });
  }

  // Initialize on load
  initializeRevealImages();
});