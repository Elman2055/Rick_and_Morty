"use client";

import { TCharacter } from "@/shared/types";
import { useMobileClient } from "@/shared/hooks";
import { useTranslations } from "next-intl";
import styles from "./Character.module.scss";

const Character = ({ character }: { character: TCharacter }) => {
  const t = useTranslations();
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
                <b>{t("CharacterPage.SPECIES_TITLE")}</b>{" "}
                <span>{character.species}</span>
              </p>
              <p>
                <b>{t("CharacterPage.GENDER_TITLE")}</b>{" "}
                <span>{character.gender}</span>
              </p>
              <p>
                <b>{t("CharacterPage.STATUS_TITLE")}</b>{" "}
                <span>{character.status}</span>
              </p>
              <p>
                <b>{t("CharacterPage.ORIGIN_TITLE")}</b>{" "}
                <span>{character.origin.name}</span>
              </p>
              <p>
                <b>{t("CharacterPage.LOCATION_TITLE")}</b>{" "}
                <span>{character.location.name}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Character;
