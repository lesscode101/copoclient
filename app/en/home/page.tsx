
import "./Home.css";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Header from "@/app/components/english/Header/Header";
import HomeClient from "./homeClient";
import ScrollRedirect from "@/app/ScrollRedirect";


const Home: NextPage = () => {
  const BASE_URL = "https://eravist.com";

  const title =
    "Eravist – Premium Backpacks & Travel Gear | The Ultimate Collection";
  const description =
    "Discover everyday backpacks, premium collections, and the newest arrivals. Designed for comfort, durability, and style. Free shipping on orders over 450 Dhs.";
  const keywords = [
    "backpack",
    "travel gear",
    "premium bags",
    "luggage",
    "Eravist",
  ].join(",");

  const IMAGE = `${BASE_URL}/default-product.jpg`;

  /* =======================
     Schema
  ======================= */

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/en/shop?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const collectionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eravist Collections",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "New Arrivals",
        url: `${BASE_URL}/en/shop/new-arrivals`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Best Sellers",
        url: `${BASE_URL}/en/shop/best-sellers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Discounts",
        url: `${BASE_URL}/en/shop/discounts`,
      },
    ],
  };

  return (
    <>
      {/* =======================
          SEO
      ======================= */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={BASE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={IMAGE} />

      <link rel="alternate" href={`${BASE_URL}/`} hrefLang="en-MA" />
      <link rel="alternate" href={`${BASE_URL}/ar`} hrefLang="ar-MA" />
      <link rel="alternate" href={`${BASE_URL}/fr`} hrefLang="fr-MA" />

      {/* =======================
          Schema (non-blocking)
      ======================= */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="collections-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionsSchema),
        }}
      />

      {/* =======================
          Header + Hero (Critical)
      ======================= */}
      <Header />

      <div className="hero" id="hero">
        <div className="img-hero">
          <Image
            src="/hero-01.webp"
            alt="Premium backpack collection"
            priority
            width={1080}  
            height={1920}
            sizes="100vw"
            className="img"
          />
        </div>
        <div className="content-hero">

          <div className="container">
            <div className="items">
              <div className="item">
                <h1 className="home-title">
                  Your Everyday Backpack
                  <br />
                  <span>Carry Everything. Move Freely.</span>
                </h1>

                <div className="buttons">
                  <Link className="btn btn-ghost" href="/en/shop">
                    Shop Backpack
                  </Link>
                  <Link className="btn btn-shop" href="/en/shop/best-sellers">
                    Best Sellers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <HomeClient/>

    </>
  );
};

export default Home;
