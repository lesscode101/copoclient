import Footer from "@/app/components/english/Footer/Footer";
import Services from "@/app/components/english/Lists/Services";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import PostContent from './postContent';
import ProductList from "@/app/components/english/Lists/ProductList";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface PostPageProps {
    params: { slug: string };
}

async function getPost(slug: string) {
    const res = await fetch(`${API_URL}/api/posts/slug/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = await getPost(slug);
    const base = "https://eravist.com";

    if (!post) {
        return <div>Post not found</div>;
    }

    // SEO metadata
    const title = post.title;
    const desc = post.subtitle + post.content?.replace(/<[^>]+>/g, "").slice(0, 120) || "Backpack Blog Morocco";
    const canonical = `${base}/en/blog/post/${slug}`;
    const image = post.image ? `${API_URL}${post.image}` : `${API_URL}/images/blog-default.webp`;

    // JSON-LD structured data
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        alternativeHeadline: post.subtitle || "",
        description: desc,
        image: image,
        author: { "@type": "Person", name: post.author || "Eravist" },
        datePublished: post.created_at,
        url: canonical,
        mainEntityOfPage: canonical,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: base },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/en/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: canonical },
        ],
    };


    const alternatives = {
        'fr-MA': `${base}/fr/blog/post/${slug}`,
        'en-MA': `${base}/en/blog/post/${slug}`,
        'ar-MA': `${base}/ar/blog/post/${slug}`,
        'x-default': canonical,
      };

    return (
        <>
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={desc} />
            <meta name="keywords" content="backpack blog Morocco, backpack reviews, travel backpacks, premium backpacks, guides" />
            {Object.entries(alternatives).map(([lang, url]) => (
                <link key={lang} rel="alternate" hrefLang={lang} href={url} />
            ))}
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@EravistOfficial" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema).replace(/</g, "\\u003c") }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
            />

            {/* Page content */}
            <HeaderSlim />
            <PostContent post={post} />
       
        </>
    );
}
