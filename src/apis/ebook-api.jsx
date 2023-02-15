import axios from '../config/axios';

export const getAllEbook = () => axios.get('/ebook');
export const getEbookById = ebookId => axios.get(`/ebook/${ebookId}`);
export const postEbookById = (ebookId, userId) => axios.post(`/ebook/${ebookId}/${userId}`)
export const getShowEbookFromShelf = userId => axios.get(`/ebook/shelf/${userId}`)
export const deleteShowEbookFromShelf = ebookId => axios.delete(`/ebook/shelf/${ebookId}`)