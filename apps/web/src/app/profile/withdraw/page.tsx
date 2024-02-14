'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Input, Modal, SelectBox, SquareButton } from 'sfac-design-kit';
import { getUser, login, withdrawal } from '@/api/user';

const SORT_OPTIONS = [
  {
    value: 'UX/UI가 불편해서',
    label: 'UX/UI가 불편해서',
  },
  {
    value: '잘 사용하지 않아서',
    label: '잘 사용하지 않아서',
  },
  {
    value: '개인정보가 걱정돼서',
    label: '개인정보가 걱정돼서',
  },
  {
    value: '중복 계정이 존재해서',
    label: '중복 계정이 존재해서',
  },
  {
    value: '기타',
    label: '기타',
  },
];

const Withdraw = () => {
  const router = useRouter();
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const user = useMemo(() => getUser(), [getUser]);

  useEffect(() => {
    if (!user?.id) return router.replace('/login');
  }, [user?.id]);

  const handleConfirmWithdraw = async () => {
    if (!passwordRef.current) return;

    try {
      await login(user?.email, passwordRef.current.value);
      await withdrawal(user?.id);
    } catch (e) {
      setIsErrorPassword(true);
    } finally {
      setIsOpenAlert(prev => !prev);
      setIsOpenModal(prev => !prev);
    }
  };

  const handleConfirmAlert = () => {
    setIsOpenAlert(prev => !prev);

    if (isErrorPassword) return;

    return router.replace('/');
  };

  return (
    <main className='relative max-w-[700px] mx-auto bg-white rounded-[40px]'>
      <div className='rlative flex flex-col gap-[55px] w-full px-[160px] py-[60px]'>
        <button
          className='absolute top-[61px] left-[66px] px-2'
          onClick={() => router.back()}
        >
          <Image
            src='/images/left_arrow.svg'
            width={15}
            height={28}
            alt='back'
          />
        </button>
        <h2 className='self-center text-h2'>회원 탈퇴</h2>
        <section className='flex flex-col gap-[15px] w-full text-caption1'>
          <p className='text-title4'>주의하세요!</p>
          <p>탈퇴시 삭제된 정보는 복구가 불가능합니다.</p>
          <p>
            불편하셨던 점이나 불만사항을 알려주시면 적극 반영하여 고객님의
            불편함을 해결해드리도록 노력하겠습니다.
          </p>
        </section>
        <div className='relative'>
          <p className='text-title4 mb-[15px]'>무엇이 불편하셨나요?</p>
          <SelectBox
            className='absolute w-full min-h-[50px]'
            title='정렬방식'
            options={SORT_OPTIONS}
          />
        </div>
        <Input
          className='mt-[50px]'
          type='password'
          label='비밀번호 입력'
          placeholder='현재 비밀번호를 입력해주세요.'
          required
          status={isErrorPassword ? 'error' : 'normal'}
          description={
            isErrorPassword ? '비밀번호를 재입력 해주세요.' : undefined
          }
          ref={passwordRef}
        />
        <SquareButton
          theme='primary'
          size='lg'
          onClick={() => setIsOpenModal(prev => !prev)}
        >
          탈퇴하기
        </SquareButton>
        <Modal
          isOpen={isOpenModal}
          setOpen={setIsOpenModal}
          title='정말 탈퇴하시겠습니까?'
          content='회원님의 정보가 삭제됩니다.'
          isCancleBtn
          onClickConfirm={handleConfirmWithdraw}
        />
        <Modal
          isOpen={isOpenAlert}
          setOpen={setIsOpenAlert}
          title={isErrorPassword ? '회원 탈퇴 ❌' : '회원 탈퇴 ✅'}
          content={
            isErrorPassword
              ? '비밀번호가 일치하지 않습니다.'
              : '회원 탈퇴가 완료되었습니다.'
          }
          onClickConfirm={handleConfirmAlert}
        />
      </div>
    </main>
  );
};

export default Withdraw;
