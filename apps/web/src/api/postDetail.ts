import pb from '.';
import { getTagsByPostId } from './post';

export const getPostByPostId = async (id: string) => {
  const postResponse = await pb.collection('post').getOne(id, {
    expand: 'user_id',
  });
  const tagResponse = await getTagsByPostId(id);

  return {
    userId: postResponse.user_id,
    nickname: postResponse.expand?.user_id.nickname,
    profileImage: postResponse.expand?.user_id.profile_image,
    follower: postResponse.expand?.user_id.follower,
    following: postResponse.expand?.user_id.following,
    created: postResponse.created,
    id: postResponse.id,
    title: postResponse.title,
    content: postResponse.content,
    views: postResponse.views,
    likes: postResponse.likes,
    tags: tagResponse,
  };
};
