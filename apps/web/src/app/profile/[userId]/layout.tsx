import { Metadata } from 'next';
import { ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

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
    <>
      <Navigation />
      <main className='mx-auto container pb-[200px]'>
        {children}
        {tabs}
      </main>
      <Footer />
    </>
  );
};

export default ProfileLayout;
