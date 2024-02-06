import React from 'react';
import SectionWrapper from './SectionWrapper';
import Carousel from '../../../components/Carousel';
import { DevCard } from 'sfac-design-kit';

const convertTime = (created: string) => {
  const currentDate = new Date();
  const createdDate = new Date(created);

  const timeDiff = currentDate.getTime() - createdDate.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return '방금';
  else if (minutes < 60) return `${minutes}분 전`;
  else if (hours < 24) return `${hours}시간 전`;
  else if (days < 7) return `${days}일 전`;
  else if (weeks <= 4) return `${weeks}주 전`;
  else if (months < 12) return `${months}개월 전`;
  else if (months === 12 && years === 0) return `11개월 전`;
  else return `${years}년 전`;
};

const recentNewsDummy = Array.from({ length: 6 }, (_, idx) => {
  return {
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icons: ['/images/chipIcon/figma.svg'],
    title: 'ChatGPT 서비스로 월 4천만원 버는 베트남 개발자 이야기',
    time: '2024-02-04 08:10:05.589Z',
    likes: 6 * idx,
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: '김스팩',
    tags: ['AI', '커리어', '디지털노마드'],
  };
});

const RecentNewsSection = () => {
  return (
    <SectionWrapper
      title='💻 요즘 개발 소식을 알려드릴게요'
      headerExpandText='인기로그 모아보기'
      headerExpandHref='/' // TODO: 페이지 생성 후 해당 페이지 url로 변경 필요
      isCarousel={true}
    >
      <Carousel
        options={{
          align: 'start',
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          loop: true,
        }}
      >
        {recentNewsDummy.map(news => (
          <DevCard
            thumbnail={news.thumbnail}
            icons={news.icons}
            title={news.title}
            time={convertTime(news.time)}
            likes={news.likes.toString()}
            avatar={news.avatar}
            name={news.name}
            tags={news.tags.map(tag => `#${tag}`)}
            className={'mr-[30px]'}
          />
        ))}
      </Carousel>
    </SectionWrapper>
  );
};

export default RecentNewsSection;
