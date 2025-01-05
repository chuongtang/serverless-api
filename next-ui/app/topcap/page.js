import React from 'react'

const page = () => {
  return (
    <div>
      <iframe src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A550%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22127.0.0.1%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22127.0.0.1%3A5500%2FhotOnTheNews.html%22%7D" width="98%" height="800" className="p-1 mx-auto mt-2 shadow-xl shadow-gray-400 bounce-in-bottom" allowFullScreen lazy="true" title="Top market cap cryptocurrency" />
      <div className="italic text-sm mx-auto"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="text-orange-600 animate-pulse">Track all markets on TradingView</span></a></div>
    </div>
  )
}

export default page