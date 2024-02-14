import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getUser,
  getUserById,
  updateUser,
  getUserWithPropsById,
} from '@/api/user';
import { User } from '@/types/user';

const getUserDataById = async (id: string) => {
  try {
    const user = await getUserById(id);

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    return console.error(e);
  }
};

const patchUser = async (id: string, data: Partial<User>) => {
  try {
    await updateUser(id, data);
  } catch (e) {
    return console.error(e);
  }
};

export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserDataById(id),
  });
};

const getUserDataWithPropsById = async (id: string) => {
  try {
    const user = await getUserWithPropsById(id);

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetUserDataWithPropsById = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserDataWithPropsById(id),
  });
};

export const usePatchUser = () => {
  const id = getUser()?.id;

  return useMutation({
    mutationFn: (data: Partial<User>) => patchUser(id, data),
  });
};
