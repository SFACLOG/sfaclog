import React from 'react';
import SectionWrapper from './SectionWrapper';
import SfacProgramCard from './SfacProgramCard';

const sfacProgram = [
  {
    href: 'https://www.sniperfactory.com/course/project-camp-promotion-marketing',
    imgSrc:
      'https://sniperfactory.s3.ap-northeast-2.amazonaws.com/global/edu1.jpg',
    endDate: '2024-01-04',
  },
  {
    href: 'https://www.sniperfactory.com/course/support',
    imgSrc:
      'https://sniperfactory.s3.ap-northeast-2.amazonaws.com/global/asdsad.jpg',
    endDate: '2024-01-03',
  },
  {
    href: 'https://www.sniperfactory.com/course/intern-program-app-web-developer',
    imgSrc:
      'https://sniperfactory.s3.ap-northeast-2.amazonaws.com/global/edu3.png',
    endDate: '2023-12-15',
  },
];

const SfacProgramSection = () => {
  return (
    <SectionWrapper title='😎 스나이퍼팩토리와 함께 해요!'>
      {sfacProgram.map(program => (
        <SfacProgramCard
          key={program.href}
          programHref={program.href}
          programImageSrc={program.imgSrc}
          recruitEndDate={program.endDate}
        />
      ))}
    </SectionWrapper>
  );
};

export default SfacProgramSection;
