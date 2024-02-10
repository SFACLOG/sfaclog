import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export interface ModalUIProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal = ({ isOpen, setOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalUI setOpen={setOpen}>{children}</ModalUI>,
    document.getElementById('modal') as HTMLDivElement,
  );
};

const ModalUI = ({ setOpen, children }: ModalUIProps) => {
  return (
    <div
      className='absolute top-0 flex flex-col items-center w-full h-full backdrop-brightness-50 z-50'
      onClick={() => setOpen(prev => !prev)}
    >
      <main
        className={
          'sticky top-[50vh] -translate-y-[50%] flex flex-col items-center justify-center min-w-[40dvw] bg-white rounded-[5px] shadow-lg'
        }
        onClick={e => e.stopPropagation()}
      >
        {children}
      </main>
    </div>
  );
};
