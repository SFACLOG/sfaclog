import React from 'react';
import SectionWrapper from './SectionWrapper';
import { logDummy } from '../page';
import { LogCard } from 'sfac-design-kit';

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
