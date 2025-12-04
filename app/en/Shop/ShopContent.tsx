
"use client";


import './shop.css';
import { useEffect, useState, useCallback, useMemo, useContext } from "react";
import Link from "next/link";
import SortByDropdown from '@/app/components/Filter/SortByDropdown';
import HeaderSlim from '@/app/components/english/Header/HeaderSlim';
import { CartContext } from '@/app/CartContext';

import Head from "next/head";





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

interface Category {
    category: string;
    count: number;
}

interface Color {
    color: string;
    count: number;
}

interface Size {
    sizeName: string;
    count: number;
}

function getNewPrice(price: number, disc: number): string {
    const oldPrice = price;
    const discount = disc;

    if (!oldPrice || !discount || discount === 0) return oldPrice.toFixed(2);

    const newPrice = oldPrice - (oldPrice * discount) / 100;
    return newPrice.toFixed(2);
}

const ShopContent = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [searchActive, setSearchActive] = useState(false);
    const [sortOption, setSortOption] = useState("");

    const [category, setCategory] = useState("All");
    const [color, setColor] = useState("All");
    const [size, setSize] = useState("All");

    const [min, setMin] = useState(10);
    const [max, setMax] = useState(650);
    const minLimit = 0;
    const maxLimit = 1550;

    const [rawProducts, setRawProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [colors, setColors] = useState<Color[]>([]);
    const [sizes, setSizes] = useState<Size[]>([]);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const handleMinChange = (e: any) => setMin(Math.min(Number(e.target.value), max - 1));
    const handleMaxChange = (e: any) => setMax(Math.max(Number(e.target.value), min + 1));




    // Load categories/colors/sizes
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catRes, colRes, sizeRes] = await Promise.all([
                    fetch(`${API_URL}/api/categories`),
                    fetch(`${API_URL}/api/products/colors`),
                    fetch(`${API_URL}/api/products/sizes`)
                ]);

                const catData = await catRes.json();
                const colData = await colRes.json();
                const sizeData = await sizeRes.json();

                setCategories(catData);
                setColors(colData);
                setSizes(sizeData);

                const allCategory = catData.find((c: Category) => c.category === "All");
                if (allCategory) setTotalProducts(allCategory.count);

            } catch (err) {
                console.error(err);
            }
        };

        fetchData();


    }, [API_URL]);

    // Fetch products
    const fetchProducts = useCallback(async () => {
        try {
            const res = await fetch(
                `${API_URL}/api/products/search/page/${page}?q=${search}&minPrice=${min}&maxPrice=${max}&category=${category}&color=${color}&size=${size}`
            );
            const data = await res.json();


            setRawProducts(data.products);
            setTotalPages(data.totalPages);
            setTotalItems(data.totalItems);

        } catch (err) {
            console.error(err);
        }

    }, [API_URL, page, search, min, max, category, color, size]);

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
        <div className="app">
            <Head>
                <title>Shop Page | Eravist</title>
            </Head>

            <HeaderSlim countWish={cart.wishlist.length} countCart={cart.cartlist.length} />

            <div className="breadcrumb" aria-label="Breadcrumb">
                <ul className="container">
                    <li><Link href="/">Home</Link></li>
                    <li><span aria-current="page">Shop</span></li>
                </ul>
            </div>
            <section className="shop-page">


                < div className="container" >
                    <div className="row">

                        {/* Sidebar */}
                        <aside className="filter-side">
                            {/* Categories */}
                            <div className="box">
                                <div className="head"><h4>Collection</h4></div>
                                <div className="content">
                                    {categories.map(c => (
                                        <button
                                            key={c.category}
                                            className={`link-btn ${category === c.category ? "active" : ""}`}
                                            onClick={() => { setCategory(c.category); setPage(1); }}
                                            aria-pressed={category === c.category}
                                        >
                                            {c.category} <span className="count">({c.count})</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Colors */}
                            <div className="box">
                                <div className="head"><h4>Colors</h4></div>
                                <div className="content">
                                    {colors.map(c => (
                                        <button
                                            key={c.color}
                                            className={`link-btn ${color === c.color ? "active" : ""}`}
                                            onClick={() => { setColor(c.color); setPage(1); }}
                                        >
                                            {c.color} <span className="count">({c.count})</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sizes */}
                            <div className="box">
                                <div className="head"><h4>Sizes</h4></div>
                                <div className="content">
                                    {sizes.map(s => (
                                        <button
                                            key={s.sizeName}
                                            className={`link-btn ${size === s.sizeName ? "active" : ""}`}
                                            onClick={() => { setSize(s.sizeName); setPage(1); }}
                                        >
                                            {s.sizeName} <span className="count">({s.count})</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price slider */}
                            <div className="box">
                                <div className="head"><h4>Prix</h4></div>
                                <div className="slider">
                                    <input type="range" min={minLimit} max={maxLimit} value={min} onChange={handleMinChange} className="thumb thumb-left" aria-label="Price Range Min "/>
                                    <input type="range" min={minLimit} max={maxLimit} value={max} onChange={handleMaxChange} className="thumb thumb-right" aria-label="Price Range Max"/>
                                    <div className="slider-track"></div>
                                    <div className="slider-range"
                                        style={{
                                            left: `${(min / maxLimit) * 100}%`,
                                            width: `${((max - min) / maxLimit) * 100}%`
                                        }}>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <span>{min}</span><span className="cur">Dhs</span><strong>-</strong>
                                    <span>{max}</span><span className="cur">Dhs</span>
                                </div>
                            </div>
                        </aside>

                        {/* Main Page */}
                        <div className="main-page">
                            {/* Filters Row */}
                            <div className="heading">
                                <div className="line">
                                    <h1 className="title">Store</h1>
                                    <div className="choices">
                                        {category !== "All" && <button className="filter-box" onClick={() => setCategory("All")}>{category} ×</button>}
                                        {color !== "All" && <button className="filter-box" onClick={() => setColor("All")}>{color} ×</button>}
                                        {size !== "All" && <button className="filter-box" onClick={() => setSize("All")}>{size} ×</button>}
                                    </div>
                                </div>

                                <div className="filter-row">
                                    <div className="filter-left">
                                        <span>Discover {sortedProducts.length} items out of the ({totalItems}) available</span>
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
                            <div className="products-items">
                                {sortedProducts.map(product => (
                                    <div key={product.id} className="product-card">
                                        <Link href={`/product/${product.slug}`}>
                                            <div className="image">
                                                <img src={`${API_URL + product.image}`} alt={product.name} loading="lazy" />
                                            </div>
                                        </Link>

                                        <div className="meta">
                                            <h2 className="product-name">
                                                <Link href={`/product/${product.slug}`}>{product.name}</Link>
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
                    </div>
                </div >
            </section >
        </div>


    );
};

export default ShopContent;
