import { Children } from 'react';
import { Chip } from '../../Chip';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import HEART_ICON from '../../../../public/images/dark_heart.svg';
import CHAT_ICON from '../../../../public/images/chat.svg';

export interface LargeLogCardProps {
  width?: number;
  thumbnail: string;
  tags?: string[];
  title: string;
  summary: string;
  likes: number;
  comments: number;
}

export const LargeLogCard = ({
  width,
  thumbnail,
  tags,
  title,
  summary,
  likes,
  comments,
}: LargeLogCardProps) => {
  return (
    <div
      className={cn('flex flex-col gap-5 w-full max-h-[225px]')}
      style={{ maxWidth: width }}
    >
      <div className='flex gap-5 max-h-[180px]'>
        <img
          className='w-[265px] object-cover rounded-[10px]'
          src={thumbnail}
          alt='thumbnail'
        />
        <div className='flex flex-col gap-[25px] w-full h-full whitespace-pre-wrap'>
          <p className='text-h2 line-clamp-2'>{title}</p>
          <p className='text-body2 text-neutral-80 line-clamp-5'>{summary}</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        {tags && (
          <div className='flex gap-[5px]'>
            {Children.toArray(tags.map(tag => <Chip># {tag}</Chip>))}
          </div>
        )}
        <div className='flex items-center text-caption2'>
          <ImageWrapper path={HEART_ICON} />
          <span className='ml-[7px]'>{likes}</span>
          <ImageWrapper className='ml-6' path={CHAT_ICON} />
          <span className='ml-[7px]'>{comments}</span>
        </div>
      </div>
    </div>
  );
};
