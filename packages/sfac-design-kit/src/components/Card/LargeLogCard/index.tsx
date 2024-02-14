'use client';
import { Children } from 'react';
import { Chip } from '../../Chip';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import HEART_ICON from '../../../../public/images/dark_heart.svg';
import CHAT_ICON from '../../../../public/images/chat.svg';
import MDEditor from '@uiw/react-md-editor';

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
        <ImageWrapper
          className='w-[265px] object-cover rounded-[10px]'
          path={thumbnail}
          alt='thumbnail'
        />
        <div className='flex flex-col gap-[25px] w-full h-full whitespace-pre-wrap'>
          <p className='text-h2 line-clamp-2'>{title}</p>
          <MDEditor.Markdown
            className={cn('text-body2 line-clamp-5')}
            style={{
              maxHeight: 120,
              overflow: 'hidden',
              color: 'rgb(51, 51, 51)',
            }}
            source={summary}
            components={{
              h1: props => (
                <h1
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  {...props}
                />
              ),
              h2: props => (
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  {...props}
                />
              ),
              h3: props => (
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  {...props}
                />
              ),
            }}
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-[5px]'>
          {tags && Children.toArray(tags.map(tag => <Chip># {tag}</Chip>))}
        </div>
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
