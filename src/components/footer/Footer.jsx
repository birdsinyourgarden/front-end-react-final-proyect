import Card from 'react-bootstrap/Card';
import '../footer/Footer.css';

function Footer() {
  return (
    <Card className='footer-card'>    
      <footer>
        <div class="d-flex justify-content-between align-items-center">
          <img src="./public/Copyright.png" alt="Copyright"></img>
          <img src="./public/femCoders.png" alt="logo Fem Coders"></img>
        </div>
      </footer>    
    </Card>
  );
}

export default Footer;