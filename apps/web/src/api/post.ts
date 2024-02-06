import pb from '.';

export const getPostsbyUserId = async (user_id: string) => {
  const records = await pb.collection('post').getFullList({
    filter: `user_id = "${user_id}"`,
  });

  return records;
};
