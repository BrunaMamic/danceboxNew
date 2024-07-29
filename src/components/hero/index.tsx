import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("hero");
  const images = [
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp",
      alt: "Two cups of coffee being made from a coffee machine.",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/009.webp",
      alt: "Food with decorated plate",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/001.webp",
      alt: "Coffe served on a table",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
      alt: "Breakfast",
    },
  ];
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <h1>{t("title1")}</h1>
          <h1
            style={{
              fontSize: "140px",
              fontStyle: "italic",
            }}>
            {t("title2")}
          </h1>
        </div>
        <div className={styles.imagesSection}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
