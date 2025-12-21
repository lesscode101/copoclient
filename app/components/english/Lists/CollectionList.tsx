"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Pagination, Scrollbar } from "swiper/modules";

interface Collection {
  id: number;
  slug: string;
  name: string;
  image: string;
  product_count: number;
  count: number;
}

export default function CollectionList() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL!;
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories/product`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .filter((item: Collection) => item.name !== "All")
          .map((item: Collection) => ({
            id: item.id,
            name: item.name,
            slug: item.slug,
            count: item.product_count || 0,
            image: item.image,
          }));

        setCollections(formatted);
      });
  }, [API_URL]);

  return (
    <section className="item-list">
      <div className="container">
        <div className="heading">
          <div className="line">
            <h2 className="title">Collections</h2>
            <Link href="/en/shop" className="link">
              Go To Shop
            </Link>
          </div>
        </div>

        <div className="content">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
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
                    <Link href={`/en/category/${c.slug}`}>
                      <Image
                        src={`${API_URL}${c.image}`}
                        alt={c.name}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 400px"
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>

                  <Link href={`/en/category/${c.slug}`}>
                    <div className="badge">
                      <div className="line">
                        <h3 className="title">{c.name}</h3>
                        <p className="text-xs">{c.count} Items</p>
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
