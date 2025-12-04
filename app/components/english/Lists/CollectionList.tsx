"use client"; // <-- Add this at the very top

import './itemList.css';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

interface Collection {
    id: number;
    img: string;
    category: string;
    count: number;
}

export default function CollectionList() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        const url = `${API_URL}/api/categories`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const formatted = data
                    .filter((item: Collection) => item.category !== "All")
                    .map((item: Collection) => ({
                        id: item.id,
                        category: item.category,
                        count: item.count || 0,
                        img: `${item.category}.webp`,
                    }));

                setCollections(formatted);
            });
    }, []);

    return (
        <section className="item-list" id="arrivals">
            <div className="container">
                <div className="heading">
                    <div className="line">
                        <h2 className="title">Collections</h2>

                        <Link href="/shop" className="link">
                            Shop all
                        </Link>
                    </div>
                </div>

                <div className="content">
                    <Swiper
                        slidesPerView={4}
                        modules={[Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1224: { slidesPerView: 4 },
                            844: { slidesPerView: 3 },
                            494: { slidesPerView: 2 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        {collections.map((c) => (
                            <SwiperSlide key={c.id}>
                                <article className="collection">
                                    <div className="image">
                                        <img
                                            src={`${API_URL}/images/categories/${c.img}`}
                                            alt={c.category}
                                        />

                                        <Link
                                            href={`/section/${c.category}`}
                                            className="btn-view"
                                        >
                                            View Collection
                                        </Link>
                                    </div>

                                    <div className="badge">
                                        <div className="line">
                                            <h3 className="title">{c.category}</h3>
                                            <p className="text-xs">{c.count} items</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
