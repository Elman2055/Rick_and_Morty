"use client";

import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Locations = () => {
  const router = useRouter();
  const [locations, setLocations] = useState<[]>([]);

  const fetchDataEpisodes = async (page: number) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/location/?page=${page}`
    );
    setLocations(data.results);
  };

  useEffect(() => {
    fetchDataEpisodes(1);
  }, []);

  return (
    <div className="container episodesContainer">
      <h2 className="title">Rick and Morty Locations</h2>
      <ul className="episodeList">
        {locations.map((location: any) => (
          <li
            key={location.id}
            className="episodeItem"
            onClick={() => router.push(`locations/${location.id}`)}
          >
            <h2 className="episodeName">{location.name}</h2>
            <p className="episodeDate">Type: {location.type}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Pagination
          count={7}
          color="primary"
          onChange={(event, page) => fetchDataEpisodes(page)}
        />
      </div>
    </div>
  );
};

export default Locations;
