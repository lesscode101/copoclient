"use client";
import "./cart.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

interface WishItem {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
}

interface WishProps {
    active: boolean;
    onClose: () => void;
}

function WishList({ active, onClose }: WishProps) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [items, setItems] = useState<WishItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (active) loadWishlistFromCookies();
    }, [active]);

    const loadWishlistFromCookies = async () => {
        const saved = Cookies.get("wishlist");
        if (saved) {
            try {
                const ids: number[] = JSON.parse(saved);

                if (ids.length === 0) {
                    setItems([]);
                    setLoading(false);
                    return;
                }

                const res = await fetch(`${API_URL}/api/products/cart?ids=${ids.join(",")}`);
                if (!res.ok) throw new Error("Failed to fetch wishlist");

                const data: WishItem[] = await res.json();
                setItems(data);
            } catch (err) {
                console.error("Failed to load wishlist:", err);
                setItems([]);
            }
        }
        setLoading(false);
    };

    const saveWishlistToCookies = (items: WishItem[]) => {
        const ids = items.map((i) => i.id);
        Cookies.set("wishlist", JSON.stringify(ids));
    };

    const handleRemoveItem = (id: number) => {
        const updated = items.filter((item) => item.id !== id);
        setItems(updated);
        saveWishlistToCookies(updated);
    };

    if (loading) return <p>Loading wishlist...</p>;

    return (
        <div className={active ? "rightbox wishlist active" : "rightbox wishlist"}>
            <span className="close-icon" onClick={onClose}>
                <i className="icon-dark-plus"></i>
            </span>

            <div className="heading">
                <h2 className="title">Your Wishlist</h2>
            </div>

            <div className="content">
                {items.length === 0 ? (
                    <p className="empty-msg">Your wishlist is empty</p>
                ) : (
                    <div className="items">
                        {items.map((item) => (
                            <div className="item" key={item.id}>
                                <Link href={`/product/${item.slug}`} className="item-name">
                                    {item.name}
                                </Link>

                                <Link href={`/product/${item.slug}`}>
                                    <span className="item-image">
                                        <img src={API_URL + item.image} alt={item.name} />
                                    </span>
                                </Link>

                                <span className="item-price">
                                    {(item.price * 1).toFixed(2)} <small>mad</small>

                                </span>

                                <div className="item-delete">
                                    <button
                                        aria-label="remove item"
                                        className="btn-trash"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <i className="icon-dark-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default WishList;
