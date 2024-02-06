import { Avatar } from '../../Avatar';
import { Chip } from '../../Chip';

export interface UserCardProps {
  image: string;
  profileImage: string;
  nickname: string;
  info: string;
  tags?: string[];
  followers: number;
  views: number;
  className?: string;
}

export const UserCard = ({
  image,
  profileImage,
  nickname,
  info,
  tags,
  followers,
  views,
  className,
}: UserCardProps) => {
  return (
    <div
      className={`flex-shrink-0 w-[265px] h-[346px] rounded-[10px] bg-white ${className}`}
    >
      <div className='relative mb-[60px]'>
        <img
          src={image}
          width={265}
          height={125}
          alt='Background Image'
          className='mb-[10px] w-[265px] h-[125px] object-cover rounded-t-[10px]'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 p-[3px] rounded-full bg-white w-[110px] h-[110px]'>
          <Avatar src={profileImage} size='medium' />
        </div>
      </div>

      <div className='flex flex-col items-center mb-[29px]'>
        <div className=' text-caption2_bold text-neutral-80 mb-[5px]'>
          {nickname}
        </div>
        <div className='mb-[10px]'>{info}</div>
        <div className='flex'>
          {tags && tags.map((tag, index) => <Chip key={index}>{tag}</Chip>)}
        </div>
      </div>
      <div className='flex justify-center items-center text-neutral-100'>
        <div>
          <div className='mb-1 text-caption3 '>팔로워</div>
          <div className='text-caption2_bold'>{followers}K</div>
        </div>
        <div className='border-r mx-[15px] h-[39px]'></div>
        <div className='mr-[21px]'>
          <div className='mb-1 text-caption3'>조회수</div>
          <div className='text-caption2_bold'>{views}K</div>
        </div>
        <button className='flex justify-center items-center bg-primary-100 text-white text-caption3 py-1 px-[15px]  h-[22px] rounded-[5px]'>
          로그 바로가기
        </button>
      </div>
    </div>
  );
};
