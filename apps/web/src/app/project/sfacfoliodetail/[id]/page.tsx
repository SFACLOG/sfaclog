'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Comments from '../../(components)/Comments';
import DetailContents from '../../(components)/DetailContents';
import DetailInfo from '../../(components)/DetailInfo';

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
      <DetailInfo islog={false} />
      <DetailContents isPlanner={true} isDesigner={true} islog={false} />
      <Comments />
    </div>
  );
};

export default SfacFolioDetail;
