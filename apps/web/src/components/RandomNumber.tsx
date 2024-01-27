'use client';
import { useState } from 'react';

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber.toString().padStart(6, '0');
};

export default generateRandomNumber;
