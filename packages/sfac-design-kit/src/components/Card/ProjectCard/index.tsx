import { Children } from 'react';
import { Avatar } from '../../Avatar';
import { cn } from '../../../utils';
import ImageWrapper from '../../common/ImageWrapper';
import DarkHeart from '../../../../public/images/dark_heart.svg';
import Chat from '../../../../public/images/chat.svg';
export interface ProjectCardProps {
  title: string;
  icons: string[];
  isRecruit?: boolean;
  deadline: string;
  avatar: string;
  name: string;
  likes: number;
  comments: number;
}

export const ProjectCard = ({
  title,
  icons,
  isRecruit = true,
  deadline,
  avatar,
  name,
  likes,
  comments,
}: ProjectCardProps) => {
  return (
    <div className='w-full h-full max-w-[265px] border border-neutral-20 rounded-[10px] bg-white'>
      <div className={'max-h-[236px] pt-[35px] px-[17px]'}>
        <p className='text-subtitle line-clamp-2'>{title}</p>
        <div className='flex gap-[9px] mt-5 mb-20'>
          {Children.toArray(
            icons.map(icon => (
              <img className='w-[30px] h-[30px]' src={icon} alt='skill icon' />
            )),
          )}
        </div>
        <div className='flex justify-between mb-[15px] text-caption3 text-neutral-50'>
          <p className={cn(isRecruit || 'text-primary-100')}>
            {isRecruit ? '모집중' : '모집완료'}
          </p>
          <p>마감일 | {deadline}</p>
        </div>
      </div>
      <div className='flex justify-between py-[11px] px-[17px] border-t border-neutral-20'>
        <div className='flex items-center gap-2'>
          <Avatar src={avatar} size='tiny' />
          <p className='text-caption2 text-neutral-60'>{name}</p>
        </div>
        <div className='flex items-center text-caption2 text-neutral-20'>
          <ImageWrapper path={DarkHeart} />
          <span className='ml-[7px]'>{likes}</span>
          <ImageWrapper className='ml-3' path={Chat} />
          <span className='ml-[7px]'>{comments}</span>
        </div>
      </div>
    </div>
  );
};
