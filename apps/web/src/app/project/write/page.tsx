'use client';
import { RoundButton, SelectBox, SelectChipBox } from 'sfac-design-kit';
import GoBack from '../(components)/GoBack';
import Calendar from '../(components)/Calendar';
import { useState } from 'react';
import Image from 'next/image';

const page = () => {
  const process = [
    { label: '온라인', value: 'online' },
    { label: '오프라인', value: 'offline' },
    { label: '온라인/오프라인', value: 'online-offline' },
  ];
  const position = [
    { label: '프론트엔드', value: 'frontend' },
    { label: '백엔드', value: 'backend' },
    { label: '디자이너', value: 'designer' },
    { label: 'IOS', value: 'IOS' },
    { label: 'Android', value: 'Android' },
    { label: '데브옵스', value: 'devops' },
  ];
  const projectstatus = [
    { label: '기획', value: 'plan' },
    { label: '디자인', value: 'design' },
    { label: '기획/디자인', value: 'plan/design' },
  ];

  const recruit = [
    { label: '1명', value: '1' },
    { label: '2명', value: '2' },
    { label: '3명', value: '3' },
    { label: '4명', value: '4' },
    { label: '5명', value: '5' },
    { label: '6명', value: '6' },
    { label: '7명', value: '7' },
    { label: '8명', value: '8' },
    { label: '9명', value: '9' },
    { label: '10명 이상', value: '10up' },
  ];

  const [images, setImages] = useState<File[]>([]); // 이미지 파일을 저장할 상태
  const [previews, setPreviews] = useState<string[]>([]); // 이미지 파일의 프리뷰를 저장할 상태

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages: File[] = [...images];
    const newPreviews: string[] = [...previews];

    for (let i = 0; i < e.target.files!.length; i++) {
      const file: File = e.target.files![i];
      // 이미지 파일 3개로 제한
      if (newImages.length < 3) {
        // 이벤트객체의 파일을 newImages에 담기
        newImages.push(file);
        // 파일리더 객체 생성
        const reader: FileReader = new FileReader();
        // 파일 읽어온 후 실행되는 콜백함수
        reader.onload = (e: ProgressEvent<FileReader>) => {
          // 읽어온 값을 갱신하기
          newPreviews.push(e.target!.result as string);
          setPreviews(newPreviews);
        };
        // 파일 객체를 읽어 base64 형태의 문자열로 변환
        reader.readAsDataURL(file);
      }
    }
    setImages(newImages);
  };

  return (
    <div className='mt-[50px] max-w-[780px] mx-auto'>
      <GoBack />
      <RoundButton className='bg-primary-100 py-[15px]'>
        스펙로그 프로젝트
      </RoundButton>
      <div className=' inline-flex justify-center items-center gap-[10px] mt-[26.5px]'>
        <div className='flex justify-center items-center w-8 h-8 p-[10px] gap-[10px] rounded-full bg-primary-70 text-subtitle text-white'>
          1
        </div>
        <p className=' text-h2'>프로젝트 기본 정보를 입력해주세요.</p>
      </div>
      <div className=' border border-neutral-10 mt-5 mb-[25px]'></div>
      <div className='mb-[70px]'>
        <div className='flex gap-[20px] w-full mb-[30px]'>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>진행방식</label>
            <SelectBox
              title='전체'
              options={process}
              className=' border-neutral-40 text-neutral-100 text-btn'
            />
          </div>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>모집 포지션</label>
            <SelectBox title='전체' options={position} />
          </div>
        </div>
        <div className='flex gap-[20px] w-full mb-[30px]'>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>기술 스택</label>
            <SelectChipBox title='제목' />
          </div>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>모집 인원</label>
            <SelectBox title='인원미정' options={recruit} />
          </div>
        </div>
        <div className='flex gap-[20px] w-full'>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>프로젝트 상태</label>
            <SelectBox title='프로젝트 상태' options={projectstatus} />
          </div>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>모집 마감일</label>
            <Calendar />
          </div>
        </div>
      </div>
      <div className=' inline-flex justify-center items-center gap-[10px] mt-[26.5px]'>
        <div className='flex justify-center items-center w-8 h-8 p-[10px] gap-[10px] rounded-full bg-primary-70 text-subtitle text-white'>
          2
        </div>
        <p className=' text-h2'>프로젝트를 소개해주세요.</p>
      </div>
      <div className=' border border-neutral-10 mt-5 mb-[50px]'></div>
      <div className='w-[645px]  mx-auto'>
        <div className='mb-[70px] flex flex-col justify-center'>
          <input
            type='text'
            placeholder='제목을 입력하세요'
            className=' text-h1 border-none placeholder:text-neutral-20 w-full'
          />
          <div className=' border border-neutral-10 my-5 '></div>
          <input
            type='text'
            placeholder='어떤 프로젝트인가요? 설명해주세요!'
            className='placeholder:text-neutral-20 w-full mb-[70px]'
          />
          <div>
            {previews?.map((preview, index) => (
              <div key={index} className='mb-5 rounded-[20px]'>
                <Image
                  src={preview}
                  width={645}
                  height={226}
                  alt={`${preview}-${index}`}
                  className=' max-w-[645px] max-h-[226px]  rounded-[20px]'
                />
              </div>
            ))}
          </div>
          <div className='relative'>
            <input
              type='file'
              id='inputFile'
              accept='image/*'
              multiple
              onChange={handleImageChange}
              className='hidden'
            />
            <label
              htmlFor='inputFile'
              className=' w-full flex bg-neutral-5 hover:bg-neutral-20 rounded-[20px]'
            >
              <span className='h-[226px] rounded-[20px] w-full flex justify-center items-center text-[30px] text-neutral-40'>
                +
              </span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className=' inline-flex justify-center items-center gap-[10px] mt-[26.5px]'>
          <div className='flex justify-center items-center w-8 h-8 p-[10px] gap-[10px] rounded-full bg-primary-70 text-subtitle text-white'>
            3
          </div>
          <p className=' text-h2'>어떤 성향의 팀원을 찾으시나요?</p>
        </div>
        <div className=' border border-neutral-10 mt-5 mb-[50px]'></div>
        <div className=' flex flex-col items-center justify-center '>
          <textarea
            placeholder='우리 팀에는 어떤 팀원이 필요한가요?'
            className=' w-[580px] h-[346px] px-[51px] py-11 placeholder:text-neutral-50 text-body1  bg-neutral-10 mb-[70px] rounded-[5px]'
          />
          <RoundButton>프로젝트 업로드</RoundButton>
        </div>
      </div>
    </div>
  );
};

export default page;
