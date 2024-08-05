"use client";

import { useState } from "react";
import { PaginationPage } from "@/shared/ui";
import { CharactersCards } from "@/shared/ui";
import { useGetCharactersQuery } from "@/shared/services/RickAndMortyApi";
import { Loader } from "@/shared/ui";

const MainCharacters = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetCharactersQuery(page);

  return (
    <>
      <Loader isOpen={isLoading} />
      <CharactersCards characters={data?.results} />
      <PaginationPage count={42} onChange={setPage} />
    </>
  );
};

export default MainCharacters;
