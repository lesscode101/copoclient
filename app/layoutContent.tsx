import './index.css'
import './globals.css'

import { ReactNode } from "react";
import { CartProvider } from "./CartContext";

export default function LayoutContent({ children }: { children: ReactNode }) {
  return (
  
        <CartProvider>
          {children}
        </CartProvider>
   
  );
}
