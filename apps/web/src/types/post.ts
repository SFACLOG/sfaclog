import { User } from './user';

export interface Post {
  id: string;
  thumbnail: string;
  title: string;
  content: string;
  views: number;
  likes: number;
  profileImage: string;
  userId: Pick<User, 'id'>;
}

export interface PostLike {
  id: string;
  userId: Pick<User, 'id'>;
  postId: Pick<Post, 'id'>;
}

export interface PostBookmark {
  id: string;
  userId: Pick<User, 'id'>;
  postId: Pick<Post, 'id'>;
}

export interface PostComment {
  id: string;
  content: string;
  likes: number;
  userId: Pick<User, 'id'>;
  postId: Pick<Post, 'id'>;
  parentId: Pick<PostComment, 'id'>;
}

export interface PostComment {
  id: string;
  userId: Pick<User, 'id'>;
  postCommentId: Pick<PostComment, 'id'>;
}

export interface Category {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface PostCategory {
  id: string;
  postId: Pick<Post, 'id'>;
  categoryId: Pick<Category, 'id'>;
}

export interface PostTag {
  id: string;
  postId: Pick<Post, 'id'>;
  TagId: Pick<Tag, 'id'>;
}
