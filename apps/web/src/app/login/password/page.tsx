import LoginLayout from '../../../components/LoginLayout';

const page = () => {
  return (
    <LoginLayout title='비밀번호 찾기' color='text-netural-100'>
      <div className='mb-[50px] w-full'>
        <p className='mb-[10px] font-semibold'>이메일 인증</p>

        <div className='mb-[10px]'>
          <input type='email' placeholder='이메일 입력' className='border' />
          <button className='border ml-[10px]'>인증요청</button>
        </div>

        <input
          type='text'
          placeholder='인증번호 입력'
          className='border w-full'
        />
      </div>
      <button className='w-full border'>로그인</button>
    </LoginLayout>
  );
};

export default page;
