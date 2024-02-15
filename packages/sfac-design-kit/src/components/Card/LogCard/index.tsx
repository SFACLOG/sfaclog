'use client';

import { Avatar } from '../../Avatar';
import { Chip } from '../../Chip';
import heartIcon from '../../../../public/images/heart.svg';
import ImageWrapper from '../../common/ImageWrapper';

export interface LogCardProps {
  image: string;
  profileImage: string;
  nickname: string;
  heart: number;
  title: string;
  content: string;
  tags?: string[];
}

export const LogCard = ({
  image,
  profileImage,
  nickname,
  heart,
  title,
  content,
  tags,
}: LogCardProps) => {
  return (
    <div className='w-[265px] h-[352px]'>
      <div className='flex justify-center items-center w-[265px] h-[180px] overflow-hidden rounded-[10px] mb-[10px]'>
        <img src={image} alt='Background Image' />
      </div>
      <div>
        <div className='flex justify-between items-center mb-[10px]'>
          <div className='flex items-center'>
            <Avatar src={profileImage} size='tiny' styles='mr-2' />
            <div className=' text-caption2 text-neutral-60'>{nickname}</div>
          </div>
          <div className='flex items-center'>
            <ImageWrapper
              path={heartIcon}
              alt='heart Image'
              width={13}
              height={13}
              className='mr-[7.48px]'
            />
            <div className='text-caption2'>{heart}</div>
          </div>
        </div>
        <div className='mb-[10px]'>
          <div className=' text-lg font-bold mb-[10px]'>{title}</div>
          <div className=' text-caption2 line-clamp-3'>
            {content.length > 64 ? content.slice(0, 65) + '...' : content}
          </div>
        </div>
        <div className='flex gap-[5px] flex-wrap'>
          {tags &&
            tags
              .slice(0, 3)
              .map((tag, index) => <Chip key={index}>{tag}</Chip>)}
        </div>
      </div>
    </div>
  );
};
