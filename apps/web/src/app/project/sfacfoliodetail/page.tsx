'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar, RoundButton } from 'sfac-design-kit';
import DetailInfo from '../(components)/DetailInfo';
import DetailContents from '../(components)/DetailContents';
const SfacFolioDetail = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className='mt-[50px] max-w-[780px] mx-auto'>
      <Image
        src='/images/ic_big_arrow.svg'
        alt=''
        width={32}
        height={32}
        className='w-8 h-8 cursor-pointer mb-5'
        onClick={handleGoBack}
      />
      <DetailInfo />
      <DetailContents isPlanner={true} isDesigner={true}></DetailContents>
    </div>
  );
};

export default SfacFolioDetail;
