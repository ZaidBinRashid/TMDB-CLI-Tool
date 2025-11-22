import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) =>{
    res.send("TMDB CLI Tool");
})

app.listen(PORT,() => {
    console.log(`erver running on ${PORT}`);
})