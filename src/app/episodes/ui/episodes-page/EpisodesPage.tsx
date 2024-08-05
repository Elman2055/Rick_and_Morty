"use client";

import { Episodes } from "@/entities/episodes";
import styles from "./EpisodesPage.module.scss";
import { useTranslation } from "react-i18next";

const EpisodesPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("EpisodesPage.TITLE")}</h2>
      <Episodes />
    </div>
  );
};

export default EpisodesPage;
