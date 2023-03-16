import { Sender } from "../../components/sender/Sender";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "../homeUser/HomeUser.css"

function HomeUser() {

    return (
        <div className="container" style={{ "max-width": "500px" }}>
            <Sender />
            <UploadWidget />
        </div>
    )
}

export default HomeUser