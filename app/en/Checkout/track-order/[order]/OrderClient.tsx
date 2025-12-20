"use client";
import './../../checkout.css'
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Product {
    id: number;
    name: string;
    price: number;
    finalprice: number;
    discount: number;
    quantity: number;
    subtotal: number;
}

interface OrderClientProps {
    order: string;
}

export default function ContentOrder({ order: initialOrder }: OrderClientProps) {
    const [orderId, setOrderId] = useState(initialOrder);
    const [inputOrder, setInputOrder] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [createdDate, setCreatedDate] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrder(orderId);
    }, [orderId]);

    const fetchOrder = async (id: string) => {
        setLoading(true);
        try {
            console.log(`${API_URL}/api/checkout/public/${id}`)
            const res = await fetch(`${API_URL}/api/checkout/public/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Order not found");

            const data = await res.json();

            setProducts(data.items);
            setTotal(Number(data.total));
            setStatus(data.status);

            const created_at = new Date(data.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            setCreatedDate(created_at);

        } catch (err) {
            console.error(err);
            setProducts([]);
            setTotal(0);
            setStatus('');
            setCreatedDate('');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputOrder.trim() !== '') {
            setOrderId(inputOrder.trim());
            setInputOrder('');
        }
    };

   

    return (
        <div className="items">

            {/* Search Box */}
            <div className="item">


                <div className="order-info">
                    <div className="order-heading">
                        <h2 className="title">Order <strong>#{orderId}</strong></h2>

                        <form onSubmit={handleSearch} className="order-search">
                            <input
                                type="text"
                                placeholder="Enter another order ID"
                                value={inputOrder}
                                onChange={(e) => setInputOrder(e.target.value)}
                            />
                            <button type="submit"><i className="icon-dark-search"></i></button>
                        </form>


                    </div>
                    {status && (
                        <div className="order-meta">
                            <span className={"order-status " + status}>{status}</span>
                            <div className="order-content">
                                {status === 'pending' && <p className="order-status-text">Your order is under review. Once everything is confirmed, shipping will be activated.</p>}
                                {status === 'shipped' && <p className="order-status-text">Your order has been shipped and is on the way to you. Estimated delivery: 0–7 days.</p>}
                                {status === 'completed' && <p className="order-status-text">Your order has been delivered. Thank you for choosing us.</p>}
                                {status === 'canceled' && <p className="order-status-text">This order has been canceled and will not be shipped.</p>}

                                <span className="order-date">{createdDate}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="item">
                <div className="checkout-card">
                    <h2 className="title">Order Summary</h2>
                    <ul className="content-card">
                        {products.map((item) => (
                            <li key={item.id}>
                                <div className="col-line">
                                    <span className="name">{item.name}</span>
                                    <small className="price">{Number(item.price).toFixed(2)} * {item.quantity} (-{item.discount} %)</small>
                                </div>
                                <span className="subtotal">{Number(item.finalprice * item.quantity).toFixed(2)} <small>MAD</small></span>
                            </li>
                        ))}
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
