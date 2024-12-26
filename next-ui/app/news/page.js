import React from 'react'

const page = () => {
  return (
    <body>
    {/* <!-- TradingView Widget BEGIN --> */}
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/cryptocurrencies/key-events/"
          rel="noopener"
          target="_blank"
          ><span class="blue-text">Daily cryptocurrency news</span></a
        >
        by TradingView
      </div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
        async
      >
          {
          "feedMode": "market",
          "market": "crypto",
          "colorTheme": "light",
          "isTransparent": true,
          "displayMode": "regular",
          "width": "350",
          "height": "800",
          "locale": "en"
        }
      </script>
    </div>
    {/* <!-- TradingView Widget END --> */}
  </body>
  )
}

export default page