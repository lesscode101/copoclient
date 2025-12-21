"use client";

import { useState, useMemo, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CartContext } from "@/app/CartContext";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import SortByDropdown from "@/app/components/Filter/SortByDropdown";
const Services = dynamic(() => import('@/app/components/english/Lists/Services'), { ssr: false });
const Footer = dynamic(() => import('@/app/components/english/Footer/Footer'), { ssr: false });
interface Product {
    id: number;
    slug: string;
    category: string;
    name: string;
    image: string;
    price: number;
    discount: number;
    size: string;
    color: string;
}

interface ProductWithPrice extends Product {
    finalPrice: number;
}

interface Props {
    products: Product[];
    titleName: string;
}

const ListContent: React.FC<Props> = ({ products, titleName }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;
    const cart = useContext(CartContext);
    if (!cart) return null;

    const [sortOption, setSortOption] = useState("");


    const productsWithPrice: ProductWithPrice[] = useMemo(() => {
        return products.map((p: Product) => {

            const price = Number(p.price);
            const discount = Number(p.discount);
            return {
                ...p,
                price,
                discount,
                finalPrice: discount > 0 ? price - (price * discount) / 100 : price
            };
        });

    }, [products]);

    const totalItems = productsWithPrice.length;

    // ===============================
    // Sort
    // ===============================
    const sortedProducts = useMemo(() => {
        const sorted = [...productsWithPrice];
        if (sortOption === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
        if (sortOption === "priceLowHigh") sorted.sort((a, b) => a.finalPrice - b.finalPrice);
        if (sortOption === "priceHighLow") sorted.sort((a, b) => b.finalPrice - a.finalPrice);
        return sorted;
    }, [productsWithPrice, sortOption]);


    const visibleProducts = useMemo(() => sortedProducts.slice(0, 8), [sortedProducts]);

    return (
        <>
            <HeaderSlim />

            <div className="breadcrumb">
                <ul className="container">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/en/shop">Shop</Link>
                    </li>
                    <li>
                        <span className="title-link">{titleName}</span>
                    </li>
                </ul>
            </div>
            <section className="shop-page">
                <div className="container">
                    <div className="main-page">

                        {/* Heading */}
                        <div className="heading heading-small">
                            <div className="line">
                                <h1 className="title">{titleName}</h1>
                            </div>

                            <div className="filter-row">
                                <div className="filter-left">
                                    <span>
                                        Discover {totalItems} items out of ({totalItems}) available
                                    </span>
                                </div>

                                <div className="filter-right">
                                    <div className="sort-content">
                                        <SortByDropdown onSelect={setSortOption} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="products-items products-items-4">
                            {visibleProducts.map((product, i) => (
                                <div key={product.id} className="product-box">
                                    <Link href={`/en/product/${product.slug}/${product.slug}`}>
                                        <div className="image">
                                            <Image
                                                src={API_URL + product.image}
                                                alt={product.name}
                                                width={390}
                                                height={390}
                                                priority={i === 0}
                                                sizes="(max-width: 428px) 50vw, 25vw"
                                            />
                                        </div>
                                    </Link>

                                    <div className="meta">
                                        <h2 className="product-name">
                                            <Link href={`/en/product/${product.slug}/${product.slug}`}>
                                                {product.name}
                                            </Link>
                                        </h2>

                                        <div className="subtitle">
                                            {product.color} • {product.size} L
                                        </div>

                                        <p className="price">
                                            {product.finalPrice.toFixed(2)} <small>MAD</small>
                                        </p>

                                        {product.discount > 0 && (
                                            <p className="old">
                                                {product.price.toFixed(2)} <small>MAD</small>
                                            </p>
                                        )}
                                    </div>

                                    <div className="icons">
                                        <button
                                            className="icon icon-wish"
                                            aria-label="Add to Wishlist"
                                            onClick={() => cart.addToWishlist(product.id)}
                                        >
                                            <i className="icon-dark-heart"></i>
                                        </button>

                                        <button
                                            className="icon icon-cart"
                                            aria-label="Add to Cart"
                                            onClick={() => cart.addToCartlist(product.id)}
                                        >
                                            <i className="icon-dark-shopping"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {Array.from({ length: Math.max(0, 6 - visibleProducts.length) }).map((_, i) => (
                                <div key={i} className="product-box-b"></div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <Services />
            <Footer />
        </>

    );
};

export default ListContent;
