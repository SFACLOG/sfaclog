import Link from 'next/link';
import React from 'react';
import { convertTimeFormat } from '@/utils/convertTimeFormat';

const notificationDummy = [
  {
    message: '펭도리, lemmon님 외 32명이 개발자가 되고 싶은 이유를 좋아합니다.',
    created: '2024-02-07 04:32:39.903Z',
    isRead: false,
  },
  {
    message: '관심있어 한 셀프 멘탈케어 앱 개발 모집이 시작되었습니다.',
    created: '2024-02-06 04:32:39.903Z',
    isRead: false,
  },
  {
    message: '팔로잉 한 teo.yu님이 새 로그를 업로드했습니다.',
    created: '2024-02-03 04:32:39.903Z',
    isRead: true,
  },
  {
    message: 'chiiikeen님이 회원님을 팔로우하기 시작했습니다.',
    created: '2024-01-30 23:59:39.903Z',
    isRead: false,
  },
];

const MySfaclogNotification = ({ userId }: { userId: string }) => {
  return (
    <div className='w-[540px]'>
      <div className='w-full flex justify-between items-center mb-5'>
        <div className='text-title3'>나의 스팩로그 알림</div>
        <Link
          className='text-neutral-50 text-caption1'
          href={{ pathname: `/profile/${userId}/notification` }}
        >
          알림 더보기
        </Link>
      </div>
      <div className='flex flex-col gap-[15px]'>
        {notificationDummy.map(noti => (
          <div
            className={`w-full flex justify-between items-center ${
              noti.isRead ? 'text-neutral-20' : 'text-neutral-80'
            }`}
            key={noti.message}
          >
            <span className='text-caption1'>{noti.message}</span>
            <span className='text-caption3'>
              {convertTimeFormat(noti.created)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySfaclogNotification;
