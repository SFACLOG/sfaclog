import { Metadata } from 'next';
import { ReactNode } from 'react';

interface PolicyLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '이용약관&개인정보처리방침',
  description: '이용약관&개인정보처리방침 페이지입니다.',
};

const PolicyLayout = ({ children }: PolicyLayoutProps) => {
  return <div className='pt-[50px] pb-[200px] bg-neutral-5'>{children}</div>;
};

export default PolicyLayout;
