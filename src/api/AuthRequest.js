import axios from 'axios'

const api = 'https://lazyreader-backend-production.up.railway.app/api'

export const registerApi = user => axios.post(`${api}/auth/register`, user)
export const loginApi = user => axios.post(`${api}/auth/login`, user)
export const logoutApi = user => axios.post(`${api}/auth/logout`, user)

export const getAuth = user => axios.get(`${api}/auth/profile`,user)
