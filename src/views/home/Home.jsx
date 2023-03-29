import './Home.css'
import LocalNavbar from '../../components/localNavbar/LocalNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Calendar from 'rsuite/Calendar';
import { Whisper, Popover, Badge } from 'rsuite';
import LocalCalendar from '../../components/calendar/Calendar';
import Footer from '../../components/footer/Footer';
import { Col, Row, Container } from 'react-bootstrap';
import Sidebar from '../../components/sidebar/Sidebar';

function Home(){

return (
    <div>
        <div id="homeAdminLayout">
            <Row>
            <Col id="employeesList" lg="3">
                <Sidebar/>
            </Col>
            <Col lg="9">
            <LocalCalendar className='white-background' />
            </Col>
            </Row>
        </div>
    </div>
)
}

export default Home