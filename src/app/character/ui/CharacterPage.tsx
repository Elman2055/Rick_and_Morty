import { Character } from "@/features/character";
import styles from "./CharacterPage.module.scss";
import { TCharacter } from "@/features/types";

const CharacterPage = ({ character }: { character: TCharacter }) => {
  return (
    <div className={styles.container}>
      <Character character={character} />
    </div>
  );
};

export default CharacterPage;
