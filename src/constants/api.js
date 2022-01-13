import axios from 'axios'

const url = "https://api.spacexdata.com/";
export const api = axios.create({
  baseURL : url
})