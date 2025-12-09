"use client"; 

import { ReactNode } from "react";
import LayoutContent from "./layoutContent";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
