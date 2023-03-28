import { Card, Container, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../employees/Employees.css";
import { useForm } from "react-hook-form";
import { registerEmployee } from "../../services/employee.service";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Employees = () => {

      const[employeeName, setemployeeName]= useState(null);
      const[employeeSurName,setemployeeSurName]= useState(null);
      const[employeeEmail,setemployeeEmail]= useState(null);
      const[password,setpassword]= useState(null);
      const[confirmPassword,setconfirmPassword]= useState(null);
      const[employeePhone,setemployeePhone]= useState(null);
      const[employeeDni,setemployeeDni]= useState(null);
      const[employeeSector,setemployeeSector]= useState(null);
      const[employeePhoto,setemployeePhoto]= useState(null);
      const[employeeStarting,setemployeeStarting]= useState(false);
      const[employeeFinished,setemployeeFinished]= useState(false);
      const[employeeStatus,setemployeeStatus]= useState(false);
      const[employeeType, setemployeeType]= useState(false);
      const[employeeAuth, setemployeeAuth] = useState(false);


   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onErrors = (e) => {}

   const customSubmit = (data) => {
      console.log("enviando la data");
      const formData = new FormData();
      formData.append("name", data.name);
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
      registerEmployee(formData)
         .then((response) => {
            handleReset();
            Swal.fire ( {
               title:'Enviado',
               text:'Se ha registrado con exito', 
               icon:'success',
               position: 'center',
         })
         .catch((error) => {
            Swal.fire(
            '¡Error!',
            'Ha ocurrido un error al enviar la petición.',
            'error'
            );
         });
      })

      const handleReset = () => {
         setemployeeName(null);
         setemployeeSurName(null);
         setemployeeEmail(null);
         setpassword(null);
         setconfirmPassword(null);
         setemployeePhone(null);
         setemployeeDni(null);
         setemployeeSector(null);
         setemployeePhoto(null);
         setemployeeStarting(false);
         setemployeeFinished(false);
         setemployeeStatus(false);
         setemployeeType(false);
         setemployeeAuth(false);
      document.getElementById("employees-form").reset();
      };
   
         
   }


   return (
      <Container className="p-5">
         <Card className="text-start">
            <Card.Title className="text-center">Registro de Empleados</Card.Title>
            <Card.Body>
               <Form id="employees-form" onSubmit={handleSubmit(customSubmit, onErrors)}>
                  <Form.Group className="mb-3" controlId="employeeName">
                     <Form.Label>Nombre</Form.Label>
                     <input
                        type="text"
                        placeholder="Escribe el Nombre"
                        className={errors.name ? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("name", {
                           required: true,
                           maxLength: 30,
                        })}
                     />
                     {errors.name?.type === "required" && (
                        <small className="fail">The field cannot be empty</small>
                     )}
                     {errors.name?.type === "maxLength" && (
                        <small className="fail">Corrija el campo</small>
                     )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeeSurName">
                     <Form.Label>Apellidos</Form.Label>
                     <input
                        type="text"
                        placeholder="Escribe los Apellidos"
                        className={errors.surname ? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("surname", {
                           required: true,
                           maxLength: 15,
                        })}aria-invalid={errors.surname ? "true" : "false"} 
                     />
                     {errors.surname?.type === 'required' && <p role="alert">Apellido es requerido</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeeEmail">
                     <Form.Label>Correo</Form.Label>
                        <input
                        className={errors.email ? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("email", { required: "Email Address is required" })} 
                        aria-invalid={errors.email ? "true" : "false"} 
                        />
      {errors.email && <p role="alert">{errors.email?.message}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                     <Form.Label>Password</Form.Label>
                     <input
                        type="password"
                        placeholder="Escribe una contraseña"
                        className={errors.password? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("password", {
                           required: true,
                           minLength: 4,
                           maxLength: 8,
                        })}
                     />
                     {errors.password?.type === "required" && (
                        <small className="fail">The field cannot be empty</small>
                     )}
                     {errors.password?.type === "maxLength" && (
                        <small className="fail">Maximum characters are eight</small>
                     )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="confirmPassword">
                     <Form.Label>Confirmar Password</Form.Label>
                     <input
                        type="password"
                        placeholder="Vuelve a escribir la contraseña"
                        className={errors.password2 ? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("password2", {
                           required: true,
                           minLength: 4,
                           maxLength: 15,
                        })}
                     />
                     {errors.password2?.type === "required" && (
                        <small className="fail">The field cannot be empty</small>
                     )}
                     {errors.password2?.type === "maxLength" && (
                        <small className="fail">Maximum characters are eight</small>
                     )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeePhone">
                     <Form.Label>Teléfono</Form.Label>
                     <input
                        type="number"
                        placeholder="Escribe un teléfono"
                        className={errors.phone ? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("phone", {
                           required: true,
                           minLength: 9,
                           maxLength: 15,
                        })}
                     />
                     {errors.phone?.type === "required" && (
                        <small className="fail">The field cannot be empty</small>
                     )}
                     {errors.phone?.type === "maxLength" && (
                        <small className="fail">Maximum characters are eight</small>
                     )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeeDni">
                     <Form.Label>DNI/NIE</Form.Label>
                     <input
                        type="text"
                        placeholder="DNI/NIE"
                        className={errors.idNumber ? 'form-control shadow fail' : 'form-control shadow'}
                        {...register("idNumber", {
                           required: true,
                           minLength: 5,
                           maxLength: 10,
                        })}
                     />
                     {errors.idNumber?.type === "required" && (
                        <small className="fail">The field cannot be empty</small>
                     )}
                     {errors.idNumber?.type === "maxLength" && (
                        <small className="fail">Maximum characters are eight</small>
                     )}
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Sector</Form.Label>
                     <Form.Select
                        className={errors.sector? 'form-control shadow fail' : 'form-control shadow'}
                        controlId="employeeSector"
                        {...register("sector", {
                           required: true,
                        })}
                     >
                        <option selected>Elija una opción</option>
                        <option value="Jardinería">Jardinería</option>
                        <option value="Limpieza Málaga">Limpieza Málaga</option>
                        <option value="Limpieza Cádiz">Limpieza Cádiz</option>
                        <option value="Limpieza Cádiz">Hilo Doble</option>
                     </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeePhoto">
                     <Form.Label>Foto</Form.Label>
                     <input
                        type="file"
                        className="form-control shadow"
                        {...register("image", {
                           required: false,
                        })}
            />
            {errors.image?.type === "required" && (
               <small className="fail">The field cannot be empty</small>
            )}
            {errors.image?.type === "maxLength" && (
               <small className="fail">Maximum characters are eight</small>
            )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeeStarting">
                     <Form.Label>Inicio del Contrato</Form.Label>
                     <input
                        type="date"
                        name="party"
                        required
                        {...register("startingDate", {
                           min: "2010-04-01",
                           max: "2024-04-20",
                           required: true,
                        })}
                     />
                     <span class="validity"></span>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="employeeFinished">
                     <Form.Label>Fin del Contrato</Form.Label>
                     <input
                        type="date"
                        name="party"
                        
                        {...register("endingDate", {
                           min: "2010-04-01",
                           max: "2024-04-20",
                           required: false,
                        })}
                     />
                     <span class="validity"></span>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Estado del Empleado</Form.Label>
                     <Form.Select
                        className={errors.status ? 'form-control shadow fail' : 'form-control shadow'}
                        controlId="employeeStatus"
                        {...register("status", {
                           required: true,
                        })}
                     >
                        <option selected>Elija una opción</option>
                        <option value="true">Activo</option>
                        <option value="false">Baja</option>
                     </Form.Select>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Tipo de Contrato del Empleado</Form.Label>
                     <Form.Select
                        className={errors.contractType ? 'form-control shadow fail' : 'form-control shadow'}
                        controlId="employeeType"
                        {...register("contractType", {
                           required: true,
                        })}
                     >
                        <option selected>Elija una opción</option>
                        <option value="true">Permanente</option>
                        <option value="false">Temporal</option>
                     </Form.Select>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Es Administrador?</Form.Label>
                     <Form.Select
                        className={errors.isAdmin ? 'form-control shadow fail' : 'form-control shadow'}
                        controlId="employeeAuth"
                        {...register("isAdmin", {
                           required: true,
                        })}
                     >
                        <option selected>Elija una opción</option>
                        <option value="false">No</option>
                        <option value="true">Si</option>
                     </Form.Select>
                  </Form.Group>
                  <Button id="createBtn" variant="primary" type="submit">
                     Crear Usuario
                  </Button>
               </Form>
            </Card.Body>
         </Card>
      </Container>
   );
};

export default Employees;
