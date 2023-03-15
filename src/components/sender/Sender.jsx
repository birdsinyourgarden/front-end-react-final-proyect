import React from 'react';
import emailjs from '@emailjs/browser';
import '../sender/Sender.css';

export const Sender = () => {

    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_19vqrs9','template_phlgxgh',event.target,'WrHmfsnC8q7_pqnIC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
    <div className='div-form d-flex justify-content-center flex-direction-column align-items-center mt-1 p-4'>
        <h1 className='title-form'>VACACIONES</h1>
        <form className='form-mail d-flex justify-content-center flex-direction-column align-items-center' onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name='user_name' />
            <hr />

            <label>Email</label>
            <input type="email" name='user_email' />
            <hr />

            <label>Mensaje</label>
            <textarea name="user_message" id="" cols="30" rows="10"></textarea>
            <hr />
            <button><img src="/public/botonEnviar.png" alt="botón enviar"></img></button>
        </form>
    </div>
    )
}
