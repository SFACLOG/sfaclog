import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import {
  getFollowersByUserId,
  getFollowingsByUserId,
  postFollow,
} from '@/api/follow';
import { Follow } from '@/types/user';
import { getUserById, updateUser } from '@/api/user';

const getFollowersDataByUserId = async (user_id: string, page: number) => {
  try {
    const followers = await getFollowersByUserId(user_id, page);

    return followers;
  } catch (e) {
    return console.error(e);
  }
};

const getFollowingsDataByUserId = async (user_id: string, page: number) => {
  try {
    const followers = await getFollowingsByUserId(user_id, page);

    return followers;
  } catch (e) {
    return console.error(e);
  }
};

const postFollowData = async (data: Follow) => {
  try {
    const { followee: followeeId, follower: followerId } = data;

    const { follower } = await getUserById(followeeId);
    const { following } = await getUserById(followerId);

    await updateUser(followeeId, { follower: follower + 1 });
    await updateUser(followerId, { following: following + 1 });
    await postFollow(data);
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

export const useGetFollowingsByUserId = (user_id: string) => {
  return useInfiniteQuery({
    queryKey: ['followees', user_id],
    queryFn: ({ pageParam }) => getFollowingsDataByUserId(user_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const usePostFollow = () => {
  return useMutation({
    mutationFn: (data: Follow) => postFollowData(data),
  });
};
