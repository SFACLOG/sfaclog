import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';

const getMyData = () => {
  try {
    const user = getUser();

    if (!user) throw Error('getUserData error!');

    return user;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getMyData,
  });
};
