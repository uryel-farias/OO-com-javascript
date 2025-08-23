import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoAdmin = new User("zefa", "zefa@email", "22/05/2025");
novoAdmin.nome = "luiz";
console.log(novoAdmin.nome);