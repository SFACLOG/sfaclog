import { Metadata } from 'next';
import { ReactNode } from 'react';

interface ProfileLayoutProps {
  children: ReactNode;
  tabs: ReactNode;
}

export const metadata: Metadata = {
  title: '회원 프로필',
  description: '회원 프로필 입니다.',
};

const ProfileLayout = ({ children, tabs }: ProfileLayoutProps) => {
  return (
    <main className='mx-auto container mb-[200px]'>
      {children}
      <section className='max-w-[780px] mx-auto'>{tabs}</section>
    </main>
  );
};

export default ProfileLayout;
