import SectionHeader from '@/app/main/(components)/SectionHeader';
import React from 'react';
import LogTag from './LogTag';

const RecentLogTagSection = ({ tags }: { tags: any }) => {
  return (
    <div className='mt-[50px] mb-5 flex flex-col gap-4'>
      <SectionHeader title={'최신 로그'} />
      <div className='flex gap-[10px]'>
        {tags.slice(0, 6).map((tag: any) => (
          <LogTag tag={tag.name} key={tag.id} isClickable={true} />
        ))}
      </div>
      <div className='flex gap-[10px]'>
        {tags.slice(6).map((tag: any) => (
          <LogTag tag={tag.name} key={tag.id} isClickable={true} />
        ))}
      </div>
    </div>
  );
};

export default RecentLogTagSection;
