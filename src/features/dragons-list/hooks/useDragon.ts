import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";

import { deleteDragon, getDragonList } from "../api/dragon-list";
import { Dragon, UseDragonReturn } from "../types";

export const useDragon = (): UseDragonReturn => {
  const [dragonList, setDragonList] = useState<Dragon[]>([]);
  const [toDeleteId, setToDeleteId] = useState<string>("");
  const [showingConfirmModal, setShowingConfirmModal] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getDragons = () => {
    getDragonList()
      .then(({ data }: AxiosResponse<Dragon[]>) => setDragonList(data))
      .finally(() => setIsLoading(false));
  };

  const handleDelete = (id: string) => () => {
    setToDeleteId(id);
    setShowingConfirmModal(true);
  };

  const closeConfirmModal = () => setShowingConfirmModal(false);

  const confirmDelete = () => {
    setIsLoading(true);

    deleteDragon(toDeleteId)
      .then(() => getDragons())
      .finally(() => {
        setIsLoading(false);
        setShowingConfirmModal(false);
      });
  };

  useEffect(getDragons, []);

  return {
    dragonList,
    isLoading,
    showingConfirmModal,
    handleDelete,
    closeConfirmModal,
    confirmDelete,
  };
};
