'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import DetailInfo from '../../(components)/DetailInfo';
import DetailContents from '../../(components)/DetailContents';
import Comments from '../../(components)/Comments';
const SfacLogDetail = () => {
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
      <DetailInfo islog={true} />
      <DetailContents isPlanner={true} isDesigner={true} islog={true} />
      <Comments />
    </div>
  );
};

export default SfacLogDetail;
