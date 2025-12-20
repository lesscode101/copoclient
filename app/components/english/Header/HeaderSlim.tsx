"use client";
import './header.css';
import { useState, useEffect, useRef, useContext, useMemo } from "react";
import Link from "next/link";
const Cart = dynamic(() => import('./Cart/Cart'));
const WishList = dynamic(() => import('./Cart/WishList'));
import { CartContext } from '@/app/CartContext';
import Cookies from "js-cookie";
import dynamic from 'next/dynamic';

function HeaderSlim() {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { wishlist, cartlist } = cartContext;
  const [lang, setLang] = useState("en");

  const [langCode, setLangCode] = useState<string>("en");
  const [langLabel, setLangLabel] = useState<string>("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [wishActive, setWishActive] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // تثبيت اللغة من الكوكيز
  useEffect(() => {
    const cookieLang = Cookies.get("lang") || "en";
    setLangCode(cookieLang);
    setLangLabel(cookieLang === 'ar' ? 'العربي' : cookieLang === 'fr' ? 'Français' : 'English');
  }, []);

  // إغلاق القوائم عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartActive(false);
        setWishActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    setLangCode(lng);
    setLangLabel(lng === 'ar' ? 'العربي' : lng === 'fr' ? 'Français' : 'English');
    Cookies.set("lang", lng, { expires: 400, path: "/" });
  };

  const selectLang = (lng: string) => () => changeLanguage(lng);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header>
      {/* Header Top */}
      <div className='header active'>
        <div className="container">
          <div className="row-main">
            <span className="menu" onClick={() => setMenuActive(true)}>
              <i className="icon-dark-menu"></i>
            </span>

            <div className="logo">
              <Link href="/" className="logo-link">
                <img width="24" alt="Logo" src="/logo.svg" />
                <div className="strong">Eravist</div>
              </Link>
            </div>

            <nav className="navigation">
              <Link href="/">Home</Link>
              <Link href="/en/shop/arrivals">New Arrivals</Link>
              <Link href="/#collection">Collections</Link>
              <Link href="/en/blog">Blog</Link>
              <Link href="/en/shop/premium">Premium</Link>
              <Link href="/en/shop/discounts" className="discounts"><span>Discounts</span></Link>
            </nav>
            <div className="controls">
              <div className="ms-none">
                <span className="icon" onClick={toggleDropdown}>
                  <span className="count-x">__</span>
                  <p className='i-lg'>
                    <i className={`icon-${langCode}`}></i>
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
                  <i className="icon-dark-search"></i>
                </div>
              </div>


              <span className="icon" onClick={() => setWishActive(true)}>
                <i className="icon-dark-heart"></i>
                <span className="count">{wishlist.length}</span>
              </span>

              <div className="icon" onClick={() => setCartActive(true)}>
                <i className="icon-dark-shopping"></i>
                <span className="count">{cartlist.length}</span>
              </div>


            </div>




          </div>
        </div>
      </div>

      {/* Mobile / Side Menu */}
      <div ref={menuRef} className={`navigator ${menuActive ? 'active' : ''}`}>
        <span className="close_icon" onClick={() => setMenuActive(false)}>
          <i className="icon-plus"></i>
        </span>

        <div className="content">
          <nav className='col-links'>
            <Link href="/">Home</Link>
            <Link href="/en/shop/arrivals">New Arrivals</Link>
            <Link href="/#collection">Collections</Link>
            <Link href="/en/blog">Blog</Link>
            <Link href="/en/shop/premium">Premium</Link>
            <Link href="/en/shop/discount">Discounts</Link>
          </nav>
        </div>

        <div className="col-lang">
          <div className='line' onClick={selectLang('en')}>English</div>
          <div className='line' onClick={selectLang('fr')}>Français</div>
          <div className='line' onClick={selectLang('ar')}>العربي</div>
        </div>
      </div>

      {/* Cart & Wishlist */}
      <div className="app-cart" ref={cartRef}>
        <Cart active={cartActive} onClose={() => setCartActive(false)} />
        <WishList active={wishActive} onClose={() => setWishActive(false)} />
      </div>
    </header>
  );
}

export default HeaderSlim;
