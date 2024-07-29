import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Events = () => {
  const t = useTranslations("events");
  const images = [
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp",
      alt: "Two cups of coffee being made from a coffee machine.",
      title: t("title1"),
      text: t("text1"),

      href: "/",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/009.webp",
      alt: "Food with decorated plate",
      title: t("title2"),
      text: t("text2"),

      href: "/",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/001.webp",
      alt: "Coffe served on a table",
      title: t("title3"),
      text: t("text3"),

      href: "/",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
      alt: "Breakfast",
      title: t("title4"),
      text: t("text4"),

      href: "/",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
      alt: "Breakfast",
      title: t("title5"),
      text: t("text5"),

      href: "/",
    },
    {
      url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
      alt: "Breakfast",
      title: t("title6"),
      text: t("text6"),

      href: "/",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {images.map((item, index) => (
          <Link href={item.href} key={`item_${index}`}>
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
  );
};
