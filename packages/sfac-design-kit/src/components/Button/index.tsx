import { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
  children: ReactNode;
  theme?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';

  onClick?: () => void;
}

export const Button = ({
  theme = 'neutral',
  size = 'medium',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`button ${theme} ${size}`}
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
