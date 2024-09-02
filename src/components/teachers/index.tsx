"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Teachers = ({ image1, image2, reverse, text }: any) => {
  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.wrapper} id="teachers">
      <div
        className={styles.container}
        style={
          reverse && pageWidth >= 1100 ? { flexDirection: "row-reverse" } : {}
        }>
        <div className={styles.textSection}>
          {text && text.length > 0 && <h1>{text[0].text}</h1>}

          {text && text.length > 1 && <h2>{text[1].text}</h2>}

          {text &&
            text.length > 2 &&
            text
              .slice(2)
              .map((item: any, index: number) => (
                <p key={index}>{item.text}</p>
              ))}
        </div>
        <div className={styles.imageSection}>
          <img src={image1} alt="Editorial Shoot 1" className={styles.image} />
          <img src={image2} alt="Editorial Shoot 2" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
