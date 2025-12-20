
"use client";

import "./product.css";
import Image from "next/image";
import { CartContext } from "@/app/CartContext";
import { useContext, useEffect,  useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import parse from "html-react-parser";

const ProductSimilar = dynamic(() => import("@/app/components/english/Lists/ProductSimilar"), {
  loading: () => <div className="loading-shimmer">Loading...</div>
});
const ProductZoom = dynamic(() => import("./ProductZoom").then(mod => mod.ProductZoom), { ssr: false });

import { RatingStars } from "./RatingStars";

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

interface Review {
  created_date: string;
  id: number;
  slug: string;
  stars: number;
  username: string;
  phone: string;
  review_text: string;
  review_date: string;
  firstLetter: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  language: string;
  created_at: string;
}

export default function ProductClient({ product, reviews, faqs }: any) {
  const API_URL: string = process.env.NEXT_PUBLIC_API_URL || "";

  const [activeIndex, setActiveIndex] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [openFaqID, setOpenFaqID] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  const images = [
    product.image,
    product.image_1,
    product.image_2,
    product.image_3,
    product.image_4,
  ].filter(Boolean) as string[];

  const getDiscountedPrice = (price: number, discount: number) => {
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  };

  const getImageUrl = (imagePath: string | null) => {
    if (imagePath == null) {
      return API_URL + "/" +product.image
    }
    return API_URL + "/" + imagePath;
  }

  const toggleFAQ = (id: number) => {
    setOpenFaqID(openFaqID === id ? 0 : id);
  };


  useEffect(() => {
    getImageUrl(product.image)
    setAverageRating(
      reviews.reduce((acc: any, r: Review) => acc + r.stars, 0) /
      (reviews.length || 1)
    );
  }, [reviews,product.image]);


  const cart = useContext(CartContext);


  if (!cart) return null;

  const router = useRouter();

  const parsedDescription = useMemo(() => {
    if (typeof product.content === "string") return parse(product.content);
    return null;
  }, [product.content]);

  const orderNow = (id: number) => {
    cart.addToCartlist(id);
    router.push("/en/checkout");
  }

  return (
    <div className="product-page">
      <div className="container">
        <h1 className="product-title-mobile">
          {product.name}
        </h1>
        <main className="product-items" role="main">
          {/* ---------- MEDIA COLUMN ---------- */}

          <div className="product-media" >

            <span className="zoom-icon"
              onClick={() => setZoomImage(getImageUrl(images[activeIndex]))}>
              <i className="icon-zoom"></i>
            </span>
            <div className="album">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={i === activeIndex ? "album-img active" : "album-img"}
                  onClick={() => {
                    setMainImage(img)
                    setActiveIndex(i);
                  }}
                >
                  <Image
                    src={getImageUrl(img)}
                    width={100}
                    height={100}
                    loading="eager"
                    alt={`${product.name} thumbnail ${i + 1}`}
                  />
                </div>
              ))}
            </div>


            <div className="thumb">

              <Image

                id="main-image"

                src={getImageUrl(mainImage)}

                width={300}

                height={300}

                alt={`${product.name}`}

                priority={true}



              />

            </div>


            <div className="spagi">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={i === activeIndex ? "bx active" : "bx"}
                  onClick={() => {
                    setMainImage(img)
                    setActiveIndex(i);
                  }}
                >

                </div>
              ))}

            </div>


          </div>

          {/* ---------- PRODUCT DATA ---------- */}
          <div className="product-data">
            <div className="product-heading">
              <div className="product-category">{product.category}</div>
              <h1 className="product-title">{product.name}</h1>
              <div className="product-stars">
                <RatingStars average={averageRating} count={reviews.length} />
              </div>

              <div className="product-price">
                <span className="price">
                  {getDiscountedPrice(product.price, product.discount).toFixed(2)}
                  <small> MAD</small>
                </span>
                <span className="old-price">
                  <span className="discount">save {product.discount}%</span> from
                  <span className="old">{product.price} MAD</span>
                </span>
              </div>

              <div className="trust-info">
                <div className="line">
                  <span> <i className="icon-true"></i> Verified Certifications</span>
                  <span> <i className="icon-true"></i> Cash on Delivery</span>
                  <span> <i className="icon-true"></i> Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* ---------- INFO ---------- */}
            <div className="box-card product-info">
              <h2 className="box-title">Product Info</h2>
              <div className="box-content">

                <ul className="list">
                  <li>
                    <i className="icon-true"></i> Color: {product.color}
                  </li>
                  <li>
                    <i className="icon-true"></i> Capacity: {product.size} L
                  </li>

                  {product.material &&
                    <li>
                      <i className="icon-true"></i> Material: {product.material}
                    </li>
                  }

                  {product.fit &&
                    <li>
                      <i className="icon-true"></i> Laptop Compartment: Fits up to  {product.fit}"
                    </li>
                  }

                  {product.dimension &&
                    <li>
                      <i className="icon-true"></i> Dimensions: {product.dimension} cm
                    </li>
                  }
                </ul>

              </div>

            </div>

            {/* ---------- ACTIONS ---------- */}
            <div className="actions-bottom">
              <div className="actions-1">..</div>
              <div className="actions">
                <button
                  className="btn btn-buy"
                  onClick={() => orderNow(product.id)}
                >
                  Order Now
                </button>

                <button
                  className="btn btn-cart"
                  aria-label="Add to Cart"
                  onClick={() => cart.addToCartlist(product.id)}
                >
                  <span className="cart-txt">add to cart</span>
                  <i className="icon-shopping"></i>
                </button>

                <button
                  className="btn btn-wish"
                  aria-label="Add to wishlist"
                  onClick={() => cart.addToWishlist(product.id)}
                >
                  <i className="icon-dark-heart"></i>
                </button>
              </div>
            </div>

            {/* ---------- DESCRIPTION ---------- */}
            {parsedDescription && (
              <div className="box-card">
                <h2 className="box-title">Description</h2>
                <div className="box-content">
                  <div className="product-description">{parsedDescription}</div>
                </div>
              </div>
            )}

            {/* ---------- FAQ ---------- */}
            {faqs.length > 0 && (
              <div className="box-card faqs">
                <h2 className="box-title">FAQs</h2>
                <div className="faq-content">
                  {faqs
                    .filter((faq: FAQ) => faq.language === "en")
                    .map((faq: FAQ) => (
                      <div
                        key={faq.id}
                        className={faq.id === openFaqID ? "faq-box active" : "faq-box"}
                      >
                        <div className="question" onClick={() => toggleFAQ(faq.id)}>
                          <h3 className="title">{faq.question}</h3>
                          <div className="icon">
                            <i className="icon-dark-chevron"></i>
                          </div>
                        </div>

                        <p className={faq.id === openFaqID ? "answer active" : "answer"}>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* ---------- REVIEWS ---------- */}
            {reviews.length > 0 && (
              <div className="box-card reviews" id="reviews">
                <h2 className="box-title">
                  Reviews <span>({reviews.length})</span>
                </h2>

                <div className="reviews-content">
                  {reviews.map((r: Review) => (
                    <div key={r.id} className="review-box">
                      <div className="user-side">
                        <div className="avatar">
                          <div
                            className={
                              "avatar-circle " + r.username.charAt(0).toUpperCase()
                            }
                          >
                            {r.username.charAt(0).toUpperCase()}
                          </div>
                        </div>

                        <div className="user-meta">
                          <div className="username">{r.username}</div>
                          <div className="stars">
                            {Array.from({ length: 5 }, (_, j) => (
                              <span key={j} className={j < r.stars ? "filled" : ""}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="review-txt">
                        <div className="text">{r.review_text}</div>
                        <div className="date-reviews">{r.created_date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------- SIMILAR PRODUCTS ---------- */}
            <div className="box-card">
              <h2 className="box-title">Maybe You Like</h2>
              <ProductSimilar title="" />
            </div>
          </div>
        </main>
      </div>

      {zoomImage && (
        <div className="zoom-modal" >
          <button className="btn-close" onClick={() => setZoomImage(null)}>
            <i className="icon-plus"></i>
          </button>
          <ProductZoom src={zoomImage} />
        </div>
      )}

    </div>
  );
}


