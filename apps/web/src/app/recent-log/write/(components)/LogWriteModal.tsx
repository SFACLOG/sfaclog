'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { SelectBox } from 'sfac-design-kit';

const LogWriteModal = () => {
  const [thumbnailImg, setThumbnailImg] = useState<File>();
  return (
    <div className='absolute top-[62px] right-8 w-[350px] px-[25px] pt-[30px] bg-neutral-5 rounded-[5px]'>
      <div>
        <div className='text-title4'>썸네일</div>
        <div className='bg-neutral-10 w-[65px] h-[65px] rounded-[5px]'>
          <label
            htmlFor='image'
            className='flex justify-center items-center w-[65px] h-[65px]'
          >
            <Image
              src={'/images/ic_plus.svg'}
              alt='add'
              width={22}
              height={22}
            />
          </label>
          <input
            // onChange={setThumbnailImg}
            type='file'
            accept='image/*'
            className='hidden'
            id='image'
          />
        </div>
      </div>
      <div>
        <div className='text-title4'>시리즈 설정</div>
        <SelectBox
          // className='absolute'///
          options={[
            { value: 'bootcamp', label: 'bootcamp' },
            { value: 'react', label: 'react' },
          ]}
          title='시리즈 선택 및 추가'
        />
      </div>
      <div>
        <div className='text-title4'>로그 키워드</div>
      </div>
      <div>
        <div className='text-title4'>공개 범위</div>
      </div>
    </div>
  );
};

export default LogWriteModal;
