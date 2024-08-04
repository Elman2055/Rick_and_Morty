import { LocationsInfoPage } from "@/app/locations";
import { RickAndMortyService } from "@/shared/services";

const Location = async ({ params }: any) => {
  const locations = await RickAndMortyService.getLocationInfo(params.id);

  return <LocationsInfoPage locations={locations} />;
};

export default Location;
