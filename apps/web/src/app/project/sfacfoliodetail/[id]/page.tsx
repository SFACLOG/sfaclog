import Comments from '../../(components)/Comments';
import DetailContents from '../../(components)/DetailContents';
import DetailInfo from '../../(components)/DetailInfo';
import GoBack from '../../(components)/GoBack';

const SfacFolioDetail = () => {
  return (
    <div className='mt-[50px] max-w-[780px] mx-auto'>
      <GoBack />
      <DetailInfo islog={false} isOwner={false} />
      <DetailContents isPlanner={true} isDesigner={true} islog={false} />
      <Comments />
    </div>
  );
};

export default SfacFolioDetail;
