'use client';
import LoginLayout from '../../../components/LoginLayout';
import { intersts, proposals } from '@images/interest';
import InterestAndProposalButton from '@/components/InterestAndProposalButton';
import { SquareButton } from 'sfac-design-kit';
import { useEffect, useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { signup } from '@/api/user';
import Link from 'next/link';

const page = () => {
  const { userData, setUserData } = useUserContext();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedProposals, setSelectedProposals] = useState<string[]>([]);

  const { username, nickname, email, password, passwordConfirm } = userData;

  console.log(username, nickname, email, password, passwordConfirm);

  const handleInterestClick = (interest: string) => {
    const newSelectedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter(item => item !== interest)
      : [...selectedInterests, interest];

    setSelectedInterests(newSelectedInterests);
  };

  const handleProposalClick = (proposal: string) => {
    const newSelectedProposals = selectedProposals.includes(proposal)
      ? selectedProposals.filter(item => item !== proposal)
      : [...selectedProposals, proposal];

    setSelectedProposals(newSelectedProposals);
  };

  const handleSubmit = () => {
    signup({
      username,
      nickname,
      email,
      password,
      passwordConfirm,
      interests: {
        frontend: selectedInterests.includes('frontend'),
        backend: selectedInterests.includes('backend'),
        machineLearning: selectedInterests.includes('machineLearning'),
        cloudComputing: selectedInterests.includes('cloudComputing'),
        database: selectedInterests.includes('database'),
        container: selectedInterests.includes('container'),
        serverless: selectedInterests.includes('serverless'),
        mobile: selectedInterests.includes('mobile'),
      },
      proposals: {
        project: selectedProposals.includes('project'),
        recruit: selectedProposals.includes('recruit'),
        opinion: selectedProposals.includes('opinion'),
      },
      emailVisibility: true,
    });

    // const updatedUserData = {
    //   ...userData,
    //   interests: selectedInterests,
    //   proposals: selectedProposals,
    // };

    // setUserData(updatedUserData);
  };

  return (
    <LoginLayout title='회원가입' color='text-neutral-100'>
      <div className='flex flex-col items-center text-neutral-100 font-semibold w-full'>
        <div>
          <div className='bg-primary-10 h-10 mb-[35px] rounded-[5px] pl-[15px] py-[10px]'>
            관심분야
          </div>
          <div className='grid grid-cols-4 gap-[20px] mb-[70px]'>
            {intersts.map(interest => (
              <InterestAndProposalButton
                key={interest}
                size='sm'
                type={interest}
                selected={selectedInterests.includes(interest)}
                onClick={() => handleInterestClick(interest)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className='bg-primary-10 h-10 mb-[35px] rounded-[5px] pl-[15px] py-[10px]'>
            제안허용
          </div>
          <div className='grid grid-cols-3 gap-[20px] mb-[70px]'>
            {proposals.map(proposal => (
              <InterestAndProposalButton
                key={proposal}
                category='proposal'
                size='lg'
                type={proposal}
                selected={selectedProposals.includes(proposal)}
                onClick={() => handleProposalClick(proposal)}
              />
            ))}
          </div>
        </div>
        <p className='mb-[10px] text-caption3'>
          관심 분야와 제안 허용은 마이페이지에서 수정 가능해요!
        </p>
        <Link href={'/sign-up/1/2'}>
          <SquareButton fullWidth={true} onClick={handleSubmit}>
            회원가입 완료하기
          </SquareButton>
        </Link>
      </div>
    </LoginLayout>
  );
};

export default page;
