'use client';
import React, { useEffect, useState } from 'react';
import MySfaclogNotification from './MySfaclogNotification';
import MyProfile from './MyProfile';
import MainBanner from './MainBanner';
import { getUser } from '@/api/user';

const MainBannerSection = () => {
  const user = getUser();
  const [isLoginChecked, setIsLoginChecked] = useState(false);

  useEffect(() => {
    if (user === null || user.id) {
      setIsLoginChecked(true);
      console.log(user);
    }
  }, []);

  return isLoginChecked && user?.id ? (
    <section className='mx-auto container mb-[50px]'>
      <div className='flex justify-between items-start border-b border-neutral-20 py-[50px]'>
        <MySfaclogNotification userId={user.id} />
        <MyProfile
          nickname={user.nickname}
          id={user.id}
          follower={user.follower}
          following={user.following}
          profileImage={user.profile_image}
        />
      </div>
    </section>
  ) : (
    <MainBanner />
  );
};

export default MainBannerSection;
