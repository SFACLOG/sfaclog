import Image from 'next/image';
import React from 'react';
import { Avatar, RoundButton } from 'sfac-design-kit';

interface DetailProps {
  islog: boolean;
}

const DetailInfo = ({ islog }: DetailProps) => {
  return (
    <div className='mb-10'>
      <div className='flex justify-between mb-[15px]'>
        <div className='w-[671px]'>
          <RoundButton
            className={`mb-[25px] ${islog ? ' bg-primary-100' : 'bg-system-success'}`}
          >
            {islog ? '스펙로그 프로젝트' : '스펙폴리오 프로젝트'}
          </RoundButton>
          <p className=' text-title1 mb-5'>
            하나부터 열까지 관리하자! - 헬스 케어 서비스 할 수 있당
          </p>
          <div className='flex items-center text-neutral-80'>
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
      {islog && (
        <div className='flex gap-[174px] mt-[30px]'>
          <div className='flex flex-col gap-[25px]'>
            <div className='flex gap-[33px]'>
              <p className=' text-caption2'>진행 방식</p>
              <p className=' text-caption2_bold'>온라인</p>
            </div>
            <div className='flex gap-[33px] items-center'>
              <p className=' text-caption2'>기술 스택</p>
              <div className='flex gap-[10px]'>
                <Image
                  src='/images/chipIcon/nextjs.svg'
                  alt='nextjs'
                  width={40}
                  height={40}
                />
                <Image
                  src='/images/chipIcon/nodejs.svg'
                  alt='nodejs'
                  width={40}
                  height={40}
                />
                <Image
                  src='/images/chipIcon/react.svg'
                  alt='react'
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[25px]'>
            <div className='flex justify-between w-[212px] gap-[33px]'>
              <p className=' text-caption2'>모집 포지션</p>
              <p className=' text-caption2_bold'>프론트엔드,백엔드</p>
            </div>
            <div className='flex justify-between w-[212px] gap-[33px]'>
              <p className=' text-caption2'>모집 인원</p>
              <p className=' text-caption2_bold'>2명</p>
            </div>
            <div className='flex justify-between w-[212px] gap-[33px]'>
              <p className=' text-caption2'>모집 마감일</p>
              <p className=' text-caption2_bold'>2024-02-01</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailInfo;
