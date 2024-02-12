import pb from '.';
import { Interest, Proposal, UserInfo } from '@/types/user';

export const login = async (id: string, password: string) => {
  await pb.collection('user').authWithPassword(id, password);
};

export const logout = () => {
  pb.authStore.clear();
};

export const signup = async (data: {
  username: string;
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  description?: string;
  interests?: Interest;
  proposals?: Proposal;
  emailVisibility?: boolean;
}) => {
  await pb.collection('user').create(data);
};

export const resetPassword = async (email: string) => {
  await pb.collection('user').requestPasswordReset(email);
};

export const resultx = async () => {
  const result = await pb.collection('user').listAuthMethods();
  console.log(result);
};

export const resultList = async (email: string) => {
  const result = await pb.collection('user').getFullList({
    filter: `email = "${email}"`,
    sort: '-created',
  });

  return result;
};

export const getUserByEmail = async (email: string) => {
  const records = await pb
    .collection('user')
    .getFirstListItem(`email = "${email}"`);

  return records;
};

// view => getUserById 수정
export const getUserById = async (id: string) => {
  const user = await pb.collection('user').getOne(id);

  return user;
};

export const getUserWithPropsById = async (id: string) => {
  const user: UserInfo = await pb.collection('user').getOne(id);

  return user;
};

export const getAllUsersById = async (ids: string[]) => {
  const records: any[] = [];
  for (const id of ids) {
    const record = await pb.collection('user').getFullList({
      filter: `id = "${id}"`,
    });
    records.push(record);
  }
  return records;
};

export const getUserAllProfileById = async (ids: string[]) => {
  const records: any[] = [];
  for (const id of ids) {
    const record = await pb.collection('user').getOne(id);
    const firstFilename = record.profile_image;
    const url = pb.files.getUrl(record, firstFilename, { thumb: '100x250' });
    records.push(url);
  }
  return records;
};

export const getUserProfileById = async (id: string) => {
  const record = await pb.collection('user').getOne(id);
  const firstFilename = record.profile_image;
  const url = pb.files.getUrl(record, firstFilename, { thumb: '100x250' });

  return url;
};

export const updateUser = async (id: string, data: any) => {
  await pb.collection('user').update(id, data);
};

export const update = async (email: string, data: {}) => {
  await pb.collection('user').update(email, data);
};

// 회원탈퇴 기능 수정 필요
export const withdrawal = async (id: string) => {
  await pb.collection('user').delete(id);
};

export const getUser = () => {
  return pb.authStore.model?.id ?? '';
};

export const isValidUser = () => {
  return pb.authStore.isValid;
};

export const getToken = () => {
  return pb.authStore.token;
};

export const getUserId = () => {
  return pb.authStore.model?.id ?? '';
};
