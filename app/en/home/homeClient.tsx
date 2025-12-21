'use client'


import dynamic from "next/dynamic";
import Footer from "@/app/components/english/Footer/Footer";
import BrandsSection from "@/app/components/english/Brands/Brands";

const CollectionList = dynamic(
  () => import("@/app/components/english/Lists/CollectionList"),
  { ssr: false }
);

const ProductList = dynamic(
  () => import("@/app/components/english/Lists/ProductList"),
  { ssr: false }
);

const BlogList = dynamic(
  () => import("@/app/components/english/BlogList/BlogList"),
  { ssr: false }
);

const AboutSlide = dynamic(
  () => import("@/app/components/english/Lists/AboutSlide"),
  { ssr: false }
);

const Services = dynamic(
  () => import("@/app/components/english/Lists/Services"),
  { ssr: false }
);

/* =======================
   Page
======================= */

const HomeClient = () => {


  return (
    <>
    
      
      {/* =======================
          Below the fold (Lazy)
      ======================= */}

      <BrandsSection />

      <section id="collection">
        <CollectionList />
      </section>

      <ProductList title="New Arrivals" />

      <AboutSlide />

      <BlogList />

      <ProductList title="Best Sellers" />

      <Services />

      <Footer />
    </>
  );
};

export default HomeClient;
