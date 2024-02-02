'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Children, ReactNode, useState } from 'react';
import { ProfileCard, SelectBox, SquareButton } from 'sfac-design-kit';
import { cn } from 'sfac-design-kit/src/utils';

interface MyPageLayout {
  children: ReactNode;
  tabs: ReactNode;
}

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

const MyPageLayout = ({ children, tabs }: MyPageLayout) => {
  const pathname = usePathname();
  const [activeBtn, setActiveBtn] = useState(
    pathname.split('/').at(-1) === 'notification' ? 3 : 0,
  );

  return (
    <>
      <header className='flex justify-between items-center py-[25px] border-b border-neutral-20'>
        <h2 className='text-title1'>log title</h2>
        <SquareButton>+ 로그 작성</SquareButton>
      </header>
      <div className='mt-10 px-[200px]'>
        <ProfileCard
          avatar='/images/avatar.svg'
          name='닉네임'
          description={`노력을 좋아하는 프론트엔드 개발자, ‘차윤정'입니다 😀\n항상 새로운 것에 도전하고 노력하는 개발자가 되고 싶습니다!\n\n[경력] DGB 데이터시스 웹개발자 (2016.08 ~ 2017.03 / 8개월)`}
          following={77}
          follower={77}
          isMine={true}
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
                    href={`/mypage/12/${link}`}
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
        {tabs}
      </div>
    </>
  );
};

export default MyPageLayout;
