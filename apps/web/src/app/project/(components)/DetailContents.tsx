import React from 'react';
import Image from 'next/image';
import { RoundButton, SquareButton } from 'sfac-design-kit';

interface DetailContentsProps {
  isPlanner: boolean;
  isDesigner: boolean;
}

const DetailContents = ({ isPlanner, isDesigner }: DetailContentsProps) => {
  return (
    <div className='border-b'>
      <div className='mb-[60px]'>
        <div className='flex gap-[2px] mb-5'>
          <Image
            src={'/images/project/rectangle.svg'}
            alt='rectangle'
            width={23}
            height={9}
            className='mr-[11px] w-[26px] h-[26px]'
          />
          <p className='text-h2'>프로젝트 상태</p>
        </div>
        <div className=' inline-flex items-center justify-evenly p-[10px] h-[37px] w-[280px] border border-neutral-20 rounded-[5px] text-neutral-80 text-btn'>
          <p>기획{isPlanner ? ' ✅' : ' ❌'}</p>
          <div className='w-[1px] h-full bg-neutral-20'></div>
          <p>디자인{isDesigner ? ' ✅' : ' ❌'}</p>
        </div>
      </div>
      <div>
        <div className='flex gap-[2px] mb-5'>
          <Image
            src={'/images/project/rectangle.svg'}
            alt='rectangle'
            width={23}
            height={9}
            className='mr-[11px] w-[26px] h-[26px]'
          />
          <p className='text-h2'>프로젝트 소개</p>
        </div>
        <p className=' text-body2 whitespace-pre-line leading-relaxed'>
          {`할수있당은 직관적이고 사용자 친화적인 UI를 통해 쉬운 혈당 기록과 시각적 분석을 제공합니다. 
          개인 맞춤형 리마인더와 의료 전문가와의 연결 기능으로 사용자들은 더 나은 건강 습관을 형성할 수 있습니다.
          시각적 효과와 사용의 간편성을 강조하여 사용자 경험을 최적화하였습니다.`}
        </p>
        <div className='flex flex-col justify-center items-center mb-10'>
          <Image
            src={'/images/project/screen.svg'}
            alt=''
            width={780}
            height={1011}
            className='mb-[30px]'
          />

          <RoundButton className='w-[116px] h-10'>프로젝트 지원</RoundButton>
        </div>
      </div>
    </div>
  );
};

export default DetailContents;
