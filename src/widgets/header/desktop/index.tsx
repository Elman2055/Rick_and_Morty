import Link from "next/link";
import { useTranslations } from "next-intl";
import rick from "@/../public/rick.svg";
import morty from "@/../public/morty.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

const DesktopHeader = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? styles.active : "");

  return (
    <>
      <header className={styles.headerContainer}>
        <nav>
          <Link href={"/"} className={styles.logoLink}>
            <Image src={rick} alt="Rick logo" />
          </Link>
          <Link href={"/"} className={`${styles.navLink} ${isActive("/")}`}>
            <h2>{t("Header.MAIN_TITLE")}</h2>
          </Link>
          <Link
            href={"/episodes"}
            className={`${styles.navLink} ${isActive("/episodes")}`}
          >
            <h2>{t("Header.EPISODES_TITLE")}</h2>
          </Link>
          <Link
            href={"/locations"}
            className={`${styles.navLink} ${isActive("/locations")}`}
          >
            <h2>{t("Header.LOCATIONS_TITLE")}</h2>
          </Link>
          <Link href={"/"} className={styles.logoLink}>
            <Image src={morty} alt="Morty logo" />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default DesktopHeader;
