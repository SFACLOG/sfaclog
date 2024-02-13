'use client';
import pb from '@/api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { Checkbox, RoundButton, SelectBox } from 'sfac-design-kit';

interface LogUploadModalProps {
  formData: FormData;
  setIsUploadModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogUploadModal = ({
  formData,
  setIsUploadModalOpen,
}: LogUploadModalProps) => {
  const [thumbnailImgSrc, setThumbnailImgSrc] = useState('');
  const tagRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const handleThumbnailImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];
    if (file) {
      if (!formData.get('thumbnail')) formData.append('thumbnail', file || '');
      else formData.set('thumbnail', file || '');

      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getTagId = async (tagName: string) => {
    try {
      const tag = await pb
        .collection('tag')
        .getFirstListItem(`name="${tagName}"`);

      if (tag) {
        return tag.id;
      }
    } catch (error) {
      console.error('존재하지 않는 태그입니다.', error);
    }

    const newTag = await pb.collection('tag').create({ name: tagName });

    return newTag.id;
  };

  const handleSubmit = async () => {
    event?.preventDefault();
    try {
      const tags =
        tagRef.current?.value.split('#').filter(tag => tag !== '') || [];
      const tagIds = await Promise.all(tags.map(tagName => getTagId(tagName)));

      const postResponse = await pb.collection('post').create(formData);
      const postId = postResponse.id;

      const postTags = tagIds.map((tagId: string) => ({
        post_id: postId,
        tag_id: tagId,
      }));
      const response = await Promise.all(
        postTags.map(postTag => pb.collection('post_tag').create(postTag)),
      );

      console.log('log 등록 성공: ', response);
      router.push(`/recent-log/upload-success/${postId}`);
    } catch (error) {
      console.error('log 등록 실패: ', error);
    }
  };

  return (
    <div className='absolute top-[62px] right-8 w-[350px] px-[25px] pt-[30px] pb-[15px] bg-neutral-5 rounded-[5px]'>
      <button
        className='absolute right-[9px] top-[15px]'
        onClick={() => setIsUploadModalOpen(false)}
      >
        <Image
          src={'/images/ic_x.svg'}
          alt='thumbnail'
          width={22}
          height={22}
        />
      </button>
      <div className='mb-5'>
        <div className='text-title4 mb-[5px]'>썸네일</div>
        {thumbnailImgSrc ? (
          <div className='relative w-[65px] h-[65px] rounded-[5px] overflow-hidden'>
            <Image
              src={thumbnailImgSrc}
              alt='thumbnail'
              fill
              className='object-cover'
            />
            <div className='w-[65px] h-[65px] absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]'></div>
          </div>
        ) : (
          <label
            htmlFor='image'
            className='flex bg-neutral-10 justify-center items-center w-[65px] h-[65px] rounded-[5px] '
          >
            <Image
              src={'/images/ic_plus.svg'}
              alt='add'
              width={22}
              height={22}
            />
          </label>
        )}
        <input
          onChange={handleThumbnailImg}
          type='file'
          accept='image/*'
          className='hidden'
          id='image'
        />
      </div>
      <div className='mb-5'>
        <div className='text-title4 mb-[5px]'>시리즈 설정</div>
        <div className='relative w-full h-[38px]'>
          <SelectBox
            options={[
              { value: 'bootcamp', label: 'bootcamp' },
              { value: 'react', label: 'react' },
            ]}
            title='시리즈 선택 및 추가'
            className='absolute'
          />
        </div>
      </div>
      <div className='mb-10'>
        <div className='text-title4 mb-[5px]'>로그 키워드</div>
        <textarea
          className='w-full h-[70px] p-[10px] text-caption1 border border-neutral-10 rounded-[5px] placeholder:text-neutral-20 resize-none'
          placeholder='#키워드 입력(최대 5개)'
          ref={tagRef}
        />
        <div className='text-caption3 text-neutral-50'>
          * 앞 3개의 키워드는 업로드한 로그의 대표 키워드로 소개돼요.
        </div>
      </div>
      <div className='pb-5 border-b border-neutral-10'>
        <div className='text-title4 mb-[10px]'>공개 범위</div>
        <div className='flex w-full gap-5'>
          <Checkbox label='공개' />
          <Checkbox label='팔로워에게만 공개' />
          <Checkbox label='비공개' />
        </div>
      </div>
      <div className='w-full flex justify-end mt-[10px]'>
        <RoundButton className='px-[19px] py-[6px]' onClick={handleSubmit}>
          업로드
        </RoundButton>
      </div>
    </div>
  );
};

export default LogUploadModal;
