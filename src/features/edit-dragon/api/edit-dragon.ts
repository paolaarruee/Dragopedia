import { axios } from "@/lib/axios";
import { DragonBasicData } from "@/types";

export const editDragon = (id: string, data: DragonBasicData) =>
  axios.put(`/${id}`, data);
