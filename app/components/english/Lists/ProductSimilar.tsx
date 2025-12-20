"use client"; // <-- Add this at the very top

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { CartContext } from '@/app/CartContext';
interface Product {
    id: number;
    slug: string;
    name: string;
    image: string;
    color: string;
    size: number;
    price: number;
    discount: number;
    finalPrice: number;
}

interface ProductListProps {
    title: string;
}
const ProductSimilar: React.FC<ProductListProps> = ({ title }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [products, setProducts] = useState([]);
    const [link, setLink] = useState('premium')
    const [newTitle, setNewTitle] = useState('')

    const fetchProducts = async () => {
        let url = `${API_URL}/api/products/last`

        if (title == 'New Arrivals') {
            setLink('/en/Shop/Arrivals')
            setNewTitle('New Arrivals')
        } else {
            setLink('/en/Shop/Premium')
            setNewTitle('Premium')
            url = `${API_URL}/api/products/premium`
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            const mappedProducts = data.map((p: Product) => {

                const price = Number(p.price);
                const discount = Number(p.discount);
                return {
                    ...p,
                    price:price.toFixed(2),
                    discount,
                    finalPrice: discount > 0 ? (price - (price * discount) / 100 ).toFixed(2) : price.toFixed(2)
                };
            });
            setProducts(mappedProducts);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    const cart = useContext(CartContext);
    if (!cart) return null;

    return (


        <section className="item-list" >

            <Swiper slidesPerView={2} modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                breakpoints={{
                    1224: { slidesPerView: 2 }, // large
                    844: { slidesPerView: 2 },  // medium
                    494: { slidesPerView: 1 },  // medium
                    0: { slidesPerView: 1 }     // small
                }}
            >


                {products.map((product: Product) => (

                    <SwiperSlide>
                        <div key={product.id} className="product-box">
                            <Link href={`/en/product/${product.slug}/${product.slug}#top`}>

                                <div className="image">
                                    <img src={`${API_URL + product.image}`} alt={product.name} />
                                </div>
                            </Link>
                            <div className="meta">

                                <h1 className="product-name ">
                                    <Link href={`/en/product/${product.slug}/${product.slug}`}>
                                        {product.name}
                                    </Link>
                                </h1>

                                <div className="subtitle">{product.color} • {product.size} L</div>
                                <p className="price">{product.finalPrice} <small>MAD</small> </p>
                                <p className="old">{product.price} <small>MAD</small> </p>

                            </div>



                            <div className="icons">
                                <button className="icon icon-wish" aria-label="Add to wishlist" onClick={() => cart.addToWishlist(product.id)}>
                                    <i className="icon-dark-heart"></i>
                                </button>
                                <button className="icon icon-cart" aria-label="Add to Cart" onClick={() => cart.addToCartlist(product.id)}>
                                    <i className="icon-dark-shopping"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
        </section>



    )
}

export default ProductSimilar
