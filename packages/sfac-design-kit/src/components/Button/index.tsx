import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  theme?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';

  onClick?: () => void;
}

const buttonOption = {
  theme: {
    primary: 'text-blue-500 border border-blue-500 hover:bg-blue-300',
    neutral: 'text-gray-400 border border-gray-400 hover:bg-green-500',
  },
  size: {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  },
};

import { Button as RDButton } from '@radix-ui/themes';

export const RDTestButton = () => {
  return <RDButton className={'bg-red-600'}>button</RDButton>;
};

export const Button = ({
  theme = 'neutral',
  size = 'medium',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${buttonOption['theme'][theme]} ${buttonOption['size'][size]} bg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BarButton = ({
  theme = 'primary',
  size = 'small',

  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`button ${theme} ${size} barbtn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
