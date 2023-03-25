import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import emailjs from "@emailjs/browser";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "./SenderAbsences.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

/* const baseUrl = import.meta.env.VITE_BACKEND_URL; */

export default function SenderAbsences() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [documentURL, setDocumentURL] = useState("");
  const [added, setAdded] = useState(false);

  function getURL(data) {
    setDocumentURL(data);
  }

  const sendEmail = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "¿Quieres enviar la petición?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        /* try {
                    axios.post(baseUrl + "/auth/createAbsence", event.target);
                } catch (error) {
                    console.error("Error calling the API", error.message);
                } */
        emailjs
          .sendForm(
            "service_19vqrs9",
            "absences",
            event.target,
            "WrHmfsnC8q7_pqnIC"
          )
          .then((response) => {
            handleReset();
            Swal.fire(
              "¡Enviada!",
              "La petición ha sido enviada con éxito.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire(
              "¡Error!",
              "Ha ocurrido un error al enviar la petición.",
              "error"
            );
          });
      }
    });
  };

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
        onSubmit={sendEmail}
      >
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
            <DatePicker
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
              className="picker"
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
            <DatePicker
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
              className="picker"
              required
            />
          </div>
          <div className="col mb-4">
            <label>Motivo</label>
            <textarea
              name="message"
              cols="25"
              rows="4"
              placeholder="Añade un motivo"
              maxLength={255}
              required
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
