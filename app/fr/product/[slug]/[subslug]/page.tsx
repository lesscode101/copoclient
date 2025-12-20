"use server";

import SectionContent from "./SectionContent";
import parse from "html-react-parser";

async function getProduct(slug: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(`${API_URL}/api/products/slug/${slug}`);

    const res = await fetch(`${API_URL}/api/products/slug/${slug}`, { cache: "no-cache" });
    if (!res.ok) return null;
    return res.json();
}

async function getReviews(slug: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}/api/reviews/slug/${slug}`, { cache: "no-cache" });
    if (!res.ok) return null;
    return res.json();
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const data = await getProduct(slug);
    const reviews = await getReviews(slug);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const product = data;
    const base = 'https://eravist.com';
    const image = product.image || `${base}/default-product.jpg`;
    let desc = product.content || "";
    desc = desc.replace(/<\/?p[^>]*>/gi, "");
    desc = desc.replace(/\s+/g, " ").trim();
    let product_description = desc.slice(0, 220);
    const ratingValue =
        reviews.length > 0
            ? (reviews.reduce((sum: any, r: any) => sum + (r.stars || 0), 0) / reviews.length).toFixed(1)
            : "5"; // إذا لا توجد تعليقات، الافتراضي 5
    // JSON-LD Schemas
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: product.name,
        description: product_description || "",
        url: `${API_URL}/en/product/${slug}`,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: API_URL },
            { "@type": "ListItem", position: 2, name: "Categories", item: `${API_URL}/categories` },
            { "@type": "ListItem", position: 3, name: slug, item: `${API_URL}/en/product/${slug}` },
        ],
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: product_description || "",
        sku: product.id,
        url: `${base}/en/product/${slug}`,
        brand: {
            "@type": "Brand",
            name: "Eravist"
        },
        offers: {
            "@type": "Offer",
            url: `${base}/en/product/${slug}`,
            priceCurrency: "MAD",
            price: product.price,
            availability: "https://schema.org/InStock"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: ratingValue || "5",
            reviewCount: reviews.length || 1,
        },
        review: reviews?.map((r: any) => ({
            "@type": "Review",
            author: r.username || "Anonymous",
            datePublished: r.review_date || new Date().toISOString(),
            reviewBody: r.review_text || "",
            reviewRating: {
                "@type": "Rating",
                ratingValue: r.stars || "5",
            },
        })) || [],
    };

    return (

        <>
            <title>{product.name}</title>
            <meta name="description" content={product_description || ""} />

            {/* Social Meta Tags */}
            <meta property="og:title" content={product.name} />
            <meta property="og:description" content={product_description || ""} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="product" />
            <meta property="og:url" content={`${base}/en/product/${slug}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={product.name} />
            <meta name="twitter:description" content={product_description || ""} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@EravistOfficial" />

            {/* JSON-LD Scripts */}
            <script
                id="collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c') }}
            />
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
            />
            <script
                id="review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema).replace(/</g, '\\u003c') }}
            />

            <SectionContent />
        </>
    );
}
