import ContentOrder from "./OrderClient";
import './../../checkout.css'
import Link from "next/link";

interface OrderPageProps {
  params: { order: string };
}

// ✅ Server Component
export default async function OrderPage({ params }: OrderPageProps) {
  const { order } = await params;

  // SEO metadata
  const title = `Track Your Order #${order} | Eravist`;
  const description = `Check the status of your order #${order} on Eravist. View your items, quantities, and total price easily.`;
  const canonical = `https://eravist.com/en/checkout/track-order/${order}`;

  return (
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph / Social */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eravist" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />


      <section className="checkout">
            <div className="checkout-header">
                <div className="container">
                    <Link href="/" className="logo-link">
                        <img src="/logo.svg" width={24} alt="Eravist" />
                        <span>eravist</span>
                    </Link>

                    <Link href="/en/shop" className="btn-back">
                        Back To Shop
                    </Link>
                </div>
            </div>

          
            <ContentOrder order={order} />

            <div className="copyright">
                <p>© All Rights Reserved | 2022 - 2025 ERAVIST STORES.</p>
            </div>
        </section>
    </>
  );
}
