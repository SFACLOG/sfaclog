import React from 'react';
import { LogCard } from 'sfac-design-kit';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

const NewLogSection = ({ logs }: { logs: any }) => {
  return (
    <SectionWrapper
      title='🔍 지금 스팩로그에서는'
      headerExpandText='최신로그 모아보기'
      headerExpandHref='/recent-log'
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
