import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../login/Local_Login.css';
import { useForm } from "react-hook-form";
import { Alert, Card, Container } from 'react-bootstrap';
import { login } from "../../services/user.service";
import { Link, useNavigate } from "react-router-dom";


const LocalLogin = () => {
  const [loginError, setLoginError] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
 } = useForm();

  const customSubmit = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    login(formData).then(
      response => {
        const {data } =  response
        if (data.access_token) {
          localStorage.setItem('token', data.access_token)
          if (data.user.isAdmin === 1) {
            navigate('/home')
          } else if (data.user.isAdmin === 0) {
            navigate('/homeUser')
          }
        }
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

 useEffect(() => {
  // validar token
 }, [])

  return (
    <Container id="logCard">
      <Card className='login-card shadow'>
        <Form className="logstyle" onSubmit={handleSubmit(customSubmit)}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <input
              type="email"
              placeholder="Enter email"
              className='form-control shadow'
              {...register("email", {
                          required: true,
                          maxLength: 42,
                        })}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <input
              type="password"
              placeholder="Password"
              className='form-control shadow'
              {...register("password", {
                          required: true,
                          minLength: 5,
                          maxLength: 200,
                        })}/>
          </Form.Group>
          {/* <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="&nbsp;Check me out"/>
          </Form.Group>*/}
          <div className='d-grid'>
            <Button id="submitLog" variant="primary" type="submit" className='shadow'>
              ENTRAR
            </Button>
            <a id="forgPassword">¿Olvidaste la contraseña?</a>
          </div>
        </Form>
        {(
          loginError &&
          <Container>
            <Alert variant="danger">Usuario o password invalidos</Alert>
          </Container>
        )}
      </Card>
    </Container>
  );

}
export default LocalLogin;
