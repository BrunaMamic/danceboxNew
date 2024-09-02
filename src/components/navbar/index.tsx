"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  const [isOpen, setIsOpen] = useState(0);
  const pathname = usePathname();
  const locale = useLocale();

  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const top = document.getElementById("navbar");

    if (top) {
      if (isOpen === 1) {
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.style.overflowX = "hidden";
        top.style.transform = `translateY(${window.scrollY}px)`;
      } else if (isOpen === -1) {
        document.documentElement.style.overflowY = "scroll";
        top.style.transform = `translateY(0px)`;
      }
    }
  }, [isOpen]);

  const handleFadeInAnim = () => {
    if (isOpen === 1) return styles.fadeIn;
    else if (isOpen === -1) return styles.fadeOut;
  };

  return (
    <nav
      className={`${styles.navbar}   ${
        isOpen === 1 ? styles.open : isOpen === -1 ? styles.closed : ""
      }`}
      id="navbar">
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image
              src={"/db_logo.png"}
              alt={"Logo"}
              width={100}
              height={80}></Image>
          </div>
        </Link>
        {pageWidth >= 1100 ? (
          <>
            <ul className={styles.navLinks}>
              <li>
                <Link href="#about">{t("about")}</Link>
              </li>
              <li>
                <Link href="#events">{t("events")}</Link>
              </li>
              <li>
                <Link href="#program">{t("program")}</Link>
              </li>
              <li>
                <Link href="#teachers">{t("teachers")}</Link>
              </li>
              <li>
                <Link href="#gallery">{t("gallery")}</Link>
              </li>
              <li>
                <Link href="#location">{t("location")}</Link>
              </li>
              {/* <div className={styles.languageWrapper}>
                <Link
                  href={pathname}
                  locale={"en"}
                  className={`${styles.language} ${locale === "en" && styles.activeLanguage}`}>
                  EN
                </Link>
                /
                <Link
                  href={pathname}
                  locale={"hr"}
                  className={`${styles.language} ${locale === "hr" && styles.activeLanguage}`}>
                  HR
                </Link>
              </div> */}
            </ul>
          </>
        ) : (
          <>
            <div
              className={
                isOpen === 1 ? styles.hamburgerOpen : styles.hamburgerIcon
              }
              onClick={() => setIsOpen(isOpen === 1 ? -1 : 1)}>
              <div
                className={styles.hamburgerLine}
                style={{ color: "#000" }}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </div>
          </>
        )}
      </div>

      {isOpen === 1 && pageWidth <= 1100 && (
        <div
          className={`${styles.menu} ${
            isOpen ? styles.menuOpen : styles.menuClose
          }`}>
          <div className={styles.openMenuContainer}>
            <div className={styles.info}>
              <div
                className={styles.mobileNavLinks}
                style={{ transition: "0.8s ease 9s" }}>
                <div
                  className={`${styles.link}  ${handleFadeInAnim()}`}
                  style={{ transition: "0.5s ease 6s" }}>
                  <Link href="#about" onClick={() => setIsOpen(-1)}>
                    <div className={`${styles.linkOuterWrapper} `}>
                      {t("about")}
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.link}  ${handleFadeInAnim()}`}
                  style={{ transition: "0.8s ease 9s" }}>
                  <Link href="#events" onClick={() => setIsOpen(-1)}>
                    <div className={`${styles.linkOuterWrapper}  `}>
                      {t("events")}
                    </div>
                  </Link>
                </div>
                <div className={`${styles.link}  ${handleFadeInAnim()}`}>
                  <Link href="#program" onClick={() => setIsOpen(-1)}>
                    <div className={`${styles.linkOuterWrapper} `}>
                      {t("program")}
                    </div>
                  </Link>
                </div>
                <div className={`${styles.link}  ${handleFadeInAnim()}`}>
                  <Link href="#teachers" onClick={() => setIsOpen(-1)}>
                    <div className={`${styles.linkOuterWrapper}  `}>
                      {t("teachers")}
                    </div>
                  </Link>
                </div>
                <div className={`${styles.link}  ${handleFadeInAnim()}`}>
                  <Link href="#gallery" onClick={() => setIsOpen(-1)}>
                    <div className={`${styles.linkOuterWrapper}  `}>
                      {t("gallery")}
                    </div>
                  </Link>
                </div>
                <div className={`${styles.link}  ${handleFadeInAnim()}`}>
                  <Link href="location" onClick={() => setIsOpen(-1)}>
                    <div className={`${styles.linkOuterWrapper}  `}>
                      {t("location")}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
