import SenderHolidays from "../../components/senderHolidays/SenderHolidays";
import SenderAbsences from "../../components/senderAbsences/SenderAbsences";
import "../homeUser/HomeUser.css"
import UserCalendar from "../../components/userCalendar/UserCalendar";

function HomeUser() {
        return (
        <div className="container">
                <UserCalendar />
            <div className="wrap">
                <SenderHolidays />
                <SenderAbsences />
            </div>
        </div>
        )
    }

export default HomeUser;
