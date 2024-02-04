import { useState } from 'react';
import { Modal } from '.';

export default {
  title: 'PORTAL/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export const All = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  const toggleModal1 = () => {
    setIsOpenModal1(prev => !prev);
  };

  const toggleModal2 = () => {
    setIsOpenModal2(prev => !prev);
  };

  return (
    <div className='flex gap-4'>
      <button className='p-4 bg-cyan-500' onClick={toggleModal1}>
        모달 1
      </button>
      <button className='p-4 bg-cyan-500' onClick={toggleModal2}>
        모달 2
      </button>
      <Modal
        isOpen={isOpenModal1}
        setOpen={setIsOpenModal1}
        title='존재하지 않는 로그'
        content='해당 로그가 존재하지 않습니다.'
        isCancleBtn={true}
      />
      <Modal
        isOpen={isOpenModal2}
        setOpen={setIsOpenModal2}
        title='존재하지 않는 로그'
        content='해당 로그가 존재하지 않습니다.'
      />
    </div>
  );
};
