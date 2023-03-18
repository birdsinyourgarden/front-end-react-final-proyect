import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";

export default function SelectDate() {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            locale={es}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona una fecha"
        />
    );
};
