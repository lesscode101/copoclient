import './Home.css'

import type { NextPage } from 'next';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Header from './components/english/Header/Header';
import AboutSlide from './components/english/Lists/AboutSlide';
import Services from './components/english/Lists/Services';
import Footer from './components/english/Footer/Footer';
import BlogList from './components/english/BlogList/BlogList';
const ProductList = dynamic(() => import("./components/english/Lists/ProductList"), { ssr: true });
const CollectionList = dynamic(() => import("./components/english/Lists/CollectionList"), { ssr: true });
export const metadata = {
  title: "Eravist – Premium Backpacks & Travel Gear",
  description: "Discover everyday backpacks, premium collections, and the newest arrivals. Designed for comfort, durability, and style.",
  keywords: ["backpack", "travel gear", "premium bags"],
};
const Home: NextPage = () => {


  return (
    <>

      <Header />

      {/* Hero Section */}
      <div className="hero" id="hero">
        <div className="img-hero">
          <img loading="eager" fetchPriority="high" decoding="sync" width="1920" height="1080" alt="Hero image showcasing our backpack collection" className="img" src="/hero-01.webp" />
        </div>
        <div className="container">
          <div className="items">
            <div className="item en">
              <h1 className="home-title">
                Your Everyday Backpack
                <br />
                <span>Carry Everything. Move Freely.</span>
              </h1>
              <div className="buttons">
                <Link className="btn en btn-ghost" aria-label="Shop Backpack" href="/shop" data-discover="true">Shop Backpack</Link>
                <Link className="btn e btn-shop" aria-label="Best Sellers" href="/shop/premium" data-discover="true">Best Sellers</Link>
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
