"use client";

import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EpisodesPage = () => {
  const router = useRouter();
  const [episodes, setEpisodes] = useState<[]>([]);

  const fetchDataEpisodes = async (page: number) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/?page=${page}`
    );
    setEpisodes(data.results);
  };

  useEffect(() => {
    fetchDataEpisodes(1);
  }, []);

  return (
    <div className="container episodesContainer">
      <h2 className="title">Rick and Morty Episodes</h2>
      <ul className="episodeList">
        {episodes.map((episode: any) => (
          <li
            key={episode.id}
            className="episodeItem"
            onClick={() => router.push(`episodes/${episode.id}`)}
          >
            <h2 className="episodeName">{episode.name}</h2>
            <p className="episodeDate">Air Date: {episode.air_date}</p>
          </li>
        ))}
      </ul> 
      <div className="pagination">
        <Pagination
          count={3}
          color="primary"
          onChange={(event, page) => fetchDataEpisodes(page)}
        />
      </div>
    </div>
  );
};

export default EpisodesPage;
