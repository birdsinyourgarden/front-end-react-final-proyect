import { Card, Container, Form, Button, FormGroup } from "react-bootstrap";
import "../absences/Absences.css";

const  Absences= () => {
   return (
   <Container className="p-5">
         <h1>Actualizar Ausencia</h1>   
         
      <Card className="databox">
         <Card.Title className="title">  
            <div>
               <table className="userName">
                  <tr><th>Manuel Ferrero Rocher</th></tr>
               </table>
            </div>
   
            <div>
               <table className="dateAbscens">
               <tr><td>Dias de Petición. 23/03/2023 - 25/03/2023</td></tr>
               </table>
               </div>   
               </Card.Title>

               <Form.Group  controlId="event"> 
                  <Form.Label class="event">Evento</Form.Label>
                     <Form.Select className="list" controlId="abscensSector">
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
                           <option value="11">Maternidad: 2 semanas extras retribuidas Arrabal</option>
                           <option value="12">Matrernidad: 2 semanas extras sin retribición</option>
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
                  <Form.Label class="DescriptionTitle">Descripcion</Form.Label>
               </Form.Group>

               <Form.Group class="Description">
                     <textarea type="text" placeholder="Description de Ausencias" rows="5"/>
               </Form.Group>
                              
               <Form.Group className="mb-3" controlId="justification">
                  <Form.Label class="justificationTitle">Justificante</Form.Label>
                  </Form.Group>
                  <Form.Group>
                     <Form.Select className="choice" controlId="justificationStatus">
                        <option value="true">Justificado</option>
                        <option value="false">Acusasion</option>
                     </Form.Select>
                  </Form.Group>
                                 
   <div class="buttons">
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">                     
            <button type="button" class="btn btn-danger">Borrar</button>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary btn-success me-md-2" type="button">Cancelada</button>
            <button class="btn btn-primary" type="button">Rechazada</button>
      </div>
   </div>
      </Card>      
         </Container>
);
};

export default Absences;


