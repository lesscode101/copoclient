import { Metadata } from "next";
import SectionContent from "./SectionContent";

async function getCategory(slug: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const page = 1
    const search = ""

    console.log(
        `${API_URL}/api/products/search/page/${page}?q=${search}&category=${slug}`
    )

    const res = await fetch(
        `${API_URL}/api/products/search/page/${page}?q=${search}&category=${slug}`,
        { cache: "no-cache" } // keep fresh
    );
    if (!res.ok) return null;
    return res.json();
}
export interface OtherU {
    [key: string]: {
        type: string;
        children: string;
    };
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const data = await getCategory(slug);
    if (!data) {
        return {
            title: "Category Not Found",
            robots: "noindex, nofollow",
        };
    }

    let base = 'https://eravist.com'
    const title = slug + ' backpack in Morccoo ';
    const desc = 'Discover our premium selection of professional work backpacks designed for modern professionals, commuters, and business travelers. Our durable office backpacks combine sleek corporate aesthetics with practical functionality, featuring laptop compartments, USB charging ports, and anti-theft security features.';
    console.log(data.products[0])

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description: desc || "",
        url: `${base}/category/${slug}`,
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: data.products.map((p: any, i: number) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${base}/product/${p.slug}`,
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: base },
            { "@type": "ListItem", position: 2, name: "Categories", item: `${base}/categories` },
            { "@type": "ListItem", position: 3, name: title, item: `${base}/category/${slug}` },
        ],
    };

    return {
        title: slug,
        description: desc || "",
        alternates: {
            canonical: `${base}/category/${slug}`,
        }
    };
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await getCategory(slug);
    console.log(data)

    if (!data) {
        return <div>Category not found</div>;
    }
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const products = data.products;

    // JSON-LD Schemas
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: slug,
        description: products[0]?.content?.slice(0, 160) || "",
        url: `${API_URL}/category/${slug}`,
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: products.map((p: any, i: number) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${API_URL}/product/${p.slug}`,
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: API_URL },
            { "@type": "ListItem", position: 2, name: "Categories", item: `${API_URL}/categories` },
            { "@type": "ListItem", position: 3, name: slug, item: `${API_URL}/category/${slug}` },
        ],
    };

    return (
        <>
            {/* JSON-LD Injected Automatically into <head> */}

            <script
                id="collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c'),
                }}
            />
            <script
                id="schema-itemlist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemListSchema).replace(/</g, '\\u003c'),
                }}
            />

            <script
                id="schema-breadcrumbs"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
                }}
            />


            {/* Category UI */}
            <SectionContent/>
        </>

    );
}
