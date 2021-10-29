import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader'
import { Container, Table } from 'react-bootstrap'


const App = () => {
  const [coins, setCoins] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [loading, SetLoading] = useState(true);


  let results = [];

  async function getData() {

    const res = await fetch("https://serverless-api.chuongtang.workers.dev");
    results = await res.json();
    let topCoins = results.data.filter(coin => coin.cmc_rank <= 20);
    setCoins(topCoins);
    console.log("Here are they", results.data);
    setUpdateTime(results.status.timestamp);
    SetLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>


      <div>
        <Header />

        {coins ? (

          <div>
            <div className="background">
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
            </div>
            <div>
              <div className="updTime">Last updated on:  🌠 {updateTime}</div>
              <Container>
                <Table striped bordered hover >
                  <thead >
                    <tr>
                      <th>Rank</th>
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
            </div>
          </div>
        ) : (<Loader />)}
      </div>
    </div >
  )
}

export default App;
