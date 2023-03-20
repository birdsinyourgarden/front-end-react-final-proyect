import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import emailjs from '@emailjs/browser';
import './SenderHolidays.css';

export default function SenderHolidays() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_19vqrs9','template_phlgxgh',event.target,'WrHmfsnC8q7_pqnIC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
    <div className='p-4'>
        <h1 className='title-form h2 text-left rounded-4 px-5 py-2'>VACACIONES</h1>
        <form className='form-mail d-flex flex-column align-items-center w-100 rounded-4 p-4' onSubmit={sendEmail}>
            <div className = 'd-flex'>
            <label>Días</label>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                locale={es}
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecciona una fecha"
                className="mb-3"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                locale={es}
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecciona una fecha"
                className="mb-3"
            />
            </div>
            {/* <input type="text" name='user_name' /> */}
            {/* <label>Email</label>
            <input type="email" name='user_email' />
            <label>Mensaje</label>
            <textarea name="user_message" cols="27" rows="10" className='mb-4' /> */}
            <div>
                <button className='btn btn-link'><img src="/deleteBlue.png" alt="botón borrar"></img></button>
                <button className='btn btn-link'><img src="/sendBlue.png" alt="botón enviar"></img></button>
            </div>
        </form>
    </div>
    )
};
