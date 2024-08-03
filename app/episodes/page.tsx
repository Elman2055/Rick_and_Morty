"use client";

import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const EpisodesPage = () => {
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
      <h1 className="title">Rick and Morty Episodes</h1>
      <ul className="episodeList">
        {episodes.map((episode: any) => (
          <li key={episode.id} className="episodeItem">
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
