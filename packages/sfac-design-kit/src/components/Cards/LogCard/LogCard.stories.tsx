import { LogCard } from '.';

export default {
  title: 'ATOMS/LogCard',
  component: LogCard,
  tags: ['autodocs'],
};

export const Default = {
  title: 'ATOMS/LogCard',
  component: LogCard,
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
    <LogCard
      image='/images/bg.svg'
      profileImage='/images/bg.svg'
      nickname='존 시나'
      heart={42}
      title='킹발자'
      content='아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에'
      tags={['React', 'Next', 'WWE']}
    />
  </>
);
