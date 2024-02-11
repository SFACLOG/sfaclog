import pb from '.';

export const getFollowersByUserId = async (user_id: string, page: number) => {
  const perPage = 10;
  const records = await pb.collection('follow').getList(page, perPage, {
    filter: `followee = "${user_id}"`,
    expand: 'follower',
  });

  return records;
};

export const getFollowingsByUserId = async (user_id: string, page: number) => {
  const perPage = 10;
  const records = await pb.collection('follow').getList(page, perPage, {
    filter: `follower = "${user_id}"`,
    expand: 'followee',
  });

  return records;
};
