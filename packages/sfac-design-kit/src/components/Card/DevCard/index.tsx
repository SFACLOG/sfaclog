import { Children } from 'react';
import { Avatar } from '../../Avatar';
import { Chip } from '../../Chip';
import ImageWrapper from '../../common/ImageWrapper';
import heart from '../../../../public/images/dark_heart.svg';

export interface DevCardProps {
  thumbnail: string;
  icons?: string[];
  title: string;
  likes: string;
  avatar: string;
  name: string;
  tags?: string[];
  className?: string;
}

export const DevCard = ({
  thumbnail,
  icons,
  title,
  likes,
  avatar,
  name,
  tags,
  className,
}: DevCardProps) => {
  return (
    <div
      className={`flex-shrink-0 relative w-full max-w-[446px] h-[362px] bg-white rounded-[10px] ${className}`}
    >
      <img
        className='w-full h-[249px] object-cover rounded-t-[10px]'
        src={thumbnail}
        alt='thumbnail'
      />
      {icons && (
        <ul className='absolute top-[18px] right-[16px] flex gap-[9px]'>
          {Children.toArray(
            icons.map(icon => (
              <li>
                <img className='w-[41px] aspect-square' src={icon} alt='icon' />
              </li>
            )),
          )}
        </ul>
      )}
      <div className=' px-3'>
        <div className='flex items-center justify-between max-h-6 mt-[13px]'>
          <p className='flex-1 text-subtitle line-clamp-1'>{title}</p>
          <div className='flex'>
            <ImageWrapper path={heart} className='mr-[7px]' />
            <span>{likes}</span>
          </div>
        </div>
        <div className='flex items-center justify-between mt-6'>
          <div className='flex items-center gap-[10px]'>
            <Avatar src={avatar} style={{ width: 50, height: 50 }} />
            <span>{name}</span>
          </div>
          {tags && (
            <ul className='flex gap-[5px]'>
              {Children.toArray(
                tags.map(tag => (
                  <li>
                    <Chip>{tag}</Chip>
                  </li>
                )),
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
