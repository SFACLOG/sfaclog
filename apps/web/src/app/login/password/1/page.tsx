import LoginLayout from '../../../../components/LoginLayout';

const page = () => {
  return (
    <LoginLayout title='비밀번호 찾기' color='text-neutral-100'>
      <div className='mb-[50px] w-full'>
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
      <button className='border w-full'>로그인</button>
    </LoginLayout>
  );
};

export default page;
