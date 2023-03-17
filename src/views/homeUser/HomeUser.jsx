import { SenderHolidays } from "../../components/senderHolidays/SenderHolidays";
import { SenderAbsences } from "../../components/senderAbsences/SenderAbsences";
import "../homeUser/HomeUser.css"

function HomeUser() {

    return (
        <div className="container">
            <div></div>
            <div className="wrap">
                <SenderHolidays style={{ maxWidth: "500px" }} />
                <SenderAbsences style={{ maxWidth: "500px" }} />
            </div>
        </div>
    )
}

export default HomeUser