import React from 'react';
import SfacProgramSection from '../main/(components)/SfacProgramSection';
import RecentLogTagSection from './(components)/RecentLogTagSection';
import { LogCard, SelectBox } from 'sfac-design-kit';
import Link from 'next/link';
import { getRecentPost } from '@/api/post';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { getTags } from '@/api/tag';

const filterOptions = [
  { value: '전체', label: '전체' },
  { value: '오늘', label: '오늘' },
  { value: '이번 주', label: '이번 주' },
  { value: '이번 달', label: '이번 달' },
  { value: '이번 년도', label: '이번 년도' },
];

export const fetchCache = 'force-no-store';

const RecentLogPage = async () => {
  const recentLogs = await getRecentPost(1, 16);
  const tags = await getTags(1, 12);

  return (
    <>
      <Navigation />
      <div className='mx-auto container'>
        <RecentLogTagSection tags={tags} />
        <div className='flex items-center gap-5 mb-[13px]'>
          <span className='text-caption1 text-neutral-40'>정렬방식</span>
          <SelectBox title={'전체'} options={filterOptions} />
        </div>
        <div className='flex flex-col gap-[90px]'>
          <div className='grid grid-cols-4 gap-10'>
            {recentLogs.slice(0, 8).map((logPost: any) => (
              <Link href={{ pathname: `/recent-log/${logPost.id}` }}>
                <LogCard
                  key={logPost.id}
                  image={
                    `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/${logPost.collectionId}/${logPost.id}/${logPost.thumbnail}` ||
                    'https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  profileImage={
                    `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${logPost.expand.user_id.id}/${logPost.expand.user_id.profile_image}` ||
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  nickname={logPost.expand.user_id.nickname}
                  heart={logPost.likes}
                  title={logPost.title}
                  content={logPost.content}
                  tags={logPost.tags.map((tag: string) => `#${tag}`)}
                />
              </Link>
            ))}
          </div>
          <SfacProgramSection />
          <div className='grid grid-cols-4 gap-10 mb-[200px]'>
            {recentLogs.slice(8, 16).map((logPost: any) => (
              <Link href={{ pathname: `/recent-log/${logPost.id}` }}>
                <LogCard
                  key={logPost.id}
                  image={
                    `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/${logPost.collectionId}/${logPost.id}/${logPost.thumbnail}` ||
                    'https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  profileImage={
                    `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${logPost.expand.user_id.id}/${logPost.expand.user_id.profile_image}` ||
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  nickname={logPost.expand.user_id.nickname}
                  heart={logPost.likes}
                  title={logPost.title}
                  content={logPost.content}
                  tags={logPost.tags.map((tag: string) => `#${tag}`)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecentLogPage;
