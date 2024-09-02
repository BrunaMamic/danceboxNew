"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "use-intl";

const images = [
  {
    url: "assets/images/004.jpg",
    alt: "Two cups of coffee being made from a coffee machine.",
  },
  {
    url: "assets/images/001.jpg",
    alt: "Food with decorated plate",
  },
  {
    url: "assets/images/005.jpg",
    alt: "Coffe served on a table",
  },
  {
    url: "assets/images/006.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/007.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/008.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/009.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/010.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/011.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/012.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/013.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/014.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/015.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/016.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/017.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/018.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/019.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/020.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/021.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/022.jpg",
    alt: "Breakfast",
  },
  {
    url: "assets/images/023.jpg",
    alt: "Breakfast",
  },
];

export const ImageGrid = () => {
  const t = useTranslations("gallery");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setLightboxImage(images[index].url);
    setLightboxOpen(true);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setLightboxImage(images[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setLightboxImage(images[prevIndex].url);
  };

  return (
    <div className={styles.mainWrapper} id="gallery">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles[`image_${index + 1}`]}
              onClick={() => handleClick(index)}>
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className={styles.lightbox}>
          <div className={styles.arrowLeft} onClick={prevImage}>
            &lt;
          </div>

          <img
            src={lightboxImage}
            alt={images[currentIndex].alt}
            loading="lazy"
            className={styles.lightboxImage}
          />

          <div className={styles.arrowRight} onClick={nextImage}>
            &gt;
          </div>

          <div className={styles.closeButton} onClick={closeLightbox}>
            &times;
          </div>
        </div>
      )}
    </div>
  );
};
