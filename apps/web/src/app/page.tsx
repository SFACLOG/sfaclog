'use client';
import { signOut, useSession } from 'next-auth/react';
import Test from '../components/Test';
import { SquareButton } from 'sfac-design-kit';
import { isValidUser, logout } from '@/api/user';
import { useUserContext } from './context/UserContext';

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? 'blur-[32px]' : 'blur-[75px]'
      } ${conic ? 'bg-glow-conic' : ''} ${className}`}
    />
  );
}

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
  {
    title: 'Templates',
    href: 'https://turbo.build/repo/docs/getting-started/from-example',
    description: 'Choose from over 15 examples and deploy with a single click.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    description:
      ' Instantly deploy your Turborepo to a shareable URL with Vercel.',
  },
];

export default function Page(): JSX.Element {
  const { data } = useSession();
  const isLogiin = isValidUser();
  const { userData, setUserData } = useUserContext();

  console.log(data);
  console.log(isLogiin);

  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div>
        <Test />
        <span>TEST test 123123 font 테스트를 해봅니다!!!</span>
        {data ? (
          <div>{data.user?.name}님 로그인됨</div>
        ) : (
          <div>{isLogiin && userData && `${userData.email}님 로그인됨`}</div>
        )}

        <SquareButton
          onClick={() => {
            signOut({ callbackUrl: '/' });
            logout();
          }}
        >
          로그아웃
        </SquareButton>
      </div>
    </main>
  );
}
