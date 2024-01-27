'use client';
import { useState, useMemo } from 'react';
import LoginLayout from '../../components/LoginLayout';
import generateRandomNumber from '../../components/RandomNumber';
import Image from 'next/image';

// const crypto = new Crypto();

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isLengthValid, setIsLengthValid] = useState<boolean>(false);
  const [isCompositionValid, setIsCompositionValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isClickSendBtn, setIsClickSendBtn] = useState(false);

  const handleEmailButtonClick = async () => {
    setIsClickSendBtn(prev => !prev);

    try {
      const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, code }),
      });
      console.log('이메일 성공적으로 전송됨');
    } catch (error) {
      console.error('이메일 전송 중 오류:', error);
    }
  };

  const code = useMemo(
    // () => crypto.randomUUID().split('-')[0],
    () => generateRandomNumber(),
    [isClickSendBtn],
  );

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    setIsEmailValid(pattern.test(newEmail));
  };

  const handleFormSubmit = async (formData: any) => {
    const { name, nickname, email, password, passwordconfirm, code } =
      Object.fromEntries(formData);
    console.log(name, nickname, email, password, passwordconfirm, code);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const passwordCompositionRegex = /^(?=.*[a-zA-Z])(?=.*\d|\W).+$/;

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

  return (
    <LoginLayout title='회원가입' color='text-neutral-100'>
      <form action={handleFormSubmit}>
        <div className=' font-semibold text-neutral-100'>
          <div className='mb-[15px]'>
            <div className='flex'>
              <p className='mb-[10px]'>이름</p>
              <p className=' text-primary-100'>*</p>
            </div>
            <input
              type='text'
              placeholder='(필수) 이름 입력'
              className='border w-full'
              name='name'
            />
          </div>

          <div className='mb-[15px]'>
            <p className='mb-[10px]'>닉네임</p>
            <input
              type='text'
              placeholder='닉네임 입력'
              className='border w-full'
              name='nickname'
              maxLength={8}
            />
            <p className=' text-neutral-60 text-[12px] mt-[10px]'>
              *최대 8글자
            </p>
          </div>

          <div className='mb-[50px]'>
            <div className='flex'>
              <p className='mb-[10px]'>이메일 인증</p>
              <p className=' text-primary-100'>*</p>
            </div>
            <div className='mb-[10px]'>
              <input
                type='email'
                placeholder='이메일 입력'
                value={email}
                className={`border ${getEmailColor(isEmailValid)}`}
                name='email'
                onChange={handleEmailInputChange}
              />
              <button
                className='border ml-[10px]'
                onClick={handleEmailButtonClick}
              >
                인증요청
              </button>
            </div>

            <input
              type='text'
              placeholder='인증번호 입력'
              className='border w-full'
              name='code'
            />
            <p
              className={`${getEmailColor(isEmailValid)} text-[12px]  mt-[10px]`}
            >
              {email.length === 0
                ? ''
                : !isEmailValid &&
                  '잘못된 이메일 형식입니다. 다시 입력해주세요.'}
            </p>
            <p className=' text-neutral-60 text-[12px] mt-[10px]'>
              *인증번호를 입력해주세요.
            </p>
          </div>
          <div className='mb-[50px]'>
            <div className='mb-[15px]'>
              <div className='flex'>
                <p className='mb-[10px]'>비밀번호</p>
                <p className=' text-primary-100'>*</p>
              </div>
              <input
                type='password'
                placeholder='(필수) 비밀번호 입력'
                className={`border w-full ${getPasswordStyle()}`}
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />
              <div className='flex items-center  mt-2'>
                {getRuleImage(isLengthValid)}
                <div
                  className={`${getPasswordColor(isLengthValid)} text-[12px]`}
                >
                  10~16자 길이의 비밀번호
                </div>
              </div>
              <div className='flex items-center mb-[15px]  mt-2'>
                {getRuleImage(isCompositionValid)}
                <div
                  className={`${getPasswordColor(
                    isCompositionValid,
                  )} text-[12px]`}
                >
                  영어 대소문자/ 숫자/ 특수문자 중 2가지 이상 조합
                </div>
              </div>
              <div className='mb-[15px]'>
                <div className='flex'>
                  <p className='mb-[10px]'>비밀번호 확인</p>
                  <p className=' text-primary-100'>*</p>
                </div>
                <input
                  type='password'
                  placeholder='(필수) 비밀번호 재입력'
                  className={`border w-full ${getPasswordConfirmColor(isPasswordValid)}`}
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
          </div>
          <div className='flex flex-col mb-[50px]'>
            <label>
              <input type='checkbox' className='mb-[14px]' />
              (필수) 본인인증 약관 전체 동의
            </label>

            <label>
              <div className='flex'>
                <input type='checkbox' className='mb-[14px]' />
                <div className='flex justify-between w-full'>
                  <p>(필수)개인정보 수집 이용 동의 </p>
                  <div>약관보기</div>
                </div>
              </div>
            </label>

            <label>
              <div className='flex'>
                <input type='checkbox' className='mb-[14px]' />
                <div className='flex justify-between w-full'>
                  <p>(필수) 서비스 이용약관 동의 </p>
                  <div>약관보기</div>
                </div>
              </div>
            </label>

            <label>
              <input type='checkbox' className='mb-[14px]' />
              고유식별 정보처리 동의
            </label>

            <label>
              <input type='checkbox' className='mb-[14px]' />
              통신사 이용약관 동의
            </label>
          </div>
          <button className='border w-full'>다음</button>
        </div>
      </form>
    </LoginLayout>
  );
};

export default Signup;
