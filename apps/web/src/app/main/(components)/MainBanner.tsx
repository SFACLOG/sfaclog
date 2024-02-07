import React from 'react';
import Image from 'next/image';
import { RoundButton } from 'sfac-design-kit';
import Link from 'next/link';

const MainBanner = () => {
  return (
    <div className='relative w-full h-[270px] mb-[50px]'>
      <Image
        src={'/images/main/MainBanner.svg'}
        alt={'배너이미지'}
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute container left-0 right-0 top-[72px] mx-auto text-white'>
        <h2 className='text-h1 mb-4'>스팩로그</h2>
        <div className='flex justify-between'>
          <p className='text-body1_bold'>
            스팩로그는 우리가 쓰는 코드의 뒷 이야기를 담아내는 공간입니다.
            <br />
            프로젝트마다 부딪히며 얻는 성취의 순간들을 기록하고, 개발과 관련된
            다양한 주제와 코드를 공유할 수 있으며
            <br /> 스나이퍼 팩토리만의 맞춤 교육 제공은 물론 스팩폴리오와
            연결되어 사이드 프로젝트를 경험할 수 있습니다.
          </p>
          <Link href={{ pathname: '/login' }}>
            <RoundButton size={'lg'} theme={'tertiary'}>
              스팩로그 시작하기
            </RoundButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
