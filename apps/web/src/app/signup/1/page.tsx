import LoginLayout from '../../../components/LoginLayout';
import { intersts, proposals } from '@images/interest';
import InterestAndProposalButton from '@/components/InterestAndProposalButton';

const page = () => {
  return (
    <LoginLayout title='회원가입' color='text-neutral-100'>
      <div className='text-neutral-100 font-semibold w-full'>
        <div>
          <div className='border mb-[35px]'>관심분야</div>
          <div className='grid grid-cols-4 gap-[20px] mb-[70px]'>
            {intersts.map(interest => (
              <InterestAndProposalButton
                key={interest}
                size='sm'
                type={interest}
              />
            ))}
          </div>
        </div>
        <div>
          <div className='border mb-[35px]'>제안허용</div>
          <div className='grid grid-cols-3 gap-[20px] mb-[70px]'>
            {proposals.map(proposal => (
              <InterestAndProposalButton
                key={proposal}
                category='proposal'
                size='lg'
                type={proposal}
              />
            ))}
          </div>
        </div>
        <p className='mb-[10px]'>
          관심 분야와 제안 허용은 마이페이지에서 수정 가능해요!
        </p>
        <button className='w-full border'>회원가입 완료하기</button>
      </div>
    </LoginLayout>
  );
};

export default page;
