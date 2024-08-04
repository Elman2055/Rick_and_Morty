"use client";

import { TListInfo, TCharacters } from "@/shared/types";
import { SelectedList } from "@/shared/ui";
import { RickAndMortyService } from "@/shared/services";
import { CharactersCards } from "@/shared/ui";
import { useEffect, useState } from "react";
import styles from "./EpisodesInfo.module.scss";

const EpisodesInfo = ({ episode }: { episode: TListInfo }) => {
  const [characters, setCharacters] = useState<TCharacters[]>([]);

  const getCharacter = async () => {
    if (episode.characters) {
      const characters = await Promise.all(
        episode.characters.map((url: string) =>
          RickAndMortyService.getSelectedListCharacters(url)
        )
      );

      setCharacters(characters);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      <SelectedList selectedList={episode} />
      <h2 className={styles.title}>Characters involved in this episode</h2>
      <CharactersCards characters={characters} />
    </>
  );
};

export default EpisodesInfo;
