import Logo from './Logo';

interface CommonLayoutProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

const LoginLayout: React.FC<CommonLayoutProps> = ({
  children,
  title,
  color,
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Logo />
      <div className='w-[700px] min-h-min-[450px]  bg-white mt-[11.5px] rounded-[40px]'>
        <div className='flex flex-col items-center mx-[160px] my-[60px]'>
          <p className={` ${color} text-2xl font-bold mb-[55px]`}>{title}</p>

          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
