"use server";
import './ArticlePage.css'
import Link from "next/link";
import ProductList from '@/app/components/english/Lists/ProductList';
import parse from "html-react-parser";
import Image from 'next/image';

interface Post {
    id: number;
    title: string;
    slug: string;
    subtitle: string;
    content: string;
    image: string;
    created_at: string;
}

const PostContent: React.FC<{ post: Post }> = ({ post }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!post) return <p className="container">Loading post...</p>;

    return (
        <div className="article-page">
           
            <div className="container">
                <main className="article-items" role="main">
                    <aside className="article-media" aria-label="Post image">
                        <figure className="thumb">
                            {post.image && (
                                <Image
                                    src={`${API_URL}${post.image}`}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            )}
                        </figure>
                    </aside>

                    <article className="article-content">
                        <div className="article-heading">
                            <div className="article-meta">{post.subtitle}</div>
                            <h1 className="article-title">{post.title}</h1>
                            <p className="article-date">
                                Post on {new Date(post.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>

                        <section className="article-body" aria-labelledby="post-title">
                            {parse(post.content || "")}
                        </section>
                    </article>
                </main>
            </div>

            <ProductList title='Our Store' />
        </div>
    );
};

export default PostContent;
