



import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import ShopContent from "./ShopContent"; // Client Component
import Link from "next/link";
import Footer from "@/app/components/english/Footer/Footer";
import Services from "@/app/components/english/Lists/Services";

export default function ShopPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const base = process.env.NEXT_PUBLIC_API_URL;
    const desc = "Browse our amazing products in the Eravist Shop. Find the best deals and discounts!";

    const canonical = `${base}/en/shop/premium`;
    const image = `${API_URL}/images/shop.webp`;


    return (

        <>

            <title>Shop Page</title>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={desc} />


            <HeaderSlim />

            <div className="breadcrumb">
                <ul className="container">
                    <li>
                        <Link className="link" href="/">Home</Link>
                    </li>

                    <li>
                        <span>Shop</span>
                    </li>
                </ul>
            </div>

            <ShopContent />
            <Footer />
        </>

    )
}
