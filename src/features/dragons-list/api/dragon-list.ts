import { axios } from "@/lib/axios";
import { Dragon } from "../types";

export const getDragonList = () => axios.get<Dragon[]>("");

// export const getDragonDetails = (id: string) => axios.get(`${API_URL}/${id}`);
