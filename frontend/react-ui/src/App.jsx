import { useState, useEffect } from 'react'
import './App.css';
import { Card, Container, ListGroup, ListGroupItem, Row, Col, Stack, Table } from 'react-bootstrap'


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
      <h1>Crypto Market Info</h1>
      <h3>Last updated on: {updateTime}</h3>
      {coins && (
        <Container>
              <Table striped bordered hover>
              <thead>
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
