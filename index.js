addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});



// the handleRequest function needs to return either type Response or Promise<Response>//
async function handleRequest() {
  const baseUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`


  // fetches all active cryptocurrencies & return market values in USD.

  const gatherResponse = async (response) => {
    const { headers } = response;
    const contentType = headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return JSON.stringify(await response.json());
    } else if (contentType.includes("application/text")) {
      return response.text();
    } else if (contentType.includes("text/html")) {
      return response.text();
    } else {
      return response.text();
    }
  };


  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      'X-CMC_PRO_API_KEY': `${COINAPI_KEY}`,
      'Access-Control-Allow-Headers': "*",
      'Access-Control-Allow-Methods': "*",
      'Access-Control-Allow-Origin': "*",
      // 'Access-Control-Allow-Origin': "https://infocryp.win",
      // 'Access-Control-Allow-Origin': "https://cryptoprice-e5r.pages.dev",
    },
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD'
    },
  };
  const response = await fetch(baseUrl, init);
  const results = await gatherResponse(response);
  // console.log(results);
  return new Response(results, init);
};
