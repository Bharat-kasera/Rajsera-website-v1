/**
 * Preloads images and returns a promise that resolves when all images are loaded
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Promise} Promise that resolves when all images are loaded
 */
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => {
          console.warn(`Failed to preload image: ${url}`);
          resolve(url); // Resolve anyway to prevent blocking
        };
        img.src = url;
      });
    })
  );
};

/**
 * Preloads images with a timeout to prevent infinite loading
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @param {number} timeout - Maximum time to wait in milliseconds (default: 10000ms)
 * @returns {Promise} Promise that resolves when all images are loaded or timeout is reached
 */
export const preloadImagesWithTimeout = (imageUrls, timeout = 10000) => {
  return Promise.race([
    preloadImages(imageUrls),
    new Promise((resolve) => setTimeout(resolve, timeout)),
  ]);
};

