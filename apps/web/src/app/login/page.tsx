import { login } from '../../utils/auth';

const Login = () => {
  login('imsi@google.com', 'imsi1234');

  return (
    <div className='flex flex-col items-center justify-center'>
      로그인 페이지
    </div>
  );
};

export default Login;
