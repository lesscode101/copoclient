"use client"; // <-- Add this at the very top
import './globals.css'
import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

type CartContextType = {
  wishlist: number[];
  cartlist: number[];
  addToWishlist: (ID: number) => void;
  addToCartlist: (ID: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartlist, setCartlist] = useState<number[]>([]);

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

  const addToCartlist = (ID: number) => {
    setCartlist(prev => {
      if (prev.includes(ID)) return prev;
      const updated = [...prev, ID];
      Cookies.set("cartlist", JSON.stringify(updated), { expires: 7 });
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ wishlist, cartlist, addToWishlist, addToCartlist }}>
      {children}
    </CartContext.Provider>
  );
};
