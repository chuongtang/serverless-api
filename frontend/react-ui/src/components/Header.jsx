import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Tlc from '../images/TLC.png'
import Vite from '../images/Vite.png'
import Workers from '../images/Workers.png'
import ReactBS from '../images/react-bootstrap.png'
import CoinMarket from '../images/CoinMarket.png'

const Header = () => {

  return (

    <Navbar bg="primary" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">CRYPTO CURRENCIES CHART</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Learn more about Crypto 💵💶💷💳📉📊 ?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="https://www.pwc.com/us/en/industries/financial-services/fintech/bitcoin-blockchain-cryptocurrency.html#:~:text=Bitcoin%20is%20the%20name%20of%20the%20best-known%20cryptocurrency%2C,the%20transfer%20of%20funds.%20What%20is%20blockchain%20technology%3F" target="_blank" rel="noopener noreferrer">💴 Technologies behind Crypto</Nav.Link>
              <Nav.Link href="https://cryptohelp.com/" target="_blank" rel="noopener noreferrer" > 📈 Crypto-Invest</Nav.Link>
              <hr />
              <NavDropdown title="This web page was built by : " id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3"><img  src={Vite} alt="Vite Logo" className="logo"/> <a href={'https://vitejs.dev'} target="_blank" rel="noopener noreferrer">VITEjs</a></NavDropdown.Item>
                <NavDropdown.Item href="#action3"><img  src={ReactBS} alt="React Bootstrap Logo" className="logo"/>  <a href={'https://react-bootstrap.github.io'} target="_blank" rel="noopener noreferrer"> React-Bootstrap</a></NavDropdown.Item>
                <NavDropdown.Item href="#action4"><img  src={Workers} alt="Workers Logo" className="logo"/>  <a href={'https://workers.cloudflare.com'} target="_blank" rel="noopener noreferrer"> Cloudflare Serverless</a></NavDropdown.Item>
                <NavDropdown.Item href="#action4"><img  src={CoinMarket} alt="CoinMarket Logo" className="logo"/> <a href={'https://coinmarketcap.com/api/'} target="_blank" rel="noopener noreferrer">CoinMarketCap API</a></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                 and.. <img  src={Tlc} alt="Chuong Favicon" className="logo"/> , <a href={'https://chuongtang.github.io/aboutme' } target="_blank" rel="noopener noreferrer">a developer, blockchain explorer</a> 
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  );
}

export default Header;
