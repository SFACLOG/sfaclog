'use client';
import DetailInfo from '../../(components)/DetailInfo';
import DetailContents from '../../(components)/DetailContents';
import Comments from '../../(components)/Comments';
import GoBack from '../../(components)/GoBack';
import { usePathname } from 'next/navigation';
import { getUserId } from '@/api/user';
import {
  useGetProjectDataByProjectId,
  useGetUserIdByProjectId,
} from '@/hooks/useProjectData';

const SfacLogDetail = () => {
  const id = usePathname();
  const isUser = getUserId();

  const { data: user } = useGetUserIdByProjectId(id.split('/')[3]);
  const isOwner = user && isUser ? user === isUser : false;

  const { data: projectInfo } = useGetProjectDataByProjectId(id.split('/')[3]);

  if (!projectInfo) {
    return;
  }
  console.log(projectInfo);
  return (
    <div className='mt-[50px] max-w-[780px] mx-auto'>
      <GoBack />

      <DetailInfo islog={true} isOwner={isOwner} projectInfo={projectInfo} />
      <DetailContents islog={true} projectInfo={projectInfo} />
      <Comments />
    </div>
  );
};

export default SfacLogDetail;
