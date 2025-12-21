"use client";

import Link from "next/link";
import Cookies from "js-cookie";

export default function NotFound() {

  const lang = Cookies.get("lang") || "en";

  const messages: Record<string, { heading: string; description: string; button: string; link: string  }> = {
    en: {
      heading: "Page Not Found",
      description: "The page you are looking for does not exist.",
      button: "Go back home",
      link: "/en"

    },
    fr: {
      heading: "Page introuvable",
      description: "La page que vous recherchez n’existe pas.",
      button: "Retour à l’accueil",
      link: "/fr"

    },
    ar: {
      heading: "الصفحة غير موجودة",
      description: "الصفحة التي تبحث عنها غير موجودة.",
      button: "العودة للرئيسية",
      link: "/ar"

    },
  };

  const t = messages[lang] || messages.en;

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "72px", marginBottom: "16px" }}>404</h1>
        <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>{t.heading}</h2>
        <p style={{ color: "#666", marginBottom: "32px" }}>{t.description}</p>
        <Link
          href={t.link}
          style={{
            display: "inline-block",
            padding: "10px 34px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          {t.button}
        </Link>
      </div>
    </main>
  );
}
