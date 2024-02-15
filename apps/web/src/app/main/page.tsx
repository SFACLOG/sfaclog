import React from 'react';
import PopularLogSection from './(components)/PopularLogSection';
import NewLogSection from './(components)/NewLogSection';
import SfacProgramSection from './(components)/SfacProgramSection';
import FollowSection from './(components)/FollowSection';
import RecentNewsSection from './(components)/RecentNewsSection';
import MainBannerSection from './(components)/MainBannerSection';
import { getPopularPost, getRecentPost } from '@/api/post';

export const fetchCache = 'force-no-store';

const MainPage = async () => {
  const popularLogs = await getPopularPost();
  const recentLogs = await getRecentPost();

  return (
    <div className='w-full'>
      <MainBannerSection />
      <div className='flex flex-col gap-[90px] container mx-auto mb-[200px]'>
        <PopularLogSection logs={popularLogs} />
        <NewLogSection logs={recentLogs} />
        <SfacProgramSection />
        <FollowSection />
        <RecentNewsSection />
      </div>
    </div>
  );
};

export default MainPage;
