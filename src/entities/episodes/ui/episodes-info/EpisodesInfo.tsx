"use client";

import { TListInfo, TCharacters } from "@/shared/types";
import { Loader, SelectedList } from "@/shared/ui";
import { RickAndMortyService } from "@/shared/services";
import { CharactersCards } from "@/shared/ui";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./EpisodesInfo.module.css";

const EpisodesInfo = ({ episode }: { episode: TListInfo }) => {
  const { t } = useTranslation();

  const [characters, setCharacters] = useState<TCharacters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCharacter = async () => {
    if (episode && episode.characters) {
      setIsLoading(true);
      const characters = await Promise.all(
        episode.characters.map((url: string) =>
          RickAndMortyService.getSelectedListCharacters(url)
        )
      );

      setCharacters(characters);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [episode]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <SelectedList selectedList={episode} />
      <h2 className={styles.title}>{t("EpisodeInfoPage.TITLE")}</h2>
      <CharactersCards characters={characters} />
    </>
  );
};

export default EpisodesInfo;
