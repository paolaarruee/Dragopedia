import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { UseEditDragonParams, UseEditDragonReturn } from "../types";
import { Dragon, DragonBasicData } from "@/types";
import { editDragon } from "../api";
import { getDragonDetails } from "@/features/dragons-list/api";

export const useEditDragon = ({
  id,
}: UseEditDragonParams): UseEditDragonReturn => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<Dragon>({} as Dragon);

  const editDragonRequest = (data: DragonBasicData) => editDragon(id!, data);

  const fetchDragonDetails = () => {
    setIsFetching(true);

    getDragonDetails(id!)
      .then(({ data }: AxiosResponse<Dragon>) => setFetchedData(data))
      .catch(() => alert("Erro ao buscar os detalhes do dragão."))
      .finally(() => setIsFetching(false));
  };

  useEffect(fetchDragonDetails, [id]);

  return {
    editDragonRequest,
    isFetching,
    fetchedData,
  };
};
