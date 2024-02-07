import { Metadata } from 'next';
import { ReactNode } from 'react';

interface MyPageWithdrawLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '회원 탈퇴',
  description: '회원 탈퇴페이지 입니다.',
};

const MyPageWithdrawLayout = ({ children }: MyPageWithdrawLayoutProps) => {
  return (
    <div className='flex items-center min-h-[calc(100dvh-50px)] bg-neutral-5'>
      {children}
    </div>
  );
};

export default MyPageWithdrawLayout;
