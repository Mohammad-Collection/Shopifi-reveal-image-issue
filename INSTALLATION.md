# 🚀 Installation Guide - Shopify Reveal Image Theme

## Quick Start (5 Minutes)

### Step 1: Download Theme Files
1. Click the **"Code"** button above
2. Select **"Download ZIP"**
3. Extract the ZIP file to your computer

### Step 2: Upload to Shopify
1. Log into your **Shopify Admin**
2. Go to **Online Store > Themes**
3. Click **"Upload theme"**
4. Select the ZIP file you downloaded
5. Click **"Upload"**

### Step 3: Customize & Publish
1. Click **"Customize"** on your new theme
2. Configure reveal image settings
3. Add your images and content
4. Click **"Publish"** when ready

## 🎯 Quick Demo

**Want to see it in action first?**
Open the `demo.html` file in your browser to experience all the animations and effects!

## ⚙️ Theme Configuration

### Essential Settings

#### 1. Reveal Image Settings
- **Animation Type**: Choose flip, slide, fade, or zoom
- **Speed**: Adjust animation timing (200-2000ms)
- **3D Effects**: Enable stunning 3D interactions
- **Auto Features**: Configure auto-hide and auto-reveal

#### 2. Video Banner Setup
- **Upload Videos**: Use Shopify Files to upload MP4 videos
- **Poster Images**: Set fallback images for better loading
- **Autoplay Settings**: Configure autoplay and muting
- **Responsive Behavior**: Automatic scaling across devices

#### 3. Color Customization
- **Primary Color**: Main text and elements
- **Secondary Color**: Backgrounds and contrast
- **Accent Color**: Highlights and buttons

### Adding Reveal Images

#### Method 1: Using Sections (Recommended)
1. Go to **Themes > Customize**
2. Click **"Add section"**
3. Select **"Reveal Image"**
4. Upload your front and back images
5. Customize text and button labels
6. Choose animation type and timing

#### Method 2: In Product Pages
The reveal functionality is automatically applied to product images when enabled in theme settings.

#### Method 3: In Collection Pages
Product cards in collections automatically use reveal effects for enhanced browsing.

## 🎨 Customization Tips

### Image Recommendations
- **Size**: 800px × 600px minimum
- **Format**: JPEG or WebP for best performance
- **Quality**: High quality for front images, can be lower for back images
- **Alt Text**: Always include descriptive alt text for accessibility

### Video Recommendations
- **Format**: MP4 (H.264 codec)
- **Size**: Under 10MB for best performance
- **Duration**: 10-30 seconds for optimal engagement
- **Quality**: 1080p maximum, 720p recommended for mobile

### Performance Tips
1. **Optimize Images**: Use Shopify's image optimization
2. **Limit Animations**: Don't overuse reveal effects
3. **Test Mobile**: Always test on actual devices
4. **Monitor Speed**: Use Google PageSpeed Insights

## 🔧 Advanced Customization

### Custom CSS
Add custom styles in **Theme Settings > Custom CSS**:

```css
/* Custom reveal animation speed */
.reveal-image-container {
    --reveal-animation-speed: 1200ms;
}

/* Custom color scheme */
:root {
    --color-accent: #your-color;
}
```

### Custom JavaScript
For advanced interactions, add to **Theme Settings > Custom JavaScript**:

```javascript
// Custom reveal trigger
document.addEventListener('DOMContentLoaded', function() {
    // Your custom code here
});
```

## 🎪 Using the Demo Page

### Live Preview
1. Open `demo.html` in any modern browser
2. Click on reveal images to see animations
3. Hover for 3D effects
4. Test on mobile devices

### Demo Features
- **4 Animation Types**: See all reveal effects
- **Video Integration**: Experience video banners
- **3D Effects**: Test interactive elements
- **Responsive Design**: Check mobile behavior

## 🛡️ Troubleshooting

### Common Issues

#### Images Not Loading
- ✅ Check image file sizes (should be under 5MB)
- ✅ Ensure images are uploaded to Shopify Files
- ✅ Verify image URLs in theme settings

#### Animations Not Working
- ✅ Clear browser cache
- ✅ Check JavaScript console for errors
- ✅ Ensure theme sections are properly configured

#### Mobile Performance
- ✅ Optimize image sizes
- ✅ Test on actual devices, not just browser dev tools
- ✅ Consider disabling 3D effects on mobile if needed

#### Theme Customizer Issues
- ✅ Save changes before previewing
- ✅ Refresh the preview after major changes
- ✅ Check that sections are added to the correct pages

### Browser Support
- ✅ **Chrome**: 80+ (Full support)
- ✅ **Firefox**: 75+ (Full support)
- ✅ **Safari**: 13+ (Full support)
- ✅ **Edge**: 80+ (Full support)
- ⚠️ **IE**: Not supported (graceful degradation)

## 📱 Mobile Optimization

### Automatic Features
- **Touch Events**: All reveals work with touch
- **Responsive Design**: Automatic scaling
- **Performance**: Optimized for mobile bandwidth
- **Accessibility**: Touch-friendly target sizes

### Mobile-Specific Settings
- Disable 3D effects on small screens
- Reduce animation complexity
- Optimize video loading
- Simplify overlay content

## 🎯 SEO & Accessibility

### Built-in Features
- **Alt Text**: Comprehensive image descriptions
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Semantic HTML**: Proper heading structure
- **Meta Tags**: Social media optimization

### Best Practices
1. Always add descriptive alt text to images
2. Use meaningful heading hierarchy
3. Test with screen readers
4. Ensure sufficient color contrast
5. Provide video captions when needed

## 📊 Analytics Integration

### Automatic Tracking
The theme automatically tracks:
- Reveal image interactions
- Video engagement metrics
- Animation performance
- User behavior patterns

### Google Analytics Setup
1. Add your GA4 tracking ID in theme settings
2. Events are automatically tracked
3. View reports in Google Analytics
4. Monitor engagement metrics

## 🔄 Updates & Maintenance

### Theme Updates
- Check GitHub for new releases
- Backup your current theme before updating
- Test updates on a development store first
- Document any custom modifications

### Performance Monitoring
- Regular speed tests with Google PageSpeed
- Monitor Core Web Vitals
- Check mobile usability
- Test across different devices and browsers

## 🆘 Support

### Getting Help
1. Check this documentation first
2. Review the demo for examples
3. Search existing GitHub issues
4. Create a new issue with detailed information

### Issue Reporting Template
When reporting issues, include:
- Browser and version
- Device type and OS
- Steps to reproduce
- Screenshots or videos
- Error messages (if any)

### Community Resources
- [Shopify Community Forums](https://community.shopify.com/)
- [Shopify Partners](https://partners.shopify.com/)
- [Theme Development Docs](https://shopify.dev/themes)

---

## 🎉 Ready to Launch!

Your Shopify store is now equipped with cutting-edge reveal image technology! 

**Next Steps:**
1. ✅ Upload and configure the theme
2. ✅ Add your content and images  
3. ✅ Test all functionality
4. ✅ Launch and amaze your customers

**Need help?** Open an issue on GitHub or check the documentation above.

**Happy selling!** 🛍️✨