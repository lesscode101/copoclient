"use client";
import './cookies-section.css';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation"; // لاستخراج اللغة من URL

export default function CookiesSection() {
  const pathname = usePathname(); // مثال: /en/page/slug
  const [lang, setLang] = useState("en"); 
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // تعيين اللغة من URL
  useEffect(() => {
    const pathLang = pathname.split("/")[1]; // الجزء الأول بعد "/"
    if (["en", "fr", "ar"].includes(pathLang)) {
      setLang(pathLang);
    }
  }, [pathname]);

  // التمرير وإظهار الصندوق
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const myCookie = Cookies.get("lang");

      if (!myCookie && !accepted && scrollPosition >= window.innerHeight * 0.5) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [accepted]);

  // قبول الكوكيز
  const handleAccept = () => {
    Cookies.set("lang", lang, { expires: 30 }); // حفظ الكوكيز 30 يوم
    setAccepted(true);
    setShow(false);
  };

  const messages: Record<string, string> = {
    en: "We use cookies and you must accept our rules to continue.",
    fr: "Nous utilisons des cookies et vous devez accepter nos règles pour continuer.",
    ar: "نستخدم الكوكيز ويجب عليك قبول القوانين للاستمرار.",
  };

  return (
    <>
      {show && !accepted &&
        <div className="cookies-section">
          <div className="container">
            <div className="box">
              <p>{messages[lang] || messages.en}</p>
              <label>
                <input 
                  type="checkbox" 
                  onChange={handleAccept} 
                /> {lang === "ar" ? "أوافق على الكوكيز والقوانين" : lang === "fr" ? "J'accepte les cookies et les règles" : "I accept cookies and rules"}
              </label>
            </div>
          </div>
        </div>
      }
    </>
  );
}
