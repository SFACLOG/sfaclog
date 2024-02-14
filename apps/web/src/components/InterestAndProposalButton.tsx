import Image from 'next/image';
import React from 'react';
import { interestProposal } from '@images/interest';

type interestType = keyof (typeof interestProposal)['interest'];
type proposalType = keyof (typeof interestProposal)['proposal'];

interface InterestAndProposalButtonProps {
  size: 'sm' | 'lg';
  category?: 'interest' | 'proposal';
  type: InterestAndProposalButtonProps['category'] extends 'interest'
    ? interestType
    : InterestAndProposalButtonProps['category'] extends 'proposal'
      ? proposalType
      : string;
  selected?: boolean;
  onClick?: () => void;
}

interface InterestProposalInKorean {
  [key: string]: string;
}

const interestProposalInKorean: InterestProposalInKorean = {
  frontend: '프론트엔드',
  backend: '백엔드',
  machineLearning: '머신러닝',
  cloudComputing: '클라우드 컴퓨팅',
  database: '데이터 베이스',
  container: '컨테이너화',
  serverless: '서버리스',
  mobile: '모바일 앱 개발',
  project: '프로젝트 제안',
  recruit: '채용제안',
  opinion: '의견 제안',
};

const imageSize = {
  sm: 80,
  lg: 110,
};

const InterestAndProposalButton = ({
  size,
  category = 'interest',
  type,
  selected = false,
  onClick,
}: InterestAndProposalButtonProps) => {
  return (
    <button className='flex flex-col gap-[14px] items-center' onClick={onClick}>
      <Image
        src={interestProposal[category][type]}
        alt={`${type}`}
        width={imageSize[size]}
        height={imageSize[size]}
        className={`${selected === false && 'grayscale'}`}
      />
      {/* TODO: design-system merge 후 text style 적용 확인 */}
      <span className='text-btn'>{interestProposalInKorean[type]}</span>
    </button>
  );
};

export default InterestAndProposalButton;
