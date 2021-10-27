import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [coins, setCoins] = useState('');

  useEffect(() => {
    getData();

    async function getData() {
      const res = await fetch("https://serverless-api.chuongtang.workers.dev");
      const results = await res.json();
      setCoins(results.data);
      console.log("Here are they", results.data);
    };

  }, []);

  return (
    <div>
      {coins && (
        <div className="coin">

          {/* loop over the coins */}
          {coins.map((coin, index) => (
            <div key={index}>
              <h2>{coin.name}</h2>
              <h3>Symbol{coin.symbol}</h3>
              <h3>{coin.quote.USD.price}</h3>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}
export default App;
