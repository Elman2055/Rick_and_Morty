"use client";

import { useEffect, useState } from "react";
import { RickAndMortyService } from "@/shared/services";
import { PaginationPage } from "@/shared/ui";
import { TEpisodes } from "@/entities/types";
import { ListPage } from "@/shared/ui";

const Episodes = () => {
  const [episodes, setEpisodes] = useState<TEpisodes[]>([]);

  const getEpisodes = async (page: number) => {
    const episodes = await RickAndMortyService.getEpisodes(page);
    if (episodes) setEpisodes(episodes);
  };

  useEffect(() => {
    getEpisodes(1);
  }, []);

  return (
    <>
      <ListPage list={episodes} route="episodes" title="Air date:" />
      <PaginationPage count={3} onChange={getEpisodes} />
    </>
  );
};

export default Episodes;
