"use client"; // <-- Add this at the very top

import Link from 'next/link';
import Cookies from "js-cookie";

import './header.css';

import { useContext, useEffect, useRef, useState } from 'react';
import Cart from './Cart/Cart';
import WishList from './Cart/WishList';
import { CartContext } from '@/app/CartContext';
import TopAnnouncement from './TopAnnouncement';


function Header() {
   const [isHActive, setIsHActive] = useState(false);
   const [lang, setLang] = useState("");
   const [language, setLanguage] = useState("");
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const [menuActive, setMenuActive] = useState<boolean>(false);
   const [cartActive, setCartActive] = useState<boolean>(false);
   const [wishActive, setWishActive] = useState<boolean>(false);
   const [categories, setCategories] = useState([]);


   const cartRef = useRef<HTMLDivElement>(null);
   const menuRef = useRef<HTMLDivElement>(null);

   const cartContext = useContext(CartContext);
   if (!cartContext) return null;
   const { wishlist, cartlist } = cartContext;



   useEffect(() => {
      getCategories()
   }, [])
   async function getCategories() {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/categories/product`);
      const data = await res.json();
      const firstFourRows: any = Array.isArray(data) ? data.slice(0, 4) : [];

      firstFourRows.forEach((c: any) => {
         c.name = c.name.split(" ")[0];
      });
      setCategories(firstFourRows);
   }


   useEffect(() => {

      let myCookie = Cookies.get("lang") + '';
      setLang(myCookie)
      if (myCookie == 'ar') {
         setLanguage('العربي')
      } else if (myCookie == 'fr') {
         setLanguage('Français')
      } else {
         setLanguage('English')
      }

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



   function setCookie(value: string) {
      Cookies.set("lang", value, {
         expires: 400,
         path: "/",
      });
   }
   const changeLanguage = (lng: string) => {
      if (lng == 'fr') {
         setLanguage('Français')
      } else if (lang == 'ar') {
         setLanguage('العربي')
      } else {
         setLanguage('English')
      }
      setLang(lng);
      setCookie(lng)
   }
   function toggleDropdown() {
      setIsDropdownOpen(!isDropdownOpen)
   }


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
                        {categories.map((c: any) => (
                           <Link className="link" key={c.slug} href={"/en/category/" + c.slug} data-discover="true">{c.name}</Link>
                        ))}

                     </div>
                  </div>
                  <div className="col-shipping">
                     <Link href={'/en/checkout/track-order/your-order'} className='link'> Tracking your orders with <span aria-label='track-order'><i className="icon-white-zoom"></i></span> </Link>
                     <Link href={'/en/about/shipping-policy'} className='link'> Shipping to all cities in <strong>Morocco</strong></Link>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row-main">
                  <span className="menu" onClick={() => setMenuActive(true)}>
                     {isHActive ? <i className="icon-dark-menu"></i> : <i className="icon-menu"></i>}
                  </span>

                  <div className="logo">
                     <Link className="logo-link" href="/en/home" data-discover="true">
                        {isHActive ? <img width="24" alt="" src="/logo.svg" /> : <img width="24" alt="" src="/logo-light.svg" />}
                        <div className="strong">Eravist</div>
                     </Link>
                  </div>
                  <nav className="navigation">
                     <Link className="link" href="/en/home" data-discover="true">Home</Link>
                     <Link className="link" href="/en/shop/arrivals" data-discover="true">New Arrivals</Link>
                     <Link className="link" href="/en/home#collection" data-discover="true">Collections</Link>
                     <Link className="link" href="/en/blog" data-discover="true">Blog</Link>
                     <Link className="link" href="/en/shop/premium" data-discover="true">Premium</Link>
                     <Link className="discounts" href="/en/shop/discounts" data-discover="true">Discounts</Link>
                  </nav>
                  <div className="controls">
                     <div className="ms-none">
                        <span className="icon" onClick={toggleDropdown}>
                           <span className="count-x">__</span>
                           <p className='i-lg'>
                              <i className={`icon-${lang}`}></i>
                           </p>
                           <div className={`content_lang ${isDropdownOpen ? 'active' : ''}`}>
                              <div onClick={(e) => changeLanguage('en')}>English</div>
                              <div onClick={(e) => changeLanguage('fr')}>Français</div>
                              <div onClick={(e) => changeLanguage('ar')}>العربي</div>
                           </div>
                        </span>
                     </div>

                     <div className="ms-none">
                        <div className="icon ">
                           {isHActive ? <i className="icon-dark-search"></i> : <i className="icon-search"></i>}
                        </div>
                     </div>


                     <span className="icon" onClick={() => setWishActive(true)}>
                        {isHActive ? <i className="icon-dark-heart"></i> : <i className="icon-heart"></i>}
                        <span className="count">{wishlist.length}</span>
                     </span>

                     <div className="icon" onClick={() => setCartActive(true)}>
                        {isHActive ? <i className="icon-dark-shopping"></i> : <i className="icon-shopping"></i>}
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



               <nav className='col-links'  >
                  <Link className="link" href="/en/home" data-discover="true">Home</Link>
                  <Link className="link" href="/en/shop/arrivals" data-discover="true">New Arrivals</Link>
                  <Link className="link" href="/en/home#collection" data-discover="true">Collections</Link>
                  <Link className="link" href="/en/blog" data-discover="true">Blog</Link>
                  <Link className="link" href="/en/shop/premium" data-discover="true">Premium</Link>
                  <Link className="discounts" href="/en/shop/discounts" data-discover="true">Discounts</Link>

               </nav>




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
