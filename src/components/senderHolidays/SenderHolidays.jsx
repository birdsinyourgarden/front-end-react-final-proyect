import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import emailjs from '@emailjs/browser';
import './SenderHolidays.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function SenderHolidays() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const sendEmail = (event) => {
        event.preventDefault();
        Swal.fire({
            title: '¿Quieres enviar la petición?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, enviar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                emailjs
                .sendForm('service_19vqrs9', 'holidays', event.target, 'WrHmfsnC8q7_pqnIC')
                .then((response) => {
                console.log(response);
                Swal.fire('¡Enviada!', 'La petición ha sido enviada con éxito.', 'success');
                })
                .catch((error) => {
                console.log(error);
                Swal.fire('¡Error!', 'Ha ocurrido un error al enviar la petición.', 'error');
                });
            }
        });
    };

    const handleReset = () => {
        setStartDate(null);
        setEndDate(null);
    };
    
    return (
    <div className="width p-4">
        <h1 className="title-form h2 text-left rounded-4 px-5 py-2">VACACIONES</h1>
        <form className="form-mail rounded-4 px-5 py-4" onSubmit={sendEmail}>
            <div className="row">
                <div className="col mb-4">
                    <label>Inicio</label>
                    <DatePicker
                        name="startDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        locale={es}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                        className="picker mb-2"
                        required
                    />
                </div>
                <div className="col mb-4">
                    <label>Fin</label>
                    <DatePicker
                        name="endDate"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale={es}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                        className="picker mb-2"
                        required
                    />
                </div>
            </div>
            <div>
                <button type="reset" className="btn btn-link" onClick={handleReset}><img src="/resetBlue.png" alt="botón borrar"></img></button>
                <button type="submit" className="btn btn-link"><img src="/sendBlue.png" alt="botón enviar"></img></button>
            </div>
        </form>
    </div>
    )
};
