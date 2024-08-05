"use client";

import { LocationsInfo } from "@/entities/locations";
import { useGetLocationInfoQuery } from "@/shared/services/RickAndMortyApi";
import { Loader } from "@/shared/ui";
import styles from "./LocationsInfoPage.module.css";

const LocationsInfoPage = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetLocationInfoQuery(id);

  return (
    <>
      <Loader isOpen={isLoading} />
      <div className={styles.container}>
        <LocationsInfo locations={data} />
      </div>
    </>
  );
};

export default LocationsInfoPage;
