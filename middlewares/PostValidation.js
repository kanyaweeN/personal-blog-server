export const ProductValidation = {
    validateProduct(req, res, next) {
        const body = req.body;

        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({
                message: "Invalid request data.",
            })
        }

        if (!body.name) {
            return res.status(400).json({
                message: "Name is required.",
            })
        } else {
            const name = body.name;
            if (typeof name !== "string") {
                return res.status(400).json({ message: "Name must be a string." });
            } else if (name.trim() !== "") {
                return res.status(400).json({ message: "Name cannot be empty." });
            }
        }

        if (!body.price) {
            return res.status(400).json({
                message: "Price is required.",
            })
        } else {
            const price = body.price;
            if (typeof price !== "number") {
                return res.status(400).json({
                    message: "Price must be a number.",
                })
            } else if (price < 0) {
                return res.status(400).json({ message: "Price must be greater than 0." });
            }
        }

        if (!body.image) {
            return res.status(400).json({
                message: "Image is required.",
            })
        } else {
            const image = body.image;
            if (typeof image !== "string") {
                return res.status(400).json({ message: "Image must be a string." });
            } else if (image.trim() !== "") {
                return res.status(400).json({ message: "Image cannot be empty." });
            }
        }

        if (!body.description) {
            return res.status(400).json({
                message: "Description is required.",
            })
        } else {
            const description = body.description;
            if (typeof description !== "string") {
                return res.status(400).json({ message: "Description must be a string." });
            } else if (description.trim() !== "") {
                return res.status(400).json({ message: "Description cannot be empty." });
            } else if (description.trim().length() >= 10) {
                return res.status(400).json({ message: "Description must be at least 10 characters long." });
            }
        }

        if (!body.category) {
            return res.status(400).json({
                message: "category is required.",
            })
        } else {
            const category = body.category;
            if (typeof category !== "string") {
                return res.status(400).json({ message: "category must be a string." });
            } else if (category.trim() !== "") {
                return res.status(400).json({ message: "category cannot be empty." });
            }
        }

        next();
    }
}