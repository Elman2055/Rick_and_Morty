import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./index.module.scss";

const DesktopHeader = () => {
  const t = useTranslations();

  return (
    <>
      <header className={styles.headerContainer}>
        <nav>
          <Link href={"/"}>
            <h2 className={styles.navLink}>{t("Header.MAIN_TITLE")}</h2>
          </Link>
          <div className={styles.headerRightNavigation}>
            <Link href={"/episodes"} className={styles.navLink}>
              <h3>{t("Header.EPISODES_TITLE")}</h3>
            </Link>
            <Link href={"/locations"} className={styles.navLink}>
              <h3>{t("Header.LOCATIONS_TITLE")}</h3>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DesktopHeader;
