import './css_embed_normalize.css';
import './embed_technical_analysis.css'
import './analysisEngine'

const CoinCheck = () => {


  return (
    <div className="tradingview-widget-container">
    <div id="tv-medium-widget" />
    <div className="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/symbols/COINBASE-BTCUSD/"
        rel="noopener"
        target="_blank"
      >
        <span className="blue-text">BTC</span>
      </a>
      ,{" "}
      <a
        href="https://www.tradingview.com/symbols/COINBASE-ETHUSD/"
        rel="noopener"
        target="_blank"
      >
        <span className="blue-text">ETH</span>
      </a>{" "}
      <span className="blue-text">and</span>{" "}
      <a
        href="https://www.tradingview.com/symbols/BITFINEX-IOTUSD/"
        rel="noopener"
        target="_blank"
      >
        <span className="blue-text">IOT Quotes</span>
      </a>{" "}
      by TradingView
    </div>
  </div>



  );
}

export default CoinCheck;