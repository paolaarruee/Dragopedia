import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { deleteDragon, getDragonList } from "../api/";
import { Dragon, DragonStory, UseDragonReturn } from "../types";

export const useDragon = (): UseDragonReturn => {
  const [dragonList, setDragonList] = useState<Dragon[]>([]);
  const [toDeleteId, setToDeleteId] = useState<string>("");
  const [showingConfirmModal, setShowingConfirmModal] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const getDragons = () => {
    getDragonList()
      .then(({ data }: AxiosResponse<Dragon[]>) => {
        const alphabeticalOrderedList: Dragon[] = data.sort(
          (a: Dragon, b: Dragon) => (a.name > b.name ? 1 : -1)
        );

        setDragonList(alphabeticalOrderedList);
      })
      .finally(() => setIsLoading(false));
  };

  const handleDelete = (id: string) => () => {
    setToDeleteId(id);
    setShowingConfirmModal(true);
  };

  const closeConfirmModal = () => setShowingConfirmModal(false);

  const confirmDelete = () => {
    setIsDeleting(true);

    deleteDragon(toDeleteId)
      .then(() => getDragons())
      .finally(() => {
        setIsDeleting(false);
        setShowingConfirmModal(false);
      });
  };

  const parseStoryList = (stories: DragonStory[]): string => {
    return stories.reduce(
      (acc: string, { title, story }: DragonStory) =>
        acc + `${title}: ${story}`,
      ""
    );
  };

  useEffect(getDragons, []);

  return {
    dragonList,
    isLoading,
    isDeleting,
    showingConfirmModal,
    handleDelete,
    closeConfirmModal,
    confirmDelete,
    parseStoryList,
  };
};
