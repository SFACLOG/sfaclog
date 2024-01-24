import { signout } from '../../utils/auth';

const Signout = () => {
  signout('mco1v06ybcxkw4r');

  return (
    <div className='flex flex-col items-center justify-center'>회원탈퇴</div>
  );
};

export default Signout;
