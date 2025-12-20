"use client";

import './footer.css';
import { useState, useMemo } from 'react';
import WhatsAppButton from './WhatsAppButton';
import Link from 'next/link';

function Footer() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState("");

  const t = useMemo(() => ({
    newsletter: "Newsletter",
    signup: "Sign Up",
    desc: "Sign up to receive infrequent emails about special offers and new products.",
    shop: "E-SHOP",
    about: "About",
    term: "Policies",
    contact: "CONTACT US",
    footer: `© All Rights Reserved | 2022 - ${new Date().getFullYear()} ERAVIST STORES.`,
    itemsShop: [
      { name: "Premium Backpack", link: "/en/shop/premium#top" },
      { name: "New Arrivals", link: "/en/shop/arrivals#top" },
      { name: "Best Sellers", link: "/en/shop/best-sellers#top" },
      { name: "Discounts", link: "/en/shop/discounts#top" },
      { name: "Accessories", link: "/en/shop/accessories#top" },
      { name: "Shop All", link: "/en/shop#top" },
    ],
    aboutItems: [
      { name: "About us", link: "/en/about#top" },
      { name: "Our History", link: "/en/about#history" },
    ],
    termItems: [
      { name: "Terms & Conditions", link: "/en/about/terms-conditions#top" },
      { name: "Privacy Policy", link: "/en/about/privacy-policy#top" },
      { name: "Shipping Policy", link: "/en/about/shipping-policy#top" },
      { name: "FAQ", link: "/en/about/FAQ#top" },
      { name: "Return & Refund", link: "/en/about/return-policy#top" },
      { name: "Customer Support", link: "/en/about/customer-support#top" },
    ],
    contactItems: [
      { label: "Mail", value: "client@eravist.com" },
      { label: "Phone", value: "+212 (06) 22 91 44 17" },
      { label: "CV", value: "cv@eravist.com" },
      { label: "Partnerships", value: "partnerships@eravist.com" },
    ]
  }), []);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Invalid email");
    try {
      await fetch(`${API_URL}/api/blacklist/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmail("");
      alert("Subscribed successfully!");
    } catch {
      alert("Error subscribing");
    }
  };

  return (
    <footer className="footer-main">
      <WhatsAppButton />
      <div className="container">
        <div className="row">
          {/* Newsletter */}
          <div className="footer-col newsletter">
            <h2 className="title-col">{t.newsletter}</h2>
            <form className="newsletter-form en" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Adresse email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">{t.signup}</button>
            </form>
            <div className="desc"><p>{t.desc}</p></div>
          </div>

          {/* Shop */}
          <div className="footer-col">
            <h2 className="title-col">{t.shop}</h2>
            <ul>
              {t.itemsShop.map((item, i) => (
                <li key={i}><Link href={item.link}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-col">
            <h2 className="title-col">{t.term}</h2>
            <ul>
              {t.termItems.map((item, i) => (
                <li key={i}><Link href={item.link}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* About & Contact */}
          <div className="footer-col">
            <h2 className="title-col">{t.about}</h2>
            <ul>
              {t.aboutItems.map((item, i) => (
                <li key={i}><Link href={item.link}>{item.name}</Link></li>
              ))}
            </ul>
            <span className="space"></span>
            <h2 className="title-col">{t.contact}</h2>
            <ul>
              {t.contactItems.map((item, i) => (
                <li key={i}>{item.label}: {item.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}

export default Footer;
