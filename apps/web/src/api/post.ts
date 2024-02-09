import pb from '.';

export const getPostsbyUserId = async (user_id: string, page: number) => {
  const perPage = 2;
  const records = await pb.collection('post').getList(page, perPage, {
    filter: `user_id = "${user_id}"`,
  });

  return records;
};

export const getRelatedPostsByUserId = async (
  collection: string,
  user_id: string,
  page: number,
) => {
  const perPage = 2;
  const records = await pb.collection(collection).getList(page, perPage, {
    filter: `user_id = "${user_id}"`,
    expand: 'post_id',
    sort: '-created',
  });

  return records;
};

export const getRecentViewPostByUserId = async (
  user_id: string,
  page: number,
) => {
  const perPage = 2;
  const records = await pb
    .collection('post_recent_view')
    .getList(page, perPage, {
      filter: `user_id = "${user_id}"`,
      expand: 'post_id',
    });

  return records;
};
