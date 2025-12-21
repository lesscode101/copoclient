import './globals.css'
import './index.css'

import LayoutContent from "./layoutContent";
import { ReactNode } from 'react';
import Script from 'next/script';
import CookiesSection from './components/english/CookiesSection/CookiesSection';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Eravist – Premium Backpacks & Travel Gear",
            "url": "https://eravist.com/",
            "logo": "https://eravist.com/logo-light.svg",
            "sameAs": [
              "https://twitter.com/EravistOfficial", // حساب تويتر
              "https://www.facebook.com/EravistOfficial", // حساب فيسبوك
              // أضف أي منصات تواصل اجتماعي أخرى
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+212 660 45 22 87", // رقم هاتفك
              "contactType": "Customer Support"
            }
          })
        }}
      />
      <body>
        <LayoutContent>
          {children}
          <CookiesSection />
        </LayoutContent>



      </body>
    </html>
  );
}
