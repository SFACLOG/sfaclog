'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const GoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div>
      <Image
        src='/images/ic_big_arrow.svg'
        alt=''
        width={32}
        height={32}
        className='w-8 h-8 cursor-pointer mb-5'
        onClick={handleGoBack}
      />
    </div>
  );
};

export default GoBack;
