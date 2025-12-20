"use client";

import Image from 'next/image';
import './services.css';

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
    }
};

export default function Services() {
    const t = texts.en;

    return (
        <section className="our-services">
            <div className="container">
                <h2 className="title">{t.title}</h2>
                <div className="desc">
                    <p>{t.desc}</p>
                    <br />
                </div>

                <div className="features-items">
                    {[
                        { img: '/best.png', title: t.c1_title, desc: t.c1_desc },
                        { img: '/cash.png', title: t.c2_title, desc: t.c2_desc },
                        { img: '/return.png', title: t.c3_title, desc: t.c3_desc },
                        { img: '/delivery.png', title: t.c4_title, desc: t.c4_desc },
                    ].map((item, i) => (
                        <div key={i} className="feature-box">
                            <div className="feature-icon">
                                <Image width={100} height={100} src={item.img} alt={item.title} />
                            </div>
                            <h3 className="subtitle">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
