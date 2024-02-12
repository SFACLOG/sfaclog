// ProjectCard.js
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  statuses: string[];
  imageUrl: string;
  currentProjectIndex?: number;
  totalProjects?: number;
  handlePrev?: () => void;
  handleNext?: () => void;
}

const HotCard = ({ title, statuses, imageUrl }: ProjectCardProps) => (
  <div className=' flex h-[270px] w-screen bg-primary-10  '>
    {/* 왼쪽 */}
    <div className='ml-[185px] mt-[56px] mr-[52px] '>
      <div className='font-bold mb-10'>
        <div className='text-[34px] mb-[15px]'>🔥 HOT 스팩폴리오 프로젝트</div>
        <div className='text-[24px]'>{title}</div>
      </div>
      <div className='flex  h-[37px] text-neutral-80 text-btn'>
        {statuses.map((status, index) => (
          <div
            key={index}
            className='flex justify-center items-center w-[140px] border bg-white text-neutral-80 border-neutral-20'
          >
            {status}
          </div>
        ))}
      </div>
    </div>

    {/* 가운데 */}
    <div className='w-[480px] h-[210px] my-[30px] mr-[59px] '>
      <Image
        src={imageUrl}
        width={480}
        height={210}
        alt={title}
        className='object-cover w-full h-full'
      />
    </div>
  </div>
);

export default HotCard;
