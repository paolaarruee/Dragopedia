import { axios } from "@/lib/axios";

export const deleteDragon = (id: string) => axios.delete(`/${id}`);
