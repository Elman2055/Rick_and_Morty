import { Episodes } from "@/entities/episodes";
import styles from "./EpisodesPage.module.scss";

const EpisodesPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rick and Morty Episodes</h2>
      <Episodes />
    </div>
  );
};

export default EpisodesPage;
