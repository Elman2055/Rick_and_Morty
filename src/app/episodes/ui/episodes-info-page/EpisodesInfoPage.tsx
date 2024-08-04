import { EpisodesInfo } from "@/entities/episodes";
import { TListInfo } from "@/shared/types";
import styles from "./EpisodesInfoPage.module.scss";

const EpisodesInfoPage = ({ episode }: { episode: TListInfo }) => {
  return (
    <div className={styles.container}>
      <EpisodesInfo episode={episode} />
    </div>
  );
};

export default EpisodesInfoPage;
