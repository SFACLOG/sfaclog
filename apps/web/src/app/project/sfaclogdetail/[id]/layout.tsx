import { Metadata } from 'next';
import { ReactNode } from 'react';

interface ProjectLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '스펙로그 디테일 페이지',
  description: '스펙로그 디테일 페이지',
};

const SfacDtailLayout = ({ children }: ProjectLayout) => {
  return <main className='mx-auto container mb-[200px]'>{children}</main>;
};

export default SfacDtailLayout;
