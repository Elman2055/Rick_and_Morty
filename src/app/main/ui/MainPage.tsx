"use client";

import { MainCharacters } from "@/entities/main";
import { useTranslation } from "react-i18next";
import styles from "./MainPage.module.scss";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("MainPage.TITLE")}</h2>
      <MainCharacters />
    </div>
  );
};

export default Main;
