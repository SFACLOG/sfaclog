import { Avatar } from '../../Avatar';
import ImageWrapper from '../../common/ImageWrapper';
import BlueHeart from '../../../../public/images/blue_heart.svg';

export interface SfacfolioCardProps {
  title: string;
  thumbnail: string;
  likes: number;
  isPlanner?: boolean;
  isDesigner?: boolean;
  avatar: string;
  name: string;
  position: string;
}

export const SfacfolioCard = ({
  title,
  thumbnail,
  likes,
  isPlanner = true,
  isDesigner = true,
  avatar,
  name,
  position,
}: SfacfolioCardProps) => {
  return (
    <div className='relative w-full h-full max-w-[280px] max-h-[449px]'>
      <div className='absolute top-[10px] right-[10px] flex items-center justify-around p-[5px] w-[73px] h-[32px] bg-white rounded-[10px]'>
        <ImageWrapper className='w-[14px] h-[14px]' path={BlueHeart} />
        <span className='text-caption2'>{likes}</span>
      </div>
      <ImageWrapper path={thumbnail} className='object-cover rounded-[10px]' />
      <p className='mt-[15px] mb-5 mx-3 text-subtitle line-clamp-2'>{title}</p>
      <div className='flex items-center justify-evenly h-[37px] border border-neutral-20 rounded-[5px] text-neutral-80'>
        <p>기획{isPlanner ? ' ✅' : ' ❌'}</p>
        <div className='w-[1px] h-full bg-neutral-20'></div>
        <p>디자인{isDesigner ? ' ✅' : ' ❌'}</p>
      </div>
      <div className='flex items-center gap-2 mt-5 pb-[11px]'>
        <Avatar src={avatar} size='tiny' />
        <p className='text-caption2 text-neutral-60'>
          {`${name}(${position})`}
        </p>
      </div>
    </div>
  );
};
