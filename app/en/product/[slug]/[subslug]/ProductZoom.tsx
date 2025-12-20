"use client"; // مهم في Next.js 13+ إذا كان داخل app/

import { useRef, useEffect } from "react";
import styles from "./ProductZoom.module.css";
interface ProductZoomProps {
    src: string
}

export const ProductZoom: React.FC<ProductZoomProps> = ({ src }) => {

    const imgRef = useRef(null);
    const lensRef = useRef(null);
    const resultRef = useRef(null);
    const width = 600
    const zoomSize = 300
    useEffect(() => {
        const img: any = imgRef.current;
        const lens: any = lensRef.current;
        const result: any = resultRef.current;

        const cx = zoomSize / lens.offsetWidth;
        const cy = zoomSize / lens.offsetHeight;








        result.style.backgroundImage = `url('${src}')`;
        result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

        function moveLens(e: any) {
            e.preventDefault();
            const pos = getCursorPos(e);
            let x = pos.x - lens.offsetWidth / 2;
            let y = pos.y - lens.offsetHeight / 2;

            if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
            if (x < 0) x = 0;
            if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
            if (y < 0) y = 0;

            lens.style.left = x + "px";
            lens.style.top = y + "px";
            result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        }

        function getCursorPos(e: any) {
            const rect = img.getBoundingClientRect();
            const x = e.pageX - rect.left - window.pageXOffset;
            const y = e.pageY - rect.top - window.pageYOffset;
            return { x, y };
        }

        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        return () => {
            lens.removeEventListener("mousemove", moveLens);
            img.removeEventListener("mousemove", moveLens);
            lens.removeEventListener("touchmove", moveLens);
            img.removeEventListener("touchmove", moveLens);
        };
    }, [src, zoomSize]);

    return (
        <>
            <div className={styles.zoom_modal_container} style={{ width: width + "px" }}>
                <img ref={imgRef} src={src} alt="Product" />
                <div ref={lensRef} className={styles.lens}></div>
            </div>
            <div ref={resultRef} className={styles.result} style={{ width: zoomSize + "px", height: zoomSize + "px" }}></div>

        </>

    );
}
