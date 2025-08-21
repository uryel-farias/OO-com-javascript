import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("ANA", "ana@email", "22/05/2025");
console.log(novoUser.exibirInfos());