import React from "react";
import styles from "./styles.module.scss";

export const Teachers = ({ image1, image2, reverse }: any) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        style={reverse && { flexDirection: "row-reverse" }}>
        <div className={styles.textSection}>
          <h1>Barbara Mamic</h1>
          <h2>I mainly do editorial shoots, but always with human elements.</h2>
          <p>
            I believe that adding a human element to an art concept is the most
            organic way to represent our touch in the world.
          </p>
          <p>
            I believe that adding a human element to an art concept is the most
            organic way to represent our touch in the world.
          </p>
          <p>
            I believe that adding a human element to an art concept is the most
            organic way to represent our touch in the world.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={image1} alt="Editorial Shoot 1" className={styles.image} />
          <img src={image2} alt="Editorial Shoot 2" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
