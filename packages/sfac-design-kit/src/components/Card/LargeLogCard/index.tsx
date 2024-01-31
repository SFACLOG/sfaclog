import { Children } from 'react';
import { Chip } from '@/components/Chip';
import { cn } from '@/utils';

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
          <img src='/images/dark_heart.svg' />
          <span className='ml-[7px]'>{likes}</span>
          <img className='ml-6' src='/images/chat.svg' />
          <span className='ml-[7px]'>{comments}</span>
        </div>
      </div>
    </div>
  );
};
