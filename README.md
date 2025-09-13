# Shopify Theme: Reveal Image with 3D Effects

A powerful Shopify theme featuring 3D reveal image animations and integrated video banners.

## Features

### 🎨 3D Reveal Image Functionality
- **Multiple Animation Directions**: Left-to-right, right-to-left, top-to-bottom, bottom-to-top, and center-out reveals
- **3D Effects**: Interactive 3D hover effects with perspective and rotation
- **Customizable Speed**: Adjustable animation timing from 0.5s to 3.0s
- **Intersection Observer**: Animations trigger when images enter the viewport
- **Accessibility**: Full ARIA support and keyboard navigation

### 📹 Video Banner Integration
- **Multiple Video Sources**: YouTube, Vimeo, and direct MP4 support
- **Flexible Positioning**: Video can be positioned left, right, above, or below the reveal image
- **Responsive Design**: Maintains aspect ratios across all devices
- **Auto-play Support**: Smart autoplay with mute for better UX
- **Hover Interactions**: Content overlay appears on hover

### 🛠 Technical Features
- **Performance Optimized**: Debounced scroll events and efficient animations
- **Theme Editor Ready**: Full Shopify theme customizer integration
- **Mobile Responsive**: Optimized for all screen sizes
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with screen reader support

## Installation

1. Upload the theme files to your Shopify theme directory
2. Add the "Reveal Image with Video Banner" section to your pages
3. Customize settings in the theme editor

## Usage

### Adding a Reveal Image Section

1. Go to your Shopify admin
2. Navigate to Online Store > Themes
3. Click "Customize" on your theme
4. Add a new section and select "Reveal Image with Video Banner"
5. Configure your settings:
   - Upload your reveal image
   - Set animation direction and speed
   - Enable/disable 3D effects
   - Add video URL and position

### Configuration Options

#### Reveal Image Settings
- **Image**: Upload the image to reveal
- **Alt Text**: Accessibility description
- **3D Effects**: Enable interactive 3D hover effects
- **Animation Speed**: Control reveal timing (0.5s - 3.0s)
- **Direction**: Choose animation direction

#### Video Banner Settings
- **Enable Video**: Toggle video banner on/off
- **Video URL**: YouTube, Vimeo, or MP4 URL
- **Title & Description**: Content overlay text
- **Position**: Where to place video relative to image

## File Structure

```
├── assets/
│   ├── reveal-image-3d.css     # Main styles for reveal functionality
│   ├── reveal-image-3d.js      # JavaScript for animations and interactions
│   ├── base.css                # Base theme styles
│   └── global.js               # Utility functions
├── config/
│   └── settings_schema.json    # Theme configuration schema
├── layout/
│   └── theme.liquid            # Main theme layout
├── locales/
│   └── en.default.json         # English translations
├── sections/
│   └── reveal-image-video-banner.liquid  # Main section template
├── snippets/
│   └── meta-tags.liquid        # SEO meta tags
└── templates/
    └── page.reveal-demo.liquid # Demo page template
```

## Customization

### CSS Variables
The theme uses CSS custom properties for easy customization:

```css
:root {
  --reveal-speed: 1.5s;          /* Animation duration */
  --reveal-perspective: 1000px;   /* 3D perspective */
  --video-aspect-ratio: 56.25%;   /* Video aspect ratio */
}
```

### JavaScript API
Access the reveal functionality programmatically:

```javascript
// Get the manager instance
const manager = window.revealImageManager;

// Reveal all images immediately
manager.revealAll();

// Update settings dynamically
manager.updateSettings({
  enable3D: false,
  revealSpeed: 2.0
});
```

### Events
Listen for reveal events:

```javascript
document.addEventListener('imageRevealed', (event) => {
  console.log('Image revealed:', event.detail.container);
});
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 10+
- Edge 79+
- iOS Safari 10+
- Android Chrome 60+

## Performance

- Lazy loading for images
- Intersection Observer for efficient scroll handling
- Debounced resize events
- Hardware-accelerated CSS animations
- Minimal DOM manipulation

## Accessibility

- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Reduced motion preferences
- High contrast mode support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This theme is open source and available under the MIT License.

## Support

For support and customization requests, please create an issue in the repository or contact the development team.
