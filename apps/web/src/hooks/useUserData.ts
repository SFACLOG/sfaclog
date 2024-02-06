import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/user';

const getUserDataById = async (id: string) => {
  try {
    const user = await getUserById(id);

    if (!user) throw Error('getUserData error!');

    return user;
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
