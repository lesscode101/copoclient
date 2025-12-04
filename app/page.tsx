import type { NextPage } from 'next';
import './Home.css'
import Link from 'next/link';
import Header from './components/english/Header/Header';
import ProductList from './components/english/Lists/ProductList';
import CollectionList from './components/english/Lists/CollectionList';
import AboutSlide from './components/english/Lists/AboutSlide';
import Services from './components/english/Lists/Services';
import Footer from './components/english/Footer/Footer';
import BlogList from './components/english/BlogList/BlogList';


const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main className="app">
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
        <CollectionList />
        <ProductList title={'Best Sellers'} />
        <AboutSlide />
        <BlogList/>
        <Services />

        <Footer />

      </main>
    </>

  );
};

export default Home;
