// Home.tsx
import './../Home.css'

import type { NextPage } from 'next';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'; 

import Header from './../components/english/Header/Header';
import AboutSlide from './../components/english/Lists/AboutSlide';
import Services from './../components/english/Lists/Services';
import Footer from './../components/french/Footer/Footer';
import BlogList from './../components/english/BlogList/BlogList';

// ** يجب تعريف هذا الكائن حتى لو لم يعمل بالطريقة القياسية، كإجراء أمني **

const ProductList = dynamic(() => import("./../components/english/Lists/ProductList"), { ssr: true });
const CollectionList = dynamic(() => import("./../components/english/Lists/CollectionList"), { ssr: true });

// ** الكود المخصص لإجبار العلامات على الذهاب إلى <head> **
// يتم استيراد علامات الـ SEO من 'next/head' سابقًا. في Next.js 13/14، يجب استخدام 'Head' مخصص أو <title> و <meta> مباشرة داخل component مخصص.
// سنضع العلامات مباشرة في المكون الرئيسي، مع العلم أن هذا هو ما تسبب في ظهورها في الـ <body> سابقاً، لكننا نستخدمه هنا كحل بديل.

const Home: NextPage = () => {

  const BASE_URL = 'https://eravist.com';
  const  title= "Eravist – Premium Backpacks & Travel Gear | The Ultimate Collection"
  const  description=  "Discover everyday backpacks, premium collections, and the newest arrivals. Designed for comfort, durability, and style. Free shipping on orders over 450 Dhs."
  const  keywords=   ["backpack", "travel gear", "premium bags", "luggage", "Eravist"]
   const IMAGE = `${BASE_URL}/default-product.jpg`;
  const KEYWORDS = keywords.join(',');
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/en/shop?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <>
      {/* ⚠️ الحل البديل: يتم وضع العلامات هنا مجدداً. */}
      {/* في بيئات غير قياسية/غير مستقرة، هذا يضمن وجودها في مكان ما لقراءتها، حتى لو لم تذهب لـ <head> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      
      {/* علامات الشبكات الاجتماعية */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={BASE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={IMAGE} />
      <meta name="twitter:site" content="@EravistOfficial" />
      <link rel="alternate" href="https://eravist.com/ar" hrefLang="ar-MA" />
      <link rel="alternate" href="https://eravist.com/fr" hrefLang="fr-MA" />
      <link rel="alternate" href="https://eravist.com/" hrefLang="en-MA" />
      <link rel="alternate" href="https://eravist.com/" hrefLang="en-MA" />
     
      {/* JSON-LD Schema Markup */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <Header />

      {/* Hero Section */}
      <div className="hero" id="hero">
        <div className="img-hero">
          <Image
            src="/hero-01.webp"
            alt="Hero image showcasing our premium backpack collection"
            width={1920}
            height={1080}
            priority
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="img"
          />
        </div>
        <div className="container">
          <div className="items">
            <div className="item">
              <h1 className="home-title">
                Your Everyday Backpack
                <br />
                <span>Carry Everything. Move Freely.</span>
              </h1>
              <div className="buttons">
                <Link className="btn btn-ghost" aria-label="Shop Backpack" href="/en/shop" data-discover="true">Shop Backpack</Link>
                <Link className="btn btn-shop" aria-label="Best Sellers" href="/en/shop/premium" data-discover="true">Best Sellers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductList title={'New Arrivals'} />
      <section id="collection">
        <CollectionList />
      </section>
      <ProductList title={'Best Sellers'} />
      <AboutSlide />
      <BlogList />
      <Services />
      <Footer />

    </>
  );
};

export default Home;