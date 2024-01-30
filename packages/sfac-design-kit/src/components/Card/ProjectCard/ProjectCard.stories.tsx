import { ProjectCard } from '.';

export default {
  title: 'CARDS/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export const Recruit = {
  args: {
    title: '책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다',
    icons: [
      'images/chipIcon/figma.svg',
      'images/chipIcon/react.svg',
      'images/chipIcon/nodejs.svg',
      'images/chipIcon/mysql.svg',
    ],
    isRecruit: true,
    deadline: '2024.01.31',
    avatar: 'images/avatar.svg',
    name: 'asdf',
    likes: 77,
    comments: 7,
  },
};

export const NoRecruit = {
  args: {
    title: '책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다',
    icons: [
      'images/chipIcon/figma.svg',
      'images/chipIcon/react.svg',
      'images/chipIcon/nodejs.svg',
      'images/chipIcon/mysql.svg',
    ],
    isRecruit: false,
    deadline: '2024.01.31',
    avatar: 'images/avatar.svg',
    name: 'asdf',
    likes: 77,
    comments: 7,
  },
};

export const All = () => (
  <div className='flex gap-4'>
    <ProjectCard
      title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
      icons={[
        'images/chipIcon/figma.svg',
        'images/chipIcon/react.svg',
        'images/chipIcon/nodejs.svg',
        'images/chipIcon/mysql.svg',
      ]}
      isRecruit={true}
      deadline='2024.01.31'
      avatar='images/avatar.svg'
      name='asdf'
      likes={77}
      comments={7}
    />
    <ProjectCard
      title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
      icons={[
        'images/chipIcon/figma.svg',
        'images/chipIcon/react.svg',
        'images/chipIcon/nodejs.svg',
        'images/chipIcon/mysql.svg',
      ]}
      isRecruit={false}
      deadline='2024.01.31'
      avatar='images/avatar.svg'
      name='asdf'
      likes={77}
      comments={7}
    />
  </div>
);
