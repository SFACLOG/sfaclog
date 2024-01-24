import { signup } from '../../utils/auth';

const Signup = () => {
  signup({
    username: 'test',
    email: 'test@test.com',
    password: '12345678',
    passwordConfirm: '12345678',
  });

  return (
    <div className='flex flex-col items-center justify-center'>
      회원가입 페이지
    </div>
  );
};

export default Signup;
