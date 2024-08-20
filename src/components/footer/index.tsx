import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.logo}>
        <img src="/db_logo.png" alt="logo" />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{t("title")} </div>
        <div className={styles.email}>{t("email")} </div>
        <div className={styles.phone}>{t("phone")} </div>
        <div className={styles.data}>
          <div className={styles.doc}>
            <img src="assets/document-svgrepo-com.svg" />{" "}
            <div>{t("privacy")}</div>
          </div>
          <div className={styles.schedule}>
            <img src="assets/calendar-days-svgrepo-com.svg" />

            <div>{t("raspored")}</div>
          </div>
        </div>

        <div className={styles.socials}>
          <div className={styles.inst}>
            <img src="assets/instagram-svgrepo-com.svg" alt="instagram logo" />
          </div>
          <div className={styles.facebook}>
            <img src="assets/facebook-svgrepo-com.svg" alt="instagram logo" />{" "}
          </div>
          <div className={styles.youtube}>
            <img
              src="assets/youtube-168-svgrepo-com.svg"
              alt="instagram logo"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
