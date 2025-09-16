import "dotenv/config";
import express from "express";
import cors from "cors";
import profileRouter from "./routes/ProfileRouter.mjs";
import postRouter from "./routes/PostRouter.mjs";

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Server API is working")
})

app.use("/profile", profileRouter);
app.use("/post", postRouter);

app.listen(port, () => {
    console.log(`Server is runnig at ${port}`);
})