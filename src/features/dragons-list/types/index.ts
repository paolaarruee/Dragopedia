export interface UseDragonReturn {
  dragonList: Dragon[];
  isLoading: boolean;
  showingConfirmModal: boolean;
  confirmDelete: () => void;
  closeConfirmModal: () => void;
  handleDelete: (id: string) => () => void;
}

export interface Dragon {
  createdAt: string;
  name: string;
  type: string;
  histories: string;
  id: string;
  data: DragonExtraData;
}

export interface DragonExtraData {
  name: string;
  type: string;
  id: string;
}
