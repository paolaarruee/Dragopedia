export interface DragonDetailsModalProps {
  dragonId: string;
  handleClose: () => void;
}

export interface UseDragonDetailsModalParams {
  dragonId: string;
}

export interface UseDragonDetailsModalReturn {
  isLoading: boolean;
  dragonData: any;
}
