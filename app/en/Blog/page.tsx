"use client";

import type { NextPage } from "next";
import Link from "next/link";
import HeaderSlim from "@/app/components/english/Header/HeaderSlim";
import Services from "@/app/components/english/Lists/Services";
import Footer from "@/app/components/english/Footer/Footer";
import BlogList from "@/app/components/english/BlogList/BlogList";
import { useContext } from "react";
import { CartContext } from "@/app/CartContext";


const Blog: NextPage = () => {


  const cart = useContext(CartContext);

  if (!cart) return null; // safety check

  return (
    <div className="app">
      <HeaderSlim countWish={cart.wishlist.length} countCart={cart.cartlist.length} />


      <main className="app">
        
        <div className="breadcrumb">
          <ul className="container">
            <li>
              <Link className="link" href="/">
                Home
              </Link>
            </li>

            <li>
              <span>Blog</span>
            </li>
          </ul>
        </div>

        <BlogList />




        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
