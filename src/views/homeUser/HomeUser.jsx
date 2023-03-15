import { Sender } from "../../components/sender/Sender";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "../homeUser/HomeUser.css"

function HomeUser(){

    return (
        <div>
            <Sender />
            <UploadWidget />
        </div>
    )
}

export default HomeUser