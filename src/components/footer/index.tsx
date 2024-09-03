"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { Link } from "@/navigation";
import Image from "next/image";

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
            <Image
              width={30}
              height={30}
              src="assets/document-svgrepo-com.svg"
              alt="doc icon"
            />{" "}
            <div>{t("privacy")}</div>
          </div>
          <div className={styles.schedule} onClick={handleClickRasp}>
            <Image
              width={30}
              height={30}
              alt="icon"
              src="assets/calendar-days-svgrepo-com.svg"
              style={{ padding: "4px" }}
            />

            <div>{t("raspored")}</div>
          </div>
        </div>

        <div className={styles.socials}>
          <Link
            href={"https://www.instagram.com/danceboxsplit/"}
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.inst}>
              <Image
                width={30}
                height={30}
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
              <Image
                width={30}
                height={30}
                src="assets/facebook-svgrepo-com.svg"
                alt="facebook logo"
              />{" "}
            </div>
          </Link>

          <Link
            href={"https://www.youtube.com/@25imami/videos"}
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            <div className={styles.youtube}>
              <Image
                width={30}
                height={30}
                src="assets/youtube-168-svgrepo-com.svg"
                alt="yt logo"
              />{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
