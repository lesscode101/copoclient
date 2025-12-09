interface CustomMetadata {
    title: string;
    description: string;
    alternates?: { canonical: string }; // ✅ إضافة alternates
    openGraph: any;
    twitter: any;
    scripts:
    {
      type: "application/ld+json",
      json: string, // تمرير كائن الـ JSON مباشرة
    }[],
  
  }
  
  interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    content: string;
  
  }
  
  interface Review {
    stars: number;
  }
  
  export async function generateMetadata({ params }: MetadataProps) {
    const { slug, sluglang } = await params;
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  
    let productName = slug;
    let productDescription = slug;
    let image = "";
    let price: number | null = null;
  
    // URL canonical
    const canonicalURL = `http://localhost:3000/en/product/${slug}/${slug}`;
  
    try {
      const res = await fetch(`${API_URL}/api/products/slug/${slug}/`);
      const product: Product = await res.json();
  
      productName = product.name;
      image = `${API_URL}${product.image}`;
      price = product.price;
  
      productDescription = product.content
        .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
        .replace(/<\/?[^>]+(>|$)/g, "")
        .replace(/\s+/g, " ")
        .trim();
    } catch {
      console.error("");
    }
  
    try {
      const res = await fetch(`${API_URL}/api/reviews/slug/${slug}/`);
      const reviews: Review[] = await res.json();
      const totalReviews = reviews.length;
      const averageRating = reviews.reduce((acc, r) => acc + r.stars, 0) / (totalReviews || 1);
    } catch {
      console.error("");
    }
    let productSchema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Eastpak Padded Backpack",
      "image": [
        "https://www.eravist.com/images/products/eastpak-padded-backpack.jpg"
      ],
      "description": "A stylish and practical backpack from Eastpak, made with high-quality materials, perfect for everyday use.",
      "sku": "12345",
      "brand": {
        "@type": "Brand",
        "name": "Eastpak"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.eravist.com/en/product/eastpak-padded-backpack/eastpak-padded-backpack",
        "priceCurrency": "USD",
        "price": "79.99",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "24"
      },
      "review": [
        {
          "@type": "Review",
          "author": "John Doe",
          "datePublished": "2025-11-01",
          "reviewBody": "Excellent backpack, very durable and practical!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Jane Smith",
          "datePublished": "2025-10-15",
          "reviewBody": "Good quality but the color is slightly different from the pictures.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          }
        }
      ]
    }
  
  
    const productSchemaJSON = JSON.stringify(productSchema).replace(/</g, "\\u003c");
  
    return {
      title: productName,
      description: productDescription,
      alternates: {
        canonical: canonicalURL, // ✅ إضافة canonical
      },
      openGraph: {
        title: productName,
        description: productDescription,
        url: canonicalURL,
        images: [{ url: image }],
      },
      twitter: {
        card: "summary_large_image",
        images: [image],
      },
      scripts: [
        {
          type: "application/ld+json",
          json: JSON.stringify(productSchema).replace(/</g, "\\u003c")
        },
      ]
    };
  }
  
  interface MetadataProps {
    params: { slug: string; sluglang: string };
  }
  