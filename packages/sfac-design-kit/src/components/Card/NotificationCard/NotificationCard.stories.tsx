import { NotificationCard } from '.';

export default {
  title: 'CARDS/NotificationCard',
  component: NotificationCard,
  tags: ['autodocs'],
};

export const CommentCard = {
  args: {
    children: (
      <NotificationCard.CommentCard
        title='로그 제목'
        avatar='/images/avatar.svg'
        name='유저아이디'
        comment='저도 하고 싶은데 어떻게 하면 되나요? bbbbbbbbbbb'
        onClickCard={() => alert('상세 페이지')}
      />
    ),
    title: '새로운 댓글, 답글이 달렸습니다',
    time: '30분 전',
    onClickDelete: () => alert('삭제 기능'),
  },
};

export const CommentCardList = () => (
  <div className='flex flex-col gap-8'>
    <NotificationCard
      title='새로운 댓글, 답글이 달렸습니다'
      time='30분 전'
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.CommentCard
        title='로그 제목'
        avatar='/images/avatar.svg'
        name='유저아이디'
        comment='저도 하고 싶은데 어떻게 하면 되나요? bbbbbbbbbbb'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
    <NotificationCard
      title='새로운 댓글, 답글이 달렸습니다'
      time='30분 전'
      width={780}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.CommentCard
        title='로그 제목'
        avatar='/images/avatar.svg'
        name='유저아이디'
        comment='저도 하고 싶은데 어떻게 하면 되나요? bbbbbbbbbbb'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
    <NotificationCard
      title='새로운 댓글, 답글이 달렸습니다'
      time='30분 전'
      width={500}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.CommentCard
        title='로그 제목'
        avatar='/images/avatar.svg'
        name='유저아이디'
        comment='저도 하고 싶은데 어떻게 하면 되나요? bbbbbbbbbbb'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
  </div>
);

export const FollowCard = {
  args: {
    children: (
      <NotificationCard.FollowCard
        users={[
          {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          },
          {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          },
          {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          },
          {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          },
          {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          },
        ]}
      />
    ),
    title:
      '유저아아디1, 유저아이디2 외 3명이 회원님을 팔로우하기 시작했습니다.',
    time: '30분 전',
    onClickDelete: () => alert('삭제 기능'),
  },
};

export const FollowCardList = () => (
  <div className='flex flex-col gap-8'>
    <NotificationCard
      title='유저아아디1, 유저아이디2 외 3명이 회원님을 팔로우하기 시작했습니다.'
      time='30분 전'
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.FollowCard
        users={Array.from({ length: 6 }, () => {
          return {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          };
        })}
      />
    </NotificationCard>
    <NotificationCard
      title='유저아아디1, 유저아이디2 외 3명이 회원님을 팔로우하기 시작했습니다.'
      time='30분 전'
      width={780}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.FollowCard
        users={Array.from({ length: 6 }, () => {
          return {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          };
        })}
      />
    </NotificationCard>
    <NotificationCard
      title='유저아아디1, 유저아이디2 외 3명이 회원님을 팔로우하기 시작했습니다.'
      time='30분 전'
      width={500}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.FollowCard
        users={Array.from({ length: 6 }, () => {
          return {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          };
        })}
      />
    </NotificationCard>
  </div>
);

export const ProjectCard = {
  args: {
    children: (
      <NotificationCard.ProjectCard
        title='프로젝트 이름'
        summary='업데이트 내용 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라'
        onClickCard={() => alert('상세 페이지')}
      />
    ),
    title: '회원님이 관심있어 한 프로젝트가 업데이트되었습니다.',
    time: '30분 전',
    onClickDelete: () => alert('삭제 기능'),
  },
};

export const ProjectCardList = () => (
  <div className='flex flex-col gap-8'>
    <NotificationCard
      title='회원님이 관심있어 한 프로젝트가 업데이트되었습니다.'
      time='30분 전'
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.ProjectCard
        title='프로젝트 이름'
        summary='업데이트 내용 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
    <NotificationCard
      title='회원님이 관심있어 한 프로젝트가 업데이트되었습니다.'
      time='30분 전'
      width={780}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.ProjectCard
        title='프로젝트 이름'
        summary='업데이트 내용 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
    <NotificationCard
      title='회원님이 관심있어 한 프로젝트가 업데이트되었습니다.'
      time='30분 전'
      width={500}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.ProjectCard
        title='프로젝트 이름'
        summary='업데이트 내용 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
  </div>
);

export const All = () => (
  <div className='flex flex-col gap-8'>
    <NotificationCard
      title='새로운 댓글, 답글이 달렸습니다'
      time='30분 전'
      width={780}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.CommentCard
        title='로그 제목'
        avatar='/images/avatar.svg'
        name='유저아이디'
        comment='저도 하고 싶은데 어떻게 하면 되나요? bbbbbbbbbbb'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
    <NotificationCard
      title='유저아아디1, 유저아이디2 외 3명이 회원님을 팔로우하기 시작했습니다.'
      time='30분 전'
      width={780}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.FollowCard
        users={Array.from({ length: 6 }, () => {
          return {
            avatar: '/images/avatar.svg',
            name: '유저아이디',
            onClickUser: () => alert('상세 페이지'),
          };
        })}
      />
    </NotificationCard>
    <NotificationCard
      title='회원님이 관심있어 한 프로젝트가 업데이트되었습니다.'
      time='30분 전'
      width={780}
      onClickDelete={() => alert('삭제 기능')}
    >
      <NotificationCard.ProjectCard
        title='프로젝트 이름'
        summary='업데이트 내용 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라'
        onClickCard={() => alert('상세 페이지')}
      />
    </NotificationCard>
  </div>
);
