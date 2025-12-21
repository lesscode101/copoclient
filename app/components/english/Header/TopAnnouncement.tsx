import "./topannounce.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface Announcement {
  id: number;
  text: string;
  lang: string;
}

const TopAnnouncement = () => {
  const [hidden, setHidden] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAnnouncements = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL!;
        const res = await fetch(API_URL + "/api/announcements/en", { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch");

        const data: Announcement[] = await res.json();
        setAnnouncements(data.map(item => item.text));
      } catch (e: any) {
        if (e.name !== "AbortError") setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="announcement" id="home">
        <div className="announcement-swiper">
          <div className="content">
            <p className="msg"></p>
          </div>
        </div>
      </div>
    );
  }

  if (announcements.length === 0 || hidden) return null;

  return (
    <div className={`announcement ${hidden ? "hidden" : ""}`} id="home">
      <Swiper
        loop={announcements.length > 1}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        allowTouchMove={true} // دعم اللمس على الموبايل
        slidesPerView={1}
        className="announcement-swiper"
      >
        {announcements.map((msg, i) => (
          <SwiperSlide className="content" key={i}>
            <p className="msg">{msg}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="close-ads" onClick={() => setHidden(true)}>
        <i className="icon-plus"></i>
      </span>
    </div>
  );
};

export default TopAnnouncement;
