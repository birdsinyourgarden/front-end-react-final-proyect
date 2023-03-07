import { Alert, Figure } from "react-bootstrap"
import './Userpill.css'

function Userpill({name, image}) {
    return (
        <Alert variant="secondary" className="text-left light-green p-2">
            <Figure.Image
                src={image}
                className="round mt-2"
                width="40px" />
            <strong>  {name}</strong>
        </Alert>
    )
}

export default Userpill