import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getFollowersByUserId,
  getFollowingsByUserId,
  getIsFollowingUser,
  postFollow,
} from '@/api/follow';
import { Follow } from '@/types/user';
import { getUser, getUserById, updateUser } from '@/api/user';

const getFollowersDataByUserId = async (userId: string, page: number) => {
  try {
    const followers = await getFollowersByUserId(userId, page);

    return followers;
  } catch (e) {
    return console.error(e);
  }
};

const getFollowingsDataByUserId = async (userId: string, page: number) => {
  try {
    const followers = await getFollowingsByUserId(userId, page);

    return followers;
  } catch (e) {
    return console.error(e);
  }
};

const getIsFollowingUserData = async (followeeId: string) => {
  try {
    const followerId = getUser()?.id;
    const result = await getIsFollowingUser(followeeId, followerId);

    if (result.id) return true;

    return false;
  } catch {
    return false;
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

export const useGetFollowersByUserId = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ['followers'],
    queryFn: ({ pageParam }) => getFollowersDataByUserId(userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const useGetFollowingsByUserId = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ['followees'],
    queryFn: ({ pageParam }) => getFollowingsDataByUserId(userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};

export const useGetIsFollowingUser = (userId: string) => {
  return useQuery({
    queryKey: ['isFollowing'],
    queryFn: () => getIsFollowingUserData(userId),
  });
};

export const usePostFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Follow) => postFollowData(data),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      await queryClient.invalidateQueries({ queryKey: ['followers'] });
      await queryClient.invalidateQueries({ queryKey: ['isFollowing'] });

      return;
    },
  });
};
