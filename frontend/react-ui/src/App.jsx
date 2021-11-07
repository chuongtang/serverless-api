import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader'
import Anilogo from './images/grid.svg'
import { Container, Table, CloseButton, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import CloudUpdate from './images/cloud.svg';
import DevData from "./components/DevData.json";
import HelloMsg from "./components/HelloMsg"


const App = () => {
  const [coins, setCoins] = useState('');
  const [coinName, setCoinName] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [loading, SetLoading] = useState(true);
  const [showChart, setShowChart] = useState(false);
  const [symbol, setSymbol] = useState("")
  const [chartUrl, setChartUrl] = useState('');


  let results = [];

  async function getData() {

    const res = await fetch("https://serverless-api.chuongtang.workers.dev");
    results = await res.json();
    let topCoins = results.data.filter(coin => coin.cmc_rank <= 20);
    setCoins(topCoins);
    setUpdateTime(results.status.timestamp);
    SetLoading(false)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("handleFormSubmited");
    setChartUrl(`https://serverless-endpoints.chuongtang.workers.dev/charts/${symbol}-chart`)
  }


  useEffect(() => {
    getData();
    // setCoins(DevData);
  }, []);

  return (
    <div>
      <HelloMsg />
      <div>
        <Header />
        {coins ? (
          <>
            <Container className="chartingTool">
              <Form onSubmit={submitHandler}>
                <Row className="justify-content-md-center">
                  <Col md="auto" >
                    <Form.Group  controlId='symbol'>
                      <Form.Text size="lg" ></Form.Text>
                      <Form.Control
                        as='select'
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                      >
                        <option value="">Select Currency for deep analysis 🢛</option>
                        {coins.map((element, index) => (
                          <option key={index} value={element.symbol}>{element.slug.toUpperCase()}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col md="auto">
                    <Button type='submit' variant='secondary'>
                      Click to run Analysis Tool <img src={Anilogo} style={{ "maxHeight": "2rem" }} alt="animation logo" />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
            {chartUrl !== "" &&
              (<div className="mb-2">
                <CloseButton style={{ "float": "right" }} onClick={() => { setChartUrl("") }} aria-label="Hide" />
                <iframe className="chart" src={chartUrl} />
              </div>)
            }
            <div>
              <div className="background">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
              </div>
              <div>
                <div className="updTime">Last updated <img src={CloudUpdate} className="logo" alt="Cloud Update" /> : {updateTime}</div>

                <Container className="chartContainer">
                  <Table striped bordered hover>
                    <thead >
                      <tr >
                        <th>Rank</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price(USD)</th>
                        <th>% Change in last hour</th>
                        <th>Total Supply</th>
                        <th>Volume_Change in 24h</th>
                      </tr>
                    </thead>
                    <tbody style={{ 'overflow': 'scroll' }}>
                      {/* loop over the coins */}
                      {coins.map((coin, index) => (

                        <tr key={index}>
                          <td>{coin.cmc_rank} <img src={`https://crypto-analysis.pages.dev/logos/${coin.symbol}-LOGO.svg`} className="logo" alt={`${coin.slug}-Logo`} /> </td>
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
              </div>
            </div>
          </>
        ) : (<Loader />)}
      </div>
    </div >
  )
}

export default App;
