'use client';
import { Interest, Proposal } from '@/types/user';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  username: string;
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  interests?: Interest;
  proposals?: Proposal;
}

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    interests: {},
    proposals: {},
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
