import "./../shop.css";
import ListContent from "./../listContent";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getPremium() {

    const res = await fetch(`${API_URL}/api/products/premium`, { cache: "no-cache" });
    if (!res.ok) return null;
    return res.json();
}

export default async function PremiumPage() {
    const data = await getPremium();
    const products = Array.isArray(data) ? data : [];
    const base = "https://eravist.com";

    // SEO metadata
    const title = "Buy Premium Backpacks in Morocco | Eravist";
    const desc =
        "Shop our premium backpacks in Morocco. Durable, stylish, and perfect for work, travel, or daily use. Free shipping available.";
    const canonical = `${base}/en/shop/premium`;
    const image = `${API_URL}/images/premium.webp`;

    // Structured data: CollectionPage
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Premium Backpacks",
        description: desc,
        url: canonical,
    };

    // Structured data: ItemList
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: products.map((p: any, i: number) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${base}/en/product/${p.slug}`,
            name: p.name,
            image: p.image ? `${base}/images/products/${p.image}` : image,
            description: p.shortDescription || desc,
        })),
    };

    // Structured data: Breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: base },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${base}/en/shop` },
            { "@type": "ListItem", position: 3, name: "Premium Backpacks", item: canonical },
        ],
    };

    return (
        <>
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={desc} />
            <meta name="keywords" content="premium backpacks, buy backpacks Morocco, durable backpacks, stylish backpacks, travel backpacks" />

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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c') }}
            />
            <script
                id="schema-itemlist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, '\\u003c') }}
            />
            <script
                id="schema-breadcrumbs"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
            />


            <ListContent products={products} titleName="Premium Backpacks" />



        </>
    );
}
