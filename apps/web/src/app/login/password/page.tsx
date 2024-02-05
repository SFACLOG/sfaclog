'use client';
import { useState } from 'react';
import { Input, SquareButton } from 'sfac-design-kit';
import LoginLayout from '../../../components/LoginLayout';
import { getUserByEmail, resetPassword } from '@/api/user';
import { useUserContext } from '@/app/context/UserContext';

const page = () => {
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isEmailFound, setIsEmailFound] = useState<boolean>(false);
  const [isEmailFoundText, setIsEmailFoundText] = useState<string>('');

  const { userData, setUserData } = useUserContext();

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
      const user = await getUserByEmail(email);

      if (user.email === email) {
        setIsEmailFound(true);
        setIsEmailFoundText('');
        setUserData(prev => ({
          ...prev,
          email,
          id: user.id,
        }));
        resetPassword(email);
      } else {
        setIsEmailFound(false);
        setIsEmailFoundText('등록되지 않은 이메일입니다.');
      }
    } catch (error) {
      setIsEmailFound(false);
      setIsEmailFoundText('등록되지 않은 이메일입니다.');
    }
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
            styles={`${getEmailColor(isEmailValid)} ${isEmailFoundText && getEmailColor(isEmailFound)} `}
            name='email'
            onChange={handleEmailInputChange}
          />
          <SquareButton
            theme={`disable`}
            disabled={!isEmailValid}
            onClick={handleEmailButtonClick}
            className={`text-neutral-50 bg-neutral-20 ${isEmailValid && 'bg-primary-100 text-white cursor-pointer'} h-[52.9px] ml-[10px] w-[100px] text-sm font-semibold `}
          >
            {!isEmailFound ? '인증요청' : '재요청'}
          </SquareButton>
        </div>

        <p className={`${getEmailColor(isEmailValid)} text-[12px]  mt-[10px]`}>
          {email.length === 0
            ? ''
            : !isEmailValid && '*잘못된 이메일 형식입니다. 다시 입력해주세요.'}
        </p>
        <p className={`${getEmailColor(isEmailFound)} text-[12px]  mt-[10px]`}>
          {isEmailFoundText}
        </p>
      </div>
    </LoginLayout>
  );
};

export default page;
