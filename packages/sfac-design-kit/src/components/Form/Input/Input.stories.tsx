import { useRef, useState } from 'react';
import { Input } from '.';

export default {
  title: 'FORMS/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Label',
    required: true,
    placeholder: 'placeholder',
    description: 'description',
    styles: 'w-96',
  },
};

export const Success = {
  args: {
    status: 'success',
    label: 'Label',
    required: true,
    placeholder: 'placeholder',
    description: 'description',
    styles: 'w-96',
  },
};

export const Error = {
  args: {
    status: 'error',
    label: 'Label',
    required: true,
    placeholder: 'placeholder',
    description: 'description',
    styles: 'w-96',
  },
};

export const All = () => (
  <div className='flex flex-col gap-4'>
    <Input placeholder='placeholder' />
    <Input placeholder='placeholder' label='Label + Input' />
    <Input placeholder='placeholder' label='Label + Required Input' required />
    <Input
      placeholder='placeholder'
      label='Label + Input + Description'
      description='description'
    />
  </div>
);

export const Validation = () => {
  const passwordRef1 = useRef<HTMLInputElement>(null);
  const passwordValidationRef = useRef<HTMLInputElement>(null);
  const [inputStatus, setInputStatus] = useState<
    'normal' | 'success' | 'error'
  >('normal');
  const [inputDescription, setInputDescription] = useState<string>();

  const handleOnChange = () => {
    if (passwordRef1.current && passwordValidationRef.current) {
      setInputStatus(() => {
        if (
          passwordRef1.current?.value === passwordValidationRef.current?.value
        ) {
          setInputDescription(undefined);
          return 'success';
        } else {
          setInputDescription('비밀번호가 일치하지 않습니다.');
          return 'error';
        }
      });
    }
  };

  return (
    <div className='flex flex-col gap-4 w-96'>
      <Input
        type='password'
        minLength={8}
        label='비밀번호'
        required
        placeholder='(필수) 비밀번호 입력'
        ref={passwordRef1}
      />
      <Input
        type='password'
        label='비밀번호 확인'
        required
        placeholder='(필수) 비밀번호 입력'
        description={inputDescription || undefined}
        status={inputStatus}
        onChange={handleOnChange}
        ref={passwordValidationRef}
      />
    </div>
  );
};
