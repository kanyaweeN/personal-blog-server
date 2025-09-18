import { PostRepository } from "../repositories/PostRepository.js";

export const PostService = {
    async getAll() {
        return await PostRepository.getAll();
    },
    async createPost(postData) {
        const dataWithTimestamp = { ...postData, created_at: new Date() };
        return await PostRepository.createPost(dataWithTimestamp);
    },
}