import { MainCharacters } from "@/entities/main";
import styles from "./MainPage.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rick and Morty Characters</h2>
      <MainCharacters />
    </div>
  );
};

export default Main;
