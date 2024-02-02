import {
  getToken,
  getUser,
  isValidUser,
  login,
  logout,
  resetPassword,
  signup,
  view,
  withdrawal,
} from '../../api/user';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://3.38.183.51:8090');

const AuthTest = () => {
  const fetchData = async () => {
    const records = await pb.collection('user').getFullList({
      sort: '-created',
    });
    console.log(records);
  };
  fetchData();

  // const users = view('63uiryfe1e1gdmy');
  // const fetchData = async () => {
  //   const userData = await view('63uiryfe1e1gdmy');
  //   console.log(userData);
  // };

  // login('imsi@google.com', 'imsi1234');
  // console.log('token:', getToken());
  // const fetchData = async () => {
  //   const userData = await resultList();
  //   console.log(userData);
  // };
  // // console.log(resultList());

  // resetPassword('dhfak@naver.com');

  // console.log(resetPassword('azzz@ab.com'));

  // fetchData();

  // console.log(users);
  // console.log(user);
  // console.log(user)
  // 로그인
  // login('imsi@google.com', 'imsi1234');

  // console.log('token:', getToken());
  // console.log('id:', getUser()?.id);
  // console.log('isValid:', isValidUser());
  // // 로그아웃
  // logout();
  // console.log('isValid:', isValidUser());

  // signup({
  //   username: 'john_doe',
  //   nickname: 'John',
  //   email: 'john.doe@example.com',
  //   password: 'password123',
  //   passwordConfirm: 'password123',
  //   description: 'Passionate developer',
  //   interests: {
  //     frontend: true,
  //     backend: true,
  //     machineLearning: false,
  //     cloudComputing: true,
  //     database: false,
  //     container: false,
  //     serverless: true,
  //     mobile: true,
  //   },
  //   proposals: {
  //     project: true,
  //     recruit: false,
  //     opinion: true,
  //   },
  // });

  // 회원가입
  // signup({
  //   username: 'zxcaqqqqq',
  //   email: 'dhfak1@gmail.com',
  //   password: '12345678',
  //   passwordConfirm: '12345678',
  // });

  // 회원 탈퇴
  //   withdrawal('lydraymd299p1l5');

  return (
    <div className='flex flex-col items-center justify-center'>
      유저 Auth 테스트
      <div></div>
    </div>
  );
};

export default AuthTest;
