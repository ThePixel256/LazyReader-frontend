import axios from 'axios';

const api = 'http://localhost:3000/api';

export const getAllBooks = () => axios.get(`${api}/books/books`);

export const getBook = (id) => axios.get(`${api}/books/books/${id}`);

export const createBook = (book) => axios.post(`${api}/books/books`, book);

export const deleteBook = (id) => axios.delete(`${api}/books/books/${id}`);

export const updateBook = (id, book) => axios.put(`${api}/books/books/${id}`, book);
