import "./../shop.css";

import ListContent from "../listContent";

async function getDiscounts() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(
        `${API_URL}/api/products/discounts`,
        { cache: "no-cache" }
    );
    if (!res.ok) return null;
    return res.json();
}

export default async function DiscountsPage() {
    const data = await getDiscounts();
    const products = Array.isArray(data) ? data : [];
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const base = "https://eravist.com";

    const title = "Buy New Discounts Backpacks in Morocco | Eravist";
    const desc =
        "Discover our premium selection of new arrival backpacks designed for professionals, commuters, and travelers.";
    const image = `${base}/images/default.webp`;

    const canonical = `${base}/en/shop/arrivals`;

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "New Discounts",
        description: desc,
        url: canonical,
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: products.map((p: any, i: number) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${base}/en/product/${p.slug}`,
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: base },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${base}/en/shop` },
            { "@type": "ListItem", position: 3, name: "Discounts", item: canonical },
        ],
    };

    return (
        <>
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={desc} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@EravistOfficial" />

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

            <ListContent products={products} titleName="Discounts" />


        </>
    );
}
