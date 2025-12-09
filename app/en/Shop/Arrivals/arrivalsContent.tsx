"use client";

import "./../shop.css";
import Link from "next/link";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import Services from "@/app/components/english/Lists/Services";
import Footer from "@/app/components/english/Footer/Footer";

import { useContext, useEffect, useState } from "react";
import SortByDropdown from "@/app/components/Filter/SortByDropdown";
import { CartContext } from "@/app/CartContext";

interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  discount: number;
  size: string;
  color: string;
}


const ArrivalsContent = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [sortOption, setSortOption] = useState<string>("az");
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  function getNewPrice(price: number, disc: number) {
    if (!disc || disc === 0) return price.toFixed(2);
    return (price - (price * disc) / 100).toFixed(2);
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products/last`);
      const data: Product[] = await response.json();

      setTotalItems(data.length);

      const sorted = sortProducts(data, sortOption);
      setProducts(sorted);
    } catch (error) {
      console.log(error);
    }
  };

  const sortProducts = (list: Product[], sort: string) => {
    const sorted = [...list];

    if (sort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "priceLowHigh")
      sorted.sort(
        (a, b) =>
          parseFloat(getNewPrice(a.price, a.discount)) -
          parseFloat(getNewPrice(b.price, b.discount))
      );
    if (sort === "priceHighLow")
      sorted.sort(
        (a, b) =>
          parseFloat(getNewPrice(b.price, b.discount)) -
          parseFloat(getNewPrice(a.price, a.discount))
      );

    return sorted;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setProducts((prev) => sortProducts(prev, sortOption));
  }, [sortOption]);

  const handleSort = (value: string) => {
    setSortOption(value);
  };

  const cart = useContext(CartContext);
  if (!cart) return null;

  return (
    <div className="app">
      {/* ✅ تمرير الطول وليس المصفوفة */}
      <HeaderSlim />

      <section className="shop-page" id="sale">
        <div className="breadcrumb">
          <ul className="container">
            <li>
              <Link className="link" href="/">Home</Link>
            </li>
            <li>
              <Link className="link" href="/en/shop">Shop</Link>
            </li>
            <li>
              <span>Arrivals</span>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="main-page">
            <div className="heading">
              <div className="line">
                <h1 className="title">Arrivals</h1>
              </div>

              <div className="filter-row">
                <div className="filter-left">
                  <span>
                    Discover {products.length} items among the ({totalItems}) available for sale.
                  </span>
                </div>

                <div className="filter-right">
                  <div className="sort-content">
                    <SortByDropdown onSelect={handleSort} />
                  </div>
                </div>
              </div>
            </div>

            <div className="products-items products-items-4">
              {products.map((product) => (
                <div key={product.id} className="product-box">
                  <Link href={`./../../en/store/product/${product.slug}/${product.slug}`}>
                    <div className="image">
                      <img src={`${API_URL}${product.image}`} alt={product.name} />
                    </div>
                  </Link>

                  <div className="meta">
                    <h1 className="product-name">
                      <Link href={`/product/${product.slug}`}>{product.name}</Link>
                    </h1>

                    <div className="subtitle">
                      {product.color} • {product.size} L
                    </div>
                    <p className="price">
                      {getNewPrice(product.price, product.discount)} <small>Dhs</small>
                    </p>
                    <p className="old">
                      {product.price} <small>Dhs</small>
                    </p>
                  </div>

                  <div className="icons">
                    <button className="icon icon-wish" aria-label="Add to wishlist" onClick={() => cart.addToWishlist(product.id)}>
                      <i className="icon-dark-heart"></i>
                    </button>
                    <button className="icon icon-cart" aria-label="Add to Cart" onClick={() => cart.addToCartlist(product.id)}>
                      <i className="icon-dark-shopping"></i>
                    </button>
                  </div>
                </div>
              ))}

              {/* placeholders to keep grid shape */}
              {Array.from({ length: Math.max(0, 6 - products.length) }).map((_, i) => (
                <div key={i} className="product-box-b"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />

      <Footer />
    </div>
  );
};

export default ArrivalsContent;
