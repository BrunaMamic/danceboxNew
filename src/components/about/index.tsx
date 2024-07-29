import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("about");

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp"
              alt="About Us"
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
