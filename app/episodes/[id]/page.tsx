"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const fetchData = async (id: number) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${id}`
  );
  return data;
};

const fetchCharacter = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

const Episode = async ({ params }: any) => {
  const router = useRouter();

  const episode = await fetchData(params.id);

  const characters = await Promise.all(
    episode.characters.map((url: string) => fetchCharacter(url))
  );

  return (
    <div className="container">
      <ul className="episodeList">
        <li className="episodeItem notHover">
          <h2 className="episodeName">{episode.name}</h2>
          <p className="episodeDate">Air Date: {episode.air_date}</p>
        </li>
      </ul>
      <h2 className="title">Characters involved in this episode</h2>
      <div className="charactersPosition">
        {characters.map((character) => (
          <div
            key={character.id}
            className="charactersCards"
            onClick={() => router.push(`/character/${character.id}`)}
          >
            <img
              src={character.image}
              alt={character.name}
              className="charactersImage"
            />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episode;
