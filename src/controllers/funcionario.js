import { Router } from "express";
import {
  listarFuncionarios,
  criarFuncionario,
  excluirFuncionario,
  editarFuncionario,
} from "../services/funcionario.js";
const router = Router();

//CRIAR FUNCIONARIO
router.post("/", async (req, res) => {
  try {
    const funcionario = await criarFuncionario(req.body);
    res.status(201).send(funcionario);
  } catch (error) {
    res.status(500).send(error);
  }
});

//LISTAR FUNCIONARIO
router.get("/", async (req, res) => {
  try {
    const listaFuncionarios = await listarFuncionarios();
    res.status(200).send(listaFuncionarios);
  } catch (error) {
    res.status(400).send(error);
  }
});

//EDITAR FUNCIONARIO
router.delete("/:funcionarioId", async (req, res) => {
  try {
    await excluirFuncionario(req.params.funcionarioId);
    res.status(200).send("Usuário deletado com sucesso!");
  } catch (error) {
    res.status(400).send(error);
  }
});

//DELETAR FUNCIONARIO
router.put("/:funcionarioId", async (req, res) => {
  try {
    await editarFuncionario(req.params.funcionarioId, req.body);
    res.status(200).send("Usuário editado com sucesso!");
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
