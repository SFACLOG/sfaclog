'use client';
import { useState, useMemo } from 'react';
import LoginLayout from '../../components/LoginLayout';
import generateRandomNumber from '../../components/RandomNumber';

// const crypto = new Crypto();

const Signup = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [isClickSendBtn, setIsClickSendBtn] = useState(false);

  const handleEmailButtonClick = async () => {
    setIsClickSendBtn(prev => !prev);

    try {
      const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput, code }),
      });
      console.log('이메일 성공적으로 전송됨');
      console.log(emailInput);
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
    setEmailInput(event.target.value);
    console.log(emailInput);
  };
  return (
    <LoginLayout title='회원가입' color='text-neutral-100'>
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
          />
        </div>

        <div className='mb-[15px]'>
          <p className='mb-[10px]'>닉네임</p>
          <input
            type='text'
            placeholder='닉네임 입력'
            className='border w-full'
          />
          <p className=' text-neutral-60 text-[12px] mt-[10px]'>*최대 8글자</p>
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
              value={emailInput}
              className='border'
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
          />
          <p className=' text-neutral-60 text-[12px] mt-[10px]'>*설명</p>
        </div>
        <div className='mb-[50px]'>
          <div className='mb-[15px]'>
            <div className='flex'>
              <p className='mb-[10px]'>비밀번호</p>
              <p className=' text-primary-100'>*</p>
            </div>
            <input
              type='text'
              placeholder='(필수) 비밀번호 입력'
              className='border w-full'
            />
            <div className='flex items-center  mt-2'>
              <div className='w-5 h-5 rounded-full bg-neutral-5 mr-[10px]'></div>
              <div className=' text-neutral-10 text-[12px]'>
                10~16자 길이의 비밀번호
              </div>
            </div>
            <div className='flex items-center mb-[15px]  mt-2'>
              <div className='w-5 h-5 rounded-full bg-neutral-5 mr-[10px]'></div>
              <div className=' text-neutral-10 text-[12px]'>
                영어 대소문자/ 숫자/ 특수문자 중 2가지 이상 조합
              </div>
            </div>
            <div className='mb-[15px]'>
              <div className='flex'>
                <p className='mb-[10px]'>비밀번호 확인</p>
                <p className=' text-primary-100'>*</p>
              </div>
              <input
                type='text'
                placeholder='(필수) 비밀번호 재입력'
                className='border w-full'
              />
              <p className=' text-neutral-60 text-[12px] mt-[10px]'>
                *비밀번호를 입력하세요.
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
    </LoginLayout>
  );
};

export default Signup;
