import { AxiosResponse } from "axios";

export interface UseDragonListReturn {
  getAllDragons: () => Promise<AxiosResponse>;
}

export interface DragonExtraData {
  name: string;
  type: string;
  id: string;
}

export interface Dragon {
  createdAt: string;
  name: string;
  type: string;
  histories: string;
  id: string;
  data: DragonExtraData;
}
