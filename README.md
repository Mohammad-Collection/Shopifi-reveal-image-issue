# Shopify Reveal Image Theme

A modern, interactive Shopify theme featuring revolutionary reveal image functionality with stunning 3D effects and video banner integration.

## 🚀 Features

### 🎭 Reveal Image Component
- **4 Animation Types**: Flip, Slide, Fade, Zoom
- **3D Flip Cards**: Smooth perspective transforms
- **Interactive Overlays**: Customizable hover content
- **Touch-Friendly**: Mobile-optimized interactions

### 🎬 Video Banner Integration  
- **Auto-Playing Videos**: Seamless video integration
- **Poster Fallbacks**: Optimized loading experience
- **Responsive Design**: Scales across all devices
- **Accessibility**: Full screen reader support

### ✨ 3D Effects
- **CSS 3D Transforms**: Hardware-accelerated animations
- **Mouse Parallax**: Interactive cursor following
- **Shine Effects**: Dynamic light overlays
- **Pulse Animations**: Attention-grabbing highlights

### 🎨 Professional Theme
- **Modern Design**: Clean, contemporary aesthetics
- **Responsive Layout**: Mobile-first approach
- **SEO Optimized**: Built-in meta tags and structure
- **Performance**: Lazy loading and optimizations

## 📁 Theme Structure

```
├── assets/
│   ├── base.css                 # Base styling system
│   ├── reveal-image.css         # Reveal image components
│   ├── global.js               # Core JavaScript functionality
│   └── reveal-image.js         # Reveal-specific interactions
├── config/
│   └── settings_schema.json    # Theme customizer settings
├── layout/
│   └── theme.liquid            # Main theme layout
├── locales/
│   └── en.default.json         # Internationalization
├── sections/
│   ├── reveal-image.liquid     # Modular reveal component
│   ├── header.liquid           # Site header
│   ├── footer.liquid           # Site footer
│   └── announcement-bar.liquid # Promotional banner
├── snippets/
│   ├── meta-tags.liquid        # SEO meta tags
│   └── cart-drawer.liquid      # Quick cart functionality
└── templates/
    ├── index.liquid            # Homepage with demos
    ├── product.liquid          # Product pages
    ├── collection.liquid       # Collection grids
    └── cart.liquid             # Shopping cart
```

## 🛠️ Installation

### Method 1: Direct Upload (Recommended)
1. Download the theme files from this repository
2. Compress all files into a `.zip` archive
3. In your Shopify admin, go to **Online Store > Themes**
4. Click **Upload theme** and select your zip file
5. Publish the theme when ready

### Method 2: Theme Development
1. Install [Shopify CLI](https://shopify.dev/tools/cli)
2. Clone this repository
3. Run `shopify theme dev` for local development
4. Run `shopify theme push` to deploy

## ⚙️ Configuration

### Theme Settings
Access theme customization via **Online Store > Themes > Customize**:

#### Reveal Image Settings
- **Animation Type**: Choose from Flip, Slide, Fade, or Zoom
- **Animation Speed**: Control transition timing (200-2000ms)
- **3D Effects**: Enable/disable 3D interactions
- **Auto Hide**: Hide reveal on mouse leave
- **Auto Reveal**: Automatic reveal with delay

#### Video Banner Settings
- **Enable Video Banner**: Toggle video functionality
- **Video URL**: Upload MP4 files to Shopify Files
- **Poster Image**: Fallback image before video loads
- **Autoplay**: Control video autoplay behavior
- **Muted**: Control video audio settings

#### Color Scheme
- **Primary Color**: Main text and UI elements
- **Secondary Color**: Background and contrast
- **Accent Color**: Highlights and call-to-actions

### Section Configuration
The reveal image component can be added to any page via sections:

1. **Go to Online Store > Themes > Customize**
2. **Click "Add section"**
3. **Select "Reveal Image"**
4. **Configure images, text, and animations**

## 🎯 Usage Examples

### Basic Reveal Image
```liquid
<div class="reveal-image-container" 
     data-animation="flip"
     data-speed="800"
     data-enable-3d="true">
  <!-- Content will be automatically generated -->
</div>
```

### Video Banner Integration
```liquid
<div class="video-banner-container">
  <video autoplay muted loop playsinline>
    <source src="your-video.mp4" type="video/mp4">
  </video>
</div>
```

### Custom Animation Triggers
```javascript
// Manually trigger reveal
const revealElement = document.querySelector('.reveal-image-container');
const revealInstance = new RevealImage(revealElement);
revealInstance.reveal();
```

## 🎨 Customization

### CSS Custom Properties
```css
:root {
  --reveal-animation-speed: 800ms;
  --color-primary: #121212;
  --color-secondary: #FFFFFF;
  --color-accent: #FF6B35;
}
```

### Animation Types
- **Flip**: 3D card flip effect
- **Slide**: Horizontal sliding transition  
- **Fade**: Opacity-based transition
- **Zoom**: Scale-based animation

### 3D Effects
Enable enhanced 3D interactions:
- Mouse-follow parallax
- Perspective transforms
- Shine effects
- Hardware acceleration

## 📱 Browser Support

- **Chrome**: 80+ ✅
- **Firefox**: 75+ ✅  
- **Safari**: 13+ ✅
- **Edge**: 80+ ✅
- **Mobile**: iOS 13+, Android 8+ ✅

## 🔧 Performance

### Optimizations Included
- **Lazy Loading**: Images load as needed
- **Intersection Observer**: Efficient scroll detection
- **Hardware Acceleration**: GPU-powered animations
- **Debounced Events**: Optimized resize handling
- **Preloading**: Critical resource prioritization

### Performance Tips
1. Use optimized image formats (WebP when possible)
2. Compress videos before uploading
3. Limit simultaneous reveal animations
4. Test on slower devices/connections

## 🎪 Demo Features

The homepage includes interactive demos showcasing:

### Animation Showcase
- **3D Flip Demo**: Experience the signature flip effect
- **Slide Animation**: Smooth horizontal transitions
- **Fade Effect**: Elegant opacity changes
- **Zoom Animation**: Dynamic scaling transitions

### Video Integration Demo
- **Interactive Video**: Click-to-play functionality
- **Reveal Combination**: Video + reveal image side-by-side
- **Responsive Behavior**: Automatic scaling

### Product Integration
- **Product Cards**: Reveal-enabled product grids
- **Detail Views**: Enhanced product pages
- **Cart Integration**: Seamless shopping experience

## 🛡️ Accessibility

### Features Included
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Tab and Enter support
- **Focus Management**: Visible focus indicators
- **Alt Text**: Comprehensive image descriptions
- **Semantic HTML**: Proper heading structure

### Testing Recommendations
1. Test with screen readers (NVDA, JAWS, VoiceOver)
2. Navigate using only keyboard
3. Verify color contrast ratios
4. Test with browser zoom at 200%

## 📊 Analytics Integration

### Tracking Events
The theme automatically tracks:
- **Reveal Interactions**: Click and keyboard activation
- **Video Engagement**: Play, pause, and completion
- **Animation Performance**: Loading and error states

### Google Analytics
```javascript
// Events are automatically sent to GA4
gtag('event', 'reveal_image_interaction', {
  'event_category': 'engagement',
  'event_label': 'flip_animation'
});
```

## 🔍 SEO Features

### Built-in Optimizations
- **Meta Tags**: Comprehensive social media tags
- **Schema Markup**: Structured data for products
- **Image Optimization**: Responsive image sizing
- **Loading Performance**: Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Theme Customization Guide](https://help.shopify.com/themes)

### Issue Reporting
If you encounter any issues:
1. Check existing [GitHub Issues](../../issues)
2. Create a new issue with detailed description
3. Include browser/device information
4. Provide steps to reproduce

### Community
- [Shopify Partners](https://partners.shopify.com/)
- [Shopify Community](https://community.shopify.com/)
- [Theme Development Discord](https://discord.gg/shopify-devs)

## 🏆 Credits

**Developed by**: Mohammad Collection  
**Version**: 1.0.0  
**Built with**: Shopify Liquid, CSS3, Vanilla JavaScript  
**Inspired by**: Modern web animation trends and user experience best practices

---

**Ready to revolutionize your Shopify store with stunning reveal images and 3D effects? Install this theme today and watch your engagement soar! 🚀**
