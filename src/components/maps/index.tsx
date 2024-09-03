import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const Map = () => {
  const t = useTranslations("maps");
  return (
    <div className={styles.mainWrapper} id="location">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723.4143035185311!2d16.48029682923665!3d43.50948599869541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6adf347f7b3ee58c!2zNDPCsDMwJzM0LjIiTiAxNsKwMjgnNTEuMCJF!5e0!3m2!1shr!2shr!4v1642104370945!5m2!1shr!2shr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"></iframe>
      </div>
    </div>
  );
};
