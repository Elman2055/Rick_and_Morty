import { LocationsInfo } from "@/entities/locations";
import { TListInfo } from "@/shared/types";
import styles from "./LocationsInfoPage.module.scss";

const LocationsInfoPage = ({ locations }: { locations: TListInfo }) => {
  return (
    <div className={styles.container}>
      <LocationsInfo locations={locations} />
    </div>
  );
};

export default LocationsInfoPage;
