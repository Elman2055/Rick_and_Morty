import { LocationsInfoPage } from "@/app/locations";

export const metadata = {
  title: "Location Info",
  description: "This is the location info page of the application.",
  robots: {
    index: true,
    follow: true,
  },
};

const Location = ({ params }: { params: { id: number } }) => {
  return <LocationsInfoPage id={params.id} />;
};

export default Location;
