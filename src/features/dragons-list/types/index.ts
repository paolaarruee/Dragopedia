export interface DragonStory {
  title: string;
  story: string;
}

export interface Dragon {
  createdAt: string;
  name: string;
  type: string;
  histories: DragonStory[];
  id: string;
  data: DragonExtraData;
}

export interface DragonExtraData {
  name: string;
  type: string;
  id: string;
}

export interface UseDragonReturn {
  dragonList: Dragon[];
  isLoading: boolean;
  isDeleting: boolean;
  showingConfirmModal: boolean;
  confirmDelete: () => void;
  closeConfirmModal: () => void;
  handleDelete: (id: string) => () => void;
  parseStoryList: (storyList: DragonStory[]) => string;
}