'use client';
import { useEffect, useRef, useState } from 'react';
import LoginLayout from '../../components/LoginLayout';
import { login } from '../../api/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input, SquareButton, Checkbox } from 'sfac-design-kit';

const Login = () => {
  const router = useRouter();
  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const performLogin = async () => {
      if (emailError || passwordError) {
        return;
      }

      if (email && password && !emailError && !passwordError) {
        try {
          await login(email, password);
          console.log('로그인 성공!');
          router.push('/');
        } catch (error: any) {
          console.error('로그인 실패:', error.message);
          setLoginError(
            '잘못된 이메일 혹은 비밀번호입니다. 다시 입력해주세요.',
          );
        }
      }
    };

    performLogin();
  }, [emailError, passwordError, email, password]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current?.value || '';
    const enteredPassword = passwordInputRef.current?.value || '';

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    setLoginError('');

    if (!enteredEmail) {
      setEmailError('이메일 주소를 다시 입력해주세요.');
    } else if (pattern.test(enteredEmail) === false) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
    } else {
      setEmailError('');
      setLoginError('');
    }

    if (!enteredPassword) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else {
      setPasswordError('');
    }

    setEamil(enteredEmail);
    setPassword(enteredPassword);
  };

  return (
    <LoginLayout title='로그인' color='text-neutral-100'>
      <form
        onSubmit={handleLogin}
        className='w-full text-neutral-40 text-caption3 '
      >
        <div className='mb-[55px]'>
          <Input
            placeholder='이메일'
            styles={`${emailError ? '' : ' mb-[22px]'}`}
            ref={emailInputRef}
            status={
              loginError
                ? 'error'
                : emailError.length === 0
                  ? 'normal'
                  : !emailError
                    ? 'success'
                    : 'error'
            }
            description={loginError ? '' : emailError}
          />

          <Input
            type='password'
            placeholder='비밀번호'
            ref={passwordInputRef}
            status={
              loginError
                ? 'error'
                : passwordError.length === 0
                  ? 'normal'
                  : !passwordError
                    ? 'success'
                    : 'error'
            }
            description={loginError ? loginError : passwordError}
          />
        </div>

        <SquareButton
          fullWidth={true}
          theme={'disable'}
          type='submit'
          className='mb-[15px] h-[50px] text-btn cursor-pointer'
        >
          로그인
        </SquareButton>

        <div className='flex justify-between w-full mb-[50px]'>
          <Checkbox
            label='로그인 유지'
            labelStyles=' text-neutral-40'
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />

          <button className=''>
            <Link href='/login/password'>비밀번호 찾기</Link>
          </button>
        </div>
      </form>
      <SquareButton
        fullWidth={true}
        theme={'disable'}
        headIcon='https://cdn-icons-png.flaticon.com/512/2111/2111466.png'
        className='h-[50px] mb-[50px] bg-kakao-yellow text-btn cursor-pointer'
      >
        카카오 로그인 하기
      </SquareButton>
      <button className=' text-caption3 text-neutral-40'>
        <Link href='/signup'>회원가입하기</Link>
      </button>
    </LoginLayout>
  );
};

export default Login;
