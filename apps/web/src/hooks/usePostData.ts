import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostsbyUserId, getUserRelatedPostsByUserId } from '@/api/post';

const getPostsDataByUserId = async (user_id: string, page: number) => {
  try {
    const posts = await getPostsbyUserId(user_id, page);

    return posts;
  } catch (e) {
    return console.error(e);
  }
};

const getUserRelatedPostDataByUserId = async (
  collection: string,
  user_id: string,
  page: number,
) => {
  try {
    const posts = await getUserRelatedPostsByUserId(collection, user_id, page);

    return posts;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetPostsByUserId = (user_id: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', user_id],
    queryFn: ({ pageParam }) => getPostsDataByUserId(user_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const useGetBookmarkPostsByUserId = (user_id: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'bookmark', user_id],
    queryFn: ({ pageParam }) =>
      getUserRelatedPostDataByUserId('post_bookmark', user_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const useGetRecentViewPostsByUserId = (user_id: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'recent', user_id],
    queryFn: ({ pageParam }) =>
      getUserRelatedPostDataByUserId('post_recent_view', user_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};
