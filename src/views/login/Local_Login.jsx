import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../login/Local_Login.css';
import { useForm } from "react-hook-form";
import { Card, Container } from 'react-bootstrap';
// import { login } from "../../services/user.service";
import { Link, useNavigate } from "react-router-dom";

const LocalLogin = () => {
  const onSubmit = () =>{};
  const {register} = useForm();
  return (
    <Container id="logCard">
      <Card className='login-card shadow'>
        <Form className="logstyle">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className='shadow'/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" className='shadow'/>
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
      </Card>
    </Container>
  );

}
export default LocalLogin;
