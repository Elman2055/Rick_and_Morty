import { EpisodesInfoPage } from "@/app/episodes";
import { RickAndMortyService } from "@/shared/services";

const Episode = async ({ params }: any) => {
  const episode = await RickAndMortyService.getEpisodeInfo(params.id);

  return <EpisodesInfoPage episode={episode} />;
};

export default Episode;
