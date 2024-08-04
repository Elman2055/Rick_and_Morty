"use client";

import { TListInfo, TCharacters } from "@/shared/types";
import { SelectedList } from "@/shared/ui";
import { RickAndMortyService } from "@/shared/services";
import { CharactersCards } from "@/shared/ui";
import { useEffect, useState } from "react";
import styles from "./LocationsInfo.module.scss";

const LocationsInfo = ({ locations }: { locations: TListInfo }) => {
  const [residents, setResidents] = useState<TCharacters[]>([]);

  const getCharacter = async () => {
    if (locations.residents) {
      const residents = await Promise.all(
        locations.residents.map((url: string) =>
          RickAndMortyService.getSelectedListCharacters(url)
        )
      );
      setResidents(residents);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      <SelectedList selectedList={locations} />
      <h2 className={styles.title}>Characters involved in this locations</h2>
      <CharactersCards characters={residents} />
    </>
  );
};

export default LocationsInfo;
