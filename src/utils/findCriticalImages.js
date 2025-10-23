/**
 * Utility to help identify critical images in viewport
 * Run this in browser console to get list of images in initial viewport
 * 
 * Usage:
 * 1. Open your site in browser
 * 2. Open DevTools console
 * 3. Paste this code and run it
 * 4. Copy the list of image URLs
 * 5. Add them to your criticalImages array
 */

export function findCriticalImages() {
  if (typeof window === 'undefined') {
    console.warn('This function should be run in the browser console');
    return [];
  }

  const viewportHeight = window.innerHeight;
  const images = document.querySelectorAll('img');
  const criticalImages = [];

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    // Check if image is in viewport or close to it (within 200px)
    if (rect.top < viewportHeight + 200) {
      const src = img.src || img.getAttribute('src');
      if (src && !src.startsWith('data:')) {
        // Convert absolute URLs to relative paths
        const url = new URL(src);
        const relativePath = url.pathname;
        criticalImages.push(relativePath);
      }
    }
  });

  console.log('Critical Images Found:');
  console.log(JSON.stringify(criticalImages, null, 2));
  console.log('\nCopy this array to your criticalImages constant:');
  console.log(`const criticalImages = ${JSON.stringify(criticalImages, null, 2)};`);

  return criticalImages;
}

// Browser console helper
if (typeof window !== 'undefined') {
  window.findCriticalImages = findCriticalImages;
}

// Example output format:
/*
const criticalImages = [
  "/gallery-callout/gallery-callout-1.jpg",
  "/gallery-callout/gallery-callout-2.jpg",
  "/logos/rajsera-icon-dark.svg"
];
*/

