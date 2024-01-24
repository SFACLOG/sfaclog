import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex w-full h-[3.125rem] px-[8.125rem]   bg-background-5'>
      <Image
        src='/images/simbol.svg'
        alt=''
        width={29}
        height={29}
        className='flex justify-center items-center w-[29px] h-[29px] mr-[50px] m-2'
      />
      <Image
        src='/images/logo.svg'
        alt=''
        width={100}
        height={45}
        className='w-[6.25rem] h-[2.8125rem]'
      />
    </div>
  );
};

export default Header;
