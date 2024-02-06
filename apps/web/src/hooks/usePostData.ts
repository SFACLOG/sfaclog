import { useQuery } from '@tanstack/react-query';
import { getPostsbyUserId } from '@/api/post';

const getPostsDatabyUserId = async (user_id: string) => {
  try {
    const posts = await getPostsbyUserId(user_id);

    return posts;
  } catch (e) {
    return console.error(e);
  }
};

export const useGetPosts = (user_id: string) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostsDatabyUserId(user_id),
  });
};
