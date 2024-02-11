'use client';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import Image from 'next/image';

import './style.css';

export interface CalendarProps {
  onChange: (date: string) => void;
}

const Calendar = ({ onChange }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const currentYear = new Date().getFullYear();
  const YEARS = Array.from({ length: 11 }, (_, i) => currentYear + i);

  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();

  const oneYearLater = new Date(currentDate);
  oneYearLater.setFullYear(currentDate.getFullYear() + 10);

  const handleChange = (date: Date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date.toISOString());
    }
  };

  return (
    <div className='relative w-full'>
      <DatePicker
        dateFormat='yyyy-MM-dd'
        formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
        showYearDropdown
        scrollableYearDropdown
        shouldCloseOnSelect
        yearDropdownItemNumber={100}
        minDate={new Date()}
        maxDate={oneYearLater}
        selected={selectedDate}
        calendarClassName=' bg-white text-white'
        dayClassName={d =>
          d.getDate() === selectedDate!.getDate()
            ? 'selectedDay'
            : ' rounded-full'
        }
        onChange={handleChange}
        className='flex items-center border border-neutral-40 rounded bg-white box-border w-full   text-center  text-btn text-neutral-100 h-[45px] '
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className='flex justify-between items-center bg-white text-black h-full '>
            <div>
              <span>{MONTHS[getMonth(date)]}</span>
              <select
                value={getYear(date)}
                className='border-none pr-5 cursor-pointer'
                onChange={({ target: { value } }) => changeYear(+value)}
              >
                {YEARS.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type='button'
                onClick={decreaseMonth}
                className='w-9 h-9 p-1 rounded-full ml-6'
                disabled={prevMonthButtonDisabled}
              >
                <Image
                  src='/images/project/ic_left_arrow.svg'
                  alt=''
                  width={22}
                  height={22}
                />
              </button>
              <button
                type='button'
                onClick={increaseMonth}
                className='w-9 h-9 p-1 rounded-full ml-6'
                disabled={nextMonthButtonDisabled}
              >
                <Image
                  src='/images/project/ic_right_arrow.svg'
                  alt=''
                  width={22}
                  height={22}
                />
              </button>
            </div>
          </div>
        )}
      />
      <Image
        src='/images/project/calendar.svg'
        alt=''
        width={15}
        height={15}
        className=' absolute top-4 right-10'
      />
    </div>
  );
};

export default Calendar;
