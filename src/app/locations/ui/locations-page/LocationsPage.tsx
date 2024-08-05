"use client";

import { Locations } from "@/entities/locations";
import styles from "./LocationsPage.module.scss";
import { useTranslation } from "react-i18next";

const LocationsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("LocationsPage.TITLE")}</h2>
      <Locations />
    </div>
  );
};

export default LocationsPage;
