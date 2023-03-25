import { Alert } from "react-bootstrap"
import Userpill from "./userpill/Userpill"
import './Sidebar.css'
import { getEmployees } from "../../services/employee.service"
import Employees from "../../views/employees/Employees"
import { useEffect } from "react"
import { useState } from "react";

function Sidebar () {
    const [employeesArray, setEmployees] = useState(null);
    
    const showEmployees = () => {
    getEmployees().then(
        response => {
            setEmployees(response.data)
        }
        ).catch(e => {
        console.log (e)
        }) 
    }
    useEffect(() => {
        showEmployees();
    }, [])
    
    return (
        <Alert variant="success" className="green scrollbar contenedor">
            {
                employeesArray && employeesArray.map(employee => {
                    return (
                        <Userpill name={employee.name + ' ' + employee.surname} image={employee.image} />
                    )
                })
            }
        </Alert>
        
    )
}

export default Sidebar