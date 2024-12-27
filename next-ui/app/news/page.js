import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
      <iframe src="https://www.tradingview-widget.com/embed-widget/timeline/?market=crypto" width="90%" height="800px" className="p-2 m-auto shadow-lg " allowFullScreen lazy="true" title="Crypto market news" />
      <div className="flex absolute top-1/2 right-1/2 -z-10">
        <div className="h-2 w-2 mx-2 bg-orange-500 rounded-full animate-ping [animation-delay:-0.3s]">
        </div>
        <div className="h-2 w-2 mx-2 bg-orange-500 rounded-full animate-ping [animation-delay:-0.15s]">          
        </div>
        <div className="h-2 w-2 mx-2 bg-orange-500 rounded-full animate-ping">          
        </div>
      </div>
  </div>
)
}

export default page