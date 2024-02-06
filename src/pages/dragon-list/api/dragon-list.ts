import axios from "axios";

import { API_URL } from "@/config";
import { Dragon } from "../types";

export const getDragonList = () => axios.get<Dragon[]>(API_URL);

// export const getDragonDetails = (id: string) => axios.get(`${API_URL}/${id}`);
