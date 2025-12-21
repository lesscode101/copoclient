import Link from "next/link";
import type { Metadata } from "next";

type Lang = "en" | "fr" | "ar";

interface Messages {
  title: string;
  heading: string;
  description: string;
  button: string;
}

const messages: Record<Lang, Messages> = {
  en: {
    title: "404 – Page Not Found",
    heading: "Page Not Found",
    description: "The page you are looking for does not exist.",
    button: "Go back home",
  },
  fr: {
    title: "404 – Page introuvable",
    heading: "Page introuvable",
    description: "La page que vous recherchez n’existe pas.",
    button: "Retour à l’accueil",
  },
  ar: {
    title: "404 – الصفحة غير موجودة",
    heading: "الصفحة غير موجودة",
    description: "الصفحة التي تبحث عنها غير موجودة.",
    button: "العودة للرئيسية",
  },
};

interface NotFoundProps {
  params: { lang: string };
}

// SEO ديناميكي حسب اللغة
export async function generateMetadata({ params }: NotFoundProps): Promise<Metadata> {
  const lang = (params.lang as Lang) in messages ? (params.lang as Lang) : "en";
  const t = messages[lang];

  return {
    title: t.title,
    description: t.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function NotFound({ params }: NotFoundProps) {
  const lang = (params.lang as Lang) in messages ? (params.lang as Lang) : "en";
  const t = messages[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "72px", marginBottom: "16px" }}>404</h1>

        <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>{t.heading}</h2>

        <p style={{ color: "#666", marginBottom: "32px" }}>{t.description}</p>

        <Link
          href={`/${lang}`}
          style={{
            display: "inline-block",
            padding: "12px 24px",
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
