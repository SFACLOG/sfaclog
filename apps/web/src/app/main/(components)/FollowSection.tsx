import React from 'react';
import SectionWrapper from './SectionWrapper';
import Carousel from '../../../components/Carousel';
import { UserCard } from 'sfac-design-kit';

const userDummy = Array.from({ length: 6 }, (_, idx) => {
  return {
    id: (idx + 1).toString(),
    image:
      'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    profileImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: 'user' + (idx + 1).toString(),
    likes: idx + 8,
    followers: idx + 26,
    views: 268 + idx,
    tags: ['react', 'typescript', 'frontend'],
    info: '프론트엔드 개발자입니다.',
  };
});

const FollowSection = () => {
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
        {userDummy.map(user => (
          <UserCard
            followers={user.followers}
            views={user.views}
            info={user.info}
            nickname={user.nickname}
            image={user.image}
            profileImage={user.profileImage}
            className='mr-[25px]'
          />
        ))}
      </Carousel>
    </SectionWrapper>
  );
};

export default FollowSection;
