# Crypto market information
A simple app to check market pricing of various Crypto Currencies.

## App configuration:
Backend fetches data from [CoinMarketCap API](https://coinmarketcap.com/api/) and serves frontend `VITE` components.

[VITE](https://vitejs.dev/) is a lightning fast Frontend Tooling.

* Serverless backend built and hoisted on cloudflare[`Workers`](https://developers.cloudflare.com/workers/). 
* Front-end deployed onto [`Pages`](https://developers.cloudflare.com/pages/)

# 👷 `worker-template` Hello World

A template for kick starting a Cloudflare worker project.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/worker-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
