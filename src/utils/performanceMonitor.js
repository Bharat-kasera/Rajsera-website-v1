/**
 * Performance monitoring utility
 * Helps debug image loading and page performance issues
 */

class PerformanceMonitor {
  constructor() {
    this.marks = {};
    this.measures = {};
    this.enabled = process.env.NODE_ENV === 'development';
  }

  /**
   * Mark a performance point
   */
  mark(name) {
    if (!this.enabled || typeof window === 'undefined') return;
    
    this.marks[name] = performance.now();
    if (typeof performance.mark === 'function') {
      performance.mark(name);
    }
    
    console.log(`⏱️  [Performance] ${name}: ${this.marks[name].toFixed(2)}ms`);
  }

  /**
   * Measure time between two marks
   */
  measure(name, startMark, endMark) {
    if (!this.enabled || typeof window === 'undefined') return;

    const startTime = this.marks[startMark];
    const endTime = this.marks[endMark];

    if (startTime && endTime) {
      const duration = endTime - startTime;
      this.measures[name] = duration;
      
      console.log(
        `📊 [Performance] ${name}: ${duration.toFixed(2)}ms (${startMark} → ${endMark})`
      );

      if (typeof performance.measure === 'function') {
        try {
          performance.measure(name, startMark, endMark);
        } catch (e) {
          // Marks might not exist in performance API
        }
      }

      return duration;
    }

    console.warn(`⚠️  [Performance] Could not measure ${name}: marks not found`);
    return null;
  }

  /**
   * Get all marks
   */
  getMarks() {
    return { ...this.marks };
  }

  /**
   * Get all measures
   */
  getMeasures() {
    return { ...this.measures };
  }

  /**
   * Log all performance data
   */
  report() {
    if (!this.enabled || typeof window === 'undefined') return;

    console.group('📊 Performance Report');
    
    console.log('Marks:', this.marks);
    console.log('Measures:', this.measures);

    // Get Web Vitals if available
    if (typeof performance.getEntriesByType === 'function') {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log('\n🌐 Navigation Timing:');
        console.log(`  DNS Lookup: ${navigation.domainLookupEnd - navigation.domainLookupStart}ms`);
        console.log(`  TCP Connection: ${navigation.connectEnd - navigation.connectStart}ms`);
        console.log(`  Response Time: ${navigation.responseEnd - navigation.requestStart}ms`);
        console.log(`  DOM Interactive: ${navigation.domInteractive}ms`);
        console.log(`  DOM Complete: ${navigation.domComplete}ms`);
        console.log(`  Load Complete: ${navigation.loadEventEnd}ms`);
      }

      const paint = performance.getEntriesByType('paint');
      if (paint.length > 0) {
        console.log('\n🎨 Paint Timing:');
        paint.forEach(entry => {
          console.log(`  ${entry.name}: ${entry.startTime.toFixed(2)}ms`);
        });
      }
    }

    console.groupEnd();
  }

  /**
   * Monitor image loading
   */
  monitorImages(imageUrls) {
    if (!this.enabled || typeof window === 'undefined') return;

    console.group('🖼️  Image Loading Monitor');
    console.log(`Monitoring ${imageUrls.length} images...`);

    const startTime = performance.now();
    let loadedCount = 0;

    imageUrls.forEach((url, index) => {
      const img = new Image();
      const imageStartTime = performance.now();

      img.onload = () => {
        loadedCount++;
        const loadTime = performance.now() - imageStartTime;
        const totalTime = performance.now() - startTime;
        
        console.log(
          `✅ Image ${loadedCount}/${imageUrls.length}: ${url} (${loadTime.toFixed(2)}ms) - Total: ${totalTime.toFixed(2)}ms`
        );

        if (loadedCount === imageUrls.length) {
          console.log(`\n✨ All images loaded in ${totalTime.toFixed(2)}ms`);
          console.groupEnd();
        }
      };

      img.onerror = () => {
        console.error(`❌ Failed to load: ${url}`);
        loadedCount++;
        
        if (loadedCount === imageUrls.length) {
          const totalTime = performance.now() - startTime;
          console.log(`\n⚠️  Loading completed with errors in ${totalTime.toFixed(2)}ms`);
          console.groupEnd();
        }
      };

      img.src = url;
    });
  }

  /**
   * Clear all marks and measures
   */
  clear() {
    this.marks = {};
    this.measures = {};
    if (typeof performance.clearMarks === 'function') {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Export for use in components
export default performanceMonitor;

// Helper functions
export const mark = (name) => performanceMonitor.mark(name);
export const measure = (name, start, end) => performanceMonitor.measure(name, start, end);
export const report = () => performanceMonitor.report();
export const monitorImages = (urls) => performanceMonitor.monitorImages(urls);

// Make available in browser console for debugging
if (typeof window !== 'undefined') {
  window.performanceMonitor = performanceMonitor;
}

/* 
Usage Example:

import performanceMonitor, { mark, measure } from '@/utils/performanceMonitor';

// In your component
useEffect(() => {
  mark('component-mount');
  
  // ... your code ...
  
  mark('images-start-loading');
  // Load images...
  mark('images-finished-loading');
  
  measure('image-loading-time', 'images-start-loading', 'images-finished-loading');
  
  // Get full report
  performanceMonitor.report();
}, []);

// Monitor specific images
performanceMonitor.monitorImages([
  '/image1.jpg',
  '/image2.jpg'
]);
*/

