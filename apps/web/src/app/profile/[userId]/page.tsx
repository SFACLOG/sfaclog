'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Children, useMemo, useState } from 'react';
import { Avatar, ProfileCard, SelectBox, SquareButton } from 'sfac-design-kit';
import { cn } from 'sfac-design-kit/src/utils';
import { useGetUserById } from '@/hooks/useUserData';
import { getUser, login, logout } from '@/api/user';
import { Modal } from '@/components/Modal';
import {
  useGetFollowersByUserId,
  useGetFollowingsByUserId,
  useGetIsFollowingUser,
  usePostFollow,
} from '@/hooks/useFollowData';
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
  const router = useRouter();
  const pathname = usePathname();
  const userId = useMemo(() => pathname.split('/')[2], [pathname]);
  const [isOpenFollowerModal, setIsOpenFollowerModal] = useState(false);
  const [isOpenFollowingModal, setIsOpenFollowingModal] = useState(false);
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
  const isMyProfile = useMemo(
    () => userId === getUser()?.id,
    [userId, getUser()],
  );
  const { data: user } = useGetUserById(userId);
  const { data: isFollowing } = useGetIsFollowingUser(userId);
  const {
    data: followers,
    hasNextPage: hasNextFollowerPage,
    fetchNextPage: fetchNextFollowerPage,
  } = useGetFollowersByUserId(userId);
  const {
    data: followings,
    hasNextPage: hasNextFollowingPage,
    fetchNextPage: fetchNextFollowingPage,
  } = useGetFollowingsByUserId(userId);
  const { mutate } = usePostFollow();

  const handleClickFollow = () => {
    const followerId = getUser()?.id;

    if (!followerId) return router.replace('/login');

    const submitData = { followee: userId, follower: followerId };

    mutate(submitData);
  };
  const handleFetchFollower = () => {
    if (hasNextFollowerPage) {
      fetchNextFollowerPage();
    }
  };
  const handleFetchFollowing = () => {
    if (hasNextFollowingPage) {
      fetchNextFollowingPage();
    }
  };

  // 임의 로그인/로그아웃
  // login('imsi@google.com', '123456789!');
  // logout();
  // c7mgibzaz1qzvj4
  // 63uiryfe1e1gdmy

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
          isShowFollowingBtn={!isMyProfile && !isFollowing}
          isMine={isMyProfile}
          onClickFollow={handleClickFollow}
          onClickEdit={
            isMyProfile ? () => router.push('/profile/edit') : () => {}
          }
          onClickFollowList={() => setIsOpenFollowerModal(prev => !prev)}
          onClickFollowingList={() => setIsOpenFollowingModal(prev => !prev)}
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
                      href={`/profile/${userId}/${link}`}
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
      {followers && (
        <Modal isOpen={isOpenFollowerModal} setOpen={setIsOpenFollowerModal}>
          <header className='sticky top-0 w-full py-4 border-b border-neutral-10 text-subtitle bg-white text-center'>
            팔로우
          </header>
          <ul className='self-start flex flex-col gap-4 pl-8 my-4 w-full overflow-auto'>
            {Children.toArray(
              followers.pages.map((page: any) =>
                page.items.map((item: { expand: { follower: User } }) => {
                  const follower = item.expand.follower;

                  return (
                    <li className='flex items-center gap-4'>
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
            className='fixed bottom-[-45px] w-full px-auto py-4 bg-white hover:bg-neutral-5'
            onClick={handleFetchFollower}
          >
            더보기
          </button>
        </Modal>
      )}
      {followings && (
        <Modal isOpen={isOpenFollowingModal} setOpen={setIsOpenFollowingModal}>
          <header className='sticky top-0 w-full py-4 border-b border-neutral-10 text-subtitle bg-white text-center'>
            팔로잉
          </header>
          <ul className='self-start flex flex-col gap-4 pl-8 my-4 w-full overflow-auto'>
            {Children.toArray(
              followings.pages.map((page: any) =>
                page.items.map((item: { expand: { followee: User } }) => {
                  const followee = item.expand.followee;

                  return (
                    <li className='flex items-center gap-4'>
                      <Avatar
                        src={
                          followee.profile_image
                            ? `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/user/${followee.id}/${followee.profile_image}`
                            : '/images/avatar.svg'
                        }
                        size='small'
                      />
                      <span className=' text-body2'>{followee.nickname}</span>
                    </li>
                  );
                }),
              ),
            )}
          </ul>
          <button
            className='fixed bottom-[-45px] w-full px-auto py-4 bg-white hover:bg-neutral-5'
            onClick={handleFetchFollowing}
          >
            더보기
          </button>
        </Modal>
      )}
    </>
  );
};

export default Profile;
