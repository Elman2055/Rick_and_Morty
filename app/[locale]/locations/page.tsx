import { LocationsPage } from "@/app/locations";

export const metadata = {
  title: "Locations",
  description: "This is the locations page of the application.",
  robots: {
    index: true,
    follow: true,
  },
};

const Locations = () => {
  return <LocationsPage />;
};

export default Locations;
