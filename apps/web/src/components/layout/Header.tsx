import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex gap-[58px] h-[50px] container m-auto'>
      <Image
        className='ml-2'
        src='/images/simbol.svg'
        width={29}
        height={29}
        alt='simbol'
      />
      <Image src='/images/logo.svg' width={100} height={45} alt='logo' />
    </header>
  );
};

export default Header;
