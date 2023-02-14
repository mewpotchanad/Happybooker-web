import axios from '../config/axios';

export const getAllEbook = () => axios.get('/ebook');
// export const deletePostById = postId => axios.delete(`/posts/${postId}`);