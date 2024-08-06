import { EpisodesPage } from "@/app/episodes";

export const metadata = {
  title: "Episodes",
  description: "This is the episodes page of the application.",
  robots: {
    index: true,
    follow: true,
  },
};

const Episodes = () => {
  return <EpisodesPage />;
};

export default Episodes;
