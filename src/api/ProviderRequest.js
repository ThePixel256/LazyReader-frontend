import axios from 'axios';

const api = 'https://lazyreader-backend-production.up.railway.app/api';

export const getAllProviders = () => axios.get(`${api}/providers/providers`);

export const getProvider = (id) => axios.get(`${api}/providers/providers/${id}`);

export const createProvider = (provider) => axios.post(`${api}/providers/providers`, provider);

export const deleteProvider = (id) => axios.delete(`${api}/providers/providers/${id}`);

export const updateProvider = (id, provider) => axios.put(`${api}/providers/providers/${id}`, provider);
