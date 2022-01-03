import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://as-dtmoney.netlify.app/api' || 'http://localhost:3000/api'
})