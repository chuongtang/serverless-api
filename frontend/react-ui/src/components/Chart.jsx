let symbol = "XRP";

const Chart = (symbol) => {

  // const chartUrl = `http://127.0.0.1:8787/charts/ADA-chart` 
  // const chartUrl = `https://tradingviewapi.pages.dev/charts/ADA.html` 
  const chartUrl = `https://serverless-endpoints.chuongtang.workers.dev/charts/ADA-chart` 
  // const chartUrl = `http://127.0.0.1:8787/charts/${symbol}` 

  return (
    <iframe className="chart" src={chartUrl} />
  );
}

export default Chart;