import React, { useState } from "react";
/* import axios from "axios"; */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import emailjs from "@emailjs/browser";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "./SenderAbsences.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useForm } from "react-hook-form";
import {createAbsence} from '../../services/absences.service'


const SenderAbsences = ()=> {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [documentURL, setDocumentURL] = useState("");
  const [added, setAdded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const absencesSubmit = (data) => {
  // Send email

  Swal.fire({
    title: "¿Quieres enviar la petición?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, enviar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      emailjs
        .sendForm(
          "service_19vqrs9",
          "absences",
          document.getElementById('absence-form'),
          "WrHmfsnC8q7_pqnIC"
        )
        .then(() => {
          Swal.fire ( {
            title:'Enviado',
            text:'Email de confirmacion eviado.', 
            icon:'success',
            position: 'center',
          })
          const formData = new FormData();
          const starting = new Date(startDate).toJSON().slice(0, 10)
          const ending = new Date(endDate).toJSON().slice(0, 10)
          const initTime = new Date(startTime)
          const startingT = initTime.getHours() + ':' + initTime.getMinutes() + ':' + initTime.getSeconds()
          const finalTime = new Date(endTime)
          const endingTime = finalTime.getHours() + ':' + finalTime.getMinutes() + ':' + finalTime.getSeconds()
          formData.append("user_id", data.user_id);
          formData.append("startingDate", starting);
          formData.append("startingTime", startingT);
          formData.append("endingDate", ending);
          formData.append("endingTime", endingTime);
          formData.append("description", data.description);
          formData.append("addDocument", documentURL);
          createAbsence(formData)
            .then((res) => {
              handleReset();
                handleReset();
                Swal.fire ( {
                title:'Enviado',
                text:'Se ha registrado con exito', 
                icon:'success',
                position: 'center',
              })
              }).catch((error) => {
                Swal.fire(
                '¡Error!',
                'Ha ocurrido un error al enviar la petición.</br><smal>'+message+'</small>',
              'error'
                );
              });
        })
        .catch((error) => {
          Swal.fire(
            "¡Error!",
            "Ha ocurrido un error al enviar la petición. Email",
            "error"
          );
        });
    }
  });

  // end send email

}

  function getURL(data) {
    setDocumentURL(data);
  }

  const onErrors = (e) => {
    
  }

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setStartTime(null);
    setEndTime(null);
    setAdded(false);
    document.getElementById("absence-form").reset();
  };

  return (
    <div className="width p-4">
      <h1 className="title-form-blue h2 text-left rounded-4 px-5 py-2">
        AUSENCIAS
      </h1>
      <form
        id="absence-form"
        className="form-mail-blue rounded-4 px-5 py-4"
        onSubmit={handleSubmit(absencesSubmit, onErrors)}
      >
        <div className="row">
          <div className="col mb-4">
            <label>Inicio</label>
            <DatePicker
            className={errors.startingDate ? 'form-control shadow fail' : 'form-control shadow'}
            {...register("startingDate", {
            })}
              name="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              locale={es}
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecciona una fecha"
            />
            <hr></hr>
            <DatePicker
            className={errors.startingTime ? 'form-control shadow fail' : 'form-control shadow'}
            {...register("startingTime", {
            })}
              name="startTime"
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              locale={es}
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Selecciona una hora"
              
            />
          </div>
          <div className="col mb-4">
            <label>Fin</label>
            <DatePicker
            className={errors.endingDate ? 'form-control shadow fail' : 'form-control shadow'}
            {...register("endingDate", {
            })}
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
            /><hr></hr>
            <DatePicker
            className={errors.endingTime ? 'form-control shadow fail' : 'form-control shadow'}
            {...register("endingTime", {
            })}
              name="endTime"
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              locale={es}
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Selecciona una hora"
            />
          </div>
          <div 
          className={errors.description ? 'form-control shadow fail' : 'form-control shadow'}
          >
            <label>Motivo</label>
            <textarea
            {...register("description", {
            })}
              cols="25"
              rows="4"
              placeholder="Añade un motivo"
              maxLength={255}
            />
          </div>
        </div>
        <UploadWidget url={getURL} added={added} onAdd={() => setAdded(true)} />
        <input type="hidden" name="documentURL" value={documentURL} />
        <div id="senderBtns" className="mb-3">
          <button type="reset" className="btn btn-link" onClick={handleReset}>
            <img src="/resetGreen.png" alt="botón borrar"></img>
          </button>
          <button type="submit" className="btn btn-link">
            <img src="/sendGreen.png" alt="botón enviar"></img>
          </button>
        </div>
      </form>
    </div>
  );
}
export default SenderAbsences
