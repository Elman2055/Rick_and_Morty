import React from "react";
import axios from "axios";

type TCharacter = {
  image: string;
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};

const fetchData = async (id: number) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return data;
};

const Character = async ({ params }: any) => {
  const character: TCharacter = await fetchData(params.id);

  return (
    <div className="container">
      <div className="character">
        <div className="characterBackground">
          <div className="characterInfo">
            <img
              src={character.image}
              alt="character"
              className="characterImage"
            />
            <h2>{character.name}</h2>
            <p>
              <b>Species:</b> {character.species}
            </p>
            <p>
              <b>Gender:</b> {character.gender}
            </p>
            <p>
              <b>Status:</b> {character.status}
            </p>
            <p>
              <b>Origin:</b> {character.origin.name}
            </p>
            <p>
              <b>Location:</b> {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
