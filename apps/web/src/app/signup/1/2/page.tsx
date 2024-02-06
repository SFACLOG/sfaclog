import Image from 'next/image';
import LoginLayout from '../../../../components/LoginLayout';
import { SquareButton } from 'sfac-design-kit';
import Link from 'next/link';

const page = () => {
  return (
    <LoginLayout title='회원가입 완료' color='text-primary-100'>
      <Image src='/images/punch.svg' alt='' width={220} height={220} />
      <p className=' text-lg '>반가워요!</p>
      <p className=' text-lg mb-[50px]'>
        스팩로그의 다양한 로그를 확인하러 가볼까요?
      </p>
      <Link href={'/'} className='w-full'>
        <SquareButton fullWidth={true}>다음</SquareButton>
      </Link>
    </LoginLayout>
  );
};

export default page;
