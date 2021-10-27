import { useState, useEffect } from 'react'
import './App.css';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Row, Col, Stack, Table } from 'react-bootstrap'


function App() {
  const [coins, setCoins] = useState('');
  const [updateTime, setUpdateTime] = useState('');


  let results = [];

  async function getData() {
    const res = await fetch("https://serverless-api.chuongtang.workers.dev");
    results = await res.json();
    setCoins(results.data);
    console.log("Here are they", results.status);
    setUpdateTime(results.status.timestamp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

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
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="updTime">Last updated on:  🌠 {updateTime}</div>
      {coins && (
        <Container>
          <Table striped bordered hover >
            <thead >
              <tr>
                <th>Current Rank</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price(USD)</th>
                <th>% Change is last hour</th>
                <th>Total Supply</th>
                <th>Volume_Change in 24h</th>
              </tr>
            </thead>
            <tbody>
              {/* loop over the coins */}
              {coins.map((coin, index) => (
                <tr key={index}>
                  <td>{coin.cmc_rank}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.slug}</td>
                  <td>{coin.quote.USD.price}</td>
                  <td>{coin.quote.USD.percent_change_1h}</td>
                  <td>{coin.total_supply}</td>
                  <td>{coin.quote.USD.volume_change_24h}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )
      }
    </div>
  )
}
export default App;
