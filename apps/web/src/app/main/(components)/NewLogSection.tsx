import React from 'react';
import { LogCard } from 'sfac-design-kit';
import SectionWrapper from './SectionWrapper';
import { getRecentPost } from '@/api/post';
import Link from 'next/link';

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

export const revalidate = 60;

const NewLogSection = async () => {
  const logs = await getRecentPost();

  return (
    <SectionWrapper
      title='🔍 지금 스팩로그에서는'
      headerExpandText='최신로그 모아보기'
      headerExpandHref='/' // TODO: log 페이지 생성 후 log 페이지 url로 변경 필요
    >
      {logs.map((logPost: any) => (
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
    </SectionWrapper>
  );
};

export default NewLogSection;
