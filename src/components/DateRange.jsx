import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = ({startDate, endDate, setDateRange}) => {
  return (
    <DatePicker
    selectsRange={true}
    startDate={startDate}
    endDate={endDate}
    dateFormat="dd/MM/yyyy"
    className="red-border ho items-center justify-center rounded-full border border-red-800 px-4 py-2"
    placeholderText="Date Posted"
    fixedHeight
    onChange={(update) => {
      setDateRange(update);
    }}
    withPortal
  />
  )
}

export default DateRange