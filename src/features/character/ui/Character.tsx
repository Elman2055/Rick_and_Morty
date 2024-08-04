import { TCharacter } from "@/features/types";
import styles from "./Character.module.scss";

const Character = ({ character }: { character: TCharacter }) => {
  return (
    <div className={styles.character}>
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
  );
};

export default Character;
