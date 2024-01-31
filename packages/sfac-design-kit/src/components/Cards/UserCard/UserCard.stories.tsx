import { UserCard } from '.';

export default {
  title: 'ATOMS/UserCard',
  component: UserCard,
  tags: ['autodocs'],
};

export const Default = {
  title: 'ATOMS/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  args: {
    image: '/images/bg.svg',
    profileImage: '/images/bg.svg',
    nickname: 'name',
    heart: 112,
    title: 'title',
    content: 'contents',
    tags: ['tag1', 'tag2', 'tag3'],
  },
};

export const Useage = () => (
  <>
    <UserCard
      image='/images/bg.svg'
      profileImage='/images/avatar.svg'
      nickname='Dion'
      info='우아한 형제들 5년차 개발자'
      tags={['React', 'Next', 'WWE']}
      followers={100}
      views={234}
    />
  </>
);
