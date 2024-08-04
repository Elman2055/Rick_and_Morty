import Link from "next/link";
import styles from "./index.module.scss";

const DesktopHeader = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <nav>
          <Link href={"/"}>
            <h2 className={styles.navLink}>Rick & Morty</h2>
          </Link>
          <div className={styles.headerRightNavigation}>
            <Link href={"/episodes"} className={styles.navLink}>
              <h3>Episodes</h3>
            </Link>
            <Link href={"/locations"} className={styles.navLink}>
              <h3>Locations</h3>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DesktopHeader;
