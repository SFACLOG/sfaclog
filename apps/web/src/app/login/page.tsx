import Image from 'next/image';
import Logo from '../../components/Logo';
import LoginLayout from '../../components/LoginLayout';

const Login = () => {
  return (
    <LoginLayout title='로그인' color='text-neutral-100'>
      <div className='mb-[55px]'>
        <input type='text' placeholder='이메일' className='border w-full' />

        <input
          type='password'
          placeholder='비밀번호'
          className='border w-full'
        />
      </div>
      <button className='border  w-full'>로그인</button>
      <div className='flex justify-between w-full mb-[50px]'>
        <label>
          <input type='checkbox' className='mr-[10px]' />
          로그인 유지
        </label>
        <div>비밀번호 찾기</div>
      </div>
      <button className='border w-full mb-[50px]'>카카오 로그인 하기</button>
      <div>회원가입하기</div>
    </LoginLayout>
  );
};

export default Login;
