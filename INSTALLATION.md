# Installation Guide

## Quick Setup

1. **Upload to Shopify**
   - Download all files from this repository
   - Upload to your Shopify theme directory
   - Or use Shopify CLI: `shopify theme push`

2. **Add to Your Store**
   - Go to Online Store > Themes in your Shopify admin
   - Click "Customize" on your theme
   - Add section: "Reveal Image with Video Banner" or "Advanced Reveal Image"

3. **Configure Settings**
   - Upload your product image
   - Add video URL (YouTube, Vimeo, or MP4)
   - Customize animation settings
   - Set video position and styling

## Basic Usage

### Standard Section
Use `reveal-image-video-banner` for basic functionality:
- Simple reveal animations
- Video banner integration
- Mobile responsive design

### Advanced Section  
Use `advanced-reveal-image` for premium features:
- Multiple reveal styles (liquid, split, ripple)
- Premium 3D effects
- Enhanced video controls
- Custom section styling

## Customization Options

### Animation Directions
- **Left to Right**: Classic horizontal reveal
- **Right to Left**: Reverse horizontal reveal  
- **Top to Bottom**: Vertical reveal from top
- **Bottom to Top**: Vertical reveal from bottom
- **Center Out**: Circular expand reveal

### Reveal Styles (Advanced)
- **Standard**: Clean overlay transition
- **Liquid Morph**: Organic flowing effect
- **Split Reveal**: Two-panel opening
- **Ripple Effect**: Expanding circle animation

### Video Positions
- **Left/Right**: Side-by-side layout
- **Top/Bottom**: Stacked layout
- **Responsive**: Auto-stacks on mobile

## Integration Examples

### Product Pages
```liquid
<!-- In product.liquid template -->
{% section 'reveal-image-video-banner' %}
```

### Collection Pages
```liquid  
<!-- In collection.liquid template -->
{% section 'advanced-reveal-image' %}
```

### Custom Pages
```liquid
<!-- In page templates -->
{% section 'reveal-image-video-banner' %}
{% section 'advanced-reveal-image' %}
```

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before upload
   - Use appropriate dimensions (800-1200px width)

2. **Video Optimization**
   - Use YouTube/Vimeo for better performance
   - Keep MP4 files under 10MB
   - Enable autoplay with mute

3. **Animation Settings**
   - Use shorter durations (1-2s) for better UX
   - Test on mobile devices
   - Consider reduced motion preferences

## Browser Support

### Fully Supported
- Chrome 60+
- Firefox 55+
- Safari 10+
- Edge 79+

### Partial Support
- IE 11 (basic functionality only)
- Older mobile browsers (no 3D effects)

## Troubleshooting

### Images Not Revealing
- Check image upload and alt text
- Verify section is added to page
- Test intersection observer support

### Video Not Playing
- Confirm URL is correct and public
- Check autoplay policies in browser
- Verify video format compatibility

### Mobile Issues
- Test responsive breakpoints
- Check touch interaction support
- Verify mobile video playback

## Advanced Customization

### CSS Variables
```css
:root {
  --reveal-speed: 1.5s;
  --reveal-perspective: 1000px;
  --video-aspect-ratio: 56.25%;
}
```

### JavaScript API
```javascript
// Access manager
const manager = window.revealImageManager;

// Trigger reveals
manager.revealAll();

// Update settings
manager.updateSettings({
  revealSpeed: 2.0,
  enable3D: false
});
```

### Custom Events
```javascript
// Listen for reveals
document.addEventListener('imageRevealed', (event) => {
  console.log('Image revealed:', event.detail.container);
});
```

## Support

For technical support:
1. Check browser console for errors
2. Verify all files are uploaded correctly  
3. Test in different browsers
4. Contact developer for custom modifications