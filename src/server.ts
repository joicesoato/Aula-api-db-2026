import express from "express";
import generosRoutes from "../src/routes/generos";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/generos", generosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`);
});

