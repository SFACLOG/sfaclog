'use client';
import { Input, SquareButton } from 'sfac-design-kit';
import LoginLayout from '../../../../components/LoginLayout';
import Image from 'next/image';
import { useState } from 'react';

const page = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isLengthValid, setIsLengthValid] = useState<boolean>(false);
  const [isCompositionValid, setIsCompositionValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const passwordCompositionRegex =
      /^(?:(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*\d)|(?=.*\W)).+$/;

    const isLengthValid = newPassword.length >= 10 && newPassword.length <= 16;

    const isCompositionValid = passwordCompositionRegex.test(newPassword);

    setIsLengthValid(isLengthValid);
    setIsCompositionValid(isCompositionValid);
  };

  const handlePasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPasswordConfirm = event.target.value;
    setPasswordConfirm(newPasswordConfirm);
    setIsPasswordValid(newPasswordConfirm === password);
  };

  const getPasswordStyle = () => {
    if (password.length === 0) {
      return 'border-gray-300 ';
    } else if (isLengthValid && isCompositionValid) {
      return 'border-system-success text-system-success ';
    } else if (!isLengthValid || !isCompositionValid) {
      return 'border-system-warning text-system-warning';
    }
  };

  const getRuleImage = (valid: boolean) => {
    if (password.length === 0) {
      return (
        <Image
          src='/images/rule_origin.svg'
          alt='wrong'
          width={20}
          height={20}
          className=' mr-[10px]'
        />
      );
    } else if (valid) {
      return (
        <Image
          src='/images/rule_o.svg'
          alt='wrong'
          width={20}
          height={20}
          className=' mr-[10px]'
        />
      );
    } else {
      return (
        <Image
          src='/images/rule_x.svg'
          alt='wrong'
          width={20}
          height={20}
          className=' mr-[10px]'
        />
      );
    }
  };

  const getPasswordColor = (valid: boolean) => {
    if (password.length === 0) {
      return ' text-gray-300 ';
    } else if (valid) {
      return ' text-system-success';
    } else {
      return ' text-system-warning';
    }
  };

  const getPasswordConfirmColor = (valid: boolean) => {
    if (passwordConfirm.length === 0) {
      return ' text-gray-300 ';
    } else if (valid) {
      return ' text-system-success';
    } else {
      return ' text-system-warning';
    }
  };

  const getPasswordConfirmResult = (valid: boolean) => {
    if (passwordConfirm.length === 0) {
      return '비밀번호를 입력하세요.';
    } else if (valid) {
      return '생성한 비밀번호와 일치합니다.';
    } else {
      return '생성한 비밀번호와 일치하지 않습니다.';
    }
  };

  return (
    <LoginLayout title='비밀번호 변경' color='text-neutral-100'>
      <div className='mb-[50px] w-full'>
        <Input
          type='password'
          placeholder='(필수) 비밀번호 입력'
          label='비밀번호'
          required={true}
          styles={`${getPasswordStyle()} h-[50px]`}
          name='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <div className='flex items-center  mt-2'>
          {getRuleImage(isLengthValid)}
          <div
            className={`${getPasswordColor(isLengthValid)} text-neutral-40 text-caption3`}
          >
            10~16자 길이의 비밀번호
          </div>
        </div>
        <div className='flex items-center mb-[15px]  mt-2'>
          {getRuleImage(isCompositionValid)}
          <div
            className={`${getPasswordColor(
              isCompositionValid,
            )} text-neutral-40 text-caption3`}
          >
            영어 대소문자/ 숫자/ 특수문자 중 2가지 이상 조합
          </div>
        </div>
        <div>
          <Input
            type='password'
            placeholder='(필수) 비밀번호 재입력'
            label='비밀번호 확인'
            required={true}
            styles={` ${getPasswordConfirmColor(isPasswordValid)} h-[50px]`}
            name='passwordconfirm'
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <p
            className={`text-neutral-60 text-[12px] mt-[10px] ${getPasswordConfirmColor(isPasswordValid)}`}
          >
            *{getPasswordConfirmResult(isPasswordValid)}
          </p>
        </div>
      </div>
      <SquareButton
        fullWidth={true}
        theme={'disable'}
        disabled={!isPasswordValid}
        className={`${isPasswordValid && 'bg-primary-100 text-white'}`}
      >
        완료
      </SquareButton>
    </LoginLayout>
  );
};

export default page;
