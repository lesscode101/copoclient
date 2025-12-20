"use client";
import "./cart.css";
import { useEffect, useState, useContext, useRef } from "react";
import Link from "next/link";
import { CartContext } from "@/app/CartContext";

interface CartItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount: number; // نسبة خصم من الـ API
  image: string;
  quantity: number;
}

interface CartProps {
  active: boolean;
  onClose: () => void;
}

function Cart({ active, onClose }: CartProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cartlist, updateCartQty, removeFromCart } = cartContext;

  const cartRef = useRef<HTMLDivElement>(null);

  // إغلاق الكارت عند النقر خارج العنصر
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, onClose]);

  useEffect(() => {
    if (active) loadCartFromContext();
  }, [active, cartlist]);

  const loadCartFromContext = async () => {
    if (cartlist.length === 0) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      const ids = cartlist.map(item => item.id);
      const res = await fetch(`${API_URL}/api/products/cart?ids=${ids.join(",")}`);
      console.log(`${API_URL}/api/products/cart?ids=${ids.join(",")}`)
      if (!res.ok) throw new Error("Failed to fetch products");
      const data: CartItem[] = await res.json();

      const items = data.map(item => {
        const saved = cartlist.find(c => c.id === item.id);

        return {
          ...item,
          quantity: saved?.quantity || 1,
          discount: item.discount || 0 // جلب الخصم من API
        };
      });

      setCartItems(items);
    } catch (err) {
      console.error(err);
      setCartItems([]);
    }
    setLoading(false);
  };

  const handleIncreaseQty = (id: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.min(item.quantity + 1, 5); 
          updateCartQty(id, newQty); 
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };
  const handleDecreaseQty = (id: number) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;

    if (item.quantity > 1) {
      setCartItems(prev =>
        prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
      );
      updateCartQty(id, item.quantity - 1);
    } else {
      setCartItems(prev => prev.filter(i => i.id !== id));
      removeFromCart(id);
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
    removeFromCart(id);
  };

  // حساب السعر بعد الخصم (نسبة %)
  const getDiscountedPrice = (price: number, discount: number) => {
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  };

  // إجمالي السلة
  const totalPrice = cartItems.reduce((sum, item) => {
    const finalPrice = getDiscountedPrice(item.price, item.discount);
    return sum + finalPrice * item.quantity;
  }, 0);

  if (loading) return <p className="loading">Loading cart...</p>;

  return (
    <div ref={cartRef} className={active ? "rightbox cart active" : "rightbox cart"}>
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
            {cartItems.map(item => {
              const finalPrice = getDiscountedPrice(item.price, item.discount);

              return (
                <div className="item" key={item.id}>
                  <Link href={`/en/product/${item.slug}/${item.slug}`} className="item-name">{item.name}</Link>

                  <Link href={`/en/product/${item.slug}/${item.slug}`}>
                    <span className="item-image"><img src={API_URL + item.image} alt={item.name} /></span>
                  </Link>

                  <div className="item-quantity">
                    <button className="btn-qnt" onClick={() => handleDecreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn-qnt" onClick={() => handleIncreaseQty(item.id)}>+</button>
                  </div>

                  <span className="item-price">
                    {item.discount &&
                      <div className="subprice">{item.quantity +' x '+(finalPrice * 1).toFixed(2)} mad </div>
                    }

                    {(finalPrice * item.quantity).toFixed(2)} <small>mad</small>
                  </span>

                  <div className="item-delete">
                    <button aria-label="remove product" className="btn-trash" onClick={() => handleRemoveItem(item.id)}>
                      <i className="icon-dark-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="summer">
        <h3>Total: {totalPrice.toFixed(2)} <small>mad</small></h3>
        <Link href="/en/checkout" className="btn-checkout">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
