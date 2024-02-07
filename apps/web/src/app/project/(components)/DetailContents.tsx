import React from 'react';
import Image from 'next/image';
import { RoundButton } from 'sfac-design-kit';

interface DetailContentsProps {
  isPlanner: boolean;
  isDesigner: boolean;
  islog: boolean;
}

const DetailContents = ({
  isPlanner,
  isDesigner,
  islog,
}: DetailContentsProps) => {
  return (
    <div className='border-b border-neutral-10 mb-[57px]'>
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
        <Image
          src={'/images/project/screen.svg'}
          alt=''
          width={780}
          height={1011}
          className='mb-[30px]'
        />
        <p className=' text-body2 whitespace-pre-line leading-relaxed mb-[30px]'>
          {`할수있당은 직관적이고 사용자 친화적인 UI를 통해 쉬운 혈당 기록과 시각적 분석을 제공합니다. 
          개인 맞춤형 리마인더와 의료 전문가와의 연결 기능으로 사용자들은 더 나은 건강 습관을 형성할 수 있습니다.
          시각적 효과와 사용의 간편성을 강조하여 사용자 경험을 최적화하였습니다.`}
        </p>

        <div className='flex gap-[2px] mb-5'>
          <Image
            src={'/images/project/rectangle.svg'}
            alt='rectangle'
            width={23}
            height={9}
            className='mr-[11px] w-[26px] h-[26px]'
          />

          <p className='text-h2 '>선호하는 팀원 성향</p>
        </div>
        <p className=' text-body2 whitespace-pre-line leading-relaxed mb-[30px]'>
          실력은 조금 부족해도 되지만 적극적이고, 긍정적인 방향으로 문제를
          해결하는데 집중할 수 있는분을 찾습니다! 저희는 활발한 E분들이 많아서
          I분들도 언제나 환영입니다~~
        </p>

        <div className='flex flex-col justify-center items-center mb-10'>
          <RoundButton>프로젝트 지원</RoundButton>
        </div>
      </div>
    </div>
  );
};

export default DetailContents;
