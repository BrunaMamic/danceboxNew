import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Events = () => {
  const t = useTranslations("events");
  const images = [
    {
      url: "assets/documents/raspored 24.png",
      alt: "event",
      title: t("title1"),
      text: t("text1"),

      href: "https://docs.google.com/forms/d/e/1FAIpQLScav_ZuSo6uwwaC5spJcMVtacdTWMMV-YpVkixRjoazmCxk8g/viewform?vc=0&c=0&w=1&flr=0&pli=1",
    },
    {
      url: "assets/images/events/1.jpg",
      alt: "event",
      title: t("title2"),
      text: t("text2"),

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid0pgHkgdXXZhZN65aYwHchpt9Bda9Xd6h9e53FxnqT6LLwDZZdzniRKRDmVFNTsjrTl",
    },
    {
      url: "assets/images/events/2.jpg",
      alt: "event",
      title: t("title3"),
      text: t("text3"),

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid021VvKfMzJuMjbHD2hs685QADJp33Lb94ZecVuve332bEirEo5Ky5o8qF99MS1t6ehl",
    },
    {
      url: "assets/images/events/3.jpg",
      alt: "event",
      title: t("title4"),
      text: t("text4"),

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid0qq8JPu4hZgnzd8cFNMTMZXdyNJjvWXDr1dPoSKviEKYqbEYKUgVKq5XiP38cmaf8l",
    },
  ];

  return (
    <div className={styles.container} id="events">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.grid}>
          {images.map((item, index) => (
            <Link
              href={item.href}
              key={`item_${index}`}
              target="_blank"
              rel="noopener noreferrer">
              <div className={styles.project}>
                <img src={item.url} alt="Project" className={styles.image} />
                <div className={styles.text}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
