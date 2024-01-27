import { User } from './user';

export interface Chat {
  id: string;
  content: string;
  isRead: boolean;
  senderId: Pick<User, 'id'>;
  chatRoomId: Pick<Chat, 'id'>;
}

export interface ChatRoom {
  id: string;
  category: '프로젝트' | '채용' | '의견';
  senderId: Pick<User, 'id'>;
  receiverId: Pick<User, 'id'>;
}
