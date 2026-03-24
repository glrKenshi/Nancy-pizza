import { Product } from "@/prisma/generated/client/client"
import { axiosClient } from "../lib/axios-clients"
import { ApiRoutes } from "../config/api-routes"

export const search = async (query: string): Promise<Product[]> => {
    return (await axiosClient.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data
}