import Card from 'react-bootstrap/Card';
import '../footer/Footer.css';

function Footer() {
  return (
    <Card >
      <footer>
        <div id="foot" className="d-flex justify-content-between align-items-center">
          <img src="/Copyright.png" alt="Copyright"></img>
          <img src="/femCoders.png" alt="logo Fem Coders"></img>
        </div>
      </footer>
    </Card>
  );
}

export default Footer;