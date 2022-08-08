import axios from "axios";

//Este arquivo é o responsável por estânciar o axios passan do a api a ser conectada

const api = axios.create({
  baseURL: `https://dogbreed-api.q9.com.br/`
})

export default api