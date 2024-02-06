import { UseNewDragonReturn } from "../types";
import { registerDragon } from "../api";
import { DragonBasicData } from "@/types";

export const useNewDragon = (): UseNewDragonReturn => {
  const newDragonRequest = (data: DragonBasicData) => registerDragon(data);

  return {
    newDragonRequest,
  };
};
