import mongoose from "mongoose";
const { Schema } = mongoose;

const FuncionarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    salario: { type: Number, required: true },
    admissao: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Funcionario ||
  mongoose.model("Funcionario", FuncionarioSchema);
