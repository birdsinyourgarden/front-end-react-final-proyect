import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

export default function SelectTime() {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            locale={es}
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="h:mm"
            placeholderText="Selecciona una hora"
        />
    );
}
