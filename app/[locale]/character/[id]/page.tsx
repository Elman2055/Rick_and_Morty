import { CharacterPage } from "@/app/character";

export const metadata = {
  title: "Character Info",
  description: "This is the character page of the application.",
  robots: {
    index: true,
    follow: true,
  },
};

const Character = ({ params }: { params: { id: number } }) => {
  return <CharacterPage id={params.id} />;
};

export default Character;
