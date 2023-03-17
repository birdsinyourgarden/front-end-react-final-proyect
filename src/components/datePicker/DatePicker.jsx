import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

function DatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        locale={es}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecciona una fecha"
        />
        </div>
    );
}

export default DatePicker;