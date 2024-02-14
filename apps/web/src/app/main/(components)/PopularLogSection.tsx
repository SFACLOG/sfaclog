import React from 'react';
import SectionWrapper from './SectionWrapper';
import { LogCard } from 'sfac-design-kit';

const logDummy = Array.from({ length: 4 }, (_, idx) => {
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

const PopularLogSection = () => {
  return (
    <SectionWrapper title='🔥 인기있는 로그를 확인해 보세요!'>
      {logDummy.map(logPost => (
        <LogCard
          key={logPost.id}
          image={
            logPost.thumbnail ||
            'https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          profileImage={
            logPost.profileImage ||
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          nickname={logPost.userId}
          heart={logPost.likes}
          title={logPost.title}
          content={logPost.content}
          tags={logPost.tags.map(tag => `#${tag}`)}
        />
      ))}
    </SectionWrapper>
  );
};

export default PopularLogSection;
