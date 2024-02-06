import { axios } from "@/lib/axios";
import { Dragon } from "@/types";

export const getDragonDetails = (id: string) => axios.get<Dragon>(`/${id}`);
