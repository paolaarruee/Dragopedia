import { Dragon, DragonStory } from "@/types";

export interface UseDragonReturn {
  dragonList: Dragon[];
  isFetching: boolean;
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
