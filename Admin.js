import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin("Livia", "livia@email", "15-11-2022");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());