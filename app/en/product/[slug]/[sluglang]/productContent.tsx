"use client";

import "./product.css";
import Link from "next/link";
import Image from "next/image";

import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import Services from "@/app/components/english/Lists/Services";
import Footer from "@/app/components/english/Footer/Footer";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CartContext, CartProvider } from "@/app/CartContext";
import ProductSimilar from "@/app/components/english/Lists/ProductSimilar";
import Head from "next/head";



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
    main_image: string;
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
    firstLetter:string
}

interface FAQ {
    id: number;
    question: string;
    answer: string;
    language: string;
    created_at: string;
}


export default function ProductContent() {
    const API_URL: string = process.env.NEXT_PUBLIC_API_URL || "";
    const { slug } = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [mainImage, setMainImage] = useState("");

    const [reviews, setReviews] = useState<Review[]>([]);
    const [totalReviews, setTotalReviews] = useState(0);
    const [averageRating, setAverageRating] = useState(0);


    const [faqs, setFAQs] = useState<FAQ[]>([]);
    const [openFaqID, setOpenFaqID] = useState(0);

    const cart = useContext(CartContext);

    const fetchProduct = async () => {
        try {
            const res = await fetch(`${API_URL}/api/products/slug/${slug}/`);
            const product: Product = await res.json();
            setProduct(product);
            setMainImage(product.image);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const fetchReviews = async () => {
        try {
            const res = await fetch(`${API_URL}/api/reviews/slug/${slug}/`);
            const reviewsData: Review[] = await res.json();
    
            const processed = reviewsData.map((r) => {
                const dateObject = new Date(r.review_date);
    
                return {
                    ...r,
                    firstLetter: r.username ? r.username.charAt(0).toUpperCase() : "U",
                    created_date: dateObject.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })
                };
            });
    
            setReviews(processed);                          // IMPORTANT
            setTotalReviews(processed.length);
            setAverageRating(
                processed.reduce((acc, r) => acc + r.stars, 0) / (processed.length || 1)
            );
    
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };
    

    const fetchFAQs = async () => {
        try {
            const res = await fetch(`${API_URL}/api/faqs/slug/${slug}/`);
            const faqs = await res.json();
            setFAQs(faqs);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const getDiscountedPrice = (price: number, discount: number) => {
        if (!discount || discount <= 0) return price;
        return price - (price * discount) / 100;
    };

    const getImageUrl = (imagePath: string | undefined | null) => {
        if (!imagePath) return "";
        const cleanApiUrl = API_URL.endsWith("/") ? API_URL.slice(0, -1) : API_URL;
        const startingSlash = imagePath.startsWith("/") ? "" : "/";
        return `${cleanApiUrl}${startingSlash}${imagePath}`;
    };

    const toggleFAQ = (id: number) => {
        setOpenFaqID(openFaqID === id ? 0 : id);
    };





    useEffect(() => {
        if (slug) {
            fetchProduct();
            fetchReviews();
            fetchFAQs();
        }
    }, [slug]);

    if (!product) return <p className="container">Loading product...</p>;
    if (!cart) return null;

    return (

        <div className="product-page">

            <HeaderSlim />

            <div className="breadcrumb">
                <ul className="container">
                    <li><Link className="link" href="/">Home</Link></li>
                    <li><Link className="link" href="/en/shop">Shop</Link></li>
                    <li><span>{product.name}</span></li>
                </ul>
            </div>



            <div className="product-content">
                <div className="container">
                    <main className="product-items" role="main">

                        {/* ---------- MEDIA COLUMN ---------- */}
                        <aside className="product-media" aria-label="Post image">
                            <figure className="thumb">
                                {product.image && (
                                    <Image
                                        src={getImageUrl(mainImage)}
                                        width={300}
                                        height={300}
                                        loading="eager"
                                        alt={product.name}
                                    />
                                )}
                            </figure>

                            <div className="album">
                                {[product.image_1, product.image_2, product.image_3, product.image_4, product.image]
                                    .filter(Boolean)
                                    .map((img, i) => (
                                        <div
                                            key={i}
                                            className={img === mainImage ? "album-img active" : "album-img"}
                                            onClick={() => setMainImage(img!)}
                                        >
                                            <Image
                                                src={getImageUrl(img!)}
                                                width={100}
                                                height={100} loading="eager"
                                                alt={`${product.name} - view ${i + 1}`}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </aside>

                        {/* ---------- PRODUCT DATA ---------- */}
                        <div className="product-data">
                            <div className="box-card product-heading">
                                <div className="product-category">{product.category}</div>
                                <h1 className="product-title">{product.name}</h1>
                                <div className="product-stars">
                                    {averageRating} <span>/5</span> |  {totalReviews} reviews

                                </div>

                                <div className="product-price">
                                    <span>
                                        {getDiscountedPrice(product.price, product.discount).toFixed(2)}
                                        <small> MAD</small>
                                    </span>

                                    <div className="product-old-price">
                                        {product.price} MAD
                                    </div>
                                </div>
                            </div>

                            {/* ---------- INFO ---------- */}
                            <div className="box-card product-info">
                                <h2 className="box-title">Product Info</h2>
                                <ul className="list">
                                    <li><i className="icon-true"></i> Color: {product.color}</li>
                                    <li><i className="icon-true"></i> Capacity: {product.size} L</li>
                                    <li><i className="icon-true"></i> Material: 1680D Waterproof Ballistic Nylon</li>
                                    <li><i className="icon-true"></i> Laptop Compartment: Fits up to 16"</li>
                                    <li><i className="icon-true"></i> Dimensions: 48 × 30 × 16 cm</li>
                                </ul>
                            </div>

                            {/* ---------- ACTIONS ---------- */}
                            <div className="box-card actions">
                                <button className="btn btn-buy" onClick={() => cart.addToCartlist(product.id)}>
                                    Buy now
                                </button>

                                <button className="btn btn-cart" aria-label="Add to Cart" onClick={() => cart.addToCartlist(product.id)}>
                                    <i className="icon-dark-shopping"></i>
                                </button>

                                <button className="btn btn-wish" aria-label="Add to wishlist" onClick={() => cart.addToWishlist(product.id)}>
                                    <i className="icon-dark-heart"></i>
                                </button>
                            </div>

                            {/* ---------- FAQ ---------- */}
                            {faqs.length > 0 && (
                                <div className="box-card  faqs">
                                    <h2 className="box-title">FAQs</h2>

                                    <div className="faq-content">
                                        {faqs
                                            .filter((faq) => faq.language === "en")
                                            .map((faq) => (
                                                <div key={faq.id} className={faq.id === openFaqID ? "faq-box active" : "faq-box"}>
                                                    <div className="question" onClick={() => toggleFAQ(faq.id)}>
                                                        <h3 className="title">{faq.question}</h3>
                                                        <div className="icon"><i className="icon-dark-chevron"></i></div>
                                                    </div>

                                                    <p className={faq.id === openFaqID ? "answer active" : "answer"}>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* ---------- DESCRIPTION ---------- */}
                            {typeof product.content === "string" ?
                                <div className="box-card product-body reviews">
                                    <h2 className="box-title">Description</h2>
                                    <div className="product-description">
                                        {parse(product.content)}
                                    </div>
                                </div>
                                : null
                            }
                            {/* ---------- REVIEWS ---------- */}


                            <div className="box-card reviews">
                                <h2 className="box-title">Reviews</h2>

                                <div className="reviews-content">
                                    {reviews.map(r => {

                                        return (
                                            <div key={r.id} className="review-box">
                                                <div className="user-side">
                                                    <div className="avatar">
                                                        <div className={"avatar-circle " + r.firstLetter}>{r.firstLetter}</div>
                                                    </div>

                                                    <div className="user-meta">
                                                        <div className="username">{r.username}</div>
                                                        <div className="stars">
                                                            {Array.from({ length: 5 }, (_, j) => (
                                                                <span key={j} className={j < r.stars ? "filled" : ""}>★</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="review-txt">
                                                    <div className="text">{r.review_text}</div>
                                                    <div className="date-reviews">{r.created_date}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                            {/* ---------- SIMILAR PRODUCTS ---------- */}
                            <div className="box-card similar">
                                <h2 className="box-title">Maybe You Like</h2>

                                <ProductSimilar title="Maybe You Like" />
                            </div>
                        </div>

                    </main>
                </div >
            </div >

        </div >


    );
}
