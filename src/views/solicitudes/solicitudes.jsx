import Card from 'react-bootstrap/Card';
import "../solicitudes/Solicitudes.css";

function Solicitudes(){

    return (
        <div className="solicitudeWrapper">
            <div>
                <p className="solicitudeTitle">Gestión de Solicitudes</p>
            </div>

            <div id="sectionBground">
                <div>
                    <p className="processingTitle">Solicitudes en Proceso</p>
                </div>
                <div id="processingLayout">
                    <Card id="processingSolicitudeCard">
                        <div id="processingSolicitudeContainer" >
                            <div id="solicitudText">
                                <p>Su solicitud del 5 de Abril del 2023 al 10 de Abril del 2023 está pendiente de gestionar</p>
                            </div> 
                        </div>
                    </Card>
                    <div>
                        <button id="manageBtn" type="submit" className="btn btn-link">
                            Gestionar
                        </button>
                    </div> 
                </div>

                <div>
                    <p className="rejectingTitle">Solicitudes Denegadas</p>
                </div>
                <div id="rejectingLayout">
                    <Card id="rejectingSolicitudeCard">
                        <div id="rejectingSolicitudeContainer" >
                            <div id="solicitudText">
                                <p>Su solicitud del 1 de Abril del 2023 al 10 de Abril del 2023 ha sido denegada</p>
                            </div> 
                        </div>
                    </Card>
                </div>    

                <div>
                    <p className="approvedHolidayTitle">Vacaciones Aprobadas</p>
                </div>
                <div id="approvedHolidayLayout">
                    <Card id="approvedHolidayCard">
                        <div id="approvedHolidayContainer" >
                            <div id="solicitudText">
                                <p>Su solicitud del 1 de Abril del 2023 al 2 de Abril del 2023 ha sido aprobada</p>
                            </div> 
                        </div>
                    </Card>
                </div>    

                <div>
                    <p className="approvedAbsenceTitle">Ausencia Aprobada</p>
                </div>
                <div id="approvedAbsenceLayout">
                    <Card id="approvedAbsenceCard">
                        <div id="approvedAbsenceContainer" >
                            <div id="solicitudText">
                                <p>Su solicitud del 1 de Marzo del 2023 al 2 de Marzo del 2023 ha sido aprobada</p>
                            </div> 
                        </div>
                    </Card>
                    <div>
                        <button id="editAbsenceBtn" type="submit" className="btn btn-link">
                            Editar
                        </button>
                    </div> 
                </div>        
            </div>
        </div>        
    )
}

export default Solicitudes