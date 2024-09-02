"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Disciplines = () => {
  const t = useTranslations("disciplines");
  const [pageWidth, setPageWidth] = useState<number>(0);
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0);

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

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
  ];

  const handleToggle = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className={styles.container} id="program">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>{t("mainTitle")}</h1>
        </div>
        {/* {pageWidth >= 900 ? (
          <div className={styles.sections}>
            {sections.map((section, index) => (
              <div className={styles.section} key={index}>
                <h2>{section.title}</h2>
                <div>{section.content}</div>
              </div>
            ))}
          </div>
        ) : ( */}
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div
              className={`${styles.section} ${
                openSectionIndex === index ? styles.open : ""
              }`}
              key={index}>
              <div
                className={styles.sectionHeader}
                onClick={() => handleToggle(index)}>
                <h2>{section.title}</h2>
                <span className={styles.arrow}>
                  <i
                    className={`bi ${
                      openSectionIndex === index
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    } ${styles.arrow}`}></i>
                </span>
              </div>
              {openSectionIndex === index && (
                <div className={styles.sectionContent}>
                  <p>{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
