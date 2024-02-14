import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { Metadata } from 'next';
import { ReactNode } from 'react';

interface ProjectLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '스펙로그 메인 페이지',
  description: '스펙로그 메인 페이지',
};

const WriteLayout = ({ children }: ProjectLayout) => {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default WriteLayout;
