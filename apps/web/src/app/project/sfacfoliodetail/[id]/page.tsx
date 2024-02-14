'use client';
import { usePathname } from 'next/navigation';
import Comments from '../../(components)/Comments';
import DetailContents from '../../(components)/DetailContents';
import DetailInfo from '../../(components)/DetailInfo';
import GoBack from '../../(components)/GoBack';
import { useGetProjectDataByProjectId } from '@/hooks/useProjectData';

const SfacFolioDetail = () => {
  const id = usePathname();
  const { data: projectInfo } = useGetProjectDataByProjectId('r7irbj5d4aq96hb');
  if (!projectInfo) {
    return;
  }
  return (
    <div className='mt-[50px] max-w-[780px] mx-auto'>
      <GoBack />
      <DetailInfo islog={false} isOwner={false} projectInfo={projectInfo} />
      <DetailContents islog={false} projectInfo={projectInfo} />
      <Comments />
    </div>
  );
};

export default SfacFolioDetail;
