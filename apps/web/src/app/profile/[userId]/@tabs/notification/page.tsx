'use client';

import { NotificationCard } from 'sfac-design-kit';

const NotificationSection = () => {
  return (
    <div className='flex flex-col gap-[30px] mt-10'>
      <NotificationCard
        title='새로운 댓글, 답글이 달렸습니다.'
        time='30분 전'
        onClickDelete={() => {}}
      >
        <NotificationCard.CommentCard
          title='토스페이스를 클론코딩 해보자'
          avatar='/images/avatar.svg'
          name='목이긴기린'
          comment='오 이런식으로 구성되어 있는 거였군요~!'
          onClickCard={() => {}}
        />
      </NotificationCard>
      <NotificationCard
        title='새로운 댓글, 답글이 달렸습니다.'
        time='30분 전'
        onClickDelete={() => {}}
      >
        <NotificationCard.CommentCard
          title='토스페이스를 클론코딩 해보자'
          avatar='/images/avatar.svg'
          name='등산레쓰고'
          comment='유용한 정보 감사합니다!'
          onClickCard={() => {}}
        />
      </NotificationCard>
      <NotificationCard
        title='유저아아디1, 유저아이디2 외 3명이 회원님을 팔로우하기 시작했습니다.'
        time='30분 전'
        onClickDelete={() => {}}
      >
        <NotificationCard.FollowCard
          users={Array.from(
            {
              length: 5,
            },
            () => {
              return {
                avatar: '/images/avatar.svg',
                name: '유저아이디',
                onClickUser: () => alert('상세 페이지'),
              };
            },
          )}
        />
      </NotificationCard>
      <NotificationCard
        title='회원님이 관심있어 한 프로젝트가 업데이트되었습니다.'
        time='30분 전'
        onClickDelete={() => {}}
      >
        <NotificationCard.ProjectCard
          title='하나부터 열까지 관리하자! - 헬스 케어 서비스 할수있당'
          summary='헬스 케어 서비스 개발 프로젝트입니다.'
          onClickCard={() => {}}
        />
      </NotificationCard>
    </div>
  );
};

export default NotificationSection;
