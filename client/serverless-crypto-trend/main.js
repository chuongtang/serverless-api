import './style.css';
import markdownIt from 'markdown-it';
import result from './result.js';

// const apiUrl = 'http://127.0.0.1:8787';
const apiUrl = 'https://serverless-api.chuongtang.workers.dev';

async function fetchApi () {
 
  try {
      const response = await fetch(apiUrl, {
        method: "GET",
        mode: "no-cors",
      });
      console.log('respose lines', response);
      const results = await response.json();
      console.log('Fresh set of Objs from API: ',results);
      return results;
      }
  catch (error) { console.log('fetch failed Chuong, check your code', error); }
  };

fetchApi();


document.querySelector('#app').innerHTML = `
$markdownIt().render(<h1>Welcome to Crypto-Trend, fetched from serverless API on cloudflare workers</h1>)
  $markdownIt().render(result)
`
