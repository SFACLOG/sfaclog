import pb from '.';
import { Follow } from '@/types/user';

export const getFollowId = async (followeeId: string, followerId: string) => {
  const { id } = await pb
    .collection('follow')
    .getFirstListItem(
      `follower = "${followerId}"  && followee = "${followeeId}"`,
    );

  return id;
};

export const getFollowersByUserId = async (userId: string, page: number) => {
  const perPage = 10;
  const records = await pb.collection('follow').getList(page, perPage, {
    filter: `followee = "${userId}"`,
    expand: 'follower',
  });

  return records;
};

export const getFollowingsByUserId = async (userId: string, page: number) => {
  const perPage = 10;
  const records = await pb.collection('follow').getList(page, perPage, {
    filter: `follower = "${userId}"`,
    expand: 'followee',
  });

  return records;
};

export const getIsFollowingUser = async (
  followeeId: string,
  followerId: string,
) => {
  const record = await pb
    .collection('follow')
    .getFirstListItem(
      `follower = "${followerId}"  && followee = "${followeeId}"`,
    );

  return record;
};

export const postFollow = async (data: Follow) => {
  await pb.collection('follow').create(data);
};

export const deleteFollow = async (followId: string) => {
  await pb.collection('follow').delete(followId);
};
