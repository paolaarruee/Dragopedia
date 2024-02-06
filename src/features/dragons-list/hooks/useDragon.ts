import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { DragonStory } from "@/types";
import { deleteDragon, getDragonList } from "../api/";
import { Dragon, UseDragonReturn } from "../types";

export const useDragon = (): UseDragonReturn => {
  const [dragonList, setDragonList] = useState<Dragon[]>([]);
  const [toDeleteId, setToDeleteId] = useState<string>("");
  const [toShowDetailsId, setToShowDetailsId] = useState<string>("");
  const [showingConfirmModal, setShowingConfirmModal] =
    useState<boolean>(false);
  const [showingDetailsModal, setShowingDetailsModal] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const fetchDragonList = () => {
    getDragonList()
      .then(({ data }: AxiosResponse<Dragon[]>) => {
        const alphabeticalOrderedList: Dragon[] = data.sort(
          (a: Dragon, b: Dragon) => (a.name > b.name ? 1 : -1)
        );

        setDragonList(alphabeticalOrderedList);
      })
      .catch(() => alert('Erro ao carregar a lista de dragões.'))
      .finally(() => setIsLoading(false));
  };

  const handleShowDetails = (id: string) => () => {
    setToShowDetailsId(id);
    setShowingDetailsModal(true);
  };

  const handleDelete = (id: string) => () => {
    setToDeleteId(id);
    setShowingConfirmModal(true);
  };

  const closeConfirmModal = () => setShowingConfirmModal(false);

  const closeDetailsModal = () => setShowingDetailsModal(false);

  const updateListAfterDelete = () => {
    const toUpdateDragonsList: Dragon[] = [...dragonList];
    const toDeleteIndex: number = dragonList.findIndex(
      ({ id }: Dragon) => id === toDeleteId
    );

    toUpdateDragonsList.splice(toDeleteIndex, 1);

    setDragonList(toUpdateDragonsList);
  };

  const confirmDelete = () => {
    setIsDeleting(true);

    deleteDragon(toDeleteId)
      .then(() => {
        updateListAfterDelete();
        alert("Sucesso ao excluir o dragão!");
      })
      .catch(() => alert("Erro ao excluir o dragão."))
      .finally(() => {
        setIsDeleting(false);
        setShowingConfirmModal(false);
      });
  };

  const getStoriesFullText = (stories: DragonStory[]): string => {
    const hasValidStories: boolean =
      !!stories?.length &&
      stories.some(({ title, story }: DragonStory) => title && story);

    if (!hasValidStories) {
      return "";
    }

    return stories.reduce(
      (acc: string, { title, story }: DragonStory) =>
        acc + `${title}: ${story}`,
      ""
    );
  };

  useEffect(fetchDragonList, []);

  return {
    dragonList,
    isLoading,
    isDeleting,
    toShowDetailsId,
    showingConfirmModal,
    showingDetailsModal,
    closeConfirmModal,
    closeDetailsModal,
    confirmDelete,
    getStoriesFullText,
    handleDelete,
    handleShowDetails,
  };
};
