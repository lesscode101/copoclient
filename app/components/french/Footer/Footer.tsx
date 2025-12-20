"use server"; // <-- Add this at the very top

import './footer.css';
import WhatsAppButton from './WhatsAppButton';
import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

function Footer() {


    const fr = {
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
            { name: "Notre histoire", link: "/fr/about" },
            { name: "Conditions générales de vente", link: "/fr/about/terms-conditions" },
            { name: "Politique de confidentialité", link: "/fr/about/privacy-policy" },
            { name: "Livraisons", link: "/fr/about/shipping-policy" },
            { name: "FAQ", link: "/fr/about/FAQ" },
            { name: "Retours & échanges", link: "/fr/about/return-policy" },
        ],

        contactItems: [
            { label: "Email", value: "client@eravist.com" },
            { label: "Téléphone", value: "+212 (06) 22 91 44 17" },
            { label: "CV", value: "cv@eravist.com" },
            { label: "Partenariats", value: "partnerships@eravist.com" },
        ]
    };

    return (
        <footer className="footer-main">
            <WhatsAppButton />

            <div className="container">
                <div className="row">

                    {/* Newsletter */}
                    <div className="footer-col newsletter">
                        <h2 className="title-col">{fr.newsletter}</h2>

                        <NewsletterForm />
                        <div className="desc"><p>{fr.desc}</p></div>
                    </div>

                    {/* Shop */}
                    <div className="footer-col">
                        <h2 className="title-col">{fr.shop}</h2>
                        <ul>
                            {fr.itemsShop.map((item, i) => (
                                <li key={i}><Link href={item.link} className="link">{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div className="footer-col">
                        <h2 className="title-col">{fr.about}</h2>
                        <ul>
                            {fr.aboutItems.map((item, i) => (
                                <li key={i}><Link href={item.link} className="link">{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h2 className="title-col">{fr.contact}</h2>
                        <ul>
                            {fr.contactItems.map((item, i) => (
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
                <p>{fr.footer}</p>
            </div>
        </footer>
    );
}

export default Footer;
