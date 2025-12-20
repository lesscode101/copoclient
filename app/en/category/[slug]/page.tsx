import './../../shop/shop.css'
import SectionContent from "./SectionContent";
import Footer from "@/app/components/english/Footer/Footer";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import Services from "@/app/components/english/Lists/Services";
import Link from "next/link";

async function getCategory(slug: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(
    `${API_URL}/api/categories/slug/${slug}`,
    { next: { revalidate: 300 } } // ✅ Cache ذكي
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const data = await getCategory(slug);

  if (!data) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const base = "https://eravist.com";

  const title = `${data.name} in Morocco`;
  const desc = data.content || title;
  const image = `${API_URL}${data.category_image || ""}`;
  const canonical = `${base}/en/section/${slug}`;

  return (
    <>
      {/* SEO */}
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />

      <HeaderSlim />

      <div className="breadcrumb">
        <ul className="container">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/en/shop">Shop</Link></li>
          <li><span aria-current="page">{data.name}</span></li>
        </ul>
      </div>

      <SectionContent
        initialProducts={data.products}
        categoryName={data.name}
      />

      <Services />
      <Footer />
    </>
  );
}
