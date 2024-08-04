"use client";

import { useEffect, useState } from "react";
import { RickAndMortyService } from "@/shared/services";
import { PaginationPage } from "@/shared/ui";
import { ListPage } from "@/shared/ui";

const Locations = () => {
  const [locations, setLocations] = useState<[]>([]);

  const getLocations = async (page: number) => {
    const locations = await RickAndMortyService.getLocations(page);
    setLocations(locations);
  };

  useEffect(() => {
    getLocations(1);
  }, []);

  return (
    <>
      <ListPage list={locations} route="locations" title="Type:" />
      <PaginationPage count={7} onChange={getLocations} />
    </>
  );
};

export default Locations;
