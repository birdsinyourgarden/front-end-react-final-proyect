import SenderHolidays from "../../components/senderHolidays/SenderHolidays";
import SenderAbsences from "../../components/senderAbsences/SenderAbsences";
import "../homeUser/HomeUser.css"

function HomeUser() {
    return (
        <div className="container">
            <div className="wrap">
                <SenderHolidays />
                <SenderAbsences />
            </div>
        </div>
    )
}

export default HomeUser;
