"use client";

import { useEffect, useState } from "react";
import "./checkout.css";
import Cookies from "js-cookie";
interface Product{
id:number,
name:string,
price:number,
subtotal:number,
quantity:number
}
function Checkout() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [total, setTotal] = useState(0);
    const [success, setSuccess] = useState('');

    const [cookiesCart, setCookiesCart] = useState([]);

    useEffect(() => {
        //loadCartFromCookies();
        verifyCart()
    }, []);

    const verifyCart = async () => {
        const savedCart = Cookies.get("cartlist");
        const cart = savedCart ? JSON.parse(savedCart) : [];

        const response = await fetch(`${API_URL}/api/checkout/verify/ids`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart })
        });

        const data = await response.json();
        setTotal(data.total)
        console.log(data.items);
        setCookiesCart(data.items);

        console.log(data.total);
    };

    const loadCartFromCookies = () => {
        const savedCart = Cookies.get("cartlist");
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCookiesCart(parsedCart);


            const totalValue = parsedCart.reduce(
                (sum:number, item:Product) => sum + item.price * item.quantity,
                0
            );
            setTotal(totalValue);
        }

    };


    const handleSubmit = async (e:any) => {
        e.preventDefault();

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
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setSuccess(data.message)
        console.log("ORDER SAVED:", data);

        // optional: clear cart cookies
        // Cookies.remove("cart");
    };
    return (
        <section className="checkout" >
            <div className="container">
                <div className="items">
                    <div className="item">
                        <div className="checkout-form">
                            <div className="heading">
                                <h1 className="title">Confirm order</h1>
                            </div>

                            <form className="form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="field">
                                        <span className="label-text">Full name</span>
                                        <input type="text" name="fullName" className="input" placeholder="Enter your full name" required />
                                    </div>

                                    <div className="field">
                                        <span className="label-text">Phone number</span>
                                        <input type="tel" name="phone" className="input" placeholder="Exemple +212 6 12 34 56 78" pattern="[0-9+\s\-()]{6,}" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <span className="label-text">Email*</span>
                                    <input type="email" name="email" className="input" placeholder="Exemple mail@me.com" />
                                </div>

                                <div className="field">
                                    <label className="label-text">Address/Delivery Location</label>
                                    <textarea name="address" className="input" placeholder="Address: Street, City, Zip Code" rows={3} required></textarea>
                                </div>

                                <div className="field">
                                    <label className="delivery" htmlFor="delivery">
                                        <input type="checkbox" name="delivery" id="delivery" />
                                        <span>Payment: Cash on delivery anable in morocco now </span>
                                    </label>
                                </div>

                                {success.length > 5 ?
                                    <div className="success-note" >{success}</div>
                                    : ''
                                }


                                <div className="actions">
                                    <button type="submit" className="btn-confirm">Confirm order</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="item">
                        <div className="checkout-card">
                            <h1 className="title">Order Summary</h1>

                            <ul>
                                {cookiesCart.map((item:Product) => (
                                    <li key={item.id}>
                                        <span className="name">{item.name} </span>
                                        <div className="line">
                                            <span className="quantity"><small className="price">{item.price}</small>x {item.quantity}</span>
                                            <span className="subtotal">{item.subtotal.toFixed(2)}  <small>mad</small></span>
                                        </div>

                                    </li>
                                ))}
                            </ul>

                            <div className="coupon">
                                <div className="row">
                                    <span>Coupon</span>
                                    <strong>TXFREE</strong>
                                </div>
                                <div className="row">
                                    <span></span>
                                    <strong>-20%</strong>
                                </div>
                            </div>

                            <h1 className="total">
                                Total: <span>{total.toFixed(2)} <small>mad</small></span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
