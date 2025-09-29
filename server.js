import express from "express";
import dotenv from "dotenv";
import bruxosRoutes from "./src/routes/bruxosRoutes.js";

const serverPort = process.env.PORT || 3001
const app = express();

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
    res.send("🧙 API dos Bruxos funcionando....");
});

app.use("/bruxos", bruxosRoutes);


app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort}`);
});