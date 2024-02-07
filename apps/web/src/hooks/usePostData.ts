import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostsbyUserId } from '@/api/post';

const getPostsDatabyUserId = async (user_id: string, page: number) => {
  try {
    const posts = await getPostsbyUserId(user_id, page);

    return posts;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetPostsByUserId = (user_id: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', user_id],
    queryFn: ({ pageParam }) => getPostsDatabyUserId(user_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
    staleTime: 0,
  });
};
