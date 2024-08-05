import { CharacterPage } from "@/app/character";
import { useTranslation } from "react-i18next";

export const metadata = {
  title: "Character Info",
  description: "This is the character page of the application.",
  robots: {
    index: true,
    follow: true,
  },
};

const Character = ({ params }: any) => {
  return <CharacterPage id={params.id} />;
};

export default Character;
