import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export const Disciplines = () => {
  const t = useTranslations("diciplines");

  const sections = [
    {
      title: t("title1"),
      content: t("content1"),
    },
    {
      title: t("title2"),
      content: t("content2"),
    },
    {
      title: t("title3"),
      content: t("content3"),
    },
    {
      title: t("title4"),
      content: t("content4"),
    },
    {
      title: t("title5"),
      content: t("content5"),
    },
    {
      title: t("title6"),
      content: t("content6"),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>{t("mainTitle")}</h1>
        </div>
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div className={styles.section} key={index}>
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
