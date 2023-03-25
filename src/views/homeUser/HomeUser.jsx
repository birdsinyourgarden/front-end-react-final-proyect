import SenderHolidays from "../../components/senderHolidays/SenderHolidays";
import SenderAbsences from "../../components/senderAbsences/SenderAbsences";
import "../homeUser/HomeUser.css";
import LocalCalendar from '../../components/calendar/Calendar';

function HomeUser() {
  return (
    <div className="container">
      <div className="width mx-auto p-4">
        <LocalCalendar compact />
      </div>
      <div className="wrap">
        <SenderHolidays />
        <SenderAbsences />
      </div>
    </div>
  );
}

export default HomeUser;
