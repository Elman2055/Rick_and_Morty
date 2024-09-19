import Link from "next/link";
import rick from "@/../public/rick.svg";
import morty from "@/../public/morty.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./index.module.scss";

const MobileHeader = () => {
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.sideIcons} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${styles.sideBtn} ${isOpen ? styles.openSideBtn : ""}`}></div>
            <div className={`${styles.sideBtn} ${isOpen ? styles.openSideBtn : ""}`}></div>
          </div>
          <div className={styles.navContainer}>
            <Link href={"/"} className={styles.mobileLogoLink}>
              <Image src={rick} alt="Rick" className={styles.mobileLogoImage} onClick={() => setIsOpen(false)}/>
            </Link>
            <Link href={"/"}>
              <h3 onClick={() => setIsOpen(false)}>{t("Header.MOBILE_MAIN_TITLE")}</h3>
            </Link>
            <Link href={"/"} className={styles.mobileLogoLink}>
              <Image src={morty} alt="Morty" className={styles.mobileLogoImage} onClick={() => setIsOpen(false)}/>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.sideContent} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sideContainer}>
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            <h3>{t("Header.MAIN_TITLE")}</h3>
          </Link>
          <Link href={"/episodes"} onClick={() => setIsOpen(false)}>
            <h3>{t("Header.EPISODES_TITLE")}</h3>
          </Link>
          <Link href={"/locations"} onClick={() => setIsOpen(false)}>
            <h3>{t("Header.LOCATIONS_TITLE")}</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
