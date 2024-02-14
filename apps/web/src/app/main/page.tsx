import React from 'react';
import PopularLogSection from './(components)/PopularLogSection';
import NewLogSection from './(components)/NewLogSection';
import SfacProgramSection from './(components)/SfacProgramSection';
import FollowSection from './(components)/FollowSection';
import RecentNewsSection from './(components)/RecentNewsSection';
import MainBannerSection from './(components)/MainBannerSection';

const MainPage = () => {
  return (
    <div className='w-full'>
      <MainBannerSection />
      <div className='flex flex-col gap-[90px] container mx-auto mb-[200px]'>
        <PopularLogSection />
        <NewLogSection />
        <SfacProgramSection />
        <FollowSection />
        <RecentNewsSection />
      </div>
    </div>
  );
};

export default MainPage;
