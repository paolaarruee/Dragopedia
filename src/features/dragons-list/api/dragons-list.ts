import { axios } from "@/lib/axios";
import { Dragon } from "@/types";

export const getDragonList = () => axios.get<Dragon[]>("");
