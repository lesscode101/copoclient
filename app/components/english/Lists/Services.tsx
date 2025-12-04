"use client"; // <-- Add this at the very top

import './services.css';

import Link from 'next/link';


// TRANSLATIONS
const texts = {
    en: {
        title: "Our Services",
        desc: "Start from Unique Design and Finish by Luxury Bags in your hand",

        c1_title: "Verified Certifications",
        c1_desc: "Expertly tested and certified to meet global quality benchmarks.",

        c2_title: "Cash on Delivery",
        c2_desc: "This option in Morocco allows customers to inspect items before purchase.",

        c3_title: "Easy Returns",
        c3_desc: "Change of mind? make return item within 30 days for an exchange or credit.",

        c4_title: "Fast Delivery",
        c4_desc: "Standard Delivery. Economy delivery within 1-8 Days",
    },

    fr: {
        title: "Nos Services",
        desc: "Commencez par un design unique et terminez avec des sacs de luxe entre vos mains",

        c1_title: "Certifications Vérifiées",
        c1_desc: "Testé et certifié pour répondre aux normes de qualité mondiales.",

        c2_title: "Paiement à la Livraison",
        c2_desc: "Cette option au Maroc permet aux clients de vérifier les articles avant d’acheter.",

        c3_title: "Retours Faciles",
        c3_desc: "Changement d’avis ? Retournez l’article sous 30 jours pour un échange ou un crédit.",

        c4_title: "Livraison Rapide",
        c4_desc: "Livraison standard. Livraison économique en 1 à 8 jours.",
    },

    ar: {
        title: "خدماتنا",
        desc: "ابدأ بتصميم مميز وانتهِ بحقيبة فاخرة بين يديك",

        c1_title: "شهادات موثقة",
        c1_desc: "مختبرة ومعتمدة لتطابق معايير الجودة العالمية.",

        c2_title: "الدفع عند الاستلام",
        c2_desc: "هذه الخدمة في المغرب تتيح للعميل فحص المنتج قبل الدفع.",

        c3_title: "إرجاع سهل",
        c3_desc: "غيّرت رأيك؟ يمكنك إرجاع المنتج خلال 30 يومًا للاستبدال أو الرصيد.",

        c4_title: "تسليم سريع",
        c4_desc: "توصيل قياسي. التوصيل الاقتصادي يتم خلال 1 إلى 8 أيام.",
    }
};

export default function Services() {
    const t =  texts.en;
    const dir = "rtl" ;
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    return (
        <section className="our-services" dir={dir}>
            <div className="container">

                <h2 className="title">{t.title}</h2>

                <div className="desc">
                    <p>{t.desc}</p>
                    <br />
                </div>

                <div className="features-items">

                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src={API_URL + '/images/best.png'} alt="" />
                        </div>
                        <h3 className='subtitle'>{t.c1_title}</h3>
                        <p>{t.c1_desc}</p>
                    </div>

                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src={API_URL + '/images/cash.png'} width="60" alt="" />
                        </div>
                        <h3 className='subtitle'>{t.c2_title}</h3>
                        <p>{t.c2_desc}</p>
                    </div>

                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src={API_URL + '/images/return.png'} alt="" />
                        </div>
                        <h3 className='subtitle'>{t.c3_title}</h3>
                        <p>{t.c3_desc}</p>
                    </div>

                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src={API_URL + '/images/delivery.png'} alt="" />
                        </div>
                        <h3 className='subtitle'>{t.c4_title}</h3>
                        <p>{t.c4_desc}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
