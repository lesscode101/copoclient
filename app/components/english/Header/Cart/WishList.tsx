"use client";
import "./cart.css";
import { useEffect, useState, useContext, useRef } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { CartContext } from "@/app/CartContext";

interface ProductItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount: number;
  finalPrice: number;
  image: string;
}

interface WishProps {
  active: boolean;
  onClose: () => void;
}

function WishList({ active, onClose }: WishProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [items, setItems] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { wishlist, removeFromWish } = cartContext;

  const wishRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند النقر خارج العنصر
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wishRef.current && !wishRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [active, onClose]);

  // تحميل بيانات wishlist من API
  useEffect(() => {
    if (active) loadWishlist();
  }, [active, wishlist]);

  const loadWishlist = async () => {
    if (wishlist.length === 0) {
      setItems([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/products/cart?ids=${wishlist.join(",")}`);
      if (!res.ok) throw new Error("Failed to fetch wishlist");
      const data: ProductItem[] = await res.json();
      data.forEach(item => {
        item.finalPrice = getDiscountedPrice(item.price, item.discount);

      });
      setItems(data);
    } catch (err) {
      console.error(err);
      setItems([]);
    }
    setLoading(false);
  };

  const getDiscountedPrice = (price: number, discount: number) => {
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  };

  // إزالة عنصر من الـwishlist
  const handleRemoveItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
    const updatedWishlist = wishlist.filter(w => w !== id);
    Cookies.set("wishlist", JSON.stringify(updatedWishlist), { expires: 7 });
    removeFromWish(id);

  };

  if (loading) return <p className="loading">Loading wishlist...</p>;

  return (
    <div ref={wishRef} className={active ? "rightbox wishlist active" : "rightbox wishlist"}>
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
            {items.map(item => (
              <div className="item" key={item.id}>
                <Link href={`/product/${item.slug}`} className="item-name">{item.name}</Link>

                <Link href={`/product/${item.slug}`}>
                  <span className="item-image">
                    <img src={API_URL + item.image} alt={item.name} />
                  </span>
                </Link>
                <div className="item-quanity">-</div>

                <span className="item-price">{item.finalPrice.toFixed(2)} <small>mad</small></span>
                <div className="item-delete">
                  <button className="btn-trash" onClick={() => handleRemoveItem(item.id)}>
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
