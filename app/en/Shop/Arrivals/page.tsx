import "./../shop.css";

import ListContent from "@/app/en/shop/listContent";

// Fetch data
async function getArrivals() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/products/arrivals`, { cache: "no-cache" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ArrivalsPage() {
  const products = Array.isArray(await getArrivals()) ? await getArrivals() : [];
  const base = "https://eravist.com";

  const title = "Buy New Arrivals Backpacks in Morocco | Eravist";
  const desc = "Discover our premium selection of new arrival backpacks designed for professionals, commuters, and travelers.";
  const canonical = `${base}/en/shop/arrivals`;
  const image = `${base}/images/default.webp`;

  return (
    <>
      {/* SEO */}
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

      <ListContent products={products} titleName="New Arrivals" />
    
    </>
  );
}
