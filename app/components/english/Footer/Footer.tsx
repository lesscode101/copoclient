"use client"; // <-- Add this at the very top

import './footer.css';
import {  useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import Link from 'next/link';


function Footer() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const lang="en";
    const [email, setEmail] = useState("");

   
    const handleNewsletter = async (e:any) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert("Invalid email");
            return;
        }

        try {
            await fetch(`${API_URL}/api/blacklist/newsletter`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
        } catch {
            alert("Error");
        }
    };

    const t = {
        ar: {
            newsletter: "النشرة الإخبارية",
            signup: "تسجيل",
            desc: "سجّل لتلقي رسائل بريد إلكتروني غير دورية حول العروض الخاصة والمنتجات الجديدة.",
            shop: "المتجر الإلكتروني",
            about: "نبذة عنا",
            contact: "اتصل بنا",
            footer: `© جميع الحقوق محفوظة | 2022 - ${new Date().getFullYear()} متاجر إتافيست.`,

            itemsShop: [
                { name: "حقيبة ظهر", link: "/" },
                { name: "إكسسوارات", link: "/" },
                { name: "منتجات جديدة", link: "/" },
                { name: "عرض الكل", link: "/" },
            ],

            aboutItems: [
                { name: "تاريخنا", link: "/about" },
                { name: "الشروط العامة للبيع", link: "/terms-conditions" },
                { name: "سياسة الخصوصية", link: "/privacy-policy" },
                { name: "التوصيل", link: "/shipping-policy" },
                { name: "الأسئلة الشائعة", link: "/faq" },
                { name: "الإرجاع والاستبدال", link: "/return-refund-policy" },
            ],

            contactItems: [
                { label: "البريد", value: "client@eravist.com" },
                { label: "الهاتف", value: "+212 (06) 22 91 44 17" },
                { label: "السيرة الذاتية", value: "cv@eravist.com" },
                { label: "الشراكات", value: "partnerships@eravist.com" },
            ]
        },

        fr: {
            newsletter: "Newsletter",
            signup: "S'inscrire",
            desc: "Inscrivez-vous pour recevoir occasionnellement des emails sur les offres spéciales et les nouveaux produits.",
            shop: "BOUTIQUE EN LIGNE",
            about: "À propos & Politiques",
            contact: "NOUS CONTACTER",
            footer: `© Tous droits réservés | 2022 - ${new Date().getFullYear()} MAGASINS ERAVIST.`,

            itemsShop: [
                { name: "Sac à dos", link: "/" },
                { name: "Accessoires", link: "/" },
                { name: "Nouveautés", link: "/" },
                { name: "Tout afficher", link: "/" },
            ],

            aboutItems: [
                { name: "Notre histoire", link: "/about" },
                { name: "Conditions générales de vente", link: "/terms-conditions" },
                { name: "Politique de confidentialité", link: "/privacy-policy" },
                { name: "Livraisons", link: "/shipping-policy" },
                { name: "FAQ", link: "/faq" },
                { name: "Retours & échanges", link: "/return-refund-policy" },
            ],

            contactItems: [
                { label: "Email", value: "client@eravist.com" },
                { label: "Téléphone", value: "+212 (06) 22 91 44 17" },
                { label: "CV", value: "cv@eravist.com" },
                { label: "Partenariats", value: "partnerships@eravist.com" },
            ]
        },

        en: {
            newsletter: "Newsletter",
            signup: "Sign Up",
            desc: "Sign up to receive infrequent emails about special offers and new products.",
            shop: "E-SHOP",
            about: "About & Policies",
            contact: "CONTACT US",
            footer: `© All Rights Reserved | 2022 - ${new Date().getFullYear()} ERAVIST STORES.`,

            itemsShop: [
                { name: "Backpack", link: "/" },
                { name: "Accessories", link: "/" },
                { name: "New Arrivals", link: "/" },
                { name: "Show All", link: "/" },
            ],

            aboutItems: [
                { name: "Our History", link: "/about" },
                { name: "Terms & Conditions", link: "/terms-conditions" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Shipping Policy", link: "/shipping-policy" },
                { name: "FAQ", link: "/faq" },
                { name: "Return & Refund", link: "/return-refund-policy" },
            ],

            contactItems: [
                { label: "Mail", value: "client@eravist.com" },
                { label: "Phone", value: "+212 (06) 22 91 44 17" },
                { label: "CV", value: "cv@eravist.com" },
                { label: "Partnerships", value: "partnerships@eravist.com" },
            ]
        },
    };

    const L = t[lang];

    return (
        <footer className="footer-main">
            <WhatsAppButton  />

            <div className="container">
                <div className="row">

                    {/* Newsletter */}
                    <div className="footer-col newsletter">
                        <h2 className="title-col">{L.newsletter}</h2>
                        <form className={`newsletter-form ${lang}`} onSubmit={handleNewsletter}>
                            <input type="email" placeholder="Adresse email" onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit">{L.signup}</button>
                        </form>
                        <div className="desc"><p>{L.desc}</p></div>
                    </div>

                    {/* Shop */}
                    <div className="footer-col">
                        <h2 className="title-col">{L.shop}</h2>
                        <ul>
                            {L.itemsShop.map((item, i) => (
                                <li key={i}><Link href={item.link} className="link">{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div className="footer-col">
                        <h2 className="title-col">{L.about}</h2>
                        <ul>
                            {L.aboutItems.map((item, i) => (
                                <li key={i}><Link href={item.link} className="link">{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h2 className="title-col">{L.contact}</h2>
                        <ul>
                            {L.contactItems.map((item, i) => (
                                <li key={i}>
                                    {item.label}: {item.value}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="copyright">
                <p>{L.footer}</p>
            </div>
        </footer>
    );
}

export default Footer;
