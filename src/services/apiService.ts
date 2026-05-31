import { axiosInstance } from "../api/axiosInstance"
import { Post } from "../types/api"

export const getPosts = async (): Promise<Post[]> => {
    const response = await axiosInstance.get<Post[]>("/posts");
    return response.data;
}

export const getPostById = async (id: number): Promise<Post>=>{
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
}