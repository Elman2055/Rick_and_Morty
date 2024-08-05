import { EpisodesInfoPage } from "@/app/episodes";

export const metadata = {
  title: "Episodes Info",
  description: "This is the episode info page of the application.",
  robots: {
    index: true,
    follow: true,
  },
};

const Episode = ({ params }: any) => {
  return <EpisodesInfoPage id={params.id} />;
};

export default Episode;
