import { User } from '@prisma/client';
import { axiosClient } from '../lib/axios-clients';

export const getMe = async () => {
    const { data } = await axiosClient.get<User>('/auth/me');

    return data;
};