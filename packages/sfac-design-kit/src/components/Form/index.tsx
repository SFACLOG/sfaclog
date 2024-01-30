import { FormEventHandler, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const Form = ({ children, ...rest }: FormProps) => {
  return <form {...rest}>{children}</form>;
};
