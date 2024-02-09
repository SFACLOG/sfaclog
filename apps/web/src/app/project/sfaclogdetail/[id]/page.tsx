import DetailInfo from '../../(components)/DetailInfo';
import DetailContents from '../../(components)/DetailContents';
import Comments from '../../(components)/Comments';
import GoBack from '../../(components)/GoBack';
const SfacLogDetail = () => {
  return (
    <div className='mt-[50px] max-w-[780px] mx-auto'>
      <GoBack />
      <DetailInfo islog={true} isOwner={false} />
      <DetailContents isPlanner={true} isDesigner={true} islog={true} />
      <Comments />
    </div>
  );
};

export default SfacLogDetail;
