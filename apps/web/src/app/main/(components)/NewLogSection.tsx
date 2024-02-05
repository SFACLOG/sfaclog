import React from 'react';
import { logDummy } from '../page';
import { LogCard } from 'sfac-design-kit';
import SectionWrapper from './SectionWrapper';

const NewLogSection = () => {
  return (
    <SectionWrapper
      title='🔍 지금 스팩로그에서는'
      headerExpandText='최신로그 모아보기'
      headerExpandHref='/' // TODO: log 페이지 생성 후 log 페이지 url로 변경 필요
    >
      {logDummy.map(logPost => (
        <LogCard
          key={logPost.id}
          image={
            logPost.thumbnail ||
            'https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          profileImage={
            logPost.profileImage ||
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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

export default NewLogSection;
