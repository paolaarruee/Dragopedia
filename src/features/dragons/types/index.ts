export interface UseDragonListReturn {
  dragonList: Dragon[];
  isLoading: boolean;
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
