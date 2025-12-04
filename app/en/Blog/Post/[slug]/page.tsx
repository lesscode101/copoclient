"use client";
import './postblog.css'

import type { NextPage } from "next";
import Link from "next/link";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import Services from "@/app/components/english/Lists/Services";
import Footer from "@/app/components/english/Footer/Footer";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CartContext } from '@/app/CartContext';

interface Post {
    id: number;
    title: string;
    slug: string;
    subtitle: string;
    content: string;
    image: string;
    created_at: string;
}

const Post: NextPage = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    const fetchPost = async () => {
        try {
            const response = await fetch(`${API_URL}/api/posts/slug/${slug}/`);
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    };

    useEffect(() => {
        if (slug) fetchPost();
    }, [slug]);

    if (!post) {
        return <p className="container">Loading post...</p>;
    }

   
  const cart = useContext(CartContext);

  if (!cart) return null; // safety check

  return (
    <div className="app">
      <HeaderSlim countWish={cart.wishlist.length} countCart={cart.cartlist.length} />


            <div className="breadcrumb">
                <ul className="container">
                    <li>
                        <Link className="link" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/en/Blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <span>{post.title}</span>
                    </li>
                </ul>
            </div>

            <div className="post-blog">

            <div className="container">
                <main className="post-items" role="main">
                    <aside className="post-media" aria-label="Post image">
                        <figure className="thumb">
                            {post.image && <img src={`${API_URL}${post.image}`} alt={post.title} />}
                        </figure>
                    </aside>

                    <article className="post-content">
                        <div className="post-heading">
                            <div className="post-meta">{post.subtitle}</div>
                            <h1 className="post-title">{post.title}</h1>
                            <p className="post-date">
                                <span>Post on </span>
                                {new Date(post.created_at).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: false,
                                })}
                            </p>
                        </div>

                        <section className="post-body" aria-labelledby="post-title">
                            {parse(post.content)}
                        </section>
                    </article>
                </main>
            </div>

            </div>

            <Services />
            <Footer />
        </div>
    );
};

export default Post;
