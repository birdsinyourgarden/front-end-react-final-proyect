import { Card, Container, Form, Button } from "react-bootstrap";
import "../absences/Absences.css";

const  Absences= () => {
   return (
      <Container className="p-5">
         <Card className="text-start">
            <Card.Title className="text-center">
               <h1>Actualizar Ausencia</h1> 
               </Card.Title>
               <div>
               <table className="userName">
                     <tr><th>Montse Martos</th></tr>
               </table>
               </div>
               <div>
               <table className="dateAbscens">
               <tr><td>23/03/2023 - 25/03/2023</td></tr>
               </table>
               </div>   
               <Card.Body>             
               <Form.Group>
               <Form.Label>Evento</Form.Label>
               <Form.Select className="mb-3" controlId="employeeSector">
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
                  <Form.Group className="mb-3" controlId="employeePhoto">
                  <Form.Label>Foto</Form.Label>
                  <Form.Control type="text" placeholder="Imagen del Empleado" />
               </Form.Group>
                              
               <Form.Group>
               <Form.Label>Estatus del Empleado</Form.Label>
               <Form.Select className="mb-3" controlId="employeeStatus">
               <option value="true">Activo</option>
               <option value="false">Baja</option>
                  </Form.Select>
                  </Form.Group>
               <Form.Group>
               <Form.Label>Tipo de Contrato del Empleado</Form.Label>
               <Form.Select className="mb-3" controlId="employeeType">
               <option value="true">Permanente</option>
               <option value="false">Temporal</option>
                  </Form.Select>
                  </Form.Group>
                  <Form.Group>
               <Form.Label>Es Administrador?</Form.Label>
               <Form.Select className="mb-3" controlId="employeeAuth">
               <option value="false">No</option>
               <option value="true">Si</option>
                  </Form.Select>
                  </Form.Group>

                  
   <Button variant="primary" type="submit">
               Borrar
               </Button>

               <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Botón</button>
  <button class="btn btn-primary" type="button">Botón</button>
</div>

               <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Cancelada</button>
  <button class="btn btn-primary" type="button">Rechazada</button>
</div>
            </Card.Body>
         </Card>
      </Container>
);
};

export default Absences;


