import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import s from './DiaryDateCalendar.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function DiaryDateCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.calendar} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
    />
  );
}

export default DiaryDateCalendar;
