import { PostService } from "../services/PostService.js";

export const PostController = {
    async getAll(req, res) {
        try {
            const result = await PostService.getAll()

            return res.status(201).json({
                // data: result.data.rows.map((item) => ({
                //     id: item.id,
                //     image: item.image,
                //     category_id: item.category_id,
                //     title: item.title,
                //     description: item.description,
                //     date: item.date,
                //     content: item.content,
                //     status_id: item.status_id,
                //     likes_count: item.likes_count,
                // })
                // ),
                data: result,
            });
        } catch (error) {
            return res.status(500).json({ message: `${error}` });
        }
    },
    async createPost(req, res) {
        try {
            const { title, image, category_id, description, content, status_id } = req.body;

            const result = await PostService.createPost({ title, image, category_id, description, content, status_id })

            return res.status(201).json({
                message: `Created post sucessfully`,
                data: {
                    title,
                    image,
                    category_id,
                    description,
                    content,
                    status_id
                },
            });
        } catch (error) {
            return res.status(500).json({
                message: "Server could not create post because database connection"
            });
        }
    },
};