"use client";

import { EpisodesInfo } from "@/entities/episodes";
import { useGetEpisodeInfoQuery } from "@/shared/services/RickAndMortyApi";
import { Loader } from "@/shared/ui";
import styles from "./EpisodesInfoPage.module.css";

const EpisodesInfoPage = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetEpisodeInfoQuery(id);

  return (
    <>
      <Loader isOpen={isLoading} />
      <div className={styles.container}>
        <EpisodesInfo episode={data} />
      </div>
    </>
  );
};

export default EpisodesInfoPage;
