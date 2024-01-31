import { ReactNode } from 'react';
import './typography.css';

export interface HeaderBaseProps {
  children: ReactNode;
  size?: number;
}

export interface TextBaseProps {
  children: ReactNode;
  size?: number;
  weight?: number;
}

export const HeaderBase = ({ children, size = 28 }: HeaderBaseProps) => {
  return (
    <p className='typo' style={{ fontSize: size }}>
      {children}
    </p>
  );
};

export const TextBase = ({
  children,
  size = 16,
  weight = 400,
}: TextBaseProps) => {
  return <p style={{ fontSize: size, fontWeight: weight }}>{children}</p>;
};
