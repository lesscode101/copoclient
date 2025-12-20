"use server";
import './postblog.css'
import Link from "next/link";
import Footer from "@/app/components/english/Footer/Footer";
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
        <div className="post-blog">
            <div className="breadcrumb">
                <ul className="container">
                    <li><Link className="link" href="/">Home</Link></li>
                    <li><Link className="link" href="/en/blog">Blog</Link></li>
                    <li><span>{post.title}</span></li>
                </ul>
            </div>

            <div className="container">
                <main className="post-items" role="main">
                    <aside className="post-media" aria-label="Post image">
                        <figure className="thumb" style={{ position: "relative", width: "100%", height: "400px" }}>
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

                    <article className="post-content">
                        <div className="post-heading">
                            <div className="post-meta">{post.subtitle}</div>
                            <h1 className="post-title">{post.title}</h1>
                            <p className="post-date">
                                Post on {new Date(post.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>

                        <section className="post-body" aria-labelledby="post-title">
                            {parse(post.content || "")}
                        </section>
                    </article>
                </main>
            </div>

            <ProductList title='Our Store' />
            <Footer />
        </div>
    );
};

export default PostContent;
