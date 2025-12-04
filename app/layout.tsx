"use client"; // ضعها في الأعلى

import { ReactNode } from "react";
import { CartProvider } from "./CartContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
