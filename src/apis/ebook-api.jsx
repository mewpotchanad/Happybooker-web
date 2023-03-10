import axios from "../config/axios";

export const getAllEbook = () => axios.get("/ebook");
export const getEbookById = (ebookId) => axios.get(`/ebook/${ebookId}`);
export const postEbookById = (ebookId) => axios.post(`/ebook/${ebookId}`);
export const getShowEbookFromShelf = () => axios.get(`/ebook/shelf/all`);
export const deleteShowEbookFromShelf = (ebookId) => axios.delete(`/ebook/shelf/${ebookId}`);
