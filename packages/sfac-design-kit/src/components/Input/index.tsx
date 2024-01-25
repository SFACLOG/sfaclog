import './input.css';

export interface InputProps {
  theme?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
}

export const Input = ({ theme = 'neutral', size = 'medium' }: InputProps) => {
  return <input className={`input ${theme} ${size}`} />;
};
