"use client";

import { useContext, useEffect, useState } from "react";
import "./checkout.css";
import Cookies from "js-cookie";
import Link from "next/link";
import { CartContext } from "@/app/CartContext";
import { useRouter } from "next/navigation";

interface Product {
    id: number;
    name: string;
    price: number;
    discount: number;
    quantity: number;
    subtotal: number;
}

function ContentCheckout() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [products, setProducts] = useState([]);
    const [accept, setAccept] = useState(false);

    const [total, setTotal] = useState(0);
    const [success, setSuccess] = useState("");
    const [cookiesCart, setCookiesCart] = useState<Product[]>([]);
    const router = useRouter();

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
        const updatedItems = data.items.map((item: Product) => {
            setProducts(data.items)
            console.log(data.items)
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
            items: products,
            total: total,
            status: "pending"
        };
        console.log(formData)

        const response = await fetch(`${API_URL}/api/checkout/save-order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        Cookies.set("cartlist", JSON.stringify([]), { expires: 300 });
        router.push("/en/checkout/track-order/" + data.orderId);
    };

    return (

        <div className="items">
            <div className="item">
                <div className="checkout-form">
                    <div className="heading">
                        <h1 className="title">Delivery Contact Information</h1>

                    </div>

                    <form className="form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="field">
                                <label htmlFor="fullName" className="label-text">Full name</label>
                                <input type="text" name="fullName" className="input" placeholder='' required />
                            </div>

                            <div className="field">
                                <label htmlFor="phone" className="label-text">Phone number</label>
                                <input type="tel" name="phone" className="input" pattern="[0-9+\s\-()]{6,}" placeholder='' required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email" className="label-text">Email*</label>
                            <input type="email" name="email" className="input" placeholder='' />
                        </div>


                        <div className="field">
                            <label htmlFor="address" className="label-text">Address/Delivery Location</label>
                            <textarea name="address" className="input" rows={3} required placeholder='' ></textarea>
                        </div>

                        <div className={accept ? "term active" : 'term'} onClick={() => setAccept(!accept)}>
                            <input type="checkbox" name="" id="accpet" checked={accept} />
                            <label htmlFor="accpet" >I confirm that I accept the website’s terms and agree to pay upon delivery.</label>
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
                                    {Number(item.subtotal).toFixed(2)} <small>MAD</small>
                                </span>


                            </li>
                        ))}
                        {total > 350 ? (
                            <li className="save">
                                <div className="line">
                                    <span className="name">
                                        <strong>Free Shipping</strong>
                                    </span>
                                    <span className="subtotal">
                                        0 <small>MAD</small>
                                    </span>
                                </div>
                            </li>
                        ) : (
                            <li>
                                <div className="line">
                                    <span className="name">
                                        <strong>Shipping</strong>
                                    </span>
                                    <span className="subtotal">
                                        40 <small>MAD</small>
                                    </span>
                                </div>
                            </li>
                        )}
                    </ul>



                    {total > 350 ?
                        <h1 className="total">
                            Total Price: <span>{Number(total).toFixed(2)} <small>MAD</small></span>
                        </h1>

                        :
                        <h1 className="total">
                            Total Price: <span>{(Number(total) + 40).toFixed(2)} <small>MAD</small></span>
                        </h1>

                    }


                </div>
            </div>
        </div>


    );
}

export default ContentCheckout;
