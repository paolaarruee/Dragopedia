import { axios } from "@/lib/axios";

export const getDragonDetails = (id: string) => axios.get(`/${id}`);
