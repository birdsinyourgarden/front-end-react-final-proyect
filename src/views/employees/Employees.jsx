import { Card, Container, Form, Button } from "react-bootstrap";
import "../employees/Employees.css";
import { useForm } from "react-hook-form";
import { registerEmployee } from "../../services/employee.service";
import { Link, useNavigate } from "react-router-dom";

const  Employees= () => {

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const customSubmit = (data) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("phone", data.phone);
      formData.append("idNumber", data.idNumber);
      formData.append("sector", data.sector);
      formData.append("image", data.image[0]);
      formData.append("startingDate", data.startingDate);
      formData.append("endingDate", data.endingDate);
      formData.append("status", data.status);
      formData.append("contractType", data.contractType);
      formData.append("isAdmin", data.isAdmin);
      registerEmployee(formData).then(
      response => {
         console.log ("datalol", response)
      }
      ).catch(
      err => {
          // Mostrar un mensaje al usuario
         console.log(err)
         setLoginError(true)
         setTimeout(() => {
            setLoginError(false)
         }, 3000);
      }
      )
   };

   return (
      <Container className="p-5">
         <Card className="text-start">
            <Card.Title className="text-center">
               Registro de Empleados
            </Card.Title>
            <Card.Body>
            <Form  onSubmit={handleSubmit(customSubmit)}>
               <Form.Group className="mb-3" controlId="employeeName">
                  <Form.Label>Nombre</Form.Label>
                  <input
              type="text"
              placeholder="Escribe el Nombre"
              className='form-control shadow'
              {...register("name", {
                          required: true,
                          maxLength: 30,
                        })}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeSurName">
                  <Form.Label>Apellidos</Form.Label>
                  <input
              type="text"
              placeholder="Escribe los Apellidos"
              className='form-control shadow'
              {...register("surname", {
                          required: true,
                          maxLength: 42,
                        })}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeEmail">
                  <Form.Label>Correo</Form.Label>
                  <input
              type="email"
              placeholder="Escribe el Correo"
              className='form-control shadow'
              {...register("email", {
                          required: true,
                          maxLength: 42,
                        })}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <input
            type="password"
            placeholder="Escribe una contraseña"
            className='form-control shadow'
            {...register("password", {
                        required: true,
                        minLength: 5,
                        maxLength: 200,
                        })}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirmar Password</Form.Label>
                  <input
              type="password"
              placeholder="Vuelve a escribir la contraseña"
              className='form-control shadow'
              {...register("password", {
                          required: true,
                          minLength: 5,
                          maxLength: 200,
                        })}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeePhone">
                  <Form.Label>Teléfono</Form.Label>
                  <input
              type="text"
              placeholder="Escribe un teléfono"
              className='form-control shadow'
              {...register("phone", {
                          required: true,
                          minLength: 5,
                          maxLength: 200,
                        })}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="employeeDni">
                  <Form.Label>DNI/NIE</Form.Label>
                  <input
              type="text"
              placeholder="DNI/NIE"
              className='form-control shadow'
              {...register("idNumber", {
                          required: true,
                          minLength: 5,
                          maxLength: 200,
                        })}/>
               </Form.Group>
               <Form.Group 
               className='form-control shadow'
               {...register("sector", {
                           required: true,
                           minLength: 5,
                           maxLength: 200,
                        })}>
               <Form.Label>Sector</Form.Label>
               <Form.Select className="mb-3" controlId="employeeSector" >
               <option value="Jardinería">Jardinería</option>
               <option value="Limpieza Málaga">Limpieza Málaga</option>
               <option value="Limpieza Cádiz">Limpieza Cádiz</option>
               <option value="Limpieza Cádiz">Hilo Doble</option>
                  </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeePhoto">
                  <Form.Label>Foto</Form.Label>
                  <Form.Control type="text" placeholder="Imagen del Empleado" 
                  	/>
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

export default Employees;