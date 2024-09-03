"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { useInViewport } from "@/utils";

export const Hero = () => {
  const t = useTranslations("hero");
  const images = [
    {
      url: "assets/images/007.webp",
      alt: "Dancers on a stage",
    },
    {
      url: "assets/images/006.webp",
      alt: "DanceBox dancer on a stage",
    },
    {
      url: "assets/images/005.webp",
      alt: "Barbara on a stage",
    },
    {
      url: "assets/images/019.webp",
      alt: "Dancers on a stage",
    },
  ];

  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(images.length).fill(false)
  );
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewport(ref, "-100px");

  useEffect(() => {
    if (inView) {
      let index = imagesLoaded.findIndex((loaded) => !loaded);
      if (index !== -1) {
        setTimeout(() => {
          setImagesLoaded((prevLoaded) =>
            prevLoaded.map((loaded, i) => (i === index ? true : loaded))
          );
        }, index * 100);
      }
    }
  }, [inView, imagesLoaded]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <h1
            style={{
              fontSize: "170px",
            }}>
            {t("title2")}
          </h1>
          <h2>{t("title1")}</h2>
        </div>
        <div className={styles.imagesSection} ref={ref}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`${styles.image} ${
                imagesLoaded[index] && styles.loaded
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
