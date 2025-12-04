"use client"; // <-- Add this at the very top

import Head from 'next/head';
import Link from 'next/link';
import './header.css';
import { useEffect, useRef, useState } from 'react';
import Cart from './Cart/Cart';
import WishList from './Cart/WishList';
type HeaderProps = {
   countWish: number,
   countCart: number

};


function HeaderSlim({ countWish, countCart }: HeaderProps) {
   const [lang, setLang] = useState<string>("en");

   const [menuActive, setMenuActive] = useState<boolean>(false);
   const [cartActive, setCartActive] = useState<boolean>(false);
   const [wishActive, setWishActive] = useState<boolean>(false);

   const cartRef = useRef<HTMLDivElement>(null);
   const wishRef = useRef<HTMLDivElement>(null);
   const menuRef = useRef<HTMLDivElement>(null);



   function handleScroll(arg0: string): void {
      throw new Error('Function not implemented.');
   }

   function changeLanguage(arg0: string): void {
      throw new Error('Function not implemented.');
   }

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
            setCartActive(false);
            setWishActive(false)
         }

      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <div>
         <Head>
            <title>My E-commerce Store</title>
            <meta name="description" content="Welcome to my online store" />
            <link rel="svg" href="logo.svg" />
            <title>Eravist</title>
         </Head>


         <div className='header active'>
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
                  <span className="menu" onClick={() => setMenuActive(true)}><i className="icon-dark-menu"></i></span>
                  <div className="logo">
                     <a className="logo-link" href="/" data-discover="true">
                        <img width="24" alt="" src="/logo.svg" />
                        <div className="strong">Eravist</div>
                     </a>
                  </div>
                  <nav className="navigation">
                     <a className="link" href="/" data-discover="true">Home</a>
                     <a className="link" href="/en/Shop/Arrivals" data-discover="true">New Arrivals</a>
                     <a className="link" href="/#collection" data-discover="true">Collections</a>
                     <a className="link" href="/en/Blog" data-discover="true">Blog</a>
                     <a className="link" href="/en/Shop/Premium" data-discover="true">Premium</a>
                     <a className="discounts" href="/en/Shop/Discounts" data-discover="true"><span>Discounts</span></a>
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
                     <span className="icon icon-dark-search"><i className="icon-search"></i></span>
                     <span className="icon" onClick={() => setWishActive(true)}><i className="icon-dark-heart"></i><span className="count">{countWish}</span></span>
                     <div className="icon" onClick={() => setCartActive(true)}><i className="icon-dark-shopping"></i><span className="count">{countCart}</span></div>
                  </div>
               </div>
            </div>
         </div>




         <div ref={menuRef} className={`navigator  ${menuActive ? 'active' : ''}`}  >
            <span className="close_icon" onClick={() => setMenuActive(false)}>
               <i className="icon-plus"></i>
            </span>

            <div className="content">

               {lang == 'ar' ?
                  <nav className='col-links ar'>
                     <Link href="/ar" onClick={() => handleScroll('home')} className="link">الرئيسية</Link>

                     <Link href="/ar/#arrival" className="link">المنتجات الجديدة</Link>
                     <Link href="/ar/#collection" className="link">الأقسام</Link>
                     <Link href="/ar/#blog" className="link">المدونة</Link>

                     <Link href="/ar/shop/premium" onClick={() => handleScroll('premium')} className="link">الجودة الممتازة</Link>
                     <Link href="/ar/shop/discount" onClick={() => handleScroll('discount')} className="discounts"><span>الخصومات</span></Link>

                  </nav>
                  : ''
               }


               {lang == 'en' ?
                  <nav className='col-links'  >
                     <Link href="/" onClick={() => handleScroll('home')} className="link">Home</Link>

                     <Link href="/#arrival" className="link">New Arrivals</Link>
                     <Link href="/#collection" className="link">Collections</Link>
                     <Link href="/#blog" className="link">Blog</Link>

                     <Link href="shop/premium" onClick={() => handleScroll('premium')} className="link">Premium</Link>
                     <Link href="shop/discount" onClick={() => handleScroll('discount')} className="discounts"><span>Discounts</span></Link>

                  </nav>
                  : ''
               }


               {lang == 'fr' ?
                  <nav className='col-links'  >
                     <Link href="/fr" onClick={() => handleScroll('home')} className="link">Accueil</Link>

                     <Link href="fr/arrivals" className="link">Nouveautés</Link>
                     <Link href="fr/#collection" className="link">Collections</Link>
                     <Link href="fr/#blog" className="link">Blog</Link>

                     <Link href="fr/shop/premium" onClick={() => handleScroll('premium')} className="link">Premium</Link>
                     <Link href="fr/shop/discount" onClick={() => handleScroll('discount')} className="discounts"><span>Réductions</span></Link>

                  </nav>
                  : ''
               }
            </div>



            <div className="col-lang">
               <div className='line' onClick={() => changeLanguage('en')}>English</div>
               <div className='line' onClick={() => changeLanguage('fr')}>Français </div>
               <div className='line' onClick={() => changeLanguage('ar')}>العربي</div>
            </div>


         </div>

         <div className="app-cart" ref={cartRef} >
            <Cart active={cartActive} onClose={() => setCartActive(false)} />
            <WishList active={wishActive} onClose={() => setWishActive(false)} />
         </div>




      </div>
   );
}

export default HeaderSlim;
