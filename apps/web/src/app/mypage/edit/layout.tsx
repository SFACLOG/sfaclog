import { Metadata } from 'next';
import { ReactNode } from 'react';

interface MyPageEditLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '내 정보 수정',
  description: '내 정보 수정',
};

const MyPageEditLayout = ({ children }: MyPageEditLayout) => {
  return <div className='pt-[50px] pb-[200px] bg-neutral-5'>{children}</div>;
};

export default MyPageEditLayout;
