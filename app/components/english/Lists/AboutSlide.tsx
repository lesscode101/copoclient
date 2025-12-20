"use client"; // <-- Add this at the very top

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function AboutSlide() {
  return (
    <section className="about-section">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="article">
            <div className="image">
              <img
                src="/banner-1.webp"
                loading="eager"
                fetchPriority="high"
                width="1920"
                height="500"
                alt="Our backpack collection"
                className="img"
              />
            </div>

            <div className="content ar">
              <div className="container">
                <div className="meta">
                  <h2 className="title">Three Years of Craft</h2>
                  <div className="desc">
                    <p>Since opening our online store three years ago, Eravist has focused on a single promise: create everyday gear with honest design, durable materials, and details that make life easier. Every piece reflects the lessons and progress of our journey.</p>
                  </div>
                  <div className="actions">
                    <Link className="link" href="/en/about">
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="article">
            <div className="image">
              <img
                src="/banner-2.webp"
                loading="eager"
                fetchPriority="high"
                width="1920"
                height="500"
                alt="Our backpack collection"
                className="img"
              />
            </div>

            <div className="content ar">
              <div className="container">
                <div className="meta">
                  <h2 className="title">How It All Began</h2>
                  <div className="desc">
                    <p>Eravist started small, with a simple idea: build products that people actually enjoy using. Over the past three years, our community shaped our direction, inspiring new designs, better comfort, and smarter features made for real daily life.</p>
                  </div>
                  <div className="actions">
                    <Link className="link" href="/en/about#history">
                      The Full Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}