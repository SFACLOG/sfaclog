import { ReactNode } from 'react';
import './input.scss';

export interface InputProps {
  children: ReactNode;
  theme?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
}

export const Input = ({
  theme = 'neutral',
  size = 'medium',
  children,
}: InputProps) => {
  return <input className={`input ${theme} ${size}`}>{children}</input>;
};
