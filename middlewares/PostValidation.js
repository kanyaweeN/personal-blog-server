export const PostValidation = {
    validateProduct(req, res, next) {
        const body = req.body;

        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({
                message: "Server could not create post because there are missing data from client"
            })
        }

        if (!body.title) {
            return res.status(400).json({
                message: "Title is required.",
            })
        }

        if (!body.image) {
            return res.status(400).json({
                message: "Image is required.",
            })
        }

        if (!body.content) {
            return res.status(400).json({
                message: "Content is required.",
            })
        }

        next();
    }
}