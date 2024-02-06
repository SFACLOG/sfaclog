import pb from '.';
import { Interest, Proposal } from '@/types/user';

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
  console.log(result);
  return result;
};

export const getUserByEmail = async (email: string) => {
  const records = await pb
    .collection('user')
    .getFirstListItem(`email = "${email}"`);
  console.log(records);
  console.log(records.oldPassword);

  return records;
};

export const updateUser = async (id: string, data: any) => {
  await pb.collection('user').update(id, data);
};

export const view = async (id: string) => {
  const user = await pb.collection('user').getOne(id);
  return user;
};
// const user = await pb.collection("user").getOne("USER_ID", { expand: "products(user)") })

export const update = async (email: string, data: {}) => {
  await pb.collection('user').update(email, data);
};

// 회원탈퇴 기능 수정 필요
export const withdrawal = async (id: string) => {
  await pb.collection('user').delete(id);
};

export const getUser = () => {
  return pb.authStore.model;
};

export const isValidUser = () => {
  return pb.authStore.isValid;
};

export const getToken = () => {
  return pb.authStore.token;
};
