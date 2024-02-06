import { AxiosResponse } from "axios";

import { DragonBasicData } from "@/types";

export interface UseNewDragonReturn {
  newDragonRequest: (data: DragonBasicData) => Promise<AxiosResponse<void>>;
}
