'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Children, useState } from 'react';
import { ProfileCard, SelectBox, SquareButton } from 'sfac-design-kit';
import { cn } from 'sfac-design-kit/src/utils';
import { useGetUser } from '@/hooks/useUserData';
import { isValidUser, login, logout } from '@/api/user';

interface MyPageProps {}

const NAV_LINK = [
  { link: 'log', tab: '나의 로그' },
  { link: 'log', tab: '관심 로그' },
  { link: 'log', tab: '최근 본 로그' },
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

const MyPage = ({}: MyPageProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeBtn, setActiveBtn] = useState(
    pathname.split('/').at(-1) === 'notification' ? 3 : 0,
  );
  const { data: user } = useGetUser();

  if (!user) return;

  // 임의 로그인
  // login('imsi@google.com', 'imsi1234');

  return (
    <>
      <header className='flex justify-between items-center py-[25px] border-b border-neutral-20'>
        <h2 className='text-title1'>log title</h2>
        <SquareButton>+ 로그 작성</SquareButton>
      </header>
      <div className='mt-10 max-w-[780px] mx-auto'>
        <ProfileCard
          avatar='/images/avatar.svg'
          name={user.nickname}
          description={user.description}
          github={user.sns.github}
          instgram={user.sns.instagram}
          facebook={user.sns.facebook}
          following={user.following}
          follower={user.follower}
          isMine={isValidUser()}
          onClickEdit={
            isValidUser() ? () => router.push('/mypage/edit') : () => {}
          }
        />
        <div className='h-[1px] my-[30px] bg-neutral-10'></div>
        <nav className='relative flex justify-between h-[38px]'>
          <ul
            className={cn(
              'flex items-center gap-4 text-title4 text-neutral-20',
            )}
          >
            {Children.toArray(
              NAV_LINK.map(({ link, tab }, i) => (
                <li
                  className={cn(
                    'hover:text-neutral-100',
                    activeBtn === i && [
                      'border-b-2 border-neutral-100 text-neutral-100',
                    ],
                  )}
                >
                  <Link
                    href={`/mypage/${pathname.split('/')[2]}/${link}`}
                    onClick={() => setActiveBtn(i)}
                  >
                    {tab}
                  </Link>
                </li>
              )),
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
    </>
  );
};

export default MyPage;
