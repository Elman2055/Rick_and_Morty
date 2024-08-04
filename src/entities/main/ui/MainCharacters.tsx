"use client";

import { useState, useEffect } from "react";
import { PaginationPage } from "@/shared/ui";
import { RickAndMortyService } from "@/shared/services";
import { TCharacters } from "@/shared/types";
import { CharactersCards } from "@/shared/ui";

const MainCharacters = () => {
  const [characters, setCharacters] = useState<TCharacters[]>([]);

  const getCharacters = async (page: number) => {
    const characters = await RickAndMortyService.getCharacters(page);
    if (characters) setCharacters(characters);
  };

  useEffect(() => {
    getCharacters(1);
  }, []);

  return (
    <>
      <CharactersCards characters={characters} />
      <PaginationPage count={42} onChange={getCharacters} />
    </>
  );
};

export default MainCharacters;
