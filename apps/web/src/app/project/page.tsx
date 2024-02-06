'use client';
import Image from 'next/image';
import { useState } from 'react';
import HotCard from './(components)/HotCard';
import {
  ProjectCard,
  RoundButton,
  SelectBox,
  SfacfolioCard,
  UserCard,
} from 'sfac-design-kit';
import Carousel from './(components)/Carousel';

const projects = [
  {
    title: '프로젝트 1',
    description: '나를 찾아가는 한 문장 글쓰기 앱',
    statuses: ['기획 ✅', '디자인 ❌'],
    imageUrl: '/images/gray_box.svg',
  },
  {
    title: '프로젝트 2',
    description: '두 번째 프로젝트 설명',
    statuses: ['기획 ✅', '디자인 ✅'],
    imageUrl: '/images/gray_box.svg',
  },
];

const Project = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrev = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentProject = projects[currentProjectIndex];

  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: '데이터', label: '데이터' },
    { value: '부트캠프', label: '부트캠프' },
  ];

  const userDummy = Array.from({ length: 12 }, (_, idx) => {
    return {
      id: (idx + 1).toString(),
      image:
        'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileImage:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      nickname: 'user' + (idx + 1).toString(),
      likes: idx + 8,
      followers: idx + 26,
      views: 268 + idx,
      tags: ['react', 'typescript', 'frontend'],
      info: '프론트엔드 개발자입니다.',
    };
  });

  return (
    <div className='mb-[200px]'>
      <Carousel
        options={{
          align: 'start',
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
        }}
      >
        <HotCard
          description={currentProject.description}
          statuses={currentProject.statuses}
          imageUrl={currentProject.imageUrl}
          title={currentProject.title}
          //   currentProjectIndex={currentProjectIndex}
          //   totalProjects={projects.length}
          //   handlePrev={handlePrev}
          //   handleNext={handleNext}
        />
      </Carousel>

      <div className='mx-auto container'>
        <section className=' mb-[90px]'>
          <p className=' text-[24px] font-bold text-primary-100'>
            스팩로그 프로젝트
          </p>
          <div className='flex gap-5'>
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={10}
              isPlanner={true}
              isDesigner={true}
              avatar='/images/avatar.svg'
              name='민들레'
              position='디자이너'
            />
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={7}
              isPlanner={false}
              isDesigner={false}
              avatar='/images/avatar.svg'
              name='민들레'
              position='기획자'
            />
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={10}
              isPlanner={true}
              isDesigner={true}
              avatar='/images/avatar.svg'
              name='민들레'
              position='디자이너'
            />
            <SfacfolioCard
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
        </section>
        <section>
          <div className='flex justify-between mb-[35px]'>
            <p className=' text-[24px] font-bold text-primary-100'>
              스팩로그 프로젝트
            </p>
            <div className='flex'>
              <RoundButton
                headIcon='https://cdn.icon-icons.com/icons2/1639/PNG/512/12123eyes_109574.png'
                theme={'secondary'}
                className='mr-[14px]'
              >
                모집 중만 보기
              </RoundButton>
              <RoundButton theme={'secondary'}>모집 글쓰기</RoundButton>
            </div>
          </div>
          <div className='mb-[35px]'>
            <SelectBox
              title='기술스택'
              options={options}
              className='mr-[10px]'
            ></SelectBox>
            <SelectBox
              title='모집 포지션'
              options={options}
              className='mr-[10px]'
            ></SelectBox>
            <SelectBox title='진행 방식' options={options}></SelectBox>
          </div>
          <div className='grid grid-cols-4 gap-10'>
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
        </section>
      </div>
    </div>
  );
};

export default Project;
