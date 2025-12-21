"use client";
import Image from "next/image";
import "./brands.css";

const brandsData = [
  { name: "Nike", src: "/brands/nike.svg" },
  { name: "Adidas", src: "/brands/adidas.svg" },
  { name: "Wilson", src: "/brands/wilson.svg" },
  { name: "The North Face", src: "/brands/the-north-face.svg" },
  { name: "Patagonia", src: "/brands/patagonia.svg" },
];

export default function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="brands-slider">
        {brandsData.map((brand) => (
          <div className="brand-item" key={brand.name}>
            <Image
              src={brand.src}
              alt={brand.name}
              width={120}
              height={80}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
