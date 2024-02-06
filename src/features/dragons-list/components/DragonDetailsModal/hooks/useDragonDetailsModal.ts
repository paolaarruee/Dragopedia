import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { UseDragonDetailsModalParams, UseDragonDetailsModalReturn } from "..";
import { getDragonDetails } from "@/features/dragons-list/api";
import { Dragon } from "@/types";

export const useDragonDetailsModal = ({
  dragonId,
}: UseDragonDetailsModalParams): UseDragonDetailsModalReturn => {
  const [dragonData, setDragonData] = useState<Dragon>({} as Dragon);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const fetchDragonDetails = () => {
    setIsFetching(true);

    getDragonDetails(dragonId)
      .then(({ data }: AxiosResponse<Dragon>) => setDragonData(data))
      .catch(() => alert('Erro ao buscar os detalhes do dragão.'))
      .finally(() => setIsFetching(false));
  };

  useEffect(fetchDragonDetails, [dragonId]);

  return { isFetching, dragonData };
};
