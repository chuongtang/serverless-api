addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});



// the handleRequest function needs to return either type Response or Promise<Response>//
async function handleRequest(request) {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`
  // fetches all active cryptocurrencies & return market values in USD.
  const options = {
    method: 'GET',
    qs: {
      'start': '1',
      'limit': '10',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': `${COINAPI_KEY}`,
      'Access-Control-Allow-Headers': "*",
      'Access-Control-Allow-Methods': "GET",
      'Access-Control-Allow-Origin': "*",
      'Accept': 'application/json',
     

    },
    json: true,
    gzip: true
  };

	return fetch(url, options)
		.then(response => {
			if (response.status === 200) {
			  return response.json();
			} else {
        return response.text()
        console.log(response)
			  throw new Error('Something went wrong on api server!');
			}
		})
		.then(response => {
			console.debug(response);
      // return new Response(response.data);
      const result = new Response(response.data);
      console.log("HERE IS IT", result);
      return result;
		}).catch(error => {
      
			console.error(error);
		});
};
