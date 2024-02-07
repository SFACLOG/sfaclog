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

  const convertTimeFormat = (created: string) => {
    const currentDate = new Date();
    const createdDate = new Date(created);

    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return '방금';
    else if (minutes < 60) return `${minutes}분 전`;
    else if (hours < 24) return `${hours}시간 전`;
    else if (days < 7) return `${days}일 전`;
    else {
      return createdDate
        .toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replaceAll(' ', '');
    }
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
