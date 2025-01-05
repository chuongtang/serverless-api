import React from 'react'

const page = () => {
  return (
    <div>
    <iframe src="https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#%7B%22autosize%22%3Atrue%2C%22symbol%22%3A%22CRYPTO%3AETHUSD%22%2C%22interval%22%3A%22D%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22gridColor%22%3A%22rgba(0%2C%200%2C%200%2C%200.06)%22%2C%22withdateranges%22%3Atrue%2C%22allow_symbol_change%22%3Atrue%2C%22details%22%3Atrue%2C%22calendar%22%3Afalse%2C%22show_popup_button%22%3Atrue%2C%22popup_width%22%3A%221000%22%2C%22popup_height%22%3A%22650%22%2C%22support_host%22%3A%22https%3A%2F%2Fwww.tradingview.com%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22127.0.0.1%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22advanced-chart%22%2C%22page-uri%22%3A%22127.0.0.1%3A5500%2FhotOnTheNews.html%22%7D" width="95%" height="900px" className="p-1 mx-auto mt-2 shadow-xl shadow-gray-400 bounce-in-bottom" allowFullScreen lazy="true" title="Top market cap cryptocurrency" />
    <div className="italic text-sm mx-auto"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="text-orange-600 animate-pulse">Track all markets on TradingView</span></a></div>
  </div>)
}

export default page