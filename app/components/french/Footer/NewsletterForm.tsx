// NewsletterForm.tsx (Client Component)
"use client";
import { useState } from 'react';

export default function NewsletterForm() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [email, setEmail] = useState("");

    const handleNewsletter = async (e: any) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert("Email غير صالح");
            return;
        }
        try {
            await fetch(`${API_URL}/api/blacklist/newsletter`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            alert("تم الاشتراك بنجاح!");
            setEmail("");
        } catch {
            alert("حدث خطأ");
        }
    };

    return (
        <div className="newsletter-form">
            <form onSubmit={handleNewsletter}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse email" />
                <button type="submit">S'inscrire</button>
            </form>
        </div>

    );
}
