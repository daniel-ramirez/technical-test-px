import apiClient from "../../api/api.config";
import { RequestParam } from "../../api/api";

 export const getFavorites = async (params: RequestParam) => {
    let queryParam = `?orderBy=${params.direction === "asc" ? "" : "-"}${String(params.orderBy)}&status=${params.status}`;
    return apiClient.get(`/favorites${queryParam}`);
}