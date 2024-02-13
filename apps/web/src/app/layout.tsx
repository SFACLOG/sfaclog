import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Provider from './Provider';
import Header from '../components/Header';
import 'sfac-design-kit/dist/style.css';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: '스팩로그',
  description: '스팩로그 입니다.',
};

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.woff2',
    },
  ],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`relative ${pretendard.className} min-h-screen`}>
        <Provider>
          <Header />
          {children}
          <div id='modal'></div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
