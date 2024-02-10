'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Children,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Avatar, ProfileCard, SelectBox, SquareButton } from 'sfac-design-kit';
import { cn } from 'sfac-design-kit/src/utils';
import { useGetUserById } from '@/hooks/useUserData';
import { getUser, login, logout } from '@/api/user';
import { Modal } from '@/components/Modal';
import { useGetFollowersByUserId } from '@/hooks/useFollowData';
import { User } from '@/types/user';

const NAV_LINK = [
  { link: 'log', tab: '나의 로그' },
  { link: 'bookmark-log', tab: '관심 로그' },
  { link: 'recent-view-log', tab: '최근 본 로그' },
  { link: 'notification', tab: '나의 알림' },
];
const SORT_OPTIONS = [
  {
    value: '최신순',
    label: '최신순',
  },
  {
    value: '인기순',
    label: '인기순',
  },
  {
    value: '댓글 많은순',
    label: '댓글 많은순',
  },
  {
    value: '오래된 순',
    label: '오래된 순',
  },
];
const FILTER_OPTIONS = [
  {
    value: 'React',
    label: 'React',
  },
  {
    value: 'Next.js',
    label: 'Next.js',
  },
  {
    value: 'Java',
    label: 'Java',
  },
  {
    value: '오래된 순',
    label: '오래된 순',
  },
];

const Profile = () => {
  const observerRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState(() => {
    switch (pathname.split('/').at(-1)) {
      case 'bookmark-log':
        return 1;
      case 'recent-view-log':
        return 2;
      case 'notification':
        return 3;
      default:
        return 0;
    }
  });
  const { data: user } = useGetUserById(pathname.split('/')[2]);
  const {
    data: followers,
    hasNextPage,
    fetchNextPage,
  } = useGetFollowersByUserId(pathname.split('/')[2]);

  const isMyProfile = useMemo(
    () => pathname.split('/')[2] === getUser()?.id,
    [pathname, getUser()],
  );

  const handleClickFollowList = () => {
    setIsOpenModal(prev => !prev);
  };

  const handleClickFollowingList = () => {
    setIsOpenModal(prev => !prev);
  };

  const handleFetchFollower = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  // 임의 로그인/로그아웃
  // login('imsi@google.com', '123456789!');
  // logout();

  if (!user) return;

  return (
    <>
      <header className='flex justify-between items-center py-[25px] border-b border-neutral-20'>
        <h2 className='text-title1'>{user.sfaclog_title}</h2>
        {isMyProfile && <SquareButton>+ 로그 작성</SquareButton>}
      </header>
      <div className='mt-10 max-w-[780px] mx-auto'>
        <ProfileCard
          avatar={
            user.profile_image
              ? `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/user/${user.id}/${user.profile_image}`
              : '/images/avatar.svg'
          }
          name={user.nickname}
          description={user.description}
          github={user.sns?.github}
          instgram={user.sns?.instagram}
          facebook={user.sns?.facebook}
          following={user.following}
          follower={user.follower}
          isMine={isMyProfile}
          onClickEdit={
            isMyProfile ? () => router.push('/profile/edit') : () => {}
          }
          onClickFollowList={handleClickFollowList}
          onClickFollowingList={handleClickFollowingList}
        />
        <div className='h-[1px] my-[30px] bg-neutral-10'></div>
        <nav className='relative flex justify-between h-[38px]'>
          <ul
            className={cn(
              'flex items-center gap-4 text-title4 text-neutral-20',
            )}
          >
            {Children.toArray(
              (isMyProfile ? NAV_LINK : [{ link: 'log', tab: '로그' }]).map(
                ({ link, tab }, i) => (
                  <li
                    className={cn(
                      'hover:text-neutral-100',
                      activeBtn === i && [
                        'border-b-2 border-neutral-100 text-neutral-100',
                      ],
                    )}
                  >
                    <Link
                      href={`/profile/${pathname.split('/')[2]}/${link}`}
                      onClick={() => setActiveBtn(i)}
                    >
                      {tab}
                    </Link>
                  </li>
                ),
              ),
            )}
          </ul>
          <div className='absolute right-0'>
            <SelectBox title='정렬방식' options={SORT_OPTIONS} />
            <SelectBox
              className='ml-3'
              title='시리즈 필터'
              options={FILTER_OPTIONS}
            />
          </div>
        </nav>
      </div>
      <Modal isOpen={isOpenModal} setOpen={setIsOpenModal}>
        <header className='sticky top-0 w-full py-4 text-subtitle bg-white text-center'>
          팔로우
        </header>
        <ul className='self-start flex flex-col gap-4 ml-8 my-4 '>
          {Children.toArray(
            followers?.pages.map((page: any) =>
              page.items.map((item: { expand: { follower: User } }) => {
                const follower = item.expand.follower;

                return (
                  <li className='flex items-center gap-4 '>
                    <Avatar
                      src={
                        follower.profile_image
                          ? `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/user/${follower.id}/${follower.profile_image}`
                          : '/images/avatar.svg'
                      }
                      size='small'
                    />
                    <span className=' text-body2'>{follower.nickname}</span>
                  </li>
                );
              }),
            ),
          )}
        </ul>
        <button
          className='fixed bottom-0 w-full px-auto py-4 hover:bg-neutral-5'
          onClick={handleFetchFollower}
        >
          더보기
        </button>
      </Modal>
    </>
  );
};

export default Profile;
