import './topannounce.css';

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const TopAnnouncement = () => {

    const [hidden, setHidden] = useState(false);

    const [announcements, setAnnouncements] = useState<string[]>([]);

    const promos: string[] = [
        "Get 10% Off on All Cash-on-Delivery Orders",
        "Free Delivery When You Order Over 450 MAD",
        "Get 60% Off on Products Over One Year in Store"
    ];

    useEffect(() => {
        setAnnouncements(promos);
    }, []); // فارغ لأن promos ثابت

    return (
        <div className={`announcement ${hidden ? 'hidden' : ''}`} id='home'>
            <Swiper
                loop={announcements.length > 1}
                loopAdditionalSlides={1}
                loopPreventsSliding={false}
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                allowTouchMove={false}
                slidesPerView={1}
                slidesPerGroup={1}
                className="announcement-swiper"
            >
                {announcements.map((msg, i) => (
                    <SwiperSlide className='content' key={i}>
                        <p className='msg'>{msg}</p>
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
