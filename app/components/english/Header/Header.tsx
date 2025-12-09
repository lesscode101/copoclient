"use client"; // <-- Add this at the very top

import Link from 'next/link';
import './header.css';

import { useContext, useEffect, useRef, useState } from 'react';
import Cart from './Cart/Cart';
import WishList from './Cart/WishList';
import { CartContext } from '@/app/CartContext';
import TopAnnouncement from './TopAnnouncement';


function Header() {
   const [isHActive, setIsHActive] = useState(false);
   const [lang, setLang] = useState<string>("en");

   const [menuActive, setMenuActive] = useState<boolean>(false);
   const [cartActive, setCartActive] = useState<boolean>(false);
   const [wishActive, setWishActive] = useState<boolean>(false);

   const cartRef = useRef<HTMLDivElement>(null);
   const menuRef = useRef<HTMLDivElement>(null);

   const cartContext = useContext(CartContext);
   if (!cartContext) return null;
   const { wishlist, cartlist } = cartContext;

  

   function handleScroll(id: string): void {
      const section = document.getElementById(id);
      console.log(id)
      if (id === "home" || id === 'premium' || id === 'discount') {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
         });
         return;
      }

      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
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

         {!isHActive &&
            <TopAnnouncement />
         }

         <div className={`header ${isHActive ? 'active' : ''}`}>
            <div className="container cat-lang">
               <div className="row-links">
                  <div className="col-sections">
                     <div className="links">
                        <a className="link" href="/en/section/classic" data-discover="true">Classic</a>
                        <a className="link" href="/en/section/work" data-discover="true">Work</a>
                        <a className="link" href="/en/section/athletic" data-discover="true">Athletic</a>
                        <a className="link" href="/en/section/life" data-discover="true">Life/Travel</a>
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
                  <span className="menu" onClick={() => setMenuActive(true)}>
                     {isHActive ? <i className="icon-dark-menu"></i> : <i className="icon-menu"></i>}
                  </span>

                  <div className="logo">
                     <a className="logo-link" href="/" data-discover="true">
                        {isHActive ? <img width="24" alt="" src="/logo.svg" /> : <img width="24" alt="" src="/logo-light.svg" />}
                        <div className="strong">Eravist</div>
                     </a>
                  </div>
                  <nav className="navigation">
                     <a className="link" href="/" data-discover="true">Home</a>
                     <a className="link" href="/en/shop/arrivals" data-discover="true">New Arrivals</a>
                     <a className="link" href="/#collection" onClick={() => handleScroll('collection')} data-discover="true">Collections</a>
                     <a className="link" href="/en/blog" data-discover="true">Blog</a>
                     <a className="link" href="/en/shop/premium" data-discover="true">Premium</a>
                     <a className="discounts" href="/en/shop/discounts" data-discover="true">Discounts</a>
                  </nav>
                  <div className="controls">
                     <div className="icon icon-lg">
                        <p>English</p>
                        <small><i className="icon-dark-chevron"></i></small>
                        <div className="content_lang">
                           <div>English</div>
                           <div>Français</div>
                           <div>العربي</div>
                        </div>
                     </div>
                     <div className="icon"></div>

                     <div className="icon ">
                        {isHActive ? <i className="icon-dark-search"></i> : <i className="icon-search"></i>}
                     </div>

                     <span className="icon" onClick={() => setWishActive(true)}>
                        <i className="icon-heart"></i>
                        <span className="count">{wishlist.length}</span>
                     </span>

                     <div className="icon" onClick={() => setCartActive(true)}>
                        <i className="icon-shopping"></i>
                        <span className="count">{cartlist.length}</span>
                     </div>


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

                     <Link href="/en/shop/arrivals" className="link">New Arrivals</Link>
                     <Link href="/#collection" className="link">Collections</Link>
                     <Link href="/en/blog" className="link">Blog</Link>

                     <Link href="/en/shop/premium" onClick={() => handleScroll('premium')} className="link">Premium</Link>
                     <Link href="/en/shop/discount" onClick={() => handleScroll('discount')} className="discounts">Discounts</Link>

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
                     <Link href="fr/shop/discount" onClick={() => handleScroll('discount')} className="discounts">Réductions</Link>

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

export default Header;
