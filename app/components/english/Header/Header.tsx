"use client"; // <-- Add this at the very top

import Head from 'next/head';
import Link from 'next/link';
import './header.css';

import { useEffect, useState } from 'react';

function Header() {
   const [isHActive, setIsHActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsHActive(window.scrollY > 60);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // run once on mount

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div>
         <Head>
            <title>My E-commerce Store</title>
            <meta name="description" content="Welcome to my online store" />
            <link rel="icon" href="favicon.ico" />
         </Head>

         <div className="announcement" id="home">
            <p className="msg">Free Delivery When You Order Over 450 MAD</p>
         </div>

         <div className={`header ${isHActive ? 'active' : ''}`}>
            <div className="container cat-lang">
               <div className="row-links">
                  <div className="col-sections">
                     <div className="links">
                        <a className="link" href="/en/section/classic/كلاسيكي" data-discover="true">Classic</a>
                        <a className="link" href="/en/section/work/عمل" data-discover="true">Work</a>
                        <a className="link" href="/en/section/athletic/رياضي" data-discover="true">Athletic</a>
                        <a className="link" href="/en/section/life/حياة" data-discover="true">Life/Travel</a>
                     </div>
                  </div>
                  <div className="col-lang hide-in-mobile">
                     <button className="link" aria-label="Switch Language">
                        Switch Language
                        <small><i className="icon-chevron"></i></small>
                     </button>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row-main">
                  <span className="menu"><i className="icon-menu"></i></span>
                  <div className="logo">
                     <a className="logo-link" href="/" data-discover="true">
                        <img width="24" alt="" src="logo-light.svg" />
                        <div className="strong">Eravist</div>
                     </a>
                  </div>
                  <nav className="navigation">
                     <a className="link" href="/" data-discover="true">Home</a>
                     <a className="link" href="/#Arrivals" data-discover="true">New Arrivals</a>
                     <a className="link" href="/#collection" data-discover="true">Collections</a>
                     <a className="link" href="/#blog" data-discover="true">Blog</a>
                     <a className="link" href="/shop/premium" data-discover="true">Premium</a>
                     <a className="discounts" href="/shop/discount" data-discover="true"><span>Discounts</span></a>
                  </nav>
                  <div className="controls">
                     <span className="icon icon-lg">
                        <p>English</p>
                        <small><i className="icon-dark-chevron"></i></small>
                        <div className="content_lang">
                           <div>English</div>
                           <div>Français</div>
                           <div>العربي</div>
                        </div>
                     </span>
                     <span className="icon icon-search"><i className="icon-search"></i></span>
                     <span className="icon"><i className="icon-heart"></i><span className="count">2</span></span>
                     <div className="icon"><i className="icon-shopping"></i><span className="count">2</span></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
