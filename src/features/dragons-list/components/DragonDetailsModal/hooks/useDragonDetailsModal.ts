import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { UseDragonDetailsModalParams, UseDragonDetailsModalReturn } from "..";
import { getDragonDetails } from "@/features/dragons-list/api";
import { Dragon } from "@/features/dragons-list/types";

export const useDragonDetailsModal = ({
  dragonId,
}: UseDragonDetailsModalParams): UseDragonDetailsModalReturn => {
  const [dragonData, setDragonData] = useState<Dragon[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDragonDetails = () => {
    setIsLoading(true);

    getDragonDetails(dragonId)
      .then(({ data }: AxiosResponse<Dragon[]>) => setDragonData(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchDragonDetails, []);

  return { isLoading, dragonData };
};
