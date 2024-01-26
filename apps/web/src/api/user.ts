import PocketBase from 'pocketbase';

const pb = new PocketBase('http://3.38.183.51:8090');

export const login = async (id: string, password: string) => {
  await pb.collection('user').authWithPassword(id, password);
};

export const logout = () => {
  pb.authStore.clear();
};

export const signup = async (data: {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  description?: string;
  interests?: string;
  proposals?: string;
}) => {
  await pb.collection('user').create(data);
  await pb.collection('user').requestVerification(data.email);
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
