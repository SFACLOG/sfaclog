import {
  getToken,
  getUser,
  getUserByEmail,
  isValidUser,
  login,
  logout,
  resultList,
  resultx,
  signup,
  withdrawal,
} from '../../api/user';

const AuthTest = () => {
  // try {
  //   // Call resultList using await to wait for the result
  //   const users = await resultList('you@naver.com');
  //   console.log(users);
  // } catch (error) {
  //   console.error('Error in AuthTest:', error);
  // }

  //유저이메일확인
  // const userEmail = 'you@naver.com';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = await getUserByEmail(userEmail);

  //       if (user.email === userEmail) {
  //         console.log('Emails match!');
  //       } else {
  //         console.log('Emails do not match.');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user:', error);

  //     }
  //   };

  //   fetchData();
  // }, [userEmail]);

  // console.log(data);
  // console.log(aaa('you@naver.com'));
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
  //   username: 'john_doexaa',
  //   nickname: 'Johnxaa',
  //   email: 'john.doexaa@example.com',
  //   password: 'password123',
  //   passwordConfirm: 'password123',
  //   description: 'Passionate developer',
  //   emailVisibility: true,
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
  //   username: 'zaa33xcv',
  //   nickname: 'z3344xcv',
  //   email: 'tstststs@aasdzxc.com',
  //   password: '12345678aaa',
  //   passwordConfirm: '12345678aaa',
  // });

  // 회원 탈퇴
  //   withdrawal('lydraymd299p1l5');

  // resultx();

  return (
    <div className='flex flex-col items-center justify-center'>
      유저 Auth 테스트
    </div>
  );
};

export default AuthTest;
