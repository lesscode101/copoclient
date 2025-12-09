"use client";

import { useEffect, useState } from "react";
import "./checkout.css";
import Cookies from "js-cookie";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: number;
    discount: number;
    quantity: number;
    subtotal: number;
}

function Checkout() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [products, setProducts] = useState([]);
    const [accept, setAccept] = useState(false);

    const [total, setTotal] = useState(0);
    const [success, setSuccess] = useState("");
    const [cookiesCart, setCookiesCart] = useState<Product[]>([]);

    useEffect(() => {
        verifyCart();
    }, []);

    const verifyCart = async () => {
        const savedCart = Cookies.get("cartlist");
        const cart = savedCart ? JSON.parse(savedCart) : [];

        const response = await fetch(`${API_URL}/api/checkout/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart })
        });

        const data = await response.json();
        console.log(data)
        const updatedItems = data.items.map((item: Product) => {
            setProducts(data.items)
            return {
                ...item,
                id: data.id,
                quantity: data.quantity
            };
        });


        setCookiesCart(updatedItems);
        setTotal(data.total);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!accept) {
            setSuccess('You must accept the terms and conditions to proceed to checkout.');

            return
        }

        const formData = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            items: cookiesCart,
            total: total,
            status: "pending"
        };

        const response = await fetch(`${API_URL}/api/checkout/save-order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        setSuccess(data.message);
    };

    return (
        <section className="checkout">
            <div className="checkout-header">
                <div className="container">
                    <div className="logo-checkout">
                        <a className="logo-link" href="/">
                            <img width="24" src="/logo.svg" />
                            <div className="strong">Eravist</div>
                        </a>
                    </div>
                    <Link href='/en/Shop' className="btn-back" aria-label="Back To Shop">Back To Shop</Link>
                </div>
            </div>


            <div className="items">
                <div className="item">
                    <div className="checkout-form">
                        <div className="heading">
                            <h1 className="title">Delivery Contact Information</h1>

                        </div>

                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="field">
                                    <span className="label-text">Full name</span>
                                    <input type="text" name="fullName" className="input" required />
                                </div>

                                <div className="field">
                                    <span className="label-text">Phone number</span>
                                    <input type="tel" name="phone" className="input" pattern="[0-9+\s\-()]{6,}" required />
                                </div>
                            </div>
                            <div className="field">
                                <span className="label-text">Email*</span>
                                <input type="email" name="email" className="input" />
                            </div>


                            <div className="field">
                                <label className="label-text">Address/Delivery Location</label>
                                <textarea name="address" className="input" rows={3} required></textarea>
                            </div>

                            <div className={accept ? "subtitle active" : 'subtitle'} onClick={() => setAccept(!accept)}>
                                <input type="checkbox" name="" id="accpet" checked={accept} />
                                <label >I confirm that I accept the website’s terms and agree to pay upon delivery.</label>
                            </div>
                            <div className="msg">
                                {success.length > 5 && (
                                    <div className="success-note">{success}</div>
                                )}
                            </div>


                            <div className="actions">
                                <button type="submit" className="btn-confirm">Confirm order</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="item">
                    <div className="checkout-card">
                        <h1 className="title">Order Summary</h1>

                        <ul className="content-card">
                            {products.map((item: Product) => (
                                <li key={item.id}>
                                    <div className="col-line">
                                        <span className="name">{item.name}</span>

                                        {item.discount > 0 && (
                                            <div className="discount-line">
                                                <small className="price">
                                                    {Number(item.price).toFixed(2) + ' - ' + item.discount + '%'}
                                                </small> × {item.quantity}
                                            </div>
                                        )}
                                    </div>

                                    <span className="subtotal">
                                        {Number(item.subtotal).toFixed(2)} <small>mad</small>
                                    </span>


                                </li>
                            ))}
                        </ul>

                        <h1 className="total">
                            Total Price: <span>{Number(total).toFixed(2)} <small>mad</small></span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="desc">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="description">
                <span>Pay on Delivery</span>
                <span>Cash on Delivery</span>
                <span>Pay When Delivered</span>
                <span>Payment Upon Delivery</span>
                <span>Pay at the Door</span>
                <span>COD Payment</span>
                <span>Secure Pay on Delivery</span>
                <span>Delivery Payment Option</span>
                <span>Pay When You Receive Your Order</span>
                <span>Pay After Delivery</span>
                <span>Order Summary</span>
                <span>Order Overview</span>
                <span>Your Order Overview</span>
                <span>Order Details</span>
                <span>Here’s Your Order</span>
                <span>Your Items & Total</span>
                <span>What You’re Getting</span>
                <span>Order Summary & Total Price</span>
                <span>Order Details and Final Total</span>
                <span>Review Your Items Before Checkout</span>
            </div>

            <div className="copyright">
                <p>© All Rights Reserved | 2022 - 2025 ERAVIST STORES.</p>
            </div>
        </section >
    );
}

export default Checkout;
