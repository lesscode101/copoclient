"use client";

import './blogpage.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    image: string;
}

export default function BlogContent() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 4;

    const fetchPosts = async (page: number) => {
        try {
            const response = await fetch(`${API_URL}/api/posts/pages?page=${page}&limit=${postsPerPage}`);
            const data = await response.json();

            // Assuming API returns { posts: Post[], total: number }
            setPosts(data.posts);
            setTotalPages(Math.ceil(data.total / postsPerPage));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts(currentPage);
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // optional for smooth scrolling
        });
    }, [currentPage]);

    return (
        <section className="blogPage ">
            <div className="container">
                <div className="heading">
                    <h2 className='title'>
                        <span>B</span>
                        <span>L</span>
                        <span>O</span>
                        <span>G</span>
                    </h2>
                </div>

                {posts.length > 0 && (
                    <>
                        <div className="blog-items">
                            {posts.map((post: Post) => (
                                <article className="article-card" key={post.id}>
                                    <Link href={`/en/blog/post/${post.slug}`} className="article-link">
                                        <div className="article-content">
                                            {post.subtitle && (
                                                <p className="article-subtitle">{post.subtitle}</p>
                                            )}
                                            <h2 className="article-title">{post.title}</h2>
                                        </div>
                                        <div className="img">
                                            <Image width={400} height={600} priority={true} sizes="(max-width: 768px) 100vw, 400px" src={`${API_URL + post.image}`} alt={post.title} />
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>

                    </>
                )}
            </div>
            <div className="container">
                <div>

                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button className='btn previous' aria-label='Previous'
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >

                        <i className="icon-dark-chevron"></i>

                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button aria-label={'blog page-'+ i + 1}
                            key={i}
                            className={currentPage === i + 1 ? 'btn active' : 'btn'}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        aria-label='next'
                        className='btn next'
                    >
                        <i className="icon-dark-chevron"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
