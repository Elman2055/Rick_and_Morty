"use client";

import { TCharacter } from "@/shared/types";
import { useMobileClient } from "@/shared/hooks";
import styles from "./Character.module.scss";

const Character = ({ character }: { character: TCharacter }) => {
  const isMobile = useMobileClient();

  return (
    <>
      {character && (
        <div
          className={`${styles.character} ${
            isMobile && styles.characterMobile
          }`}
        >
          <div className={styles.characterBackground}>
            <div className={styles.characterInfo}>
              <img
                src={character.image}
                alt="character"
                className={styles.characterImage}
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
      )}
    </>
  );
};

export default Character;
