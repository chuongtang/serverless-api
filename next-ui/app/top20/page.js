/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const page = () => {
  const [coins, setCoins] = useState([])
  const [updateTime, setUpdateTime] = useState('');
  const getTopCoins = async () => {
    const response = await fetch("https://serverless-api.chuongtang.workers.dev", {
      method: "GET"
    });
    // console.log(data)
    if (response.ok) {
      console.log(response)
      // const { data } = await response.json();
      const result = await response.json();
      // console.log(result);
      setUpdateTime(result.status.timestamp)
      return result.data.filter(coin => coin.cmc_rank <= 20);
    } else {
      throw new Error("Error on Fetching Coins");
    }
  };

  useEffect(() => {

    const fetchTopCoinsArray = async () => {
      try {
        const returnedTopCoins = await getTopCoins();
        setCoins(returnedTopCoins);
        
      } catch (error) {
        console.error("Error fetching Coins data", error);
      }
    }
    fetchTopCoinsArray();
  }, []);

  return (
    
      <div className="overflow-x-auto ">
        <p className='italic text-sm'>Last updated on.....{updateTime}</p>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm table-auto">
          <thead className="border font-medium dark:border-white/10">
            <tr>
              <th className="border-e whitespace-nowrap p-2 font-bold text-gray-900">Rank</th>
              <th className="border-e  whitespace-nowrap p-2 font-bold text-gray-900">Symbol</th>
              <th className="border-e  whitespace-nowrap p-2 font-bold text-gray-900">Name</th>
              <th className="border-e  whitespace-nowrap p-2 font-bold text-gray-900">Price<br/>(USD)</th>
              <th className="border-e  whitespace-nowrap p-2 font-bold text-gray-900">%Change <br/>last hour</th>
              <th className="border-e  whitespace-nowrap p-2 font-bold text-gray-900">Volume change <br/> last 24hr</th>
              {/* <th className="px-4 py-2"></th> */}
            </tr>
          </thead>
          {coins.map((coin, index) => (
            <tbody key={index} className="divide-y divide-gray-200">
              <tr className="place-items-center border-b  dark:border-white/10">
                <td className="border-e whitespace-nowrap flex px-4 py-2 font-medium text-gray-900">{coin.cmc_rank}
                  <Image
                    src={`https://crypto-analysis.pages.dev/logos/${coin.symbol}-LOGO.svg`}
                    className="ml-2"
                    alt={`${coin.slug}-Logo`}
                    width={20}
                    height={20} />
                </td>
                <td className="border-e  whitespace-nowrap p-2 text-gray-700">{coin.symbol}</td>
                <td className="border-e  whitespace-nowrap p-2 text-gray-700">{coin.slug}</td>
                <td className="border-e  whitespace-nowrap p-2 text-gray-700">{coin.quote.USD.price.toFixed(3)}</td>
                <td className="border-e  whitespace-nowrap p-2 text-gray-700">{coin.quote.USD.percent_change_1h.toFixed(3)}</td>
                <td className="border-e  whitespace-nowrap p-2 text-gray-700">{coin.quote.USD.volume_change_24h.toFixed(3)}</td>
                {/* <td className="whitespace-nowrap p-2" >
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
  )
}

export default page