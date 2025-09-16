import connectionPool from "../utils/db.mjs";

export const PostRepository = {
    async getAll() {
        let query = `
            SELECT 
                *
            FROM posts
        `;
        return await connectionPool.query(query);
    },
    async createPost(postData) {
        console.log(postData);

        let query = `
            insert into posts
                (
                    title, 
                    image, 
                    category_id, 
                    description, 
                    content, 
                    status_id, 
                    likes_count, 
                    date
                )
            values 
                ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        `;
        return await connectionPool.query(
            query
            ,
            [
                postData.title,
                postData.image,
                postData.category_id,
                postData.description,
                postData.content,
                postData.status_id,
                postData.likes_count,
                postData.created_at
            ]);
    },
};
