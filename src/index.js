import express from "express";

//DB
import "./database/mongodb.js";

//Controllers
import funcionarioController from "./controllers/funcionario.js";

//plugins
import cors from "cors";
import connectDB from "./database/mongodb.js";

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/funcionario", funcionarioController);

app.listen(3001, () => {
  console.log(`Servidor rodando na porta 3001`);
});
