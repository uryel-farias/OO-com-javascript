import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso ${curso}, responsavel: ${this.nome}.`
    }

}

//const novoDocente = new Docente("Uryel", "u@email", "01-11-2025" )
//console.log(novoDocente.aprovarEstudante("Mari", "Espanhol"))