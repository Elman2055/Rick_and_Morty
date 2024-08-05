"use client";

import { useState } from "react";
import { PaginationPage } from "@/shared/ui";
import { useGetEpisodesQuery } from "@/shared/services/RickAndMortyApi";
import { Loader } from "@/shared/ui";
import { ListPage } from "@/shared/ui";

const Episodes = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetEpisodesQuery(page);

  return (
    <>
      <Loader isOpen={isLoading} />
      <ListPage list={data?.results} route="episodes" title="Air date:" />
      <PaginationPage count={3} onChange={setPage} />
    </>
  );
};

export default Episodes;
