"use client"; 

import './blog.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    image: string;
}
export default function BlogList() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`${API_URL}/api/posts/last/en`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (


        <section className="blog-page">

            <div className="container">
                <div className="heading">
                    
                    <h2 className='title'>
                        <span>B</span>
                        <span>L</span>
                        <span>O</span>
                        <span>G</span>
                    </h2>
                



                </div>

                {posts.length>0 &&
                    <div className="blog-items">


                        {posts.map((post:Post) => (

                            <article className="article-card" key={post.id}>
                                <Link href={`/blog/post/${post.id}/${post.slug}`} className="article-link">

                                    <div className="article-content">
                                        {post.subtitle && (
                                            <p className="article-subtitle">{post.subtitle}</p>
                                        )}

                                        {post.subtitle && (
                                            <h2 className="article-title">{post.title}</h2>
                                        )}

                                    </div>
                                    <div className="img">
                                        <img src={`${API_URL + post.image}`} alt={post.title} />
                                    </div>
                                </Link>

                            </article>

                        ))}

                    </div>

                }
            </div>

        </section>


    )
}