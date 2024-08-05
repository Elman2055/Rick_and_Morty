"use client";

import { Character } from "@/features/character";
import { useGetCharacterQuery } from "@/shared/services/RickAndMortyApi";
import { Loader } from "@/shared/ui";
import styles from "./CharacterPage.module.css";

const CharacterPage = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetCharacterQuery(id);

  return (
    <>
      <Loader isOpen={isLoading} />
      <div className={styles.container}>
        <Character character={data} />
      </div>
    </>
  );
};

export default CharacterPage;
