'use client';
import React from 'react';
import { Avatar, SquareButton } from 'sfac-design-kit';

interface AuthorProfileProps {
  userId: string;
  nickname: string;
  profileImage: string;
  follower: number;
  following: number;
}

const AuthorProfile = ({
  userId,
  nickname,
  profileImage,
  follower,
  following,
}: AuthorProfileProps) => {
  return (
    <div className='w-full flex flex-col items-center gap-5 py-[50px] border-b border-neutral-10'>
      <Avatar
        className='w-[138px] h-[138px]'
        src={`${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${userId}/${profileImage}`}
      />
      <div className='text-title3'>{nickname}</div>
      <div className='text-body1 flex gap-[30px]'>
        <div>
          <span>팔로워</span>
          <span className='ml-5'>{follower}</span>
        </div>
        <div>
          <span>팔로워</span>
          <span className='ml-5'>{following}</span>
        </div>
      </div>
      <SquareButton className='text-lg font-semibold px-[22px] py-3'>
        로그 메인 바로 가기
      </SquareButton>
    </div>
  );
};

export default AuthorProfile;
