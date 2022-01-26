import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import s from './DiaryDateCalendar.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function DiaryDateCalendar({ onClick }) {
  // console.log(onClick);

  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.calendar} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const handleChange = date => {
    setStartDate(date);
    onClick(date);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
    />
  );
}

export default DiaryDateCalendar;
