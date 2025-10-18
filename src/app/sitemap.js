export default function sitemap() {
  const baseUrl = 'https://rajsera.com';
  
  // Static routes
  const routes = [
    '',
    '/connect',
    '/case-studies',
    '/services',
    '/industries',
    '/studio',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Case study projects
  const projects = [
    'blog-website',
    'iot-app',
    'ecommerce-platform',
    'mobile-fitness-app',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Services
  const services = [
    'web-development',
    'mobile-app-development',
    'uiux-design',
    'ai-ml-solutions',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Industries
  const industries = [
    'finance',
    'healthcare',
    'education',
    'retail',
    'real-estate',
    'travel',
    'media',
    'on-demand',
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...projects, ...services, ...industries];
}

