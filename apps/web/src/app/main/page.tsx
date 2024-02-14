import React from 'react';
import PopularLogSection from './(components)/PopularLogSection';
import NewLogSection from './(components)/NewLogSection';
import SfacProgramSection from './(components)/SfacProgramSection';
import FollowSection from './(components)/FollowSection';
import RecentNewsSection from './(components)/RecentNewsSection';
import MainBannerSection from './(components)/MainBannerSection';

export const logDummy = Array.from({ length: 4 }, (_, idx) => {
  return {
    id: (idx + 1).toString(),
    thumbnail: '',
    title: '개발자들이 많이 읽은 아티클',
    content:
      '“단위 테스트”의 “단위”라는 용어는 원래 테스트 대상 시스템의 단위가 아니라 테스트 자체를 의미한다는 일부 루머가 있습니다. “단위 테스트”의 “단위”라는 용어는 원래 테스트 대상 시스템의 단위가 아니라 테스트 자체를 의미한다는 일부 루머가 있습니다.',
    views: idx + 98,
    likes: idx + 8,
    profileImage: '',
    userId: 'user' + (idx + 1).toString(),
    tags: ['개발자', '아티클', 'frontend'],
  };
});

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
