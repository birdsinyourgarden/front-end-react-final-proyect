import { Card, Container, Form, Button, FormGroup } from "react-bootstrap";
import "../absences/Absences.css";

const  Absences= () => {
   return (
      <Container className="p-5">
         <Card className="text-start">
             <Card.Body>
               <Card.Title className="text-center">
               <h1>Actualizar Ausencia</h1> 
               <div>
               <table className="userName">
                     <tr><th>Montse Martos</th></tr>
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
                           <option value="Vacaciones">Vacaciones</option>
                           <option value="Ausencia Autorizada - Enfermedad">Ausencia Autorizada - Enfermedad</option>
                           <option value="Cita Médica">Cita Médica</option>
                           <option value="Acompañamiento médico Familiar">Acompañamiento médico Familiar</option>
                           <option value="Baja IT">Baja IT</option>
                           <option value="Baja Maternidad">Baja Maternidad</option>
                           <option value="Baja Paternidad">Baja Paternidad</option>
                           <option value="Matrimonio o Pareja de Hecho">Matrimonio o Pareja de Hecho</option>
                           <option value="Fallecimiento Familiar">Fallecimiento Familiar</option>
                           <option value="Formación">Formación</option>
                           <option value="Mudanzas">Mudanzas</option>
                           <option value="Otros...">Otros...</option>
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
   </Card.Body>
      </Card>
         </Container>
);
};

export default Absences;


