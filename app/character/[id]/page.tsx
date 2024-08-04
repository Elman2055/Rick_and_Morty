import { CharacterPage } from "@/app/character";
import { RickAndMortyService } from "@/shared/services";

const Character = async ({ params }: any) => {
  const character = await RickAndMortyService.getCharacter(params.id);

  return <CharacterPage character={character} />;
};

export default Character;
