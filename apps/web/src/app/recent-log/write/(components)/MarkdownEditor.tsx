'use client';
import MDEditor, { commands } from '@uiw/react-md-editor';
import React, { useRef, useState } from 'react';
import {
  bold,
  codeBlock,
  image,
  italic,
  link,
  quote,
  strikethrough,
  title1,
  title2,
  title3,
} from './CustomToolbarItems';
import './toolbar.css';
import { SquareButton } from 'sfac-design-kit';
import { getUser } from '@/api/user';
import LogUploadModal from './LogUploadModal';

const MarkdownEditor = () => {
  const user = getUser();
  const titleRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string | undefined>('');
  const [formData] = useState(new FormData());
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleSubmit = () => {
    event?.preventDefault();

    formData.append('user_id', user?.id);

    if (!formData.get('title'))
      formData.append('title', titleRef.current?.value || '');
    else formData.set('title', titleRef.current?.value || '');

    if (!formData.get('content')) formData.append('content', value || '');
    else formData.set('content', value || '');
  };

  return (
    <div className='w-[1440px] mx-auto' data-color-mode='light'>
      <form className='relative'>
        <MDEditor
          height={'100vh'}
          value={value}
          onChange={(value: string | undefined) => setValue(value)}
          commands={[
            title1,
            title2,
            title3,
            commands.divider,
            bold,
            italic,
            strikethrough,
            commands.divider,
            quote,
            image,
            link,
            codeBlock,
          ]}
        />
        <input
          className='absolute w-[631px] top-[64px] left-[45px] border-b border-[#d0d7de] pt-5 pb-[25px] text-[30px] font-bold placeholder:text-neutral-10'
          placeholder='제목을 입력해주세요'
          ref={titleRef}
        />
        <div className='absolute flex gap-[9px] right-8 top-[11px]'>
          <SquareButton className='text-base font-semibold bg-neutral-5 text-neutral-60'>
            작성 취소
          </SquareButton>
          <SquareButton
            className='text-base font-semibold'
            onClick={() => {
              handleSubmit();
              setIsUploadModalOpen(!isUploadModalOpen);
            }}
          >
            작성 완료
          </SquareButton>
        </div>
        {isUploadModalOpen && (
          <LogUploadModal
            setIsUploadModalOpen={setIsUploadModalOpen}
            formData={formData}
          />
        )}
      </form>
    </div>
  );
};

export default MarkdownEditor;
