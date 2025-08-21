import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin("Livia", "livia@email", "15-11-2022");
console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.criarCurso('Js', 20));