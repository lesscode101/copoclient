"use client"; // <-- Add this at the very top

import { useEffect, useState } from "react";
interface Result {
    phone: string;
    text_en: string;
    text_fr?: string;
    text_ar?: string;
}

const WhatsAppButton = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [result, setResult] = useState<Result | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWhatsAppData = async () => {

            try {
                const res = await fetch(`${API_URL}/api/blacklist/whatsapp`);
                const data = await res.json();

                setResult(data);
            } catch (err) {
                console.error("Error loading WhatsApp data:", err);
            } finally {
                setLoading(false);
            }
        };

        loadWhatsAppData();
    }, []);

    const openWhatsApp = () => {
        if (!result) return;

        const msg = encodeURIComponent(result.text_en || "");
        const url = `https://wa.me/${result.phone}?text=${msg}`;

        window.open(url, "_blank");
    };

    if (loading) return null;

    return (

        <div className="whatsapp">
            <button className="btn-whatsapp" aria-label='whatsapp' onClick={openWhatsApp}>
                <i className="icon-whatsapp"></i>
            </button>

        </div>
    );
};

export default WhatsAppButton;
