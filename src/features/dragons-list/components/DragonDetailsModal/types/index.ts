import { Dragon } from "@/types";

export interface DragonDetailsModalProps {
  dragonId: string;
  handleClose: () => void;
}

export interface UseDragonDetailsModalParams {
  dragonId: string;
}

export interface UseDragonDetailsModalReturn {
  isFetching: boolean;
  dragonData: Dragon;
}
