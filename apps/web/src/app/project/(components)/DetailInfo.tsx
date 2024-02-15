'use client';
import React, { useState, MouseEventHandler } from 'react';
import { Avatar, Modal, RoundButton } from 'sfac-design-kit';
import Image from 'next/image';
import { useGetUserDataWithPropsById } from '@/hooks/useUserData';
import { useGetUserProfileById } from '@/hooks/useProjectData';
import { useGetSkillData } from '@/hooks/useSkillData';
import { useGetMeetingData } from '@/hooks/useMeetingData';
import { useGetPositionData } from '@/hooks/usePositionData';
import { deleteProject, updateProjectIs } from '@/api/project';
import { useRouter } from 'next/navigation';
import {
  deleteProjectLike,
  getProjectLike,
  postProjectLike,
} from '@/api/projectlike';
import { getUserId } from '@/api/user';
import LinkCopy from './LinkCopy';
import { imagechipoptions, process, position } from '../(contants)';
import Link from 'next/link';

interface Project {
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  deadline: string;
  id: string;
  images: string[];
  is_end: boolean;
  likes: number;
  preference: string;
  size: string;
  status: string;
  title: string;
  updated: string;
  user_id: string;
  views: number;
}

interface DetailProps {
  islog: boolean;
  isOwner: boolean;
  projectInfo: Project;
}

const DetailInfo = ({ islog, isOwner, projectInfo }: DetailProps) => {
  const router = useRouter();
  const [editButtonTheme, setEditButtonTheme] = useState<boolean>(false);
  const [deleteButtonTheme, setDeleteButtonTheme] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(projectInfo.is_end);
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(projectInfo.likes);
  const isUser = getUserId();
  const handleEditButtonClick = () => {
    setEditButtonTheme(prevTheme => !prevTheme);
    router.push(`/project/update/${projectInfo.id}`);
  };

  const handleDeleteButtonClick = () => {
    setDeleteButtonTheme(prevTheme => !prevTheme);
  };

  const handleCloseButtonClick = async () => {
    const updatedProjectInfo = { ...projectInfo, is_end: !projectInfo.is_end };
    await updateProjectIs(projectInfo.id, updatedProjectInfo);
    setIsEnd(!isEnd);
  };

  const { data: user } = useGetUserDataWithPropsById(projectInfo.user_id);
  const { data: userProfile } = useGetUserProfileById(projectInfo.user_id);
  const { data: allSkill } = useGetSkillData([projectInfo.id]);
  const { data: allMeeting } = useGetMeetingData([projectInfo.id]);
  const { data: allPosition } = useGetPositionData([projectInfo.id]);

  if (!user || !allSkill || !allMeeting || !allPosition) {
    return;
  }

  const allSkillValues = allSkill?.map(projectSkills =>
    projectSkills.map((skill: any) => {
      const foundOption = imagechipoptions.find(
        option => option.label === skill.skill_id,
      );
      return foundOption ? foundOption.value : '';
    }),
  );

  const allMeetingValues = allMeeting?.map(projectMeetings =>
    projectMeetings.map((meeting: any) => {
      const foundOption = process.find(
        option => option.value === meeting.meeting_id,
      );
      return foundOption ? foundOption.label : '';
    }),
  );
  const allPositionValues = allPosition?.map(projectPositions =>
    projectPositions.map((projectposition: any) => {
      const foundOption = position.find(
        option => option.value === projectposition.position_id,
      );
      return foundOption ? foundOption.label : '';
    }),
  );

  const handleDeleteConfirm: MouseEventHandler<HTMLButtonElement> = event => {
    deleteProject(projectInfo.id);
    router.push('/project');
  };

  const heartOnclick = async () => {
    setIsHeart(prev => !prev);
    const updatedLikes = isHeart ? projectInfo.likes : projectInfo.likes + 1;
    const updatedProjectInfo = { ...projectInfo, likes: updatedLikes };
    await updateProjectIs(projectInfo.id, updatedProjectInfo);
    setLikes(updatedLikes);
    const hasLike = await getProjectLike({
      project_id: projectInfo.id,
      user_id: isUser,
    });
    if (hasLike) {
      return;
    }
    await postProjectLike({ project_id: projectInfo.id, user_id: isUser });
    // await deleteProjectLike()
  };

  return (
    <div className='mb-10'>
      <div className='flex justify-between mb-[15px]'>
        <div className='w-[730px]'>
          <div className='flex w-[701px] items-end gap-[255px] mb-[25px]'>
            <RoundButton
              className={` ${islog ? ' bg-primary-100' : 'bg-system-success'} py-[15px]`}
            >
              {islog ? '스펙로그 프로젝트' : '스펙폴리오 프로젝트'}
            </RoundButton>
            {isOwner && (
              <div className='flex gap-[15px] flex-shrink-0'>
                <RoundButton
                  theme={editButtonTheme ? 'primary' : 'secondary'}
                  className='py-[10px] border'
                  onClick={handleEditButtonClick}
                >
                  수정하기
                </RoundButton>
                <RoundButton
                  theme={deleteButtonTheme ? 'primary' : 'secondary'}
                  className='py-[10px] border'
                  onClick={handleDeleteButtonClick}
                >
                  삭제하기
                </RoundButton>
                <Modal
                  isOpen={deleteButtonTheme}
                  setOpen={setDeleteButtonTheme}
                  title='해당 게시글을 삭제하시겠습니까?'
                  isCancleBtn={true}
                  onClickConfirm={handleDeleteConfirm}
                />
                <RoundButton
                  theme={isEnd ? 'primary' : 'secondary'}
                  className='py-[10px] border'
                  onClick={handleCloseButtonClick}
                >
                  모집마감
                </RoundButton>
              </div>
            )}
          </div>
          <p className=' text-title1 mb-5'>{projectInfo.title}</p>
          <div className='flex items-center text-neutral-80'>
            <Link href={`/profile/${projectInfo.user_id}`}>
              <Avatar
                src={userProfile ? userProfile : '/images/avatar.svg'}
                size={'tiny'}
                className='mr-2'
              />
            </Link>
            <p className=' text-caption2_bold'>{user.nickname}(디자이너)</p>
            <p className='mx-2'>|</p>
            <p className=' text-caption2'>
              {/*@ts-ignore */}
              {projectInfo.created.split(' ')[0]}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={'/images/project/share.svg'}
            alt='share button'
            width={19}
            height={21}
            className='mb-[46px] mt-[11px] cursor-pointer'
            onClick={LinkCopy}
          />
          <div className='flex flex-col items-center'>
            <Image
              src={'/images/project/blueheart.svg'}
              alt='heart'
              width={22}
              height={20}
              className={`mb-3 ${!isHeart && 'grayscale'} cursor-pointer`}
              onClick={heartOnclick}
            />
            <p>{likes}</p>
          </div>
        </div>
      </div>
      <div className='border-t border-neutral-20'></div>
      {islog && (
        <div className='flex gap-[174px] mt-[30px]'>
          <div className='flex flex-col gap-[25px] min-w-[225px]'>
            <div className='flex gap-[33px]'>
              <p className=' text-caption2'>진행 방식</p>
              <p className=' text-caption2_bold'>{allMeetingValues[0]}</p>
            </div>
            <div className='flex gap-[33px] items-center'>
              <p className=' text-caption2'>기술 스택</p>
              <div className='flex gap-[10px]'>
                {allSkillValues[0]?.map((el: string, index: number) => (
                  <Image
                    src={el}
                    alt={`Skill ${index}`}
                    width={40}
                    height={40}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[25px]'>
            <div className='flex justify-between   gap-[33px]'>
              <p className=' text-caption2'>모집 포지션</p>
              <div className=' flex'>
                {allPositionValues[0]?.map(
                  (el: string, index: number, array: string[]) => (
                    <p key={index} className='text-caption2_bold'>
                      {el}
                      {index !== array.length - 1 && <span>, </span>}
                    </p>
                  ),
                )}
              </div>
            </div>
            <div className='flex justify-between  gap-[33px]'>
              <p className=' text-caption2'>모집 인원</p>
              <p className=' text-caption2_bold'>{projectInfo.size}</p>
            </div>
            <div className='flex justify-between gap-[33px]'>
              <p className=' text-caption2'>모집 마감일</p>
              <p className=' text-caption2_bold'>
                {projectInfo.deadline.split(' ')[0]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailInfo;
