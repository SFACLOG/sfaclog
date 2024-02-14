import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SquareButton } from 'sfac-design-kit';

const LogUploadSuccessPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='mx-auto container'>
      <div className='flex flex-col mt-[215px] gap-10 w-full justify-center items-center'>
        <h2 className='font-bold text-2xl text-primary-100'>
          로그 업로드 완료!
        </h2>
        <Image
          src={'/images/recent-log/success.svg'}
          alt='success'
          width={230}
          height={188}
        />
        <div>
          <Link href={{ pathname: `/recent-log/${params.id}` }}>
            <SquareButton
              size={'lg'}
              theme={'secondary'}
              className='w-[380px] hover:bg-primary-100 hover:text-white mb-[15px]'
            >
              작성한 로그 보러가기
            </SquareButton>
          </Link>
          <Link href={{ pathname: '/recent-log' }}>
            <SquareButton
              size={'lg'}
              theme={'secondary'}
              className='w-[380px] hover:bg-primary-100 hover:text-white'
            >
              메인으로 이동하기
            </SquareButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogUploadSuccessPage;
