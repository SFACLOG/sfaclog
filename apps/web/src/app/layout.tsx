'use client';
import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/Header';
import 'sfac-design-kit/dist/style.css';
import { UserProvider } from './context/UserContext';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.woff2',
    },
  ],
});

export default function RootLayout({
  session,
  children,
}: {
  session?: Session;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${pretendard.className} bg-background-5`}>
        <Header />
        <SessionProvider session={session}>
          <UserProvider>{children}</UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
