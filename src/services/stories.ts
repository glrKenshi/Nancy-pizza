import { Story, StoryItem } from '@/prisma/generated/client/client';
import { axiosClient } from '../lib/axios-clients';

export type IStory = Story & {
    items: StoryItem[];
};

export const getAll = async () => {
    const { data } = await axiosClient.get<IStory[]>('/stories');

    return data;
};