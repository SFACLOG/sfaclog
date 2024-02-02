import { ReactNode } from 'react';
import { Metadata } from 'next';

interface MyPageLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '마이페이지',
  description: '마이페이지',
};

const MyPageBaseLayout = ({ children }: MyPageLayoutProps) => {
  return <main className='mx-auto container mb-[200px]'>{children}</main>;
};

export default MyPageBaseLayout;
