import { Avatar } from '../../Avatar';
import { Chip } from '../../Chip';

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
      <img
        src={image}
        width={265}
        height={180}
        alt='Background Image'
        className='mb-[10px]'
      />
      <div>
        <div className='flex justify-between mb-[10px]'>
          <div className='flex'>
            <Avatar src={profileImage} size='tiny' styles='mr-2' />
            <div className=' text-caption2 text-neutral-60'>{nickname}</div>
          </div>
          <div className='flex'>
            <img
              src='/images/heart.svg'
              alt='heart Image'
              width={13}
              height={13}
              className='mr-[7.48px]'
            />
            <div className=' text-caption2'>{heart}</div>
          </div>
        </div>
        <div className='mb-[10px]'>
          <div className=' text-lg font-bold mb-[10px]'>{title}</div>
          <div className=' text-caption2 line-clamp-3'>{content}</div>
        </div>
        <div className='flex'>
          {tags && tags.map((tag, index) => <Chip key={index}>{tag}</Chip>)}
        </div>
      </div>
    </div>
  );
};
