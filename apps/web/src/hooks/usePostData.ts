import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostsbyUserId, getUserRelatedPostsByUserId } from '@/api/post';

const getPostsDataByUserId = async (userId: string, page: number) => {
  try {
    const posts = await getPostsbyUserId(userId, page);

    return posts;
  } catch (e) {
    return console.error(e);
  }
};

const getUserRelatedPostDataByUserId = async (
  collection: string,
  userId: string,
  page: number,
) => {
  try {
    const posts = await getUserRelatedPostsByUserId(collection, userId, page);

    return posts;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetPostsByUserId = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', userId],
    queryFn: ({ pageParam }) => getPostsDataByUserId(userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const useGetBookmarkPostsByUserId = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'bookmark', userId],
    queryFn: ({ pageParam }) =>
      getUserRelatedPostDataByUserId('post_bookmark', userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const useGetRecentViewPostsByUserId = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'recent', userId],
    queryFn: ({ pageParam }) =>
      getUserRelatedPostDataByUserId('post_recent_view', userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};
