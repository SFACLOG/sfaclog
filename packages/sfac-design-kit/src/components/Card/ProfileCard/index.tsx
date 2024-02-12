import { HTMLAttributes, MouseEventHandler } from 'react';
import { Avatar } from '../../Avatar';
import { RoundButton, SquareButton } from '../../Button';
import { cn } from '../../../utils';
import INSTA_ICON from '../../../../public/images/sns/instagram.svg';
import GITHUB_ICON from '../../../../public/images/sns/github.svg';
import FACEBOOK_ICON from '../../../../public/images/sns/facebook.svg';
import ImageWrapper from '../../common/ImageWrapper';

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  avatar: string;
  name: string;
  description: string;
  following: number;
  follower: number;
  github?: string;
  instgram?: string;
  facebook?: string;
  isMine?: boolean;
  isShowFollowingBtn?: boolean;
  onClickFollow?: MouseEventHandler<HTMLButtonElement>;
  onClickFollowList?: MouseEventHandler<HTMLButtonElement>;
  onClickFollowingList?: MouseEventHandler<HTMLButtonElement>;
  onClickEdit?: MouseEventHandler<HTMLButtonElement>;
}

export const ProfileCard = ({
  className,
  width,
  avatar,
  name,
  description,
  following,
  follower,
  github,
  instgram,
  facebook,
  isMine,
  isShowFollowingBtn,
  onClickFollow,
  onClickFollowList,
  onClickFollowingList,
  onClickEdit,
}: ProfileCardProps) => {
  return (
    <div
      className={cn('flex items-center w-full max-h-[150px]', className)}
      style={{ maxWidth: width }}
    >
      <Avatar src={avatar} size='large' styles='mr-[30px]' />
      <div className='flex flex-col gap-[15px] w-full h-full whitespace-pre-wrap'>
        <div className='flex items-center gap-3 overflow-hidden'>
          <p className='text-h2 line-clamp-1'>{name}</p>
          {isShowFollowingBtn && (
            <RoundButton
              className='min-w-[67px]'
              size='xs'
              theme='tertiary'
              onClick={onClickFollow}
            >
              팔로우
            </RoundButton>
          )}
        </div>
        <p className='text-body2 text-neutral-60 line-clamp-5'>{description}</p>
      </div>
      <div className='flex flex-col items-center gap-[15px] min-w-[125px] ml-[75px]'>
        <div className='flex justify-start self-start gap-[10px]'>
          {github && (
            <a href={github} target='_blank'>
              <ImageWrapper className='w-[35px] h-[35px]' path={GITHUB_ICON} />
            </a>
          )}
          {instgram && (
            <a href={instgram} target='_blank'>
              <ImageWrapper className='w-[35px] h-[35px]' path={INSTA_ICON} />
            </a>
          )}
          {facebook && (
            <a href={facebook} target='_blank'>
              <ImageWrapper
                className='w-[35px] h-[35px]'
                path={FACEBOOK_ICON}
              />
            </a>
          )}
        </div>
        <div className='flex gap-[30px]'>
          <button
            className='flex flex-col items-center gap-[5px] hover:text-neutral-60'
            onClick={onClickFollowList}
          >
            <p className='text-body2'>팔로워</p>
            <span className='text-body1_bold'>{follower}</span>
          </button>
          <button
            className='flex flex-col items-center gap-[5px] hover:text-neutral-60'
            onClick={onClickFollowingList}
          >
            <p className='text-body2'>팔로잉</p>
            <span className='text-body1_bold'>{following}</span>
          </button>
        </div>
        <SquareButton
          className='w-full border border-neutral-10 bg-white text-primary-100'
          onClick={onClickEdit}
        >
          {isMine ? '프로필 편집' : '작업 제안하기'}
        </SquareButton>
      </div>
    </div>
  );
};
