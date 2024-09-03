"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useInViewport } from "@/utils";

export const Teachers = ({ image1, image2, reverse, text }: any) => {
  const [pageWidth, setPageWidth] = useState<number>(0);
  const ref = useRef(null);
  const inView = useInViewport(ref, "-100px");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <div className={styles.wrapper} id="teachers">
      <div
        ref={ref}
        className={styles.container}
        style={
          reverse && pageWidth >= 1100 ? { flexDirection: "row-reverse" } : {}
        }>
        <div className={`${styles.textSection} ${loaded ? styles.loaded : ""}`}>
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
        <div
          className={`${styles.imageSection} ${loaded ? styles.loaded : ""}`}>
          <img src={image1} alt="DanceBox teacher" className={styles.image} />
          <img src={image2} alt="DanceBox teacher" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
