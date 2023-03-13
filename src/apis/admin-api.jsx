import axios from "../config/axios";

export const getAllEbook = () => axios.get("/admin");
export const createEbook = (input) => axios.post("/admin/ebook", input);
export const editEbook = (ebookId, input) => axios.patch(`/ebook/${ebookId}`, input);
export const deleteEbook = (ebookId) => axios.delete(`/admin/${ebookId}`);
