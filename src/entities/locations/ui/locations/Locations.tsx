"use client";

import { useState } from "react";
import { PaginationPage } from "@/shared/ui";
import { useGetLocationsQuery } from "@/shared/services/RickAndMortyApi";
import { Loader } from "@/shared/ui";
import { ListPage } from "@/shared/ui";

const Locations = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetLocationsQuery(page);

  return (
    <>
      <Loader isOpen={isLoading} />
      <ListPage list={data?.results} route="locations" title="Type:" />
      <PaginationPage count={7} onChange={setPage} />
    </>
  );
};

export default Locations;
