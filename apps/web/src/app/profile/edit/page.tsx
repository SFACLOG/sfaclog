'use client';

import { getUser } from '@/api/user';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Children, useMemo, useRef, useState } from 'react';
import { Avatar, Input, Modal, SquareButton } from 'sfac-design-kit';

const POSITIONS = [
  { icon: 'frontend', name: '프론트엔드' },
  { icon: 'backend', name: '백엔드' },
  { icon: 'machinelearning', name: '머신러닝' },
  { icon: 'cloudcomputing', name: '클라우드컴퓨팅' },
  { icon: 'database', name: '데이터베이스' },
  { icon: 'container', name: '컨테이너화' },
  { icon: 'serverless', name: '서버리스' },
  { icon: 'mobile', name: '모바일' },
];
const PROPOSALS = [
  { icon: 'frontend', name: '프로젝트 제안' },
  { icon: 'backend', name: '채용 제안' },
  { icon: 'machinelearning', name: '의견 제안' },
];

const ProfileEdit = () => {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const sfacURLRef = useRef<HTMLInputElement>(null);
  const sfacTitleRef = useRef<HTMLInputElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const userId = useMemo(() => getUser()?.id, [getUser]);

  const handleClickSubmit = () => {
    setIsOpenModal(prev => !prev);
  };

  if (!userId) return;

  return (
    <main className='relative max-w-[700px] mx-auto bg-white rounded-[40px]'>
      <div className='flex flex-col items-center gap-[55px] px-[160px] py-[60px]'>
        <button
          className='absolute top-[61px] left-[66px] px-2'
          onClick={() => router.back()}
        >
          <Image
            src='/images/left_arrow.svg'
            width={15}
            height={28}
            alt='back'
          />
        </button>
        <h2 className='text-h2'>내 정보 수정</h2>
        <section className='flex gap-[30px] w-full'>
          <Avatar src='/images/avatar.svg' size='large' />
          <div className='flex flex-col gap-[10px] mt-[26px]'>
            <SquareButton className='w-[140px] h-[30px]' theme='disable'>
              업로드 하기
            </SquareButton>
            <SquareButton className='w-[140px] h-[30px]' theme='disable'>
              프로필 사진 삭제
            </SquareButton>
            <p className='text-caption3 text-neutral-50'>
              20MB 이내의 이미지 파일을 업로드 해주세요.
            </p>
          </div>
        </section>
        <section className='flex flex-col gap-[15px] w-full'>
          <Input label='이름' required ref={nameRef} />
          <Input label='닉네임' description='최대 8자' ref={nicknameRef} />
          <Input label='소개' description='최대 400자' ref={descriptionRef} />
        </section>
        <h2 className='text-h2'>내 스팩로그</h2>
        <section className='flex flex-col gap-[15px] w-full'>
          <Input label='내 스팩로그 URL' ref={sfacURLRef} />
          <Input
            label='스팩로그 제목'
            description='최대 8자'
            ref={sfacTitleRef}
          />
        </section>
        <h2 className='text-h2'>관심 분야</h2>
        <section className='grid grid-flow-row grid-cols-4 gap-5 w-full'>
          {Children.toArray(
            POSITIONS.map(({ icon, name }) => (
              <button className='flex flex-col items-center gap-[14px]'>
                <Image
                  src={`/images/interest/${icon}.svg`}
                  width={80}
                  height={80}
                  alt={name}
                />
                <span className='text-caption2_bold'>{name}</span>
              </button>
            )),
          )}
        </section>
        <h2 className='text-h2'>제안 허용</h2>
        <section className='grid grid-flow-row grid-cols-3 gap-5 w-full'>
          {Children.toArray(
            PROPOSALS.map(({ icon, name }) => (
              <button className='flex flex-col items-center gap-[14px]'>
                <Image
                  src={`/images/interest/${icon}.svg`}
                  width={110}
                  height={110}
                  alt={name}
                />
                <span className='text-caption2_bold'>{name}</span>
              </button>
            )),
          )}
        </section>
        <section className='flex flex-col gap-5 w-full text-caption1 text-neutral-40'>
          <Link className='relative' href='./policy'>
            이용약관&개인정보처리방침
            <Image
              className='absolute top-0 right-0'
              src='/images/right_arrow.svg'
              width={18}
              height={18}
              alt='right arrow'
            />
          </Link>
          <Link className='relative' href='./withdraw'>
            회원탈퇴
            <Image
              className='absolute top-0 right-0'
              src='/images/right_arrow.svg'
              width={18}
              height={18}
              alt='right arrow'
            />
          </Link>
        </section>
        <SquareButton
          type='submit'
          theme='primary'
          size='lg'
          onClick={handleClickSubmit}
        >
          변경사항 적용하기
        </SquareButton>
        <Modal
          isOpen={isOpenModal}
          setOpen={setIsOpenModal}
          title='저장 완료'
          content='해당 정보가 저장되었습니다.'
          onClickConfirm={() => router.push(`./${userId}`)}
        />
      </div>
    </main>
  );
};

export default ProfileEdit;
