"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Dob = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0);

  const sections = [
    {
      title: "MINI KADETI",
      content:
        "Uz jačanje primarne muskulature kroz igru i zabavne vježbe veliku pozornost dajemo koordinaciji i stabilnosti . Kada dijete stekne osnovne fizičke predispozicije i spremno je za viši stupanj plesne aktivnost učimo ga osnovnim baletnim i gimnastičkim elementima. Program uključuje i rad na ritmičnosti i muzikalnosti kroz jednostavne koreografije prilagođene njihovoj dobi.",
    },
    {
      title: "KADETI",
      content:
        "Osvještavanjem funkcionalnosti muskulature djeca ove dobi su već spremna za bazičnu plesnu tehniku kao što su pirueti i osnovni skokovi te kretanje kroz prostor, Koreografije su im glazbeno i ritmički kompleksnije te se od njih očekuje aktivno sudjelovanje u stvaranju rezultata treninga.",
    },
    {
      title: "JUNIORI/ SENIORI",
      content:
        "Ove dobne skupine već imaju usvojenu određenu razinu plesne tehnike te su fizički spremne za zahtjevne plesne programe.",
    },
    {
      title: "REKREATIVNA GRUPA",
      content:
        "Dobna skupina koja podrazumijeva starije od 30 godina željne treninga uz glazbu. Trening obuhvaća istezanje, snagu i izdržljivost, koordinaciju, plesnu tehniku, te lagane i zabave koreografije.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className={styles.container} id="program">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Dobne skupine</h1>
        </div>
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div
              className={`${styles.section} ${
                openSectionIndex === index ? styles.open : ""
              }`}
              key={index}
            >
              <div
                className={styles.sectionHeader}
                onClick={() => handleToggle(index)}
              >
                <h2>{section.title}</h2>
                <span className={styles.arrow}>
                  <i
                    className={`bi ${
                      openSectionIndex === index
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    } ${styles.arrow}`}
                  ></i>
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
      </div>
    </div>
  );
};
