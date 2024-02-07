'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Avatar, Input, Modal, SquareButton } from 'sfac-design-kit';
import { useGetUserById, usePatchUser } from '@/hooks/useUserData';
import { getUser } from '@/api/user';
import InterestAndProposalButton from '@/components/InterestAndProposalButton';
import {
  intersts as interestList,
  proposals as proposalList,
} from '@images/interest';
import { Interest, Proposal, User } from '@/types/user';

const formData = new FormData();

const ProfileEdit = () => {
  const router = useRouter();
  const userId = useMemo(() => getUser()?.id, [getUser]);

  if (!userId) return router.replace('/login');

  const nameRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const sfacTitleRef = useRef<HTMLInputElement>(null);
  const [interests, setInterests] = useState<Interest>({});
  const [proposals, setProposals] = useState<Proposal>({});
  const [uploadedImg, setUploadedImg] = useState<string>('');
  const [isDeleteProfile, setIsDeleteProfile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data: user } = useGetUserById(userId);
  const { mutate, isSuccess } = usePatchUser();

  useEffect(() => {
    setIsOpenModal(prev => !prev);
  }, [isSuccess]);

  useEffect(() => {
    setInterests(() => user?.interests);
    setProposals(() => user?.proposals);
  }, [user]);

  const handleUploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUploadedImg(String(reader.result));

      formData.set('profile', file);
    };

    setIsDeleteProfile(false);
  };

  const handleDeleteProfile = () => {
    formData.delete('profile');

    setUploadedImg('/images/avatar.svg');
    setIsDeleteProfile(true);
  };

  const handleClickInterest = (
    icon: keyof Interest,
    iconGetter: Interest,
    iconSetter: Dispatch<SetStateAction<Interest>>,
  ) => {
    iconSetter(prev => {
      const data = { ...prev };

      data[icon] = !iconGetter[icon as keyof Interest];

      return data;
    });
  };

  const handleClickProposal = (
    icon: keyof Proposal,
    iconGetter: Proposal,
    iconSetter: Dispatch<SetStateAction<Proposal>>,
  ) => {
    iconSetter(prev => {
      const data = { ...prev };

      data[icon] = !iconGetter[icon as keyof Proposal];

      return data;
    });
  };

  const handleClickSubmit = async () => {
    const submitData = {
      nickname: nicknameRef.current?.value,
      description: descriptionRef.current?.value,
      sfaclog_title: sfacTitleRef.current?.value,
      interests,
      proposals,
    } as Partial<User>;

    if (formData.get('profile')) {
      submitData.profile_image = formData.get('profile');
    }

    if (isDeleteProfile) {
      submitData.profile_image = null;
    }

    mutate(submitData);
  };

  if (!user) return;

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
          <Avatar
            src={
              uploadedImg ||
              (user.profile_image &&
                `${process.env.NEXT_PUBLIC_POCKETEBASE_HOST}/api/files/user/${user.id}/${user.profile_image}`)
            }
            size='large'
          />
          <div className='flex flex-col gap-[10px] mt-[26px]'>
            <SquareButton className='w-[140px] h-[30px] p-0' theme='disable'>
              <label
                className='w-[140px] h-[30px] leading-[30px] cursor-pointer before:content-["업로드하기"]'
                htmlFor='profile'
              />
              <input
                className=' hidden'
                id='profile'
                type='file'
                accept='image/*'
                onChange={handleUploadProfile}
              />
            </SquareButton>
            <SquareButton
              className='w-[140px] h-[30px]'
              theme='disable'
              onClick={handleDeleteProfile}
            >
              프로필 사진 삭제
            </SquareButton>
            <p className='text-caption3 text-neutral-50'>
              20MB 이내의 이미지 파일을 업로드 해주세요.
            </p>
          </div>
        </section>
        <section className='flex flex-col gap-[15px] w-full'>
          <Input
            label='이름'
            required
            defaultValue={user.username}
            ref={nameRef}
          />
          <Input
            label='닉네임'
            description='최대 8자'
            defaultValue={user.nickname}
            ref={nicknameRef}
          />
          <Input
            label='소개'
            description='최대 400자'
            defaultValue={user.description}
            ref={descriptionRef}
          />
        </section>
        <h2 className='text-h2'>내 스팩로그</h2>
        <section className='flex flex-col gap-[15px] w-full'>
          <Input
            label='내 스팩로그 URL'
            defaultValue={`localhost:3000/${user.id}`}
            disabled
          />
          <Input
            label='스팩로그 제목'
            description='최대 8자'
            defaultValue={user.sfaclog_title}
            ref={sfacTitleRef}
          />
        </section>
        <h2 className='text-h2'>관심 분야</h2>
        <section className='grid grid-flow-row grid-cols-4 gap-5 w-full'>
          {interestList.map(interest => (
            <InterestAndProposalButton
              key={interest}
              category='interest'
              size='lg'
              type={interest}
              selected={interests && interests[interest as keyof Interest]}
              onClick={() =>
                handleClickInterest(
                  interest as keyof Interest,
                  interests,
                  setInterests,
                )
              }
            />
          ))}
        </section>
        <h2 className='text-h2'>제안 허용</h2>
        <section className='grid grid-flow-row grid-cols-3 gap-5 w-full'>
          {proposalList.map(proposal => (
            <InterestAndProposalButton
              key={proposal}
              category='proposal'
              size='lg'
              type={proposal}
              selected={proposals && proposals[proposal as keyof Proposal]}
              onClick={() =>
                handleClickProposal(
                  proposal as keyof Proposal,
                  proposals,
                  setProposals,
                )
              }
            />
          ))}
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
        {isSuccess && (
          <Modal
            isOpen={isOpenModal}
            setOpen={setIsOpenModal}
            title='저장 완료'
            content='해당 정보가 저장되었습니다.'
            onClickConfirm={() => router.push(`./${userId}`)}
          />
        )}
      </div>
    </main>
  );
};

export default ProfileEdit;
