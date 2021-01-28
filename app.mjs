import { getApiCorona } from './api.mjs'

function showDataFormApi() {
  getApiCorona()
     .then(data => data.json())
     .then(res => {
       console.log(res);
     })
}
showDataFormApi();