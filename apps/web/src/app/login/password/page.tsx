'use client';
import { useState } from 'react';
import { Input, SquareButton } from 'sfac-design-kit';
import LoginLayout from '../../../components/LoginLayout';
import generateRandomNumber from '@/components/RandomNumber';
import Link from 'next/link';
import { resetPassword } from '@/api/user';
import { useRouter } from 'next/navigation';

const page = () => {
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [emailVerify, setEmailVerify] = useState<string>('');
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    setIsEmailValid(pattern.test(newEmail));
  };

  const handleEmailButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    try {
      const newCode = generateRandomNumber();
      setCode(newCode);

      const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, code: newCode }),
      });

      console.log('이메일 성공적으로 전송됨');
    } catch (error) {
      console.error('이메일 전송 중 오류:', error);
    }
  };

  const handleEmailVerifyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newEmailVerify = event.target.value;
    setIsEmailVerified(newEmailVerify === code);
    setEmailVerify(newEmailVerify);
  };

  const getEmailColor = (valid: boolean) => {
    if (email.length === 0) {
      return ' text-gray-300 ';
    } else if (valid) {
      return ' text-system-success';
    } else {
      return ' text-system-warning';
    }
  };

  const getEmailVerifyColor = (valid: boolean) => {
    if (emailVerify.length === 0) {
      return ' text-gray-300 ';
    } else if (valid) {
      return ' text-system-success';
    } else {
      return ' text-system-warning';
    }
  };

  const getEmailVerifyResult = (valid: boolean) => {
    if (emailVerify.length === 0) {
      return '인증번호를 입력해주세요';
    } else if (valid) {
      return '인증되었습니다.';
    } else {
      return '잘못된 인증번호입니다. 다시 인증해주세요.';
    }
  };
  const route = useRouter();

  const handleSubmit = () => {
    resetPassword(email);
    route.push('/login/password/1');
  };

  return (
    <LoginLayout title='비밀번호 찾기' color='text-netural-100'>
      <div className='mb-[50px] w-full'>
        <div className='flex items-end mb-[10px] w-full'>
          <Input
            type='email'
            placeholder='이메일 입력'
            label='이메일'
            required={true}
            value={email}
            styles={`${getEmailColor(isEmailValid)}`}
            name='email'
            onChange={handleEmailInputChange}
          />
          <SquareButton
            theme={`disable`}
            disabled={!isEmailValid}
            onClick={handleEmailButtonClick}
            className={`text-neutral-50 ${isEmailValid && 'bg-primary-100 text-white cursor-pointer'} h-[52.9px] ml-[10px] w-[100px] text-sm font-semibold `}
          >
            {!code ? '인증요청' : '재요청'}
          </SquareButton>
        </div>

        <Input
          placeholder='인증번호 입력'
          name='code'
          value={emailVerify}
          onChange={handleEmailVerifyChange}
        />
        <p className={`${getEmailColor(isEmailValid)} text-[12px]  mt-[10px]`}>
          {email.length === 0
            ? ''
            : !isEmailValid && '*잘못된 이메일 형식입니다. 다시 입력해주세요.'}
        </p>
        <p
          className={`{${getEmailVerifyColor(isEmailVerified)} text-[12px] mt-[10px]}`}
        >
          *{getEmailVerifyResult(isEmailVerified)}
        </p>
      </div>

      <SquareButton
        fullWidth={true}
        disabled={!isEmailVerified}
        onClick={handleSubmit}
      >
        다음
      </SquareButton>
    </LoginLayout>
  );
};

export default page;
