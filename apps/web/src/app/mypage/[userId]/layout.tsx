import { Metadata } from 'next';
import { ReactNode } from 'react';

interface MyPageLayout {
  children: ReactNode;
  tabs: ReactNode;
}

export const metadata: Metadata = {
  title: '마이페이지',
  description: '마이페이지',
};

const MyPageLayout = ({ children, tabs }: MyPageLayout) => {
  return (
    <main className='mx-auto container mb-[200px]'>
      {children}
      <section className='mt-10 px-[200px]'>{tabs}</section>
    </main>
  );
};

export default MyPageLayout;
