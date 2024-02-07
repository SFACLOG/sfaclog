import { Metadata } from 'next';
import { ReactNode } from 'react';

interface MyPageLayout {
  children: ReactNode;
  tabs: ReactNode;
}

export const metadata: Metadata = {
  title: '스펙폴리오 디테일 페이지',
  description: '스펙폴리오 디테일 페이지',
};

const SfacDtailLayout = ({ children }: MyPageLayout) => {
  return <main className='mx-auto container mb-[200px]'>{children}</main>;
};

export default SfacDtailLayout;
