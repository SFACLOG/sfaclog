// ProjectCard.js
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  description: string;
  statuses: string[];
  imageUrl: string;
  title: string;
  currentProjectIndex: number;
  totalProjects: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const HotCard = ({
  description,
  statuses,
  imageUrl,
  title,
  currentProjectIndex,
  totalProjects,
  handlePrev,
  handleNext,
}: ProjectCardProps) => (
  <div className='flex h-[270px] bg-primary-10 mb-[50px] '>
    {/* 왼쪽 */}
    <div className='ml-[185px] mt-[56px] mr-[52px] '>
      <div className='font-bold mb-10'>
        <div className='text-[34px] mb-[15px]'>🔥 HOT 스팩폴리오 프로젝트</div>
        <div className='text-[24px]'>{description}</div>
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

    {/* 오른쪽 */}
    <div className='flex justify-center items-center px-[5px] py-2 rounded-[34px] w-[134px] h-[38px] mb-[9px] text-neutral-60 font-semibold  bg-white mt-[223px]'>
      <Image
        src='/images/ic_left_arrow.svg'
        width={22}
        height={22}
        alt=''
        className='mr-[21px]'
        onClick={handlePrev}
      />
      {`${currentProjectIndex + 1} | ${totalProjects}`}
      <Image
        src='/images/ic_right_arrow.svg'
        width={22}
        height={22}
        alt=''
        className='ml-[21px]'
        onClick={handleNext}
      />
    </div>
  </div>
);

export default HotCard;
