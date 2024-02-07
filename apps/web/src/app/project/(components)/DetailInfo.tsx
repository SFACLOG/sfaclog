import Image from 'next/image';
import React from 'react';
import { Avatar, RoundButton } from 'sfac-design-kit';

const DetailInfo = () => {
  return (
    <div className='mb-10'>
      <div className='flex justify-between mb-[15px]'>
        <div className='w-[671px]'>
          <RoundButton className='mb-[25px] bg-system-success'>
            스펙폴리오 프로젝트
          </RoundButton>
          <p className=' text-title1 mb-5'>
            하나부터 열까지 관리하자! - 헬스 케어 서비스 할 수 있당
          </p>
          <div className='flex text-neutral-80'>
            <Avatar
              src='/images/project/avatar.svg'
              size={'tiny'}
              className='mr-2'
            />
            <p className=' text-caption2_bold'>차윤정(디자이너)</p>
            <p className='mx-2'>|</p>
            <p className=' text-caption2'>2024.01.15</p>
          </div>
        </div>
        <div>
          <Image
            src={'/images/project/share.svg'}
            alt='share button'
            width={19}
            height={21}
            className='mb-[46px] mt-[11px]'
          />
          <div className='flex flex-col items-center'>
            <Image
              src={'/images/project/blueheart.svg'}
              alt='heart'
              width={22}
              height={20}
              className='mb-3 grayscale'
            />
            <p>10</p>
          </div>
        </div>
      </div>
      <div className='border-t border-neutral-20'></div>
    </div>
  );
};

export default DetailInfo;
