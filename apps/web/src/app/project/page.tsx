'use client';
import HotCard from './(components)/HotCard';
import {
  ProjectCard,
  RoundButton,
  SelectBox,
  SelectChipBox,
  SfacfolioCard,
} from 'sfac-design-kit';
import Carousel from '@/components/Carousel';
import {
  useGetAllUserById,
  useGetAllUserProfileById,
  useGetProjectData,
} from '@/hooks/useProjectData';

import { useGetSkillData } from '@/hooks/useSkillData';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import { imagechipoptions, position, process } from './(contants)';

const projects = [
  {
    title: '나를 찾아가는 한 문장 글쓰기 앱',
    statuses: ['기획 ✅', '디자인 ✅'],
    imageUrl: '/images/project/thumb2.svg',
  },
  {
    title: '하나부터 열까지 관리하자! - 헬스 케어 서비스 할수있당',
    statuses: ['기획 ✅', '디자인 ✅'],
    imageUrl: '/images/project/thumb4.svg',
  },
  {
    title: '가사 기반 음악 공유 플랫폼 앱',
    statuses: ['기획 ✅', '디자인 ❌'],
    imageUrl: '/images/project/thumb3.svg',
  },
  {
    title: 'AI 데이팅 어시스턴트 앱 디자인',
    statuses: ['기획 ✅', '디자인 ✅'],
    imageUrl: '/images/project/thumb1.svg',
  },
];

const sfacProjects = [
  {
    title: 'AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~',
    thumbnail: '/images/project/thumb1.svg',
    likes: 10,
    isPlanner: true,
    isDesigner: true,
    avatar: '/images/project/avatar5.svg',
    name: '민들레',
    position: '디자이너',
  },
  {
    title: '나를 찾아가는 한 문장 글쓰기 앱',
    thumbnail: '/images/project/thumb2.svg',
    likes: 32,
    isPlanner: true,
    isDesigner: true,
    avatar: '/images/project/avatar1.svg',
    name: '크림이',
    position: '기획자',
  },
  {
    title: '가사 기반 음악 공유 플랫폼 앱',
    thumbnail: '/images/project/thumb3.svg',
    likes: 10,
    isPlanner: true,
    isDesigner: false,
    avatar: '/images/project/avatar2.svg',
    name: '룰루',
    position: '디자이너',
  },
  {
    title: '하나부터 열까지 관리하자! - 헬스 케어 서비스 할수있당',
    thumbnail: '/images/project/thumb4.svg',
    likes: 17,
    isPlanner: true,
    isDesigner: true,
    avatar: '/images/project/avatar3.svg',
    name: '김민준',
    position: '기획자',
  },
];

const Project = () => {
  const { data: allProject } = useGetProjectData();

  const allProjectId =
    allProject?.map(proejct => {
      return proejct.id;
    }) || [];

  const allUserId =
    allProject?.map(proejct => {
      return proejct.user_id;
    }) || [];

  // const { data: allUser } = useGetAllUserById(allUserId);

  const { data: allUserProfile } = useGetAllUserProfileById(allUserId);

  const { data: allSkill } = useGetSkillData(allProjectId);
  const { data: allUserInfo } = useGetAllUserById(allUserId);

  const allSkillValues = allSkill?.map(projectSkills =>
    projectSkills.map((skill: any) => {
      const foundOption = imagechipoptions.find(
        option => option.label === skill.skill_id,
      );
      return foundOption ? foundOption.value : '';
    }),
  );

  const usernames = allUserInfo?.flat().map(obj => obj.username);

  const [isRecruit, setIsRecruit] = useState<boolean>(false);
  const recruitButtonClick = () => {
    setIsRecruit(prev => !prev);
  };
  return (
    <div className='mb-[200px] '>
      <Carousel
        options={{
          align: 'start',
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          loop: true,
        }}
        isPageButton={true}
        className=' bg-primary-10 mb-[50px]'
      >
        {projects.map((project, index) => (
          <div key={index}>
            <HotCard
              title={project.title}
              statuses={project.statuses}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </Carousel>

      <div className='mx-auto container'>
        <section className=' mb-[90px]'>
          <p className=' text-[24px] font-bold text-primary-100 mb-[35px]'>
            스팩폴리오 프로젝트
          </p>
          <div className='flex gap-5'>
            {sfacProjects.map((project, index) => (
              <Link href={`/project/sfacfoliodetail/${index}`} key={index}>
                <SfacfolioCard
                  key={index}
                  title={project.title}
                  thumbnail={project.thumbnail}
                  likes={project.likes}
                  isPlanner={project.isPlanner}
                  isDesigner={project.isDesigner}
                  avatar={project.avatar}
                  name={project.name}
                  position={project.position}
                />
              </Link>
            ))}
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
                className={`mr-[14px] border-neutral-10 text-neutral-60 ${isRecruit && 'border-primary-100 text-primary-100'}`}
                onClick={recruitButtonClick}
              >
                모집 중만 보기
              </RoundButton>
              <Link href={'/project/write'}>
                <RoundButton theme={'secondary'}>모집 글쓰기</RoundButton>
              </Link>
            </div>
          </div>
          <div className='flex mb-[35px] relative'>
            <SelectChipBox title='기술 스택' className='mr-[10px] w-0 top-0 ' />

            <div className='w-[140px] h-[44px] mr-[10px]'> </div>

            <SelectBox
              title='모집 포지션'
              options={position}
              className='mr-[10px]'
            ></SelectBox>
            <SelectBox title='진행방식' options={process}></SelectBox>
          </div>
          <div className='grid grid-cols-4 gap-10'>
            {allProject?.map((project, index) => {
              if ((isRecruit && !project.is_end) || !isRecruit) {
                return (
                  <Link
                    href={`/project/sfaclogdetail/${project.id}`}
                    key={project.id}
                  >
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      icons={
                        allSkillValues && allSkillValues[index]
                          ? allSkillValues[index]
                          : []
                      }
                      isRecruit={project.is_end}
                      deadline={project.deadline.split(' ')[0]}
                      avatar={
                        allUserProfile && allUserProfile[index]
                          ? allUserProfile[index]
                          : '/images/avatar.svg'
                      }
                      name={
                        usernames && usernames[index] ? usernames[index] : []
                      }
                      likes={project.likes}
                      comments={0}
                    />
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
