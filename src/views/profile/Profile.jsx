import { Card, Container, Form, Button } from "react-bootstrap";
import "../profile/Profile.css";

const  Profile= () => {
    return (
        <Container className="p-5">
            <Card id="profileCard" className="text-start">
                <Card.Title className="text-center">
                <Form>
                    <Form.Group className="mb-3" controlId="employeePhoto">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="text" placeholder="Imagen del Empleado" />
                    </Form.Group>
                    <Form.Label>Nombre completo</Form.Label>
                        <p>Matilda Pepote Popeye</p>
                        <Form.Group>
                            <Form.Label>Estatus del Empleado</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tipo de Contrato del Empleado</Form.Label>
                        </Form.Group>
                </Form>
                
                </Card.Title>
            <Card.Body id="profileDetails">
            <Form>    
                <Form.Group className="mb-3" controlId="employeeDni">
                    <Form.Label>DNI/NIE</Form.Label>
                    <Form.Control type="text" placeholder="DNI o NIE del empleado" />
                </Form.Group>  
                <Form.Group className="mb-3" controlId="employeeStarting">
                    <Form.Label>Inicio del Contrato</Form.Label>
                        <input
                            type="date"
                            name="party"
                            min="2010-04-01"
                            max="2024-04-20"
                            required />
                        <span class="validity"></span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="employeeFinished">
                    <Form.Label>Fin del Contrato</Form.Label>
                        <input
                            type="date"
                            name="party"
                            min="2010-04-01"
                            max="2024-04-20"
                            required />
                        <span class="validity"></span>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="employeeEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Correo del empleado" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="employeePhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono del empleado" />
                </Form.Group>
            </Form>
            </Card.Body>
        </Card>
    </Container>
    );
};

export default Profile