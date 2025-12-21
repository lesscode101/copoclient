'use client'
import { ReactNode, useEffect } from "react";
import { CartProvider } from "./CartContext";
import { usePathname } from "next/navigation";

export default function LayoutContent({ children }: { children: ReactNode }) {
  function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
      if (pathname.includes("collection")) {
        const section = document.getElementById("collection");
        section?.scrollIntoView({ behavior: "smooth" });
      } else if (pathname.includes("rating")) {
        const section = document.getElementById("rating");
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: -10, left: 0, behavior: "smooth" });
      }
    }, [pathname]);
    return null;
  }
  return (

    <CartProvider>
      <ScrollToTop />

      {children}
    </CartProvider>

  );
}
