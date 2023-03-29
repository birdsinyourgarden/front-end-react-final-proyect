import { Card, Container, Form, Button, FormGroup } from "react-bootstrap";
import "../absences/Absences.css";

const  Absences= () => {
    return (
    <Container id="pageTitle" className="p-5">
            <h1>Actualizar Ausencia</h1>   
            
        <Card id="dataBox">
            <Card.Title id="boxTitle" className="title">  
            <div>
                <table id="userData" className="userName">
                    <tr><th>Sierri Pérez</th></tr>
                </table>
            </div>

            <div>
                <table id="checkDate" className="dateAbscens">
                <tr><td>Días de Petición: 23/03/2023 - 25/03/2023</td></tr>
                </table>
                </div>   
                </Card.Title>

                <Form.Group  controlId="event"> 
                    <Form.Label id="eventTitle" class="event">Evento</Form.Label>
                        <Form.Select id="listAbscens" className="list" controlId="abscensSector">
                            <option value="1">Ausencia Autorizada - Enfermedad</option>
                            <option value="2">Cita Médica</option>
                            <option value="3">Acompañamiento al médico de familiares adultos</option>
                            <option value="4">Acompañamiento al médico familiares menores</option>
                            <option value="5">Hospitalización de familares</option>
                            <option value="6">Otros</option>
                            <option value="7">Exámenes</option>
                            <option value="8">Mudanzas</option>
                            <option value="9">Baja IT</option>
                            <option value="10">Baja Maternidad</option>
                            <option value="11">Maternidad: 2 semanas extras retribuidas</option>
                            <option value="12">Matrernidad: 2 semanas extras sin retribución</option>
                            <option value="13">Baja Paternidad</option>
                            <option value="14">Periodo de lactancia</option>
                            <option value="15">Matrimonio o inclución registro pareja de Hecho</option>
                            <option value="16">Fallecimiento Familiar</option>
                            <option value="17">Horas fuera del horario habitual</option>
                            <option value="18">Recuperación horas fuera del horario habitual</option>
                            <option value="19">Horas Sindicales</option>
                            <option value="20">Recuperación horas sindicales</option>
                            <option value="21">Jornada fuera del centro de trabajo</option>
                        </Form.Select>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label id="descriptionTitle">Motivo</Form.Label>
                </Form.Group>

                <Form.Group className="Description">
                        <textarea id="causeDescription" type="text" placeholder="Descripción de la ausencia" rows="5"/>
                </Form.Group>
                                
                <Form.Group id="justificationTitle"className="mb-3" controlId="justification">
                    <Form.Label>Justificante</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Select id="choice" controlId="justificationStatus">
                        <option value="true">Justificado</option>
                        <option value="false">Injustificado</option>
                        </Form.Select>
                    </Form.Group>
                                    
                <button id="buttonDelete" type="button" class="btn btn-danger">Volver</button>


            <button id="btnGuardar" class="btn btn-primary btn-success me-md-2" type="button">Guardar</button>
            <button id="btnLimpiar" class="btn btn-primary" type="button">Limpiar</button>

            </Card>      
            </Container>
);
};

export default Absences;