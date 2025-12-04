"use client"; // <-- Add this at the very top

import "./aboutSolide.css";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';


interface LangText {
  en: string;
  fr: string;
  ar: string;
}

interface Slide {
  img: string;
  alt: LangText;
  title: LangText;
  desc: LangText;
  linkText: LangText;
  linkTo: string;
}

export default function AboutSlide() {
  const lang = "en";

  const slides: Slide[] = [
    {
      img: "/banner-1.webp",
      alt: {
        en: "Our backpack collection",
        fr: "Notre collection de sacs à dos",
        ar: "مجموعتنا من الحقائب",
      },
      title: {
        en: "Three Years of Craft",
        fr: "Trois ans de savoir-faire",
        ar: "ثلاث سنوات من الحرفة",
      },
      desc: {
        en: "Since opening our online store three years ago, Eravist has focused on a single promise: create everyday gear with honest design, durable materials, and details that make life easier. Every piece reflects the lessons and progress of our journey.",
        fr: "Depuis l’ouverture de notre boutique en ligne il y a trois ans, Eravist s’est engagée autour d’une promesse unique: créer des pièces du quotidien au design réfléchi, aux matériaux durables et aux détails qui simplifient la vie. Chaque produit reflète l’évolution de notre parcours.",
        ar: "منذ انطلاق متجرنا الإلكتروني قبل ثلاث سنوات، ركّزت إيرافيست على وعد واحد: تصميم منتجات يومية صادقة، بمواد متينة وتفاصيل تجعل الحياة أسهل. كل قطعة تعبّر عن تطور رحلتنا خلال هذه السنوات.",
      },
      linkText: {
        en: "About Us",
        fr: "À propos de nous",
        ar: "معلومات عنا",
      },
      linkTo: "/about",
    },
    {
      img: "/banner-2.webp",
      alt: {
        en: "Our backpack collection",
        fr: "Notre collection de sacs à dos",
        ar: "مجموعتنا من الحقائب",
      },
      title: {
        en: "How It All Began",
        fr: "Comment tout a commencé",
        ar: "كيف بدأت القصة",
      },
      desc: {
        en: "Eravist started small, with a simple idea: build products that people actually enjoy using. Over the past three years, our community shaped our direction, inspiring new designs, better comfort, and smarter features made for real daily life.",
        fr: "Eravist a commencé modestement, avec une idée simple: créer des produits que les gens aiment vraiment utiliser. Au cours de ces trois années, notre communauté a guidé notre évolution, inspirant de nouveaux designs, plus de confort et des fonctionnalités plus intelligentes adaptées à la vie quotidienne.",
        ar: "بدأت إيرافيست بفكرة بسيطة: صنع منتجات يستمتع الناس فعلاً باستخدامها. خلال السنوات الثلاث الماضية، ساهمت ملاحظات مجتمعنا في توجيه مسارنا، وألهمت تصاميم جديدة، وراحة أفضل، وميزات أذكى تناسب الحياة اليومية.",
      },
      linkText: {
        en: "The Full Story",
        fr: "L'histoire complète",
        ar: "القصة كاملة",
      },
      linkTo: "/about",
    },
  ];

  return (
    <section className="about-section">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="article">
              <div className="image">
                <img
                  src={slide.img}
                  loading="eager"
                  fetchPriority="high"
                  width="1920"
                  height="500"
                  alt={slide.alt[lang]}
                  className="img"
                />
              </div>

              <div className="content ar">
                <div className="container">
                  <div className="meta">
                    <h2 className="title">{slide.title[lang]}</h2>
                    <div className="desc">
                      <p>{slide.desc[lang]}</p>
                    </div>
                    <div className="actions">
                      <Link className="link" href={slide.linkTo}>
                        {slide.linkText[lang]}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
