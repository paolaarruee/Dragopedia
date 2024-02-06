import { AxiosResponse } from "axios";

import { Dragon, DragonBasicData } from "@/types";

export interface UseEditDragonParams {
  id?: string;
}

export interface UseEditDragonReturn {
  editDragonRequest: (data: DragonBasicData) => Promise<AxiosResponse<void>>;
  fetchedData: Dragon;
  isFetching: boolean;
}
