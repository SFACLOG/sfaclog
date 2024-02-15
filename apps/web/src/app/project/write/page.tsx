'use client';
import {
  RoundButton,
  SelectBox,
  SelectBoxOption,
  SelectBoxPosition,
  SelectChipBox,
} from 'sfac-design-kit';
import GoBack from '../(components)/GoBack';
import Calendar from '../(components)/Calendar';
import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { getUser, isValidUser } from '@/api/user';
import { getLatestProjectById, postProject } from '@/api/project';
import { getMeeting, postMeeting } from '@/api/meeting';
import { getPositionByName, postPosition } from '@/api/position';
import { getSkillByName, postSkill } from '@/api/skill';
import { useRouter } from 'next/navigation';

const formData = new FormData();

const page = () => {
  const [selectedProcess, setSelectedProcess] = useState<string>('');
  const [selectedPosition, setSelectedPosition] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedDeadline, setSelectedDeadline] = useState<string>('');

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [preference, setPreference] = useState<string>('');

  const router = useRouter();

  const getUserId = getUser()?.id;

  const isAnyFieldEmpty =
    !selectedProcess ||
    selectedPosition.length === 0 ||
    selectedSkill.length === 0 ||
    !selectedSize ||
    !selectedStatus ||
    !selectedDeadline ||
    !title ||
    !content ||
    images.length === 0;

  const handleProcessChange = (selectedOption: SelectBoxOption) => {
    setSelectedProcess(selectedOption.value);
  };

  const handlePositionChange = (selectedOptions: SelectBoxOption[]) => {
    const selectedPosition = selectedOptions.map(option => option.value);
    setSelectedPosition(selectedPosition);
  };

  const handleSkillChange = (selectedOptions: SelectBoxOption[]) => {
    const selectedSkills = selectedOptions.map(option => option.label);
    setSelectedSkill(selectedSkills);
  };

  const handleSizeChange = (selectedOption: SelectBoxOption) => {
    setSelectedSize(selectedOption.value);
  };

  const handleStatusChange = (selectedOption: SelectBoxOption) => {
    setSelectedStatus(selectedOption.value);
  };

  const handleDeadlineChange = (date: string) => {
    if (date) {
      const formattedDate = date.slice(0, 19).replace('T', ' ') + '.000Z';
      setSelectedDeadline(formattedDate);
    } else {
      setSelectedDeadline('');
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePreferenceChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPreference(e.target.value);
  };

  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, []);

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

  const handleDeletePreview = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...previews];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  const handleProjectUpload = async () => {
    if (isAnyFieldEmpty) {
      return;
    }
    try {
      const projectData = {
        id: '',
        size: selectedSize,
        status: selectedStatus,
        deadline: selectedDeadline ? selectedDeadline : null,
        title,
        content,
        images,
        user_id: getUserId,
        preference,
      };

      await postProject(projectData);
      const projectId = await getLatestProjectById(getUserId);
      const meetingId = await getMeeting(selectedProcess);
      const positionId = await getPositionByName(selectedPosition);
      const skillId = await getSkillByName(selectedSkill);
      await postMeeting({
        project_id: projectId.id,
        meeting_id: meetingId.id,
      });
      for (const position of positionId) {
        await postPosition({
          project_id: projectId.id,
          position_id: position.id,
        });
      }

      for (const skill of skillId) {
        await postSkill({
          project_id: projectId.id,
          skill_id: skill.id,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }

    router.push('/project');
  };

  const process = [
    { label: '온라인', value: '온라인' },
    { label: '오프라인', value: '오프라인' },
    { label: '온라인/오프라인', value: '온라인/오프라인' },
  ];
  const position = [
    { label: '프론트엔드', value: '프론트엔드' },
    { label: '백엔드', value: '백엔드' },
    { label: '디자이너', value: '디자이너' },
    { label: 'IOS', value: 'IOS' },
    { label: 'Android', value: 'Android' },
    { label: '데브옵스', value: '데브옵스' },
  ];
  const projectstatus = [
    { label: '기획', value: '기획' },
    { label: '디자인', value: '디자인' },
    { label: '기획/디자인', value: '기획/디자인' },
  ];

  const recruit = [
    { label: '1명', value: '1명' },
    { label: '2명', value: '2명' },
    { label: '3명', value: '3명' },
    { label: '4명', value: '4명' },
    { label: '5명', value: '5명' },
    { label: '6명', value: '6명' },
    { label: '7명', value: '7명' },
    { label: '8명', value: '8명' },
    { label: '9명', value: '9명' },
    { label: '10명 이상', value: '10명 이상' },
  ];

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
              className='border-neutral-40 text-neutral-100 text-btn'
              onChange={handleProcessChange}
            />
          </div>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>모집 포지션</label>
            <SelectBoxPosition
              title='전체'
              options={position}
              className='border-neutral-40 text-neutral-100 text-btn'
              onChange={handlePositionChange}
            />
          </div>
        </div>
        <div className='flex gap-[20px] w-full mb-[30px]'>
          <div className='flex flex-col w-full  gap-[10px] relative'>
            <label className=' text-title4 '>기술 스택</label>
            <SelectChipBox
              title='제목'
              onChange={handleSkillChange}
              className=' border-neutral-40'
            />
          </div>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>모집 인원</label>
            <SelectBox
              title='인원미정'
              options={recruit}
              className='border-neutral-40 text-neutral-100 text-btn'
              onChange={handleSizeChange}
            />
          </div>
        </div>
        <div className='flex gap-[20px] w-full'>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>프로젝트 상태</label>
            <SelectBox
              title='프로젝트 상태'
              options={projectstatus}
              className='border-neutral-40 text-neutral-100 text-btn'
              onChange={handleStatusChange}
            />
          </div>
          <div className='flex flex-col w-full  gap-[10px]'>
            <label className=' text-title4'>모집 마감일</label>
            <Calendar onChange={handleDeadlineChange} />
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
            onChange={handleTitleChange}
          />
          <div className=' border border-neutral-10 my-5 '></div>
          <textarea
            ref={textRef}
            onInput={handleResizeHeight}
            placeholder='어떤 프로젝트인가요? 설명해주세요!'
            className='placeholder:text-neutral-20 w-full mb-[70px] p-5 border-none resize-none overflow-hidden'
            onChange={handleContentChange}
          />

          <div>
            {previews?.map((preview, index) => (
              <div key={index} className='mb-5 rounded-[20px] relative'>
                <Image
                  src={preview}
                  width={645}
                  height={226}
                  alt={`${preview}-${index}`}
                  className=' max-w-[645px] max-h-[226px]  rounded-[20px]'
                />
                <button
                  onClick={() => handleDeletePreview(index)}
                  className='absolute top-0 right-0 m-2 px-3 py-1 text-neutral-40'
                >
                  X
                </button>
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
            ref={textRef}
            onInput={handleResizeHeight}
            placeholder='우리 팀에는 어떤 팀원이 필요한가요?'
            className=' w-[580px] h-[346px] px-[51px] py-11 placeholder:text-neutral-50 text-body1  bg-neutral-10 mb-[70px] rounded-[5px] resize-none'
            onChange={handlePreferenceChange}
          />
          <RoundButton
            disabled={isAnyFieldEmpty}
            theme={`${isAnyFieldEmpty ? 'disable' : 'primary'}`}
            onClick={handleProjectUpload}
          >
            프로젝트 업로드
          </RoundButton>
        </div>
      </div>
    </div>
  );
};

export default page;
