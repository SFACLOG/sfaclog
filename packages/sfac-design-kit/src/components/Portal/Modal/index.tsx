import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { SquareButton } from '../../Button';
import { cn } from '../../../utils';

export interface ModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content?: string;
  isCancleBtn?: boolean;
  onClickConfirm?: MouseEventHandler<HTMLButtonElement>;
}

export interface ModalUIProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content?: string;
  isCancleBtn?: boolean;
  onClickConfirm?: MouseEventHandler<HTMLButtonElement>;
}

export const Modal = ({
  isOpen,
  setOpen,
  title,
  content,
  isCancleBtn,
  onClickConfirm,
}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalUI
      setOpen={setOpen}
      title={title}
      content={content}
      isCancleBtn={isCancleBtn}
      onClickConfirm={onClickConfirm}
    />,
    document.getElementById('modal') as HTMLDivElement,
  );
};

const ModalUI = ({
  setOpen,
  title,
  content,
  isCancleBtn = false,
  onClickConfirm,
}: ModalUIProps) => {
  return (
    <div
      className='absolute top-0 flex flex-col items-center w-full h-full backdrop-brightness-50 z-50'
      onClick={() => setOpen(prev => !prev)}
    >
      <main
        className='sticky top-[50vh] -translate-y-[50%] flex flex-col items-center justify-center w-[360px] h-[178px] bg-white rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.25)]'
        onClick={e => e.stopPropagation()}
      >
        <section className='flex-1 flex flex-col items-center justify-center gap-3'>
          <h2 className='flex justify-between text-body1_bold'>{title}</h2>
          <p className='text-body2'>{content}</p>
        </section>
        <section className='flex w-full'>
          {isCancleBtn && (
            <SquareButton
              className='rounded-t-none rounded-r-none'
              theme='disable'
              size='lg'
              onClick={() => setOpen(prev => !prev)}
            >
              취소
            </SquareButton>
          )}
          <SquareButton
            className={cn('rounded-t-none', isCancleBtn && 'rounded-l-none')}
            theme='primary'
            size='lg'
            onClick={onClickConfirm || (() => setOpen(prev => !prev))}
          >
            확인
          </SquareButton>
        </section>
      </main>
    </div>
  );
};
