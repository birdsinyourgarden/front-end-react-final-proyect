import { useEffect, useState } from 'react';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import '../calendar/Calendar.css';
import { getAbsences, getHolidays } from '../../services/employee.service'
import Swal from 'sweetalert2';
import { CustomProvider } from "rsuite";
import esES from "rsuite/locales/es_ES";
  
  const LocalCalendar = (props) => {
    const [calendarData, setCalendarData] = useState(null)
    const [holidayData, setHolidayData] = useState(null)

    function getTodoList(date) {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear()
      const dataToShow = []
      calendarData.forEach(row => {
        const createdAt = new Date(row.startingDate)
        const dayCreated = createdAt.getDate();
        const monthCreated = createdAt.getMonth();
        const yearCreated = createdAt.getFullYear()

        if (yearCreated == year && monthCreated == month && dayCreated == day) {
          dataToShow.push({ time: row.startingTime, title: row.description, info: row, type: 'absence' })
        }
      })

      holidayData.forEach(row => {
        const createdAt = new Date(row.startingDate)
        const dayCreated = createdAt.getDate();
        const monthCreated = createdAt.getMonth();
        const yearCreated = createdAt.getFullYear()

        if (yearCreated == year && monthCreated == month && dayCreated == day) {
          dataToShow.push({ time: row.startingDate, title: row.endingDate, info: row, type: 'holiday' })
        }
      })

      return dataToShow
    
    }

    const handleShowInfo = (item) => {
      const p = document.createElement("p")
      if (item.type === 'absence') {
        p.innerHTML = `<b>Descripcion</b>: ${item.info.description}<br/>
        <b>Inicio</b>: ${item.info.startingTime}<br/>
        <b>Final</b>: ${item.info.endingTime}<br/>
        <b>Link</b>: <a href='${item.info.addDocument}' target='_blank'>Descargar</a><br/>
        `
        
      } else {
        p.innerHTML = `<b>Descripcion</b>: Vacaciones<br/>
        <b>Status</b>: ${item.info.status}<br/>
        <b>Inicio</b>: ${item.info.startingDate}<br/>
        <b>Final</b>: ${item.info.endingDate}<br/>
        `
      }

      Swal.fire("Event Info", p, 'info')
    }

    useEffect(() => {
      getAbsences().then(
        res => {
          setCalendarData(res.data)
        }
      )

      getHolidays().then(
        res => {
          setHolidayData(res.data)
        }
      )
    }, [])

    function renderCell(date) {
      const list = getTodoList(date);
      const displayList = list.filter((item, index) => index < 2);
  
      if (list.length) {
        const moreCount = list.length - displayList.length;
        const moreItem = (
          <li>
            <Whisper
              placement="top"
              trigger="click"
              speaker={
                <Popover>
                  {list.map((item, index) => (
                    <p key={index} >
                      <b>{item.time}</b> - {item.title}
                    </p>
                  ))}
                </Popover>
              }
            >
              <a>{moreCount} more</a>
            </Whisper>
          </li>
        );
  
        return (
          <ul className="calendar-todo-list">
            {displayList.map((item, index) => (
              <li key={index} title={item.time + ' - ' + item.title} onClick={() => handleShowInfo(item)} className={item.type === 'absence' ? 'absence-row' : 'holiday-row'}>
              <Badge /> <b>{item.time}</b> - {item.title}
              </li>
            ))}
            {moreCount ? moreItem : null}
          </ul>
        );
      }
  
      return null;
    }
  
    return (
      (calendarData && holidayData) && (
        <div>
          <CustomProvider locale={esES}>
                <Calendar compact={props.compact} bordered renderCell={renderCell} className='white-background' 
                isoWeek/>
                </CustomProvider>
        </div>
      )
    )
  
  };
  
  export default LocalCalendar
