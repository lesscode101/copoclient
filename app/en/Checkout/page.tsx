import Link from "next/link";
import ContentCheckout from "./contentCheckout";

const API_URL = process.env.NEXT_PUBLIC_API_URL;



export default async function BlogPage() {
  const base = "https://eravist.com";
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // SEO metadata
  const title = "Secure Checkout | Buy Premium Backpacks in Morocco | Eravist";
  const desc =
    "Complete your purchase securely on Eravist. Fast checkout, multiple payment options, and reliable delivery across Morocco.";
  const canonical = `${base}/en/checkout`;
  const image = `${API_URL}/images/checkout.webp`;

  // Structured Data: Checkout Page
  const checkoutSchema = {
    "@context": "https://schema.org",
    "@type": "CheckoutPage",
    name: "Secure Checkout – Eravist",
    description: desc,
    url: canonical,
  };

  // Structured Data: Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Checkout", item: canonical },
    ],
  };

  return (
        <>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content="checkout backpacks Morocco, secure checkout Morocco, buy backpacks online Morocco"
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(checkoutSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />


      <section className="checkout">
        <div className="checkout-header">
          <div className="container">
            <Link href="/" className="logo-link">
              <img src="/logo.svg" width={24} alt="" />
              <span>eravist</span>
            </Link>

            <Link href="/en/shop" className="btn-back">
              Back To Shop
            </Link>
          </div>
        </div>
        <ContentCheckout />

        <div className="copyright">
                <p>© All Rights Reserved | 2022 - 2025 ERAVIST STORES.</p>
            </div>
        </section>
      </>
      );
}
