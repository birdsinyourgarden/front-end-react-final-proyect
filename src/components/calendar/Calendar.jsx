import { useEffect, useState } from 'react';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import '../calendar/Calendar.css';
import { getAbsences } from '../../services/employee.service'
import Swal from 'sweetalert2';
  
  const LocalCalendar = () => {
    const [calendarData, setCalendarData] = useState(null)

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
          dataToShow.push({ time: row.startingTime, title: row.description, info: row })
        }
      })

      return dataToShow
    
      /* switch (day) {
        case 10:
          return [
            { time: '10:30 am', title: 'Meeting' },
            { time: '12:00 pm', title: 'Lunch' }
          ];
        case 15:
          return [
            { time: '09:30 pm', title: 'Products Introduction Meeting' },
            { time: '12:30 pm', title: 'Client entertaining' },
            { time: '02:00 pm', title: 'Product design discussion' },
            { time: '05:00 pm', title: 'Product test and acceptance' },
            { time: '06:30 pm', title: 'Reporting' },
            { time: '10:00 pm', title: 'Going home to walk the dog' }
          ];
        default:
          return [];
      } */
    }

    const handleShowInfo = (item) => {
      const p = document.createElement("p")
      p.innerHTML = `<b>Descripcion</b>: ${item.info.description}<br/>
      <b>Status</b>: ${item.info.status}<br/>
      <b>Inicio</b>: ${item.info.startingTime}<br/>
      <b>Final</b>: ${item.info.endingTime}<br/>
      <b>Link</b>: <a href='${item.info.addDocument}' target='_blank'>Descargar</a><br/>
      `
      Swal.fire("Event Info", p, 'info')
    }

    useEffect(() => {
      getAbsences().then(
        res => {
          setCalendarData(res.data)
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
              <li key={index} title={item.time + ' - ' + item.title} onClick={() => handleShowInfo(item)}>
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
      calendarData && (
        <div>
                <Calendar bordered renderCell={renderCell} className='white-background' />
        </div>
      )
    )
  
  };
  
  export default LocalCalendar
