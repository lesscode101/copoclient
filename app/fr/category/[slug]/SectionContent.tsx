
"use client";


import './../../shop/shop.css';
import { useEffect, useState, useCallback, useMemo, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SortByDropdown from '@/app/components/Filter/SortByDropdown';
import HeaderSlim from '@/app/components/english/Header/HeaderSlim';
import { CartContext } from '@/app/CartContext';
import { useParams } from 'next/navigation';





interface Product {
    id: number;
    slug: string;
    name: string;
    image: string;
    price: number;
    discount: number;
    size: string;
    color: string;
}




function getNewPrice(price: number, disc: number): string {
    const oldPrice = price;
    const discount = disc;

    if (!oldPrice || !discount || discount === 0) return oldPrice.toFixed(2);

    const newPrice = oldPrice - (oldPrice * discount) / 100;
    return newPrice.toFixed(2);
}

const SectionContent = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const { slug } = useParams();

    const [searchActive, setSearchActive] = useState(false);
    const [sortOption, setSortOption] = useState("");


    const [rawProducts, setRawProducts] = useState<Product[]>([]);


    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);


    // Fetch products
    const fetchProducts = useCallback(async () => {
        try {
            console.log(
                `${API_URL}/api/products/search/page/${page}?q=${search}&category=${slug}`

            )
            const res = await fetch(
                `${API_URL}/api/products/search/page/${page}?q=${search}&category=${slug}`
            );
            const data = await res.json();


            setRawProducts(data.products);
            setTotalPages(data.totalPages);
            setTotalItems(data.totalItems);

        } catch (err) {
            console.error(err);
        }

    }, [API_URL, page, search, slug]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Sorted products
    const sortedProducts = useMemo(() => {
        let sorted = [...rawProducts];

        if (sortOption === "az") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sortOption === "priceLowHigh") {
            sorted.sort((a, b) =>
                parseFloat(getNewPrice(a.price, a.discount)) -
                parseFloat(getNewPrice(b.price, b.discount))
            );
        }

        if (sortOption === "priceHighLow") {
            sorted.sort((a, b) =>
                parseFloat(getNewPrice(b.price, b.discount)) -
                parseFloat(getNewPrice(a.price, a.discount))
            );
        }

        return sorted;

    }, [rawProducts, sortOption]);


    const cart = useContext(CartContext);

    if (!cart) return null; // safety check

    return (


        <section className="shop-page">

            <HeaderSlim />



            <div className="breadcrumb">
                <ul className="container">
                    <li>
                        <Link className="link" href="/">Home</Link>
                    </li>
                    <li><Link className='link' href="/en/shop">Shop</Link></li>
                    <li><span aria-current="page">{slug}</span></li>


                </ul>
            </div>

            < div className="container" >

                {/* Main Page */}
                <div className="main-page">
                    {/* Filters Row */}
                    <div className="heading">
                        <div className="line">
                            <h1 className="title">{slug}</h1>

                        </div>

                        <div className="filter-row">
                            <div className="filter-left">
                                <span>Discover {totalItems} items out of the ({totalItems}) available</span>
                            </div>

                            <div className="filter-right">
                                <div className="search-content">
                                    <div className={`search-box ${searchActive ? "active" : ""}`}>
                                        <input
                                            type="text"
                                            className="inputi"
                                            placeholder="Search..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <button className="icon" aria-label="Search.." onClick={() => setSearchActive(!searchActive)}>
                                            <i className="icon-dark-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <span className="space">|</span>
                                <div className="sort-content">
                                    <SortByDropdown onSelect={setSortOption} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="products-items products-items-4">
                        {sortedProducts.map(product => (
                            <div key={product.id} className="product-box">
                                <Link href={`/en/product/${product.slug}/${product.slug}`}>
                                    <div className="image">
                                        <Image
                                            src={`${API_URL + product.image}`}
                                            alt={product.name}
                                            width={390}
                                            height={390} // Required to fix CLS and reserve space
                                            priority={true} // Use priority for LCP candidate images (instead of lazy loading)
                                        />
                                    </div>
                                </Link>

                                <div className="meta">
                                    <h2 className="product-name">
                                        <Link href={`/en/product/${product.slug}/${product.slug}`}>{product.name}</Link>
                                    </h2>
                                    <div className="subtitle">{product.color} • {product.size} L</div>
                                    <p className="price">{getNewPrice(product.price, product.discount)} <small>Dhs</small></p>
                                    {product.discount > 0 &&
                                        <p className="old">{product.price} <small>Dhs</small></p>
                                    }
                                </div>

                                <div className="icons">
                                    <button className="icon icon-wish" aria-label="Add to Wishlist" onClick={() => cart.addToWishlist(product.id)}>
                                        <i className="icon-dark-heart"></i>
                                    </button>
                                    <button className="icon icon-cart" aria-label="Add to Cart" onClick={() => cart.addToCartlist(product.id)}>
                                        <i className="icon-dark-shopping"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* placeholders to keep grid shape */}
                        {Array.from({ length: Math.max(0, 6 - sortedProducts.length) }).map((_, i) => (
                            <div key={i} className="product-box-b"></div>
                        ))}
                    </div>


                    {/* Pagination */}
                    <nav className="pagination">
                        <span className="btns">
                            <button disabled={page <= 1} className={page <= 1 ? "btn btn-disabled" : "btn"} aria-label="Precdent Page" onClick={() => setPage(page - 1)}>
                                <div className="icon"><i className="icon-dark-chevron left"></i></div>
                            </button>
                        </span>
                        <span className="info">
                            {page - 1 > 0 &&
                                <button className="strong active" onClick={() => setPage(page - 1)}>
                                    {page - 1}
                                </button>
                            }

                            <div className="strong"><strong>{page}</strong></div>

                            {page < totalPages &&
                                <button className="strong active" onClick={() => setPage(page + 1)}>
                                    {page + 1}
                                </button>
                            }
                        </span>

                        <span className="btns">
                            <button disabled={page >= totalPages} className={page >= totalPages ? "btn btn-disabled" : "btn"} aria-label="Next Page" onClick={() => setPage(page + 1)}>
                                <div className="icon"><i className="icon-dark-chevron right"></i></div>
                            </button>
                        </span>
                    </nav>
                </div>
            </div >
        </section >


    );
};

export default SectionContent;
