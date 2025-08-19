export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Uryel', 'uryel@email', '2025-11-25');

console.log(novoUser);
console.log(novoUser.exibirInfos());