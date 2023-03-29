import SenderHolidays from "../../components/senderHolidays/SenderHolidays";
import SenderAbsences from "../../components/senderAbsences/SenderAbsences";
import "../homeUser/HomeUser.css";
import LocalCalendar from '../../components/calendar/Calendar';
import {absence} from '../../services/absences.service'
import React, { useEffect, useState } from 'react'

const HomeUser = () => {
  const [userName, setUserName] = useState(null)
  const [books, setBooks] = useState([])

  const handleRegister = async () => {
    const { data } = await absence();
    setBooks(data);
    console.log("books of users",data)
 };

    useEffect(() => {
      setUserName(localStorage.getItem('data'));
     // handleRegister();
    }, [])

  return (
    <div className="container">
      <div className="max-width mx-auto p-4">
        <LocalCalendar compact />
      </div>
      <div className="wrap">
        <SenderHolidays />
        <SenderAbsences />
      </div>
    </div>
  );
}

export default HomeUser;
