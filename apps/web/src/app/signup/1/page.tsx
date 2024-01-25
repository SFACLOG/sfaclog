import Image from 'next/image';
import LoginLayout from '../../../components/LoginLayout';

const page = () => {
  return (
    <LoginLayout title='회원가입' color='text-neutral-100'>
      <div className='text-neutral-100 font-semibold w-full'>
        <div>
          <div className='border mb-[35px]'>관심분야</div>
          <div className='grid grid-cols-4 gap-[20px] mb-[70px]'>
            <Image src='/images/frontend.svg' alt='' width={80} height={111} />
            <Image src='/images/backend.svg' alt='' width={80} height={111} />
            <Image src='/images/machine.svg' alt='' width={80} height={111} />
            <Image src='/images/cloud.svg' alt='' width={80} height={111} />
            <Image src='/images/database.svg' alt='' width={80} height={111} />
            <Image src='/images/container.svg' alt='' width={80} height={111} />
            <Image
              src='/images/serverless.svg'
              alt=''
              width={80}
              height={111}
            />
            <Image src='/images/mobile.svg' alt='' width={80} height={111} />
          </div>
        </div>
        <div>
          <div className='border mb-[35px]'>제안허용</div>
          <div className='grid grid-cols-3 gap-[20px] mb-[70px]'>
            <Image src='/images/frontend.svg' alt='' width={80} height={111} />
            <Image src='/images/backend.svg' alt='' width={80} height={111} />
            <Image src='/images/machine.svg' alt='' width={80} height={111} />
          </div>
        </div>
        <p className='mb-[10px]'>
          관심 분야와 제안 허용은 마이페이지에서 수정 가능해요!
        </p>
        <button className='w-full border'>회원가입 완료하기</button>
      </div>
    </LoginLayout>
  );
};

export default page;
