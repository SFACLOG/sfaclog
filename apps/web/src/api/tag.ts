import pb from '.';

export const getTags = async (page: number, perPage: number) => {
  const response = await pb.collection('tag').getList(page, perPage, {
    sort: '-created',
  });
  return response.items;
};
