import connectDB from "../database/mongodb.js";
import Funcionario from "../models/Funcionario.model.js";

export const criarFuncionario = async (funcionario) => {
  const funcionarioCriado = await Funcionario.create(funcionario);
  return funcionarioCriado;
};

export const listarFuncionarios = async () => {
  const funcionarios = await Funcionario.find();
  return funcionarios;
};

export const editarFuncionario = async (id, payload) => {
  await Funcionario.findByIdAndUpdate(id, payload);
};

export const excluirFuncionario = async (id) => {
  await Funcionario.findByIdAndDelete(id);
};
