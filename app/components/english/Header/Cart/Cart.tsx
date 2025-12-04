"use client";
import "./cart.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  active: boolean,
  onClose: () => void;

}

function Cart({ active, onClose }: CartProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (active) {
      loadCartFromCookies();

    }
  }, [active]);

  const loadCartFromCookies = async () => {
    const savedCart = Cookies.get("cartlist");
    if (savedCart) {
      try {
        const ids: number[] = JSON.parse(savedCart);
        if (ids.length === 0) {
          setCartItems([]);
          setLoading(false);
          return;
        }

        const res = await fetch(`${API_URL}/api/products/cart?ids=${ids.join(",")}`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data: CartItem[] = await res.json();
        const items = data.map((item) => ({ ...item, quantity: 1 }));
        setCartItems(items);
      } catch (err) {
        console.error("Failed to load cart:", err);
        setCartItems([]);
      }
    }
    setLoading(false);
  };

  // --- حفظ السلة في cookie ---
  const saveCartToCookies = (items: CartItem[]) => {
    const ids = items.map((i) => i.id);
    Cookies.set("cartlist", JSON.stringify(ids));
  };

  // --- حذف منتج من السلة ---
  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCartToCookies(updatedCart);
  };

  // --- زيادة الكمية ---
  const handleIncreaseQty = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    saveCartToCookies(updatedCart);
  };

  // --- نقص الكمية ---
  const handleDecreaseQty = (id: number) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
    saveCartToCookies(updatedCart);
  };

  // --- السعر الإجمالي ---
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className={active ? "rightbox cart active" : "rightbox cart "}>
      <span className="close-icon" onClick={onClose}>
        <i className="icon-dark-plus"></i>
      </span>

      <div className="heading">
        <h2 className="title">Your Shopping Cart</h2>
      </div>

      <div className="content">
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty</p>
        ) : (
          <div className="items">
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <Link
                  href={`/product/${item.slug}`}
                  className="item-name"
                  data-discover="true"
                >
                  {item.name}
                </Link>
                <Link href={`/product/${item.slug}`}>
                  <span className="item-image">
                    <img src={API_URL + item.image} alt={item.name} />
                  </span>
                </Link>

                <div className="item-quantity">
                  <button
                    className="btn-qnt"
                    onClick={() => handleDecreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn-qnt"
                    onClick={() => handleIncreaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
                <span className="item-price">
                  {(item.price * item.quantity).toFixed(2)} <small>mad</small>
                </span>
                <div className="item-delete">
                  <button
                    aria-label="remove product"
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

      <div className="summer">
        <h3>
          Total: {totalPrice.toFixed(2)} <small>mad</small>
        </h3>
        <Link href="/checkout" className="btn-checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
