import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


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
              <NavDropdown title="This web page was built by : " id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">VITE</NavDropdown.Item>
                <NavDropdown.Item href="#action3">React-Bootstrap </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Cloudflare serverless, </NavDropdown.Item>
                <NavDropdown.Item href="#action4">CoinmarketCap API</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  a blockchain explorer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <iframe content-security-policy={{ 'frame-ancestors': 'self' }} style={{ 'height': '25vh' }} loading="eager" title="Preview Crypto detail." src="https://coinmarketcap.com/currencies/uniswap/"></iframe>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  );
}

export default Header;
