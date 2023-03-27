import { Card, Container, Form, Button } from "react-bootstrap";
import "../profile/Profile.css";

const  Profile= () => {
    return (
        <Container className="p-5">
            <Card id="profileCard" className="text-start">
                <Card.Title id="profileHeader" className="text-center">
                    <div id="photoContainer">
                        <img id="employPhoto" src="https://res.cloudinary.com/dkbwmuo7n/image/upload/v1679689850/sierri.jpg" alt="" />
                    </div>
                    <div id="detailsContainer">
                        <div id="nameDetails">
                            <p>Nombre: Maria Pepote Popeye</p>
                        </div>
                        <div>
                            <p>Estatus actual: Habilitado</p>
                        </div>
                        <div>
                            <p>Tipo de Contrato: Permanente</p>
                        </div>
                    </div>
                </Card.Title>
            <Card.Body id="profileDetails">
            <Form>    
                <Form.Group className="mb-3" controlId="employeeDni">
                    <Form.Label id="fieldTitle">DNI/NIE</Form.Label>
                    <p>25587562P</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="employeeDni">
                    <Form.Label id="fieldTitle">Sector</Form.Label>
                    <p>Jardinería</p>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="employeeStarting">
                    <Form.Label id="fieldTitle">Inicio del Contrato</Form.Label>
                    <p>01/01/2023</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="employeeFinished">
                    <Form.Label id="fieldTitle">Fin del Contrato</Form.Label>
                    <p>01/05/2023</p>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="employeeEmail">
                    <Form.Label id="fieldTitle">Correo</Form.Label>
                    <p>jdjd@gg.com</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label id="fieldTitle">Password</Form.Label>
                    <p>kdkjlds_2255</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="employeePhone">
                    <Form.Label id="fieldTitle">Telefono</Form.Label>
                    <p>665955558</p>
                </Form.Group>
            </Form>
            </Card.Body>
        </Card>
    </Container>
    );
};

export default Profile