import { DragonStory } from "@/types";

export interface Dragon {
  createdAt: string;
  name: string;
  type: string;
  histories: DragonStory[];
  id: string;
}

export interface UseDragonReturn {
  dragonList: Dragon[];
  isLoading: boolean;
  isDeleting: boolean;
  showingConfirmModal: boolean;
  showingDetailsModal: boolean;
  toShowDetailsId: string;
  confirmDelete: () => void;
  closeDetailsModal: () => void;
  closeConfirmModal: () => void;
  handleDelete: (id: string) => () => void;
  handleShowDetails: (id: string) => () => void;
  getStoriesFullText: (storiesList: DragonStory[]) => string;
}
