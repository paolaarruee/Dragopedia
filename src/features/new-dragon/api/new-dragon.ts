import { axios } from "@/lib/axios";
import { DragonBasicData } from "@/types";

export const registerDragon = (data: DragonBasicData) => axios.post<void>("", data);
