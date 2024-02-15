'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Checkbox, Input, SquareButton } from 'sfac-design-kit';
import LoginLayout from '../../components/LoginLayout';
import { useUserContext } from '@/context/UserContext';
import { generateRandomNumber } from '@/utils/math';

const Signup = () => {
  const { userData, setUserData } = useUserContext();

  const [username, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailVerify, setEmailVerify] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isLengthValid, setIsLengthValid] = useState<boolean>(false);
  const [isCompositionValid, setIsCompositionValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

  const [code, setCode] = useState<string>('');
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  const handleEmailButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    try {
      const newCode = generateRandomNumber();
      setCode(newCode);

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, code: newCode }),
      });
    } catch (error) {
      console.error('이메일 전송 중 오류:', error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNameChecked(!!event.target.value);
    setName(event.target.value);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    setIsEmailValid(pattern.test(newEmail));
  };

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

  const handleEmailVerifyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newEmailVerify = event.target.value;
    setIsEmailVerified(newEmailVerify === code);
    setEmailVerify(newEmailVerify);
  };

  const handleCheckboxChange = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  const getEmailColor = (valid: boolean) => {
    if (email.length === 0) {
      return ' border-gray-300 ';
    } else if (valid) {
      return ' border-system-success text-system-success';
    } else {
      return ' border-system-warning text-system-warning ';
    }
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

  const handleSubmit = () => {
    const userDataToUpdate = (prev: any) => ({
      ...prev,
      username,
      nickname,
      email,
      password,
      passwordConfirm,
    });

    setUserData(userDataToUpdate);
  };

  return (
    <LoginLayout title='회원가입' color='text-neutral-100'>
      <form className='w-full'>
        <div className=' font-semibold text-neutral-100 '>
          <div className='mb-[15px]'>
            <Input
              placeholder='(필수) 이름 입력'
              label='이름'
              required={true}
              name='name'
              onChange={handleNameChange}
            />
          </div>

          <div className='mb-[15px]'>
            <Input
              placeholder='닉네임 입력'
              label='닉네임'
              required={true}
              name='nickname'
              maxLength={8}
              onChange={handleNicknameChange}
            />
            <p className=' text-neutral-60 text-[12px] mt-[10px]'>
              *최대 8글자
            </p>
          </div>

          <div className='mb-[50px]'>
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
                onClick={handleEmailButtonClick}
                className={`text-neutral-50 ${
                  isEmailValid && 'bg-primary-100 text-white'
                } h-[52.9px] ml-[10px] w-[100px] cursor-pointer text-sm font-semibold `}
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
            <p
              className={`${getEmailColor(
                isEmailValid,
              )} text-[12px]  mt-[10px]`}
            >
              {email.length === 0
                ? ''
                : !isEmailValid &&
                  '*잘못된 이메일 형식입니다. 다시 입력해주세요.'}
            </p>
            <p
              className={`{${getEmailVerifyColor(
                isEmailVerified,
              )} text-[12px] mt-[10px]}`}
            >
              *{getEmailVerifyResult(isEmailVerified)}
            </p>
          </div>
          <div className='mb-[50px]'>
            <Input
              type='password'
              placeholder='(필수) 비밀번호 입력'
              label='비밀번호'
              required={true}
              styles={`${getPasswordStyle()}`}
              name='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <div className='flex items-center  mt-2'>
              {getRuleImage(isLengthValid)}
              <div
                className={`${getPasswordColor(
                  isLengthValid,
                )} text-neutral-40 text-caption3`}
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
                styles={` ${getPasswordConfirmColor(isPasswordValid)}`}
                name='passwordconfirm'
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
              />
              <p
                className={`text-neutral-60 text-[12px] mt-[10px] ${getPasswordConfirmColor(
                  isPasswordValid,
                )}`}
              >
                *{getPasswordConfirmResult(isPasswordValid)}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-[10px] mb-[50px] text-neutral-60 text-caption3'>
            <Checkbox
              type='checkbox'
              label='(필수) 본인인증 약관 전체 동의'
              checked={checkboxStates[0]}
              onChange={() => handleCheckboxChange(0)}
            />

            <div className='flex justify-between w-full'>
              <Checkbox
                type='checkbox'
                label='(필수) 개인정보 수집 이용 동의'
                checked={checkboxStates[1]}
                onChange={() => handleCheckboxChange(1)}
              />
              <Link href={'/sign-up/terms'}>
                <div>약관보기</div>
              </Link>
            </div>

            <div className='flex'>
              <Checkbox
                type='checkbox'
                label='(필수) 서비스 이용약관 동의'
                checked={checkboxStates[2]}
                onChange={() => handleCheckboxChange(2)}
              />
            </div>

            <Checkbox type='checkbox' label='고유식별 정보처리 동의' />

            <Checkbox type='checkbox' label='통신사 이용약관 동의' />
          </div>

          <Link href='/sign-up/1'>
            <SquareButton
              size='lg'
              theme='disable'
              disabled={
                !isNameChecked ||
                !isPasswordValid ||
                !isEmailVerified ||
                !nickname ||
                checkboxStates.some(state => !state)
              }
              onClick={() => handleSubmit()}
              className={`cursor-pointer ${
                !(
                  !isNameChecked ||
                  !isPasswordValid ||
                  !isEmailVerified ||
                  !nickname ||
                  checkboxStates.some(state => !state)
                ) && 'bg-primary-100 text-white'
              } `}
            >
              다음
            </SquareButton>
          </Link>
        </div>
      </form>
    </LoginLayout>
  );
};

export default Signup;
