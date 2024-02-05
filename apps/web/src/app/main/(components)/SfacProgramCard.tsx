import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SfacProgramCardProps {
  programHref: string;
  programImageSrc: string;
  recruitEndDate: string;
}

export const isRecruitEnded = (date: string) => {
  const endDate = new Date(`${date} 23:59:59`);
  const currendDate = new Date();

  return currendDate > endDate;
};

const SfacProgramCard = ({
  programHref,
  programImageSrc,
  recruitEndDate,
}: SfacProgramCardProps) => {
  return (
    <div className='relative w-fit'>
      <Link href={{ pathname: programHref }} target='_blank'>
        <Image
          src={programImageSrc}
          alt='SFACProgram'
          width={380}
          height={240}
          className='rounded-[15px]'
        />
        <span
          className={`absolute right-[25px] bottom-4 text-title4 px-[15px] py-[5px] rounded-full ${
            isRecruitEnded(recruitEndDate)
              ? 'text-neutral-40 bg-stroke-10'
              : 'text-primary-100 bg-primary-20'
          }`}
        >
          {isRecruitEnded(recruitEndDate) ? '신청 마감' : '신청 가능'}
        </span>
      </Link>
    </div>
  );
};

export default SfacProgramCard;
