"use client";
import './header.css';
import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import Cart from './Cart/Cart';
import WishList from './Cart/WishList';
import { CartContext } from '@/app/CartContext';

function HeaderSlim() {
  const [lang, setLang] = useState<string>("en");
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [cartActive, setCartActive] = useState<boolean>(false);
  const [wishActive, setWishActive] = useState<boolean>(false);

  const cartRef = useRef<HTMLDivElement>(null);
  const wishRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { wishlist, cartlist } = cartContext;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartActive(false);
        setWishActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => setLang(lng);

  return (
    <div>
      {/* Header Top */}
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

        {/* Header Main */}
        <div className="container">
          <div className="row-main">
            <span className="menu" onClick={() => setMenuActive(true)}>
              <i className="icon-dark-menu"></i>
            </span>

            <div className="logo">
              <a className="logo-link" href="/" data-discover="true">
                <img width="24" alt="Logo" src="/logo.svg" />
                <div className="strong">Eravist</div>
              </a>
            </div>

            <nav className="navigation">
              <a className="link" href="/" data-discover="true">Home</a>
              <a className="link" href="/en/shop/arrivals" data-discover="true">New Arrivals</a>
              <a className="link" href="/#collection" data-discover="true">Collections</a>
              <a className="link" href="/en/Blog" data-discover="true">Blog</a>
              <a className="link" href="/en/shop/premium" data-discover="true">Premium</a>
              <a className="discounts" href="/en/shop/discounts" data-discover="true"><span>Discounts</span></a>
            </nav>

            <div className="controls">
              <span className="icon icon-lg">
                <p>English</p>
                <small><i className="icon-dark-chevron"></i></small>
                <div className="content_lang">
                  <div onClick={() => changeLanguage('en')}>English</div>
                  <div onClick={() => changeLanguage('fr')}>Français</div>
                  <div onClick={() => changeLanguage('ar')}>العربي</div>
                </div>
              </span>

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
          {lang === 'ar' && (
            <nav className='col-links ar'>
              <Link href="/ar" className="link">الرئيسية</Link>
              <Link href="/ar/#arrival" className="link">المنتجات الجديدة</Link>
              <Link href="/ar/#collection" className="link">الأقسام</Link>
              <Link href="/ar/#blog" className="link">المدونة</Link>
              <Link href="/ar/shop/premium" className="link">الجودة الممتازة</Link>
              <Link href="/ar/shop/discount" className="discounts"><span>الخصومات</span></Link>
            </nav>
          )}
          {lang === 'en' && (
            <nav className='col-links'>
              <Link href="/" className="link">Home</Link>
              <Link href="/en/arrivals" className="link">New Arrivals</Link>
              <Link href="/#collection" className="link">Collections</Link>
              <Link href="/en/blog" className="link">Blog</Link>
              <Link href="/en/shop/premium" className="link">Premium</Link>
              <Link href="/en/shop/discount" className="discounts"><span>Discounts</span></Link>
            </nav>
          )}
          {lang === 'fr' && (
            <nav className='col-links'>
              <Link href="/fr" className="link">Accueil</Link>
              <Link href="/fr/arrivals" className="link">Nouveautés</Link>
              <Link href="/fr/#collection" className="link">Collections</Link>
              <Link href="/fr/#blog" className="link">Blog</Link>
              <Link href="/fr/shop/premium" className="link">Premium</Link>
              <Link href="/fr/shop/discount" className="discounts"><span>Réductions</span></Link>
            </nav>
          )}
        </div>
      </div>

      {/* Cart & Wishlist */}
      <div className="app-cart" ref={cartRef}>
        <Cart active={cartActive} onClose={() => setCartActive(false)} />
        <WishList active={wishActive} onClose={() => setWishActive(false)} />
      </div>
    </div>
  );
}

export default HeaderSlim;
