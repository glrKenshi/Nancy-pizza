import { Ingredient } from '@/prisma/generated/client/client';
import { axiosClient } from '../lib/axios-clients';
import { ApiRoutes } from '../config/api-routes';


export const getAll = async (): Promise<Ingredient[]> => {
    return (await axiosClient.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};