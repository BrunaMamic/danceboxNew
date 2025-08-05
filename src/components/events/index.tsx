import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Events = () => {
  const t = useTranslations("events");
  const images = [
    {
      url: "assets/images/events/maliSplit.jpeg",
      alt: "event",
      title: t("maliSplit.title"),
      text: t("maliSplit.text"),

      href: "https://www.facebook.com/reel/726455550249652",
    },
    {
      url: "assets/images/events/znjanPripreme.jpeg",
      alt: "event",
      title: t("znjanPripreme.title"),
      text: t("znjanPripreme.text"),

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid0Wus9XJ26umo29biAA8G8W7XRpjL4VM19RHsbyq8k8ni8tFfy41a7NNBbdbCKcM77l",
    },
    {
      url: "assets/images/events/vg.jpeg",
      alt: "event",
      title: t("vg.title"),
      text: t("vg.text"),

      href: "https://www.facebook.com/reel/668175555856836",
    },
    {
      url: "assets/images/events/sarajevo.jpeg",
      alt: "event",
      title: t("sarajevo.title"),
      text: t("sarajevo.text"),

      href: "https://www.facebook.com/PlesniStudioDanceBox/videos/1175901870137962/",
    },
    {
      url: "assets/images/events/brezice.jpg",
      alt: "event",
      title: t("brezice.title"),
      text: t("brezice.text"),

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid034ozY9U5tz7JEHbcjBXRMU7c1DKSDX2Cwu2A6z4ZeG472groFJN2PcWCUAXpRi7znl",
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
