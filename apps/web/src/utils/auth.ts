import PocketBase from 'pocketbase';

const pb = new PocketBase('http://3.38.183.51:8090');

export const login = async (id: string, password: string) => {
  await pb.collection('user').authWithPassword(id, password);

  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model?.id);
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

  // (optional) send an email verification request
  //   await pb.collection('user').requestVerification(data.email);
};

export const signout = async (id: string) => {
  await pb.collection('user').delete(id);
};
