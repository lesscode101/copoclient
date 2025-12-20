"use client"; // <-- Add this at the very top

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { A11y, Pagination, Scrollbar } from 'swiper/modules';

interface Collection {
    id: number;
    slug: string;
    name: string;
    image: string;
    product_count: number;
    count: number;

}

export default function CollectionList() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        const url = `${API_URL}/api/categories/product`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const formatted = data
                    .filter((item: Collection) => item.name !== "All")
                    .map((item: Collection) => ({
                        id: item.id,
                        name: item.name,
                        slug: item.slug,
                        count: item.product_count || 0,
                        image: `${item.image}`,
                    }));

                setCollections(formatted);
            });

        
    }, []);

    return (
        <section className="item-list">
            <div className="container">
                <div className="heading">
                    <div className="line">
                        <h2 className="title">
                            Collections
                        </h2>
                        <Link href={'/en/shop#top'}  className="link">
                            Go To Shop
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
                                        <Link href={`/en/category/${c.slug}#top`} >
                                            <img
                                                src={`${API_URL}${c.image}`}
                                                alt={c.name}
                                            />
                                        </Link>
                                    </div>
                                    <Link href={`/en/category/${c.slug}#top`} >
                                        <div className="badge">
                                            <div className="line">
                                                <h3 className="title">{c.name}</h3>
                                                <p className="text-xs">{c.count} items</p>
                                            </div>
                                        </div>
                                    </Link>

                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
