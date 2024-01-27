import {
  getToken,
  getUser,
  isValidUser,
  login,
  logout,
  signup,
  withdrawal,
} from '../../api/user';

const AuthTest = () => {
  // 로그인
  login('imsi@google.com', 'imsi1234');

  console.log('token:', getToken());
  console.log('id:', getUser()?.id);
  console.log('isValid:', isValidUser());
  // 로그아웃
  logout();
  console.log('isValid:', isValidUser());

  // 회원가입
  signup({
    username: 'zxcaqqqqq',
    email: 'dhfak1@gmail.com',
    password: '12345678',
    passwordConfirm: '12345678',
  });

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
