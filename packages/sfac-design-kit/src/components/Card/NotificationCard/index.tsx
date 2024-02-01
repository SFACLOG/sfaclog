import { Children, MouseEventHandler, ReactNode } from 'react';
import { Avatar } from '../../Avatar';

export interface NotificationCardProps {
  children: ReactNode;
  title: string;
  time: string;
  width?: number;
  onClickDelete: MouseEventHandler<HTMLSpanElement>;
}

export interface CommentCardProps {
  title: string;
  avatar: string;
  name: string;
  comment: string;
  onClickCard: MouseEventHandler<HTMLDivElement>;
}

export interface FollowCardProps {
  users: {
    avatar: string;
    name: string;
    onClickUser: MouseEventHandler<HTMLLIElement>;
  }[];
}

export interface ProjectCardProps {
  title: string;
  summary: string;
  onClickCard: MouseEventHandler<HTMLDivElement>;
}

export const NotificationCard = ({
  children,
  title,
  time,
  width,
  onClickDelete,
}: NotificationCardProps) => {
  return (
    <div
      className='w-full h-full p-[30px] border border-neutral-20 rounded-[10px]'
      style={{ maxWidth: width }}
    >
      <div className='flex items-center justify-between text-body1'>
        <p className='flex-1 line-clamp-1'>{title}</p>
        <div className='text-caption2'>
          <span>{time}</span>
          <span
            className='ml-[25px] text-neutral-40 cursor-pointer hover:text-neutral-100'
            onClick={onClickDelete}
          >
            삭제
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

const CommentCard = ({
  title,
  avatar,
  name,
  comment,
  onClickCard,
}: CommentCardProps) => {
  return (
    <div
      className='mt-[25px] text-subtitle cursor-pointer'
      onClick={onClickCard}
    >
      <p>{title}</p>
      <div className='h-[1px] mt-[15px] bg-neutral-10'></div>
      <div className='flex mt-[15px]'>
        <Avatar src={avatar} size='small' />
        <div className='ml-[15px]'>
          <p className='text-title4'>{name}</p>
          <p className='mt-[15px] text-body1 text-neutral-60 line-clamp-1'>
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

const FollowCard = ({ users }: FollowCardProps) => {
  return (
    <div className='mt-[25px] text-subtitle'>
      <div className='h-[1px] my-5 bg-neutral-10'></div>
      <ul className='flex gap-5 flex-wrap'>
        {Children.toArray(
          users.map(({ avatar, name, onClickUser }) => (
            <li
              className='flex flex-col items-center gap-[10px] line-clamp-1 cursor-pointer'
              onClick={onClickUser}
            >
              <Avatar src={avatar} size='small' />
              <span className='max-w-24 text-body2_bold line-clamp-1'>
                {name}
              </span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

const ProjectCard = ({ title, summary, onClickCard }: ProjectCardProps) => {
  return (
    <div
      className='min-h-[110px] mt-[25px] text-subtitle cursor-pointer'
      onClick={onClickCard}
    >
      <p className='text-subtitle text-neutral60'>{title}</p>
      <div className='h-[1px] mt-5 mb-[15px] bg-neutral-10'></div>
      <p className=' text-body2 text-neutral-60 line-clamp-2'>{summary}</p>
    </div>
  );
};

NotificationCard.CommentCard = CommentCard;
NotificationCard.FollowCard = FollowCard;
NotificationCard.ProjectCard = ProjectCard;
