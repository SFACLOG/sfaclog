'use client';
import React from 'react';
import SectionWrapper from './SectionWrapper';
import Carousel from '../../../components/Carousel';
import { UserCard } from 'sfac-design-kit';
import { useGetUsers } from '@/hooks/useUserData';
import { useRouter } from 'next/navigation';

const FollowSection = () => {
  const { data, isLoading } = useGetUsers();
  const router = useRouter();
  const userProfileButtonClick = (id: string) => {
    router.push(`/profile/${id}`);
  };

  return (
    <SectionWrapper title='💬 개발자들과 팔로우하고 소통해요' isCarousel={true}>
      <Carousel
        options={{
          align: 'start',
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          loop: true,
        }}
      >
        {data?.items.map(user => (
          <UserCard
            key={user.id}
            followers={user.follower}
            views={user.following}
            info={user.description}
            nickname={user.nickname}
            image={
              user.image ||
              'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            profileImage={`${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/_pb_users_auth_/${user.id}/${user.profile_image}`}
            className='mr-[25px]'
            onClick={() => userProfileButtonClick(user.id)}
          />
        ))}
      </Carousel>
    </SectionWrapper>
  );
};

export default FollowSection;
