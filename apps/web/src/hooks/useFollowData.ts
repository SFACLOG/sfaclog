import { useInfiniteQuery } from '@tanstack/react-query';
import { getFollowersByUserId } from '@/api/follow';

const getFollowersDataByUserId = async (user_id: string, page: number) => {
  try {
    const followers = await getFollowersByUserId(user_id, page);

    return followers;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetFollowersByUserId = (user_id: string) => {
  return useInfiniteQuery({
    queryKey: ['followers', user_id],
    queryFn: ({ pageParam }) => getFollowersDataByUserId(user_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};
