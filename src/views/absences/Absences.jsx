import { Card, Container, Form, Button } from "react-bootstrap";
import "../absences/Absences.css";

const  Absences= () => {
   return (
      <Container className="p-5">
         <Card className="text-start">
            <Card.Title className="text-center">
               Actualizar Día
               </Card.Title>
               <div>
               <table cellpadding="4">
   <tr><th>Заголовок 1</th></tr>
   <tr><td>Ячейка 3</td></tr>
  </table>
               </div>                                
                    <Card.Body>
            <Form>
                
               <Form.Group className="mb-3" controlId="employeeName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del Empleado" />
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

               <Form.Group className="mb-3" controlId="employeeSurName">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" placeholder="Apellido del Empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Correo del empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirmar Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirmar Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeePhone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" placeholder="Telefono del empleado" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeDni">
                  <Form.Label>DNI/NIE</Form.Label>
                  <Form.Control type="text" placeholder="DNI o NIE del empleado" />
               </Form.Group>
               <Form.Group>
               <Form.Label>Sector</Form.Label>
               <Form.Select className="mb-3" controlId="employeeSector">
               <option value="Jardinería">Jardinería</option>
               <option value="Limpieza Málaga">Limpieza Málaga</option>
               <option value="Limpieza Cádiz">Limpieza Cádiz</option>
               <option value="Limpieza Cádiz">Hilo Doble</option>
                  </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeePhoto">
                  <Form.Label>Foto</Form.Label>
                  <Form.Control type="text" placeholder="Imagen del Empleado" />
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
               Crear Usuario
               </Button>
            </Form>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default Absences;


