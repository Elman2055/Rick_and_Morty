"use client";

import { TListInfo, TCharacters } from "@/shared/types";
import { SelectedList } from "@/shared/ui";
import { RickAndMortyService } from "@/shared/services";
import { CharactersCards } from "@/shared/ui";
import { useEffect, useState } from "react";
import { Loader } from "@/shared/ui";
import styles from "./LocationsInfo.module.css";

const LocationsInfo = ({ locations }: { locations: TListInfo }) => {
  const [residents, setResidents] = useState<TCharacters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCharacter = async () => {
    if (locations && locations.residents) {
      setIsLoading(true);
      const residents = await Promise.all(
        locations.residents.map((url: string) =>
          RickAndMortyService.getSelectedListCharacters(url)
        )
      );
      setResidents(residents);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [locations]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <SelectedList selectedList={locations} />
      <h2 className={styles.title}>Characters involved in this locations</h2>
      <CharactersCards characters={residents} />
    </>
  );
};

export default LocationsInfo;
