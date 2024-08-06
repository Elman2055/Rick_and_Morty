import { Locations } from "@/entities/locations";
import styles from "./LocationsPage.module.scss";
import { useTranslations } from "next-intl";

const LocationsPage = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("LocationsPage.TITLE")}</h2>
      <Locations />
    </div>
  );
};

export default LocationsPage;
