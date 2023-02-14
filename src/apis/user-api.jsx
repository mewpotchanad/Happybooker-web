import axios from '../config/axios';

export const getProfileUser = profileUserId =>
  axios.get('/user/' + profileUserId);
export const updateProfile = formData => axios.patch('/user', formData);