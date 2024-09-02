"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { Link } from "@/navigation";

export const Footer = () => {
  const t = useTranslations("footer");
  const handleClickPdf = () => {
    const pdfUrl = "assets/documents/PRAVILNIK O ČLANSTVU 24.pdf ";

    window.open(pdfUrl, "_blank");
  };

  const handleClickRasp = () => {
    const pdfUrl = "assets/documents/raspored 24.png ";

    window.open(pdfUrl, "_blank");
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.logo}>
        <img src="/db_logo.png" alt="logo" />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{t("title")} </div>
        <Link
          href={"mailto:danceboxsplit1@gmail.com"}
          target="_blank"
          rel="noopener noreferrer">
          <div className={styles.email}>{t("email")} </div>
        </Link>

        <Link href={`tel:+385915062940`}>
          <div className={styles.phone}>{t("phone")} </div>
        </Link>
        <div className={styles.data}>
          <div className={styles.doc} onClick={handleClickPdf}>
            <img src="assets/document-svgrepo-com.svg" />{" "}
            <div>{t("privacy")}</div>
          </div>
          <div className={styles.schedule} onClick={handleClickRasp}>
            <img src="assets/calendar-days-svgrepo-com.svg" />

            <div>{t("raspored")}</div>
          </div>
        </div>

        <div className={styles.socials}>
          <Link
            href={"https://www.instagram.com/danceboxsplit/"}
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.inst}>
              <img
                src="assets/instagram-svgrepo-com.svg"
                alt="instagram logo"
              />
            </div>
          </Link>

          <Link
            href={"https://www.facebook.com/PlesniStudioDanceBox"}
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            <div className={styles.facebook}>
              <img src="assets/facebook-svgrepo-com.svg" alt="instagram logo" />{" "}
            </div>
          </Link>

          <Link
            href={"https://www.youtube.com/@25imami/videos"}
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            <div className={styles.youtube}>
              <img
                src="assets/youtube-168-svgrepo-com.svg"
                alt="instagram logo"
              />{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
