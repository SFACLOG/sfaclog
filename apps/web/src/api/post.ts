import pb from '.';

export const getPostsbyUserId = async (user_id: string, page: number) => {
  const perPage = 2;
  const records = await pb.collection('post').getList(page, perPage, {
    filter: `user_id = "${user_id}"`,
  });

  return records;
};
