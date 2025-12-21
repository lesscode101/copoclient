// components/ScrollRedirect.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScrollRedirect() {
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition >= 10) {
                router.push("/en/home");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [router]);

    return null;
}
