import styles from "./CharactersCards.module.scss";
import { TCharacters } from "@/shared/types/types";
import { useRouter } from "next/navigation";

const CharactersCards = ({ characters }: { characters: TCharacters[] }) => {
  const router = useRouter();

  return (
    <div className={styles.charactersPosition}>
      {characters &&
        characters.map((el: TCharacters) => (
          <div
            key={el.id}
            className={styles.charactersCards}
            onClick={() => router.push(`/character/${el.id}`)}
          >
            <img
              src={el.image}
              alt="character"
              className={styles.charactersImage}
            />
            <h3>{el.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default CharactersCards;
