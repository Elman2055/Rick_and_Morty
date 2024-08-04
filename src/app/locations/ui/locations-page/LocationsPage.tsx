import { Locations } from "@/entities/locations";
import styles from "./LocationsPage.module.scss";

const LocationsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rick and Morty Locations</h2>
      <Locations />
    </div>
  );
};

export default LocationsPage;
