import { Episodes } from "@/entities/episodes";
import styles from "./EpisodesPage.module.scss";
import { useTranslations } from "next-intl";

const EpisodesPage = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("EpisodesPage.TITLE")}</h2>
      <Episodes />
    </div>
  );
};

export default EpisodesPage;
