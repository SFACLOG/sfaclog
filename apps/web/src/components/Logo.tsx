import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image
        src='/images/simbol.svg'
        alt=''
        width={50}
        height={50}
        className='w-[3.125rem] h-[3.125rem] mt-[50px] mb-[30px]'
      />
      <Image
        src='/images/spac.svg'
        alt=''
        width={204}
        height={38}
        className='w-[12.75rem] h-[2.375rem]'
      />
    </div>
  );
};

export default Logo;
