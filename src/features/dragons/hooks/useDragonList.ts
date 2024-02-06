import { getDragonList } from "../api/dragon-list";
import { UseDragonListReturn } from "../types";

export const useDragonList = (): UseDragonListReturn => {
  const getAllDragons = () => getDragonList();

  return { getAllDragons };
};
