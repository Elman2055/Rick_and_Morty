import { LocationsInfoPage } from "@/app/locations";

export const metadata = {
  title: "Location Info",
  description: "This is the location info page of the application.",
  keywords: "Next.js, React, example",
  robots: {
    index: true,
    follow: true,
  },
};

const Location = ({ params }: any) => {
  return <LocationsInfoPage id={params.id} />;
};

export default Location;
