import React from 'react';
import Image from 'next/image';
import { RoundButton } from 'sfac-design-kit';
import { useGetProjectImageByProjectId } from '@/hooks/useProjectData';

interface Project {
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  deadline: string;
  id: string;
  images: string[];
  is_end: boolean;
  likes: number;
  preference: string;
  size: string;
  status: string;
  title: string;
  updated: string;
  user_id: string;
  views: number;
}

interface DetailContentsProps {
  islog: boolean;
  projectInfo: Project;
}

const DetailContents = ({ projectInfo, islog }: DetailContentsProps) => {
  const { data: projectImage } = useGetProjectImageByProjectId(projectInfo.id);
  if (!projectImage) {
    return;
  }
  console.log(projectImage);

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
        <div className='inline-flex items-center justify-evenly p-[10px] h-[37px] w-[280px] border border-neutral-20 rounded-[5px] text-neutral-80 text-btn'>
          <p>기획{projectInfo.status.includes('기획') ? ' ✅' : ' ❌'}</p>
          <div className='w-[1px] h-full bg-neutral-20'></div>
          <p>디자인{projectInfo.status.includes('디자인') ? ' ✅' : ' ❌'}</p>
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
        {projectImage.map((image: any, index: number) => (
          <Image
            src={image}
            alt=''
            width={780}
            height={1011}
            className='mb-[30px]'
            key={index}
          />
        ))}
        <p className=' text-body2 whitespace-pre-line leading-relaxed mb-[30px]'>
          {projectInfo.content}
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
          {projectInfo.preference}
        </p>

        <div className='flex flex-col justify-center items-center mb-10'>
          <RoundButton>프로젝트 지원</RoundButton>
        </div>
      </div>
    </div>
  );
};

export default DetailContents;
