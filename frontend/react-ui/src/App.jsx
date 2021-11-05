import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader'
import Chart from './components/Chart'
import Anilogo from './images/grid.svg'
import { Container, Table, Dropdown, Form, Button } from 'react-bootstrap';
import CloudUpdate from './images/cloud.svg'


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

    const res = await fetch("http://127.0.0.1:8787");
    // const res = await fetch("https://serverless-api.chuongtang.workers.dev");
    results = await res.json();
    let topCoins = results.data.filter(coin => coin.cmc_rank <= 20);
    setCoins(topCoins);
    setUpdateTime(results.status.timestamp);
    SetLoading(false)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("handleFormSubmited");

  }

  const showAChart = (event) => {
    // event.preventDefault();
    console.log(event);
    setChartUrl = `https://serverless-endpoints.chuongtang.workers.dev/charts/${event}-chart`
    setShowChart(true)
    console.log("showchart has clicked", event);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <Header />
        {coins ? (
          <>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='rating'>
                <Form.Label>Analytics Charting tool</Form.Label>
                <Form.Control
                  as='select'
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                >
                  <option value="">Select Currency..</option>
                  {coins.map((element, index) => (
                    <option key={index} value={element.symbol}>{element.slug}</option>

                  ))}
                </Form.Control>
              </Form.Group>
              <Button type='submit' variant='primary'>
                View Charting tool
              </Button>
            </Form>
            {chartUrl !== "" && <iframe className="chart" src={chartUrl} />}
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

                <Container>
                  <Table striped bordered hover>
                    <thead >
                      <tr>
                        <th>Rank</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price(USD)</th>
                        <th>% Change in last hour</th>
                        <th>Total Supply</th>
                        <th>Volume_Change in 24h</th>
                      </tr>
                    </thead>
                    <tbody>
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
