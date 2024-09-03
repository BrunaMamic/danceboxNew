"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("about");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const parallaxImage = document.getElementById(
        "aboutImage"
      ) as HTMLElement;
      if (parallaxImage) {
        const animRect1 = parallaxImage.getBoundingClientRect();
        const speed = 6;

        if (animRect1.bottom < window.scrollY && animRect1.bottom / 2 > 0) {
          parallaxImage.style.transform = `translate3d(0px, ${animRect1.top / speed}px, 0px)`;
        }
      }
    });
  };

  return (
    <div className={styles.mainWrapper} id="about">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="assets/images/dvorana.webp"
              alt="DanceBox hall"
              id="aboutImage"
            />
          </div>

          <div className={styles.textSections}>
            <p>{t("section1")}</p>
            <p>{t("section2")}</p>
            <p>{t("section3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
