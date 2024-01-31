'use client';
import { useState } from 'react';
import LoginLayout from '../../components/LoginLayout';
import { login } from '../../api/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import  Button  from '@ui/Button/RoundButton';
const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setpasswordError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if (!email) {
      setEmailError('이메일 주소를 입력해주세요.');
    } else if (pattern.test(email) === false) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
    }

    if (!password) {
      setpasswordError('비밀번호를 입력해주세요.');
    }

    if (emailError || passwordError) {
      return;
    }

    try {
      await login(email, password);
      console.log('로그인 성공!');
      router.push('/');
    } catch (error: any) {
      console.error('로그인 실패:', error.message);
    }
  };

  return (
    <LoginLayout title='로그인' color='text-neutral-100'>
      <form onSubmit={handleLogin} className='w-full'>
        <div className='mb-[55px]'>
          <input
            type='text'
            placeholder='이메일'
            className={`border w-full ${emailError ? 'border-red-500' : ''}`}
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setEmailError('');
            }}
          />
          {emailError && <p className='text-red-500'>{emailError}</p>}
          <input
            type='password'
            placeholder='비밀번호'
            className={`border w-full ${passwordError ? 'border-red-500' : ''}`}
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              setpasswordError('');
            }}
          />
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
        </div>

        <button type='submit' className='border w-full'>
          로그인
        </button>

        <div className='flex justify-between w-full mb-[50px]'>
          <label>
            <input
              type='checkbox'
              className='mr-[10px]'
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            로그인 유지
          </label>
          <button>
            <Link href='/login/password'>비밀번호 찾기</Link>
          </button>
        </div>

        <button className='border w-full mb-[50px]'>카카오 로그인 하기</button>

        <button>
          <Link href='/signup'>회원가입하기</Link>
        </button>
      </form>
    </LoginLayout>
  );
};

export default Login;
