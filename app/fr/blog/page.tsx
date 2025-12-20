import './blog.css'

import Footer from "@/app/components/english/Footer/Footer";
import Services from "@/app/components/english/Lists/Services";
import BlogContent from "./post/[slug]/postContent";
import BlogList from "@/app/components/english/BlogList/BlogList";
import Link from "next/link";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import ProductList from "@/app/components/english/Lists/ProductList";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getPosts() {
  const res = await fetch(`${API_URL}/api/posts/`, { cache: "no-cache" });
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPage() {
  const data = await getPosts();
  const posts = Array.isArray(data) ? data : [];
  const base = "https://eravist.com";

  // SEO metadata
  const title = "Backpack Blog Morocco | Tips, Reviews & Guides | Eravist";
  const desc =
    "Read our blog for expert tips, reviews, and guides about premium backpacks in Morocco. Stay updated on the latest styles and travel-friendly backpacks.";
  const canonical = `${base}/en/blog`;
  const image = `${API_URL}/images/blog-default.webp`;

  // Structured Data: CollectionPage for Blog
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Backpack Blog Morocco",
    description: desc,
    url: canonical,
  };

  // Structured Data: BlogPosting for each post
  const blogPostingSchema = posts.map((p: any) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    alternativeHeadline: p.subtitle || "",
    description: p.content
      ? p.content.replace(/<[^>]+>/g, "").slice(0, 160)
      : p.subtitle || desc,
    image: p.image ? `${base}${p.image}` : image,
    author: {
      "@type": "Person",
      name: p.author || "Eravist",
    },
    datePublished: p.created_at,
    url: `${base}/en/blog/${p.slug || p.id}`,
    mainEntityOfPage: `${base}/en/blog/${p.slug || p.id}`,
  }));

  // Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonical },
    ],
  };

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={desc} />
      <meta name="keywords" content="backpack blog Morocco, backpack reviews, travel backpacks, premium backpacks, guides" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@EravistOfficial" />

      {/* Structured Data */}
      <script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }}
      />
      <script
        id="schema-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema).replace(/</g, "\\u003c") }}
      />
      <script
        id="schema-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      {/* Page content */}
      <div className="blogpage">
        <HeaderSlim />


        <div className="blogpage-content">
          <div className="breadcrumb">
            <ul className="container">
              <li>
                <Link className="link" href="/">
                  Home
                </Link>
              </li>

              <li>
                <span>Blog</span>
              </li>
            </ul>
          </div>


          <BlogList />
          <ProductList title="Our Store" />
          <Footer />
        </div>

      </div>

    </>
  );
}
