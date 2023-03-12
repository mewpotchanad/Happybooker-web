import axios from "../config/axios";

export const getAllEbook = () => axios.get("/admin");
export const createEbook = (input) => axios.post("/admin", input);
export const editEbook = (ebookId) => axios.patch(`/admin/${ebookId}`);
export const deleteEbook = (ebookId) => axios.delete(`/admin/${ebookId}`);
