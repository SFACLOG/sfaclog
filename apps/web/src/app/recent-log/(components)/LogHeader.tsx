'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Avatar, RoundButton } from 'sfac-design-kit';
import LogTag from './LogTag';
import { getUser } from '@/api/user';
import { createPortal } from 'react-dom';

interface LogHeaderProps {
  tags: string[];
  title: string;
  userId: string;
  nickname: string;
  profileImage: string;
  likes: number;
}

const LogHeader = ({
  tags,
  title,
  userId,
  nickname,
  profileImage,
  likes,
}: LogHeaderProps) => {
  const user = getUser();
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (user === null || user.id) {
      setIsUserChecked(true);
    }
  }, []);

  return (
    isUserChecked && (
      <>
        <div className='flex justify-between items-center py-[25px]'>
          <div className='flex items-center gap-[10px]'>
            {tags.map(tag => (
              <LogTag key={tag} tag={tag} />
            ))}
          </div>
          <div className='flex gap-[30px]'>
            <Image
              src={'/images/ic_share.svg'}
              alt='공유하기'
              width={44}
              height={44}
              className='cursor-pointer'
            />
            {user?.id === userId && (
              <Image
                src={'/images/ic_dot_menu.svg'}
                alt='수정 및 삭제'
                width={44}
                height={44}
                className='cursor-pointer'
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            )}
            {isModalOpen &&
              createPortal(
                <div className='border border-stroke-blue w-fit text-sm font-semibold text-neutral-60 rounded-[5px]'>
                  <div className='w-fit px-9 py-[14px] border-b border-neutral-10 cursor-pointer'>
                    수정하기
                  </div>
                  <div className='w-fit px-9 py-[14px] cursor-pointer'>
                    삭제하기
                  </div>
                </div>,
                document.getElementById('modal') as Element,
              )}
          </div>
        </div>
        <h1 className='text-h1'>{title}</h1>
        <div className='flex justify-between items-start mt-5 mb-20'>
          <div className='flex items-center gap-[25px]'>
            <Avatar
              className='w-[45px] h-[45px]'
              src={`${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${userId}/${profileImage}`}
            />
            <div className='text-title3'>{nickname}</div>
            <RoundButton size={'xs'}>팔로우</RoundButton>
          </div>
          <div className='text-neutral-40 text-[15px] flex gap-[30px] items-center'>
            <div className='w-fit text-center'>
              <Image
                src={`/images/ic_big_heart.svg`}
                alt='좋아요'
                width={44}
                height={44}
                className='cursor-pointer'
              />
              <span>{likes}</span>
            </div>
            <div className='w-fit text-center'>
              <Image
                src={'/images/ic_bookmark.svg'}
                alt='북마크'
                width={44}
                height={44}
                className='cursor-pointer'
              />
              <span>45</span>
            </div>
            <div className='w-fit text-btn bg-neutral-10 text-neutral-50 rounded-full py-[6.5px] px-[15px]'>
              공개
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default LogHeader;
