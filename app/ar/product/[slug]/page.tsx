"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  color: string;
  size: number;
  price: number;
  description?: string;
}

export default function ProductPage() {
  const { slug } = useParams(); // get the slug from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`${API_URL}/api/products/slug/${slug}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchProduct();
  }, [slug]);

  const addToCart = (product: Product) => {
    console.log("Add to cart:", product);
    // You can integrate your cart logic here
  };

  const addToWishlist = (product: Product) => {
    console.log("Add to wishlist:", product);
    // You can integrate your wishlist logic here
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img
        src={`${API_URL+product.image}`}
        alt={product.name}
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <p>{product.color} • {product.size} L</p>
      <p>Price: {product.price} Dhs</p>
      {product.description && <p>{product.description}</p>}

      <div className="actions">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      </div>
    </div>
  );
}
