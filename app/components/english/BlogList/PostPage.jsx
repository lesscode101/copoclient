import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useParams, Link } from "react-router-dom";
import "./blog.css";

const API_URL = import.meta.env.VITE_API_URL;

function PostPage({ lang }) {
    const { id, slug } = useParams();
    const [post, setPost] = useState('')

    const fetchPosts = async () => {
        try {
            const response = await fetch(`${API_URL}/api/posts/${id}/${lang}`);
            console.log(`${API_URL}/api/posts/${id}/${lang}`)
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [id, lang]);

    return (
        <section className="post-page ">
            {/* Breadcrumb */}
            {lang == 'ar' &&
                <div className="arab">
                    < nav className="breadcrumb ">
                        <ul className="container">
                            <li><Link to="/" className="link">الرئيسية</Link></li>
                            <li><Link to="/blog" className="link">المقالات</Link></li>
                            <li><span>{post.title}</span></li>
                        </ul>
                    </nav>
                </div>


            }
            {lang == 'fr' &&
                <nav className="breadcrumb ">
                    <ul className="container">
                        <li><Link to="/" className="link">Accueil</Link></li>
                        <li><Link to="/blog" className="link">Blog</Link></li>
                        <li><span>{post.title}</span></li>
                    </ul>
                </nav>
            }
            {lang == 'en' &&
                <nav className="breadcrumb ">
                    <ul className="container">
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/blog" className="link">Blog</Link></li>
                        <li><span>{post.title}</span></li>
                    </ul>
                </nav>
            }

            <div className="container">
                <main className="post-items" role="main">
                    <aside className="post-media" aria-label="Post image">
                        <figure className="thumb">
                            <img src={`${API_URL + post.image}`} alt={post.title} />
                        </figure>
                    </aside>

                    <article className="post-content">
                        <div className="post-heading">
                            <div className="post-meta">{post.subtitle}</div>
                            <h1 className="post-title">{post.title}</h1>
                            <p className="post-date">
                                <span>Post on </span>{new Date(post.created_at).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: false
                                })}
                            </p>
                        </div>


                        <section className="post-body" aria-labelledby="post-title">
                            {parse(post.content || "")}
                        </section>
                    </article>
                </main>


            </div>


        </section >
    );
}

export default PostPage;
