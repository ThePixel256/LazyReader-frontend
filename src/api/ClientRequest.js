import axios from 'axios';

const api = 'http://localhost:3000/api';

export const getAllClients = () => axios.get(`${api}/clients/clients`);

export const getClient = (id) => axios.get(`${api}/clients/clients/${id}`);

export const createClient = (client) => axios.post(`${api}/clients/clients`, client);

export const deleteClient = (id) => axios.delete(`${api}/clients/clients/${id}`);

export const updateClient = (id, client) => axios.put(`${api}/clients/clients/${id}`, client);

