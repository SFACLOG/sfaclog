const GlobalError = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-10 w-screen h-screen'>
      <h2 className=' text-title1'>
        🚨 <strong>에러</strong>가 발생했습니다!
      </h2>
      <a className=' text-title2 underline decoration-primary-30' href='/'>
        메인으로 이동하기
      </a>
    </main>
  );
};

export default GlobalError;
