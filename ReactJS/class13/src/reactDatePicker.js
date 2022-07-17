import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log('startDate',startDate);
  return (
    <>
    <DatePicker
      showTimeSelect
      dateFormat="Pp"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    Your selected Date : {startDate.toDateString()}
    </>
  );
};
export default DatePickerComponent