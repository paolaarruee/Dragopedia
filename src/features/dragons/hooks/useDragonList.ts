import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { getDragonList } from "../api/dragon-list";
import { Dragon, UseDragonListReturn } from "../types";

export const useDragonList = (): UseDragonListReturn => {
  const [dragonList, setDragonList] = useState<Dragon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDragonList()
      .then(({ data }: AxiosResponse<Dragon[]>) => setDragonList(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { dragonList, isLoading };
};
