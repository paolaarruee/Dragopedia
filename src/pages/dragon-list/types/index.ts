import { AxiosResponse } from "axios";

export type UseDragonListReturn = {
  getAllDragons: () => Promise<AxiosResponse>;
};

export type DragonExtraData = {
  name: string;
  type: string;
  id: string;
};

export type Dragon = {
  createdAt: string;
  name: string;
  type: string;
  histories: string;
  id: string;
  data: DragonExtraData;
};
