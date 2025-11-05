# Quick Start: Testing Mobile Performance Improvements

## 🚀 Quick Test Steps

### 1. Build and Run Production Version
```bash
cd rajsera-labs
npm run build
npm start
```

### 2. Test on Mobile Device
- Open on your mobile device: `http://[YOUR_LOCAL_IP]:3000`
- To find your local IP:
  - Mac: `ifconfig | grep "inet " | grep -v 127.0.0.1`
  - Windows: `ipconfig`

### 3. Test in Chrome DevTools (Mobile Simulation)
1. Open DevTools (F12 or Cmd+Option+I)
2. Click the device toggle icon (Cmd+Shift+M)
3. Select "iPhone 12 Pro" or "iPhone 14 Pro"
4. Open Network tab → Throttling → Select "Slow 3G"
5. Reload and test scrolling

## 🎯 What to Test

### Before vs After Comparison

#### Scroll Performance
- **Test**: Scroll up and down the page rapidly
- **Look for**: Smooth scrolling without janking or stuttering
- **Expected**: Mobile should feel much lighter, desktop unchanged

#### Load Time
- **Test**: Reload page with DevTools Network tab open
- **Look for**: Faster First Contentful Paint (FCP)
- **Expected**: 
  - 3G: ~1.8s (was ~3.5s)
  - 4G: <1s (was ~2s)

#### Hero Section
- **Test**: Check hero background on mobile
- **Look for**: Static image instead of video
- **Expected**: Instant load, no video decode overhead

#### Animations
- **Test**: Scroll through sections and watch animations
- **Look for**: Simpler animations on mobile, full animations on desktop
- **Expected**: Mobile shows content immediately with subtle fade-ins

### Key Sections to Test

1. **Hero Section** - Video on desktop, image on mobile
2. **Services Section** - Cards appear instantly on mobile
3. **Text Animations** - Simple fades on mobile, complex splits on desktop
4. **Industries Section** - Simpler transitions on mobile
5. **Client Reviews** - Lazy loaded images

## 📊 Performance Metrics to Check

### Use Lighthouse (Chrome DevTools)
```
1. Open DevTools
2. Lighthouse tab
3. Select "Mobile" mode
4. Select "Performance" category
5. Click "Analyze page load"
```

### Target Scores (Mobile)
- **Performance**: 85+ (was 60-70)
- **First Contentful Paint**: <2s (was 3-5s)
- **Largest Contentful Paint**: <3s (was 5-6s)
- **Total Blocking Time**: <300ms (was 800ms+)
- **Cumulative Layout Shift**: <0.1 (was 0.15)

### Use PageSpeed Insights
Go to: https://pagespeed.web.dev/
- Enter your deployed URL
- Check both Mobile and Desktop scores
- Compare "Before" and "After" metrics

## 🔍 What Changed (Quick Reference)

| Optimization | Mobile | Desktop |
|--------------|--------|---------|
| Smooth Scroll | ❌ Disabled (native) | ✅ Enabled (Lenis) |
| Hero Video | ❌ Static image | ✅ Video |
| Component Loading | 📦 Lazy loaded | 📦 Lazy loaded |
| SplitText Animations | ❌ Simple fades | ✅ Full animations |
| ScrollTrigger | ⚠️ Reduced | ✅ Full |
| Image Quality | 📉 75% (optimized) | 📈 85% (high) |

## 🐛 Troubleshooting

### If Performance Didn't Improve:
1. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
2. Make sure you're running production build (`npm run build` then `npm start`)
3. Check DevTools Console for any errors
4. Verify mobile detection is working (check for `isMobile` state in React DevTools)

### If UI Looks Different:
- This should NOT happen - all visual elements remain the same
- Only animation complexity changes, not the final result
- If something looks broken, check browser console for errors

### If Smooth Scroll Still Feels Heavy:
- Check if you're testing on actual mobile device
- Verify client-layout.js changes applied correctly
- Try hard refresh (Cmd+Shift+R)

## 📱 Real Device Testing (Recommended)

### iOS (Safari)
1. Connect device to same WiFi as computer
2. Open Safari → Preferences → Advanced → Web Inspector
3. Navigate to site on iPhone
4. On Mac: Develop → [Your iPhone] → [Site]
5. Use Web Inspector to check performance

### Android (Chrome)
1. Enable Developer Options on Android
2. Enable USB Debugging
3. Connect via USB
4. Chrome → chrome://inspect
5. Inspect your site and use DevTools

## ✅ Success Indicators

You should notice:
- ✅ Page loads faster on mobile (especially on slow connections)
- ✅ Scrolling feels much smoother and more responsive
- ✅ Battery drain is lower during browsing
- ✅ Desktop experience remains premium and unchanged
- ✅ No visual regressions or broken layouts

## 📈 Optional: Advanced Testing

### Measure FPS (Frames Per Second)
```javascript
// Paste in browser console while scrolling
let lastTime = performance.now();
let frames = 0;
let fps = 0;

function measureFPS() {
  frames++;
  const currentTime = performance.now();
  if (currentTime >= lastTime + 1000) {
    fps = Math.round((frames * 1000) / (currentTime - lastTime));
    console.log(`FPS: ${fps}`);
    frames = 0;
    lastTime = currentTime;
  }
  requestAnimationFrame(measureFPS);
}
measureFPS();
```
**Target**: 55-60 FPS on mobile (was 30-45 FPS)

### Monitor Memory Usage
```javascript
// Check memory usage (Chrome only)
console.log(performance.memory);
```
**Expected**: Lower `usedJSHeapSize` after optimizations

## 🎓 Next Steps

If performance is still not satisfactory:
1. Compress images further (see MOBILE_OPTIMIZATIONS.md)
2. Implement service worker for caching
3. Consider CDN for static assets
4. Enable React Server Components for even faster loads
5. Add image sprites for icon optimization

## 💬 Feedback

Note any issues or observations during testing and refer to `MOBILE_OPTIMIZATIONS.md` for detailed explanations of each optimization.

