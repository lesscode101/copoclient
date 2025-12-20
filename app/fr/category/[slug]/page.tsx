import SectionContent from "./SectionContent";
import Footer from "@/app/components/english/Footer/Footer";
import Services from "@/app/components/english/Lists/Services";

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


export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await getCategory(slug);
    const products =  Array.isArray(data) ? data : [];
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    let base = 'https://eravist.com'
    const title = slug + ' backpack in Morccoo ';
    const desc = 'Discover our premium selection of professional work backpacks designed for modern professionals, commuters, and business travelers. Our durable office backpacks combine sleek corporate aesthetics with practical functionality, featuring laptop compartments, USB charging ports, and anti-theft security features.';
    let image = `${API_URL}/images/categories/${slug}.webp`;

    let canonical = `${base}/category/${slug}`;

    // JSON-LD Schemas
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: slug,
        description: desc || "",
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
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={desc || ""} />

            {/* Social Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc || ""} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="product" />
            <meta property="og:url" content={`${base}/en/product/${slug}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc || ""} />
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


            {/* Category UI */}
            <SectionContent />
            <Services />
            <Footer />

        </>

    );
}
