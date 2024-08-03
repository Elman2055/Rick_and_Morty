"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const fetchData = async (id: number) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/location/${id}`
  );
  return data;
};

const fetchCharacter = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

const Location = async ({ params }: any) => {
  const router = useRouter();

  const location = await fetchData(params.id);

  const characters = await Promise.all(
    location.characters.map((url: string) => fetchCharacter(url))
  );

  return (
    <div className="container">
      <ul className="episodeList">
        <li className="episodeItem notHover">
          <h2 className="episodeName">{location.name}</h2>
          <p className="episodeDate">Type: {location.type}</p>
          <p className="episodeDate">Dimension: {location.dimension}</p>
        </li>
      </ul>
      <h2 className="title">Characters involved in this location</h2>
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

export default Location;
