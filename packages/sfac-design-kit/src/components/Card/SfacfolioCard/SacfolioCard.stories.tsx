import { ProjectCard } from '.';

export default {
  title: 'CARDS/SfacfolioCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export const Positive = {
  args: {
    title: 'AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~',
    thumbnail: '/images/gray_box.svg',
    likes: 10,
    isPlanner: true,
    isDesigner: true,
    avatar: '/images/avatar.svg',
    name: '민들레',
    position: '디자이너',
  },
  argTypes: {
    position: {
      options: ['기획자', '디자이너'],
      control: { type: 'radio' },
    },
  },
};

export const Negative = {
  args: {
    title: 'AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~',
    thumbnail: '/images/gray_box.svg',
    likes: 7,
    isPlanner: false,
    isDesigner: false,
    avatar: '/images/avatar.svg',
    name: '민들레',
    position: '기획자',
  },
  argTypes: {
    position: {
      options: ['기획자', '디자이너'],
      control: { type: 'radio' },
    },
  },
};

export const All = () => (
  <div className='flex gap-4'>
    <ProjectCard
      title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
      thumbnail='/images/gray_box.svg'
      likes={10}
      isPlanner={true}
      isDesigner={true}
      avatar='/images/avatar.svg'
      name='민들레'
      position='디자이너'
    />
    <ProjectCard
      title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
      thumbnail='/images/gray_box.svg'
      likes={7}
      isPlanner={false}
      isDesigner={false}
      avatar='/images/avatar.svg'
      name='민들레'
      position='기획자'
    />
  </div>
);
