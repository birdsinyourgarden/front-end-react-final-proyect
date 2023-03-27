import { Card, Container, Form, Button } from "react-bootstrap";
import "../profile/Profile.css";

const  Profile= () => {
    return (

        <div className="profileWrapper">
            <div>
                <p className="profTitle">Mi Perfil</p>
            </div>
            <Container id="profileTemplate" className="p-5">
                <Card id="profileCard" className="text-start">
                    <Card.Title id="profileHeader" className="text-center">
                        <div id="photoContainer">
                            <img id="employPhoto" src="https://res.cloudinary.com/dkbwmuo7n/image/upload/v1679689850/sierri.jpg" alt="" />
                        </div>
                        <div id="detailsContainer">
                            <Form className="mainDetails">    
                                <Form.Group id="detailsHeader" className="mb-3" controlId="employeeDni">
                                    <Form.Label id="detailTitle">Nombre:</Form.Label>
                                    <Form.Label id="fieldContent">María Pepote Popeye</Form.Label>
                                </Form.Group>
                                <Form.Group id="detailsHeader" className="mb-3" controlId="employeeDni">
                                    <Form.Label id="detailTitle">Estatus actual:</Form.Label>
                                    <Form.Label id="fieldContent">Activo</Form.Label>
                                </Form.Group>
                            </Form> 
                        </div>
                    </Card.Title>
                <Card.Body id="profileDetails">
                <Form>    
                    <Form.Group id="detailFields" className="mb-3" controlId="employeeDni">
                        <Form.Label id="fieldTitle">DNI/NIE:</Form.Label>
                        <Form.Label id="fieldContent">25587562P</Form.Label>
                    </Form.Group>
                    <Form.Group id="detailFields" className="mb-3" controlId="employeeDni">
                                    <Form.Label id="fieldTitle">Tipo de Contrato:</Form.Label>
                                    <Form.Label id="fieldContent">Temporal</Form.Label>
                                </Form.Group>
                    <Form.Group id="detailFields" className="mb-3" controlId="employeeDni">
                        <Form.Label id="fieldTitle">Sector</Form.Label>
                        <Form.Label id="fieldContent">Jardinería</Form.Label>
                    </Form.Group>    
                    <Form.Group id="detailFields" className="mb-3" controlId="employeeStarting">
                        <Form.Label id="fieldTitle">Inicio del Contrato</Form.Label>
                        <Form.Label id="fieldContent">01/01/2023</Form.Label>
                        <Form.Label id="fieldTitle">Fin del Contrato</Form.Label>
                        <Form.Label id="fieldContent">01/05/2023</Form.Label>
                    </Form.Group>   
                    <Form.Group id="detailFields" className="mb-3" controlId="employeeEmail">
                        <Form.Label id="fieldTitle">Correo</Form.Label>
                        <Form.Label id="fieldContent">jdjd@gg.com</Form.Label>
                    </Form.Group>
                    <Form.Group id="detailFields" className="mb-3" controlId="password">
                        <Form.Label id="fieldTitle">Contraseña</Form.Label>
                        <Form.Label id="fieldContent">kdkjlds_2255</Form.Label>
                    </Form.Group>
                    <Form.Group id="detailFields" className="mb-3" controlId="employeePhone">
                        <Form.Label id="fieldTitle">Telefono</Form.Label>
                        <Form.Label id="fieldContent">665955558</Form.Label>
                    </Form.Group>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>
    );
};

export default Profile