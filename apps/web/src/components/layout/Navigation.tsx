'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Children, useEffect, useState } from 'react';
import { getUser, logout } from '@/api/user';
import { useRouter } from 'next/navigation';

const NAV = [
  {
    title: '인기로그',
    link: '/main',
  },
  {
    title: '최신로그',
    link: '/recent-log',
  },
  {
    title: '팔로잉로그',
    link: '/main',
  },
  {
    title: '요즘개발',
    link: '/main',
  },
  {
    title: '프로젝트',
    link: '/project',
  },
];

const Navigation = () => {
  const router = useRouter();
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(getUser()?.id);
  }, [getUser()?.id]);

  const handleClickLogout = () => {
    logout();
    router.push('/main');
  };

  const handleClickLogin = () => {
    router.push('/login');
  };
  return (
    <>
      <section className='flex items-center h-20 container m-auto'>
        <Image
          src='/images/main_logo.svg'
          width={180}
          height={33}
          alt='main_logo'
        />
        <nav className='flex w-full ml-[50px] text-title4'>
          <ul className='flex-1 flex gap-8'>
            {Children.toArray(
              NAV.map(({ title, link }) => (
                <li>
                  <Link className='hover:text-neutral-50' href={link}>
                    {title}
                  </Link>
                </li>
              )),
            )}
          </ul>
          <div className='flex gap-8'>
            <Link
              className='hover:text-neutral-50'
              href={userId ? `/profile/${userId}/log` : '/sign-up'}
            >
              {userId ? '내 로그' : '회원가입'}
            </Link>
            <button
              className='hover:text-neutral-50'
              onClick={userId ? handleClickLogout : handleClickLogin}
            >
              {userId ? '로그아웃' : '로그인'}
            </button>
            <Image
              src='/images/search.svg'
              width={17}
              height={17}
              alt='search'
            />
          </div>
        </nav>
      </section>
      <div className='h-[1px] bg-neutral-10' />
    </>
  );
};

export default Navigation;
