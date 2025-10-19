import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL('https://rajsera.com'),
  title: {
    default: "Rajsera Labs | Custom App & Website Development Agency",
    template: "%s | Rajsera Labs"
  },
  description: "We build custom apps and websites that drive real business results. Increase revenue, boost efficiency, and scale faster with expert development. Fixed pricing, 2-4 week delivery, 30-day support guarantee.",
  keywords: [
    "app development",
    "web development",
    "mobile app development",
    "custom software development",
    "UI/UX design",
    "React Native development",
    "Next.js development",
    "IoT app development",
    "enterprise software",
    "startup development agency"
  ],
  authors: [{ name: "Rajsera Labs" }],
  creator: "Rajsera Labs",
  publisher: "Rajsera Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajsera.com',
    siteName: 'Rajsera Labs',
    title: 'Rajsera Labs | Custom App & Website Development Agency',
    description: 'We build custom apps and websites that drive real business results. Increase revenue, boost efficiency, and scale faster with expert development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajsera Labs - Custom App & Website Development',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajsera Labs | Custom App & Website Development Agency',
    description: 'We build custom apps and websites that drive real business results. Fixed pricing, 2-4 week delivery, 30-day support guarantee.',
    images: ['/og-image.jpg'],
    creator: '@rajseralabs',
  },
  verification: {
    google: '0EldgnVYg6SwAEaqiliJ5CD2jyxxqRQKgLg09xo4Tgc',
  },
  alternates: {
    canonical: 'https://rajsera.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rajsera Labs",
              "url": "https://rajsera.com",
              "logo": "https://rajsera.com/logos/rajsera-icon.png",
              "description": "We build custom apps and websites that drive real business results. Expert development agency specializing in mobile apps, web platforms, and IoT solutions.",
              "email": "rajseralabs@gmail.com",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/rajseralabs",
                "https://www.linkedin.com/company/rajsera-labs"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "rajseralabs@gmail.com"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50"
              },
              "offers": {
                "@type": "Offer",
                "category": "Software Development Services"
              }
            })
          }}
        />
      </head>
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
