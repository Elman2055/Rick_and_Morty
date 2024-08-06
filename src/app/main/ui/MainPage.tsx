import { MainCharacters } from "@/entities/main";
import { useTranslations } from "next-intl";
import styles from "./MainPage.module.scss";

const Main = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("MainPage.TITLE")}</h2>
      <MainCharacters />
    </div>
  );
};

export default Main;
