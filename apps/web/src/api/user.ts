import { Interest, Proposal } from '@/types/user';
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
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  description?: string;
  interests?: Interest;
  proposals?: Proposal;
}) => {
  await pb.collection('user').create(data);
  await pb.collection('user').requestVerification(data.email);
};

export const resetPassword = async (email: string) => {
  await pb.collection('user').requestPasswordReset(email);
};

// export const resultList = async () => {
//   try {
//     const result = await pb.collection('user').getFullList({
//       sort: '-id',
//     });
//     console.log(result);
//     return result; // You might want to return the result for further processing
//   } catch (error) {
//     console.error('Error fetching user list:', error);
//     throw error; // Re-throw the error or handle it accordingly
//   }
// };

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
