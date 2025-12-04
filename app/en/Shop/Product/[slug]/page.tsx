"use client";

import './product.css';

import type { NextPage } from "next";
import Link from "next/link";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import Services from "@/app/components/english/Lists/Services";
import Footer from "@/app/components/english/Footer/Footer";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CartContext } from '@/app/CartContext';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  content: string;
  stock: number;
  sold: number;
  color: string;
  size: number;
  category: string;
  image: string;
  discount: number;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
}

const ProductPage: NextPage = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  // CartContext hook أولاً دائمًا
  const cart = useContext(CartContext);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products/slug/${slug}/`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (slug) fetchProduct();
  }, [slug]);

  // Loading state
  if (!product) {
    return <p className="container">Loading product...</p>;
  }

  // Safety check for CartContext
  if (!cart) return null;

  return (
    <>
      <HeaderSlim countWish={cart.wishlist.length} countCart={cart.cartlist.length} />

      <div className="breadcrumb">
        <ul className="container">
          <li>
            <Link className="link" href="/">Home</Link>
          </li>
          <li>
            <Link className="link" href="/en/Shop">Shop</Link>
          </li>
          <li>
            <span>{product.name}</span>
          </li>
        </ul>
      </div>

      <div className="post-blog">
        <div className="container">
          <main className="post-items" role="main">
            <aside className="post-media" aria-label="Post image">
              <figure className="thumb">
                {product.image && <img src={`${API_URL}${product.image}`} alt={product.name} />}
              </figure>
            </aside>

            <article className="post-content">
              <div className="post-heading">
                <div className="post-meta">{product.category}</div>
                <h1 className="post-title">{product.name}</h1>
                <p className="post-date">
                  <span>{"mad " + Number(product.price).toFixed(2)}</span>
                </p>
                <p className="post-date">
                  <span>{product.color}</span>  -  
                  <span>{product.size} Liter</span>
                </p>
              </div>

              <section className="post-body" aria-labelledby="post-title">
                {typeof product.content === "string" ? parse(product.content) : null}
                {typeof product.content === "string" ? parse(product.content) : null}
                {typeof product.content === "string" ? parse(product.content) : null}

              </section>

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
            </article>
          </main>
        </div>
      </div>

      <Services />
      <Footer />
    </>
  );
};

export default ProductPage;
