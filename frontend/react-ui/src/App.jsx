import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader'
import Chart from './components/Chart'
import Anilogo from './images/grid.svg'
import { Container, Table, Dropdown } from 'react-bootstrap';
import CloudUpdate from './images/cloud.svg'


const App = () => {
  const [coins, setCoins] = useState('');
  const [coinName, setCoinName] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [loading, SetLoading] = useState(true);
  const [showChart, setShowChart] = useState(false);
  let [chartUrl, setChartUrl] = useState('')




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

  const showAChart = (symbol) => {
    setChartUrl = `https://serverless-endpoints.chuongtang.workers.dev/charts/${symbol}-chart`
    setShowChart(true)
    console.log("showchart has clicked", symbol);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <Header />
        {/* <Chart /> */}
        {coins ? (
          <>
            {/* chart selector */}

            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              <img src={Anilogo} style={{ "maxHeight": "2rem" }} alt="animation logo" />Analytics charting tool 
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {coins.map((element, index) => (

                  <Dropdown.Item eventKey={element.symbol} onSelect={() => {showAChart(element.symbol)}}  key={index}>{element.slug}</Dropdown.Item>

                ))}
              </Dropdown.Menu>
            </Dropdown>
            {chartUrl !== ""&& <iframe className="chart" src={chartUrl} />}
            

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
