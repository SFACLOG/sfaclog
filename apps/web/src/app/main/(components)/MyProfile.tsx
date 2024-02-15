import Link from 'next/link';
import React from 'react';
import { Avatar, SquareButton } from 'sfac-design-kit';

interface MyProfileProps {
  id: string;
  nickname: string;
  follower: number;
  following: number;
  profileImage?: string;
}

const MyProfile = ({
  id,
  nickname,
  follower,
  following,
  profileImage,
}: MyProfileProps) => {
  return (
    <div>
      <div className='text-title3 mb-5'>내 프로필</div>
      <div className='flex justify-between w-[580px] px-[30px] py-6 border border-neutral-10 rounded-[20px]'>
        <div className='flex gap-5 items-center'>
          <Avatar
            className='w-[80px] h-[80px]'
            src={
              profileImage
                ? `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${id}/${profileImage}`
                : ''
            }
          />
          <div className='flex flex-col gap-[9px]'>
            <div className='text-title3'>{nickname}</div>
            <div className='flex gap-8 text-caption1'>
              <div className='flex gap-[15px]'>
                <span>팔로워</span>
                <span>{follower}</span>
              </div>
              <div className='flex gap-[15px]'>
                <span>팔로잉</span>
                <span>{following}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[9px]'>
          <SquareButton
            theme={'secondary'}
            size={'sm'}
            className='w-40 px-3 font-semibold'
          >
            <Link href={{ pathname: `/profile/edit` }}>프로필 수정하기</Link>
          </SquareButton>
          <SquareButton
            theme={'secondary'}
            size={'sm'}
            className='w-40 px-3 font-semibold'
          >
            <Link href={{ pathname: `/recent-log/write` }}>+ 새 로그 작성</Link>
          </SquareButton>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
