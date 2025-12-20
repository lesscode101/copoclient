"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

type CartItem = { id: number; quantity: number };

type CartContextType = {
  wishlist: number[];
  cartlist: CartItem[];
  addToWishlist: (ID: number) => void;
  addToCartlist: (ID: number, qty?: number) => void;
  updateCartQty: (ID: number, qty: number) => void;
  removeFromCart: (ID: number) => void;
  removeFromWish: (ID: number) => void;
  cleanCart: () => void;

};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartlist, setCartlist] = useState<CartItem[]>([]);

  // Load from cookies on mount
  useEffect(() => {
    const cookie_w = Cookies.get("wishlist");
    const cookie_c = Cookies.get("cartlist");
    if (cookie_w) setWishlist(JSON.parse(cookie_w));
    if (cookie_c) setCartlist(JSON.parse(cookie_c));
  }, []);

  const addToWishlist = (ID: number) => {
    setWishlist(prev => {
      if (prev.includes(ID)) return prev;
      const updated = [...prev, ID];
      Cookies.set("wishlist", JSON.stringify(updated), { expires: 7 });
      return updated;
    });
  };

  const addToCartlist = (ID: number, qty: number = 1) => {
    setCartlist(prev => {
      const existing = prev.find(item => item.id === ID);
      let updated: CartItem[];
      if (existing) {
        updated = prev.map(item => item.id === ID ? { ...item, quantity: item.quantity + qty } : item);
      } else {
        updated = [...prev, { id: ID, quantity: qty }];
      }
      Cookies.set("cartlist", JSON.stringify(updated), { expires: 7 });
      return updated;
    });
  };

  const updateCartQty = (ID: number, qty: number) => {
    setCartlist(prev => {
      const updated = prev.map(item => item.id === ID ? { ...item, quantity: qty } : item);
      Cookies.set("cartlist", JSON.stringify(updated), { expires: 7 });
      return updated;
    });
  };

  const removeFromCart = (ID: number) => {
    setCartlist(prev => {
      const updated = prev.filter(item => item.id !== ID);
      Cookies.set("cartlist", JSON.stringify(updated), { expires: 7 });
      return updated;
    });
  };

  const cleanCart = () => {
    Cookies.set("cartlist", JSON.stringify([]), { expires: 7 });
  };

  // ✅ Correct removeFromWish
  const removeFromWish = (ID: number) => {
    setWishlist(prev => {
      const updated = prev.filter(item => item !== ID); // filter wishlist
      Cookies.set("wishlist", JSON.stringify(updated), { expires: 7 }); // update cookie
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{
      wishlist,
      cartlist,
      addToWishlist,
      addToCartlist,
      updateCartQty,
      removeFromCart,
      cleanCart,
      removeFromWish
    }}>
      {children}
    </CartContext.Provider>
  );
};
