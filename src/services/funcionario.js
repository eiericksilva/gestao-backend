import connectDB from "../database/mongodb.js";
import Funcionario from "../models/Funcionario.model.js";

//CRIAR FUNCIONARIO
export const criarFuncionario = async (funcionario) => {
  const funcionarioCriado = await Funcionario.create(funcionario);
  return funcionarioCriado;
};

//LISTAR FUNCIONARIO
export const listarFuncionarios = async () => {
  const funcionarios = await Funcionario.find();
  return funcionarios;
};

//EDITAR FUNCIONARIO
export const editarFuncionario = async (id, payload) => {
  await Funcionario.findByIdAndUpdate(id, payload);
};

//DELETAR FUNCIONARIO
export const excluirFuncionario = async (id) => {
  await Funcionario.findByIdAndDelete(id);
};
