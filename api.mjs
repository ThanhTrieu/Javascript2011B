import fetch from 'node-fetch';

// url api : https://api.covid19api.com/summary
// 1 : call api - promise

export function getApiCorona() {
  // fetch: no chinh la 1 promise
  const data = fetch('https://api.covid19api.com/summary');
  return data;
  // data : chinh la 1 promise
}